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
}

module.exports = User;