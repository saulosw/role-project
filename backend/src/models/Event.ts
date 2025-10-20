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
        const query = `SELECT * FROM events WHERE id = $1`;

        try {
            const { rows } = await pool.query(query, [ eventId ]);
            const event = rows[0];
            return event;
        } catch (error) {
            console.error('Error retrieving event by ID:', error);
            throw error;
        }
    }
}

module.exports = Event;