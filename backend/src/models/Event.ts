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
                u.email as organizer_email
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

    static async getAllEvents(limit: number = 50, offset: number = 0): Promise<EventResponse[]> {
        const query = `
            SELECT
                e.*,
                u.name as organizer_name,
                u.email as organizer_email
            FROM events e
            LEFT JOIN users u ON e.organizer_id = u.id
            WHERE e.event_date + (e.duration_hours || ' hours')::INTERVAL > NOW()
            ORDER BY e.created_at DESC
            LIMIT $1 OFFSET $2
        `;

        try {
            const { rows } = await pool.query(query, [limit, offset]);
            return rows;
        } catch (error) {
            console.error('Error retrieving all events:', error);
            throw error;
        }
    }

    static async getTotalEventCount(): Promise<number> {
        const query = `
            SELECT COUNT(*) as total
            FROM events
            WHERE event_date + (duration_hours || ' hours')::INTERVAL > NOW()
        `;

        try {
            const { rows } = await pool.query(query);
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
                u.email as organizer_email
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
}

module.exports = Event;