import User from './User';
import Event from './Event';
import sequelize from '../config/database';
import { DataTypes } from 'sequelize';

const EventParticipants = sequelize.define('event_participants', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    EventId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'events',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    UserId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }
}, {
    timestamps: true,
    tableName: 'event_participants'
});

Event.belongsToMany(User, {
    as: 'participants',
    through: EventParticipants,
    foreignKey: 'EventId',
    otherKey: 'UserId'
});

User.belongsToMany(Event, {
    as: 'participatingEvents',
    through: EventParticipants,
    foreignKey: 'UserId',
    otherKey: 'EventId'
});

Event.belongsTo(User, {
    as: 'organizer',
    foreignKey: 'organizer_id'
});

User.hasMany(Event, {
    foreignKey: 'organizer_id'
});

export { EventParticipants };
