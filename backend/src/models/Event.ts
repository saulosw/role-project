
import { DataTypes, Model, Op } from 'sequelize';
import sequelize from '../config/database';
import type User from './User';
import type { EventDetails, EventResponse } from '../types/event.types';
import { v4 as uuidv4 } from 'uuid';

class Event extends Model {
    declare id: string;
    declare title: string;
    declare description: string;
    declare category: string;
    declare event_date: Date;
    declare duration_hours: number;
    declare location: string;
    declare organizer_id: string;

    static async createEvent(eventDetails: EventDetails): Promise<Event> {
        const newEvent = await Event.create({
            id: uuidv4(),
            ...eventDetails
        } as any);
        return newEvent;
    }

    static async getEventById(eventId: string): Promise<Event | null> {
        const event = await Event.findByPk(eventId, {
            include: [{
                model: sequelize.models.User as typeof User,
                as: 'organizer',
                attributes: ['name', 'email']
            }]
        });
        return event;
    }

    static async getAllEvents(
        limit: number = 50,
        offset: number = 0,
        search?: string,
        category?: string,
        dateFrom?: string,
        dateTo?: string
    ): Promise<Event[]> {
        const where: any = {
            event_date: {
                [Op.gt]: new Date()
            }
        };

        if (search) {
            where[Op.or] = [
                { title: { [Op.like]: `%${search}%` } },
                { description: { [Op.like]: `%${search}%` } },
                { location: { [Op.like]: `%${search}%` } }
            ];
        }

        if (category) {
            where.category = category;
        }

        if (dateFrom) {
            where.event_date = { ...where.event_date, [Op.gte]: new Date(dateFrom) };
        }

        if (dateTo) {
            where.event_date = { ...where.event_date, [Op.lte]: new Date(dateTo) };
        }

        const events = await Event.findAll({
            where,
            limit,
            offset,
            include: [{
                model: sequelize.models.User as typeof User,
                as: 'organizer',
                attributes: ['name', 'email']
            }],
            order: [['createdAt', 'DESC']]
        });

        return events;
    }

    static async getTotalEventCount(
        search?: string,
        category?: string,
        dateFrom?: string,
        dateTo?: string
    ): Promise<number> {
        const where: any = {
            event_date: {
                [Op.gt]: new Date()
            }
        };

        if (search) {
            where[Op.or] = [
                { title: { [Op.like]: `%${search}%` } },
                { description: { [Op.like]: `%${search}%` } },
                { location: { [Op.like]: `%${search}%` } }
            ];
        }

        if (category) {
            where.category = category;
        }

        if (dateFrom) {
            where.event_date = { ...where.event_date, [Op.gte]: new Date(dateFrom) };
        }

        if (dateTo) {
            where.event_date = { ...where.event_date, [Op.lte]: new Date(dateTo) };
        }

        const count = await Event.count({ where });
        return count;
    }

    static async getEventsByCategory(limit: number = 5): Promise<Record<string, Event[]>> {
        const events = await Event.findAll({
            where: {
                event_date: {
                    [Op.gt]: new Date()
                }
            },
            order: [['category', 'ASC'], ['event_date', 'ASC']]
        });

        const eventsByCategory: Record<string, Event[]> = {};

        events.forEach((event) => {
            const category = event.category;
            if (!eventsByCategory[category]) {
                eventsByCategory[category] = [];
            }

            if (eventsByCategory[category] && eventsByCategory[category].length < limit) {
                eventsByCategory[category].push(event);
            }
        });

        return eventsByCategory;
    }

    static async joinEvent(eventId: string, userId: string): Promise<void> {
        const event = await Event.findByPk(eventId);
        if (!event) {
            throw new Error('Event not found');
        }
        const user = await (sequelize.models.User as typeof User).findByPk(userId);
        if (!user) {
            throw new Error('User not found');
        }
        await (event as any).addParticipant(user);
    }

    static async checkParticipation(eventId: string, userId: string): Promise<boolean> {
        const event = await Event.findByPk(eventId);
        if (!event) {
            return false;
        }
        const participants = await (event as any).getParticipants({ where: { id: userId } });
        return participants.length > 0;
    }

    static async getParticipantCount(eventId: string): Promise<number> {
        const event = await Event.findByPk(eventId);
        if (!event) {
            return 0;
        }
        return await (event as any).countParticipants();
    }

    static async updateEvent(eventId: string, userId: string, eventDetails: Partial<EventDetails>): Promise<Event> {
        const event = await Event.findByPk(eventId);
        if (!event) {
            throw new Error('Event not found');
        }
        if (event.organizer_id !== userId) {
            throw new Error('Only the event organizer can update this event');
        }
        await event.update(eventDetails);
        return event;
    }

    static async deleteEvent(eventId: string, userId: string): Promise<void> {
        const event = await Event.findByPk(eventId);
        if (!event) {
            throw new Error('Event not found');
        }
        if (event.organizer_id !== userId) {
            throw new Error('Only the event organizer can delete this event');
        }
        await event.destroy();
    }

    static async leaveEvent(eventId: string, userId: string): Promise<void> {
        const event = await Event.findByPk(eventId);
        if (!event) {
            throw new Error('Event not found');
        }
        const user = await (sequelize.models.User as typeof User).findByPk(userId);
        if (!user) {
            throw new Error('User not found');
        }
        await (event as any).removeParticipant(user);
    }
}

Event.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    event_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    duration_hours: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    organizer_id: {
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
    sequelize,
    modelName: 'Event',
    tableName: 'events',
    timestamps: true
});

export default Event;
