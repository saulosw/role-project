import type { EventDetails, EventResponse } from '../types/event.types';

const pool = require('../config/database');
const ulid = require('ulid').ulid;

class Event {
    static async createEvent(eventDetails: EventDetails): Promise<EventResponse> {
        const eventId = ulid();

        const query = `
            INSERT INTO events (id, title, description, category, event_date, duration_hours, location, organizer_id)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
            RETURNING *;
        `;

        const values = [
            eventId,
            eventDetails.title,
            eventDetails.description,
            eventDetails.category,
            eventDetails.event_date,
            eventDetails.durationHours,
            eventDetails.location,
            eventDetails.organizerId
        ];

        try {
            const { rows } = await pool.query(query, values);
            const newEvent = rows[0];
            return newEvent;
        } catch (error) {
            console.error('Error creating a new event: ', error);
            throw error;
        }
    }

    static async getEventById(eventId: string): Promise<EventResponse> {
        const query = `
            SELECT
                e.*,
                u.name as organizer_name,
                u.email as organizer_email,
                COALESCE((
                    SELECT COUNT(*)
                    FROM event_participants ep
                    WHERE ep.event_id = e.id
                ), 0)::INTEGER as attendee_count
            FROM events e
            LEFT JOIN users u ON e.organizer_id = u.id
            WHERE e.id = $1
        `;

        try {
            const { rows } = await pool.query(query, [ eventId ]);
            const event = rows[0];
            return event;
        } catch (error) {
            console.error('Error retrieving event by ID:', error);
            throw error;
        }
    }

    static async getAllEvents(
        limit: number = 50,
        offset: number = 0,
        search?: string,
        category?: string,
        dateFrom?: string,
        dateTo?: string
    ): Promise<EventResponse[]> {
        const conditions: string[] = ['e.event_date + (e.duration_hours || \' hours\')::INTERVAL > NOW()'];
        const values: any[] = [];
        let paramCount = 1;

        if (search) {
            conditions.push(`(LOWER(e.title) LIKE $${paramCount} OR LOWER(e.description) LIKE $${paramCount} OR LOWER(e.location) LIKE $${paramCount})`);
            values.push(`%${search.toLowerCase()}%`);
            paramCount++;
        }

        if (category) {
            conditions.push(`e.category = $${paramCount}`);
            values.push(category);
            paramCount++;
        }

        if (dateFrom) {
            conditions.push(`e.event_date >= $${paramCount}`);
            values.push(dateFrom);
            paramCount++;
        }

        if (dateTo) {
            conditions.push(`e.event_date <= $${paramCount}`);
            values.push(dateTo);
            paramCount++;
        }

        values.push(limit);
        const limitParam = paramCount;
        paramCount++;

        values.push(offset);
        const offsetParam = paramCount;

        const query = `
            SELECT
                e.*,
                u.name as organizer_name,
                u.email as organizer_email,
                COALESCE((
                    SELECT COUNT(*)
                    FROM event_participants ep
                    WHERE ep.event_id = e.id
                ), 0)::INTEGER as attendee_count
            FROM events e
            LEFT JOIN users u ON e.organizer_id = u.id
            WHERE ${conditions.join(' AND ')}
            ORDER BY e.created_at DESC
            LIMIT $${limitParam} OFFSET $${offsetParam}
        `;

        try {
            const { rows } = await pool.query(query, values);
            return rows;
        } catch (error) {
            console.error('Error retrieving all events:', error);
            throw error;
        }
    }

    static async getTotalEventCount(
        search?: string,
        category?: string,
        dateFrom?: string,
        dateTo?: string
    ): Promise<number> {
        const conditions: string[] = ['event_date + (duration_hours || \' hours\')::INTERVAL > NOW()'];
        const values: any[] = [];
        let paramCount = 1;

        if (search) {
            conditions.push(`(LOWER(title) LIKE $${paramCount} OR LOWER(description) LIKE $${paramCount} OR LOWER(location) LIKE $${paramCount})`);
            values.push(`%${search.toLowerCase()}%`);
            paramCount++;
        }

        if (category) {
            conditions.push(`category = $${paramCount}`);
            values.push(category);
            paramCount++;
        }

        if (dateFrom) {
            conditions.push(`event_date >= $${paramCount}`);
            values.push(dateFrom);
            paramCount++;
        }

        if (dateTo) {
            conditions.push(`event_date <= $${paramCount}`);
            values.push(dateTo);
            paramCount++;
        }

        const query = `
            SELECT COUNT(*) as total
            FROM events
            WHERE ${conditions.join(' AND ')}
        `;

        try {
            const { rows } = await pool.query(query, values);
            return parseInt(rows[0].total, 10);
        } catch (error) {
            console.error('Error getting total event count:', error);
            throw error;
        }
    }

    static async getEventsByCategory(limit: number = 5): Promise<Record<string, EventResponse[]>> {
        const query = `
            SELECT
                e.*,
                u.name as organizer_name,
                u.email as organizer_email,
                COALESCE((
                    SELECT COUNT(*)
                    FROM event_participants ep
                    WHERE ep.event_id = e.id
                ), 0)::INTEGER as attendee_count
            FROM events e
            LEFT JOIN users u ON e.organizer_id = u.id
            WHERE e.event_date + (e.duration_hours || ' hours')::INTERVAL > NOW()
            ORDER BY e.category, e.event_date ASC
        `;

        try {
            const { rows } = await pool.query(query);

            const eventsByCategory: Record<string, EventResponse[]> = {};

            rows.forEach((event: EventResponse) => {
                const category = event.category;
                if (!eventsByCategory[category]) {
                    eventsByCategory[category] = [];
                }

                if (eventsByCategory[category] && eventsByCategory[category].length < limit) {
                    eventsByCategory[category].push(event);
                }
            });

            return eventsByCategory;
        } catch (error) {
            console.error('Error retrieving events by category:', error);
            throw error;
        }
    }

    static async joinEvent(eventId: string, userId: string): Promise<void> {
        const checkQuery = 'SELECT id FROM event_participants WHERE event_id = $1 AND user_id = $2';
        const insertQuery = 'INSERT INTO event_participants (event_id, user_id) VALUES ($1, $2)';

        try {
            const { rows } = await pool.query(checkQuery, [eventId, userId]);

            if (rows.length > 0) {
                throw new Error('User already joined this event');
            }

            await pool.query(insertQuery, [eventId, userId]);
        } catch (error) {
            console.error('Error joining event:', error);
            throw error;
        }
    }

    static async checkParticipation(eventId: string, userId: string): Promise<boolean> {
        const query = 'SELECT id FROM event_participants WHERE event_id = $1 AND user_id = $2';

        try {
            const { rows } = await pool.query(query, [eventId, userId]);
            return rows.length > 0;
        } catch (error) {
            console.error('Error checking participation:', error);
            throw error;
        }
    }

    static async getParticipantCount(eventId: string): Promise<number> {
        const query = 'SELECT COUNT(*) as count FROM event_participants WHERE event_id = $1';

        try {
            const { rows } = await pool.query(query, [eventId]);
            return parseInt(rows[0].count, 10);
        } catch (error) {
            console.error('Error getting participant count:', error);
            throw error;
        }
    }

    static async updateEvent(eventId: string, userId: string, eventDetails: Partial<EventDetails>): Promise<EventResponse> {
        const checkOwnerQuery = 'SELECT organizer_id FROM events WHERE id = $1';

        try {
            const { rows: ownerRows } = await pool.query(checkOwnerQuery, [eventId]);

            if (ownerRows.length === 0) {
                throw new Error('Event not found');
            }

            if (ownerRows[0].organizer_id !== userId) {
                throw new Error('Only the event organizer can update this event');
            }

            const updates: string[] = [];
            const values: any[] = [];
            let paramCount = 1;

            if (eventDetails.title !== undefined) {
                updates.push(`title = $${paramCount}`);
                values.push(eventDetails.title);
                paramCount++;
            }
            if (eventDetails.description !== undefined) {
                updates.push(`description = $${paramCount}`);
                values.push(eventDetails.description);
                paramCount++;
            }
            if (eventDetails.category !== undefined) {
                updates.push(`category = $${paramCount}`);
                values.push(eventDetails.category);
                paramCount++;
            }
            if (eventDetails.event_date !== undefined) {
                updates.push(`event_date = $${paramCount}`);
                values.push(eventDetails.event_date);
                paramCount++;
            }
            if (eventDetails.durationHours !== undefined) {
                updates.push(`duration_hours = $${paramCount}`);
                values.push(eventDetails.durationHours);
                paramCount++;
            }
            if (eventDetails.location !== undefined) {
                updates.push(`location = $${paramCount}`);
                values.push(eventDetails.location);
                paramCount++;
            }

            if (updates.length === 0) {
                throw new Error('No fields to update');
            }

            updates.push(`updated_at = NOW()`);
            values.push(eventId);

            const query = `
                UPDATE events
                SET ${updates.join(', ')}
                WHERE id = $${paramCount}
                RETURNING *
            `;

            const { rows } = await pool.query(query, values);
            return rows[0];
        } catch (error) {
            console.error('Error updating event:', error);
            throw error;
        }
    }

    static async deleteEvent(eventId: string, userId: string): Promise<void> {
        const checkOwnerQuery = 'SELECT organizer_id FROM events WHERE id = $1';

        try {
            const { rows: ownerRows } = await pool.query(checkOwnerQuery, [eventId]);

            if (ownerRows.length === 0) {
                throw new Error('Event not found');
            }

            if (ownerRows[0].organizer_id !== userId) {
                throw new Error('Only the event organizer can delete this event');
            }

            await pool.query('DELETE FROM event_participants WHERE event_id = $1', [eventId]);
            await pool.query('DELETE FROM events WHERE id = $1', [eventId]);
        } catch (error) {
            console.error('Error deleting event:', error);
            throw error;
        }
    }

    static async leaveEvent(eventId: string, userId: string): Promise<void> {
        const query = 'DELETE FROM event_participants WHERE event_id = $1 AND user_id = $2';

        try {
            const result = await pool.query(query, [eventId, userId]);

            if (result.rowCount === 0) {
                throw new Error('You are not participating in this event');
            }
        } catch (error) {
            console.error('Error leaving event:', error);
            throw error;
        }
    }
}

module.exports = Event;