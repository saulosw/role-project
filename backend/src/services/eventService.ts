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
