import express = require('express');
const eventService = require('../services/eventService');

exports.newEvent = async (req: express.Request, res: express.Response) => {
    const eventData = {
        ...req.body,
        organizerId: req.userId
    };

    try {
        const newEvent = await eventService.createEvent(eventData);
        res.status(201).json({ success: true, message: 'Event created successfully', event: newEvent });
    } catch (error) {
        res.status(400).json({ success: false, message: error instanceof Error ? error.message : 'An error occurred' })
    }
}

exports.getEventData = async (req: express.Request, res: express.Response) => {
    const { eventId } = req.params;

    try {
        const eventData = await eventService.getEventById(eventId);
        res.status(200).json({ success: true, event: eventData });
    } catch (error) {
        res.status(400).json({ success: false, message: error instanceof Error ? error.message : 'An error occurred' })
    }
}

exports.getAllEvents = async (req: express.Request, res: express.Response) => {
    const limit = parseInt(req.query.limit as string) || 50;
    const offset = parseInt(req.query.offset as string) || 0;

    try {
        const result = await eventService.getAllEvents(limit, offset);
        res.status(200).json({
            success: true,
            events: result.events,
            total: result.total,
            hasMore: (offset + limit) < result.total
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error instanceof Error ? error.message : 'An error occurred' })
    }
}
