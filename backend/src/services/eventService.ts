import type { EventDetails, EventResponse } from '../types/event.types';
const Event = require('../models/Event');

exports.createEvent = async (eventData: EventDetails): Promise<EventDetails> => {
    const newEvent = await Event.createEvent(eventData);
    return newEvent;
}

exports.getEventById = async (eventId: string): Promise<EventDetails> => {
    const event = await Event.getEventById(eventId);
    return event;
}

exports.getAllEvents = async (limit: number = 50, offset: number = 0): Promise<{ events: EventResponse[], total: number }> => {
    const events = await Event.getAllEvents(limit, offset);
    const total = await Event.getTotalEventCount();
    return { events, total };
}

exports.getEventsByCategory = async (limit: number = 5): Promise<Record<string, EventResponse[]>> => {
    const eventsByCategory = await Event.getEventsByCategory(limit);
    return eventsByCategory;
}

exports.joinEvent = async (eventId: string, userId: string): Promise<void> => {
    await Event.joinEvent(eventId, userId);
}

exports.checkParticipation = async (eventId: string, userId: string): Promise<boolean> => {
    const isParticipating = await Event.checkParticipation(eventId, userId);
    return isParticipating;
}

exports.getParticipantCount = async (eventId: string): Promise<number> => {
    const count = await Event.getParticipantCount(eventId);
    return count;
}
