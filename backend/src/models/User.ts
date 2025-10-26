const pool = require('../config/database');
const ulid = require('ulid').ulid;

class User {
    static async findUserByEmail (email: string) {
        const query = `SELECT * FROM users WHERE email = $1`;

        try {
            const { rows } = await pool.query(query, [ email ]);
            return rows[0];
        } catch (error: any) {
            console.error('Error finding user by email:', error);
            throw error
        }
    }

    static async createNewUser (name: string, email: string, hashPassword: string) {
        const userId = ulid();

        const query = `
            INSERT INTO users (id, name, email, password_hash)
            VALUES ($1, $2, $3, $4)
            RETURNING *;
        `;

        try {
            const { rows } = await pool.query(query, [ userId, name, email, hashPassword ]);
            return rows[0];
        } catch (error) {
            console.error('Error to create a new user: ', error);
            throw error;
        }
    }

    static async getUserProfile (userId: string) {
        const query = `SELECT id, name, email, created_at FROM users WHERE id = $1`;

        try {
            const { rows } = await pool.query(query, [ userId ]);
            return rows[0];
        } catch (error: any) {
            console.error('Error getting user profile:', error);
            throw error;
        }
    }

    static async getUserEvents (userId: string) {
        const query = `
            SELECT
                e.id,
                e.title,
                e.description,
                e.category,
                e.location,
                e.event_date,
                e.duration_hours,
                COALESCE((
                    SELECT COUNT(*)
                    FROM event_participants ep
                    WHERE ep.event_id = e.id
                ), 0)::INTEGER as current_participants
            FROM events e
            WHERE e.organizer_id = $1
            ORDER BY e.event_date ASC
        `;

        try {
            const { rows } = await pool.query(query, [ userId ]);
            return rows;
        } catch (error: any) {
            console.error('Error getting user events:', error);
            throw error;
        }
    }

    static async getUserParticipatingEvents (userId: string) {
        const query = `
            SELECT
                e.id,
                e.title,
                e.description,
                e.category,
                e.location,
                e.event_date,
                e.duration_hours,
                COALESCE((
                    SELECT COUNT(*)
                    FROM event_participants ep2
                    WHERE ep2.event_id = e.id
                ), 0)::INTEGER as current_participants
            FROM events e
            INNER JOIN event_participants ep ON e.id = ep.event_id
            WHERE ep.user_id = $1
            ORDER BY e.event_date ASC
        `;

        try {
            const { rows } = await pool.query(query, [ userId ]);
            return rows;
        } catch (error: any) {
            console.error('Error getting user participating events:', error);
            throw error;
        }
    }
}

module.exports = User;