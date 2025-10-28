import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import type Event from './Event';
import { v4 as uuidv4 } from 'uuid';

class User extends Model {
    declare id: string;
    declare name: string;
    declare email: string;
    declare password_hash: string;

    static async findUserByEmail(email: string) {
        return await User.findOne({ where: { email } });
    }

    static async createNewUser(name: string, email: string, hashPassword: string) {
        return await User.create({
            id: uuidv4(),
            name,
            email,
            password_hash: hashPassword
        });
    }

    static async getUserProfile(userId: string) {
        return await User.findByPk(userId, {
            attributes: ['id', 'name', 'email', 'createdAt']
        });
    }

    static async getUserEvents(userId: string) {
        return await (sequelize.models.Event as typeof Event).findAll({ where: { organizer_id: userId } });
    }

    static async getUserParticipatingEvents(userId: string) {
        return await (sequelize.models.Event as typeof Event).findAll({
            include: [{
                model: sequelize.models.User as typeof User,
                as: 'participants',
                where: { id: userId },
                attributes: []
            }]
        });
    }
}

User.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password_hash: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: true
});

export default User;