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
    const search = req.query.search as string | undefined;
    const category = req.query.category as string | undefined;
    const dateFrom = req.query.dateFrom as string | undefined;
    const dateTo = req.query.dateTo as string | undefined;

    try {
        const result = await eventService.getAllEvents(limit, offset, search, category, dateFrom, dateTo);
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

exports.getEventsByCategory = async (req: express.Request, res: express.Response) => {
    const limit = parseInt(req.query.limit as string) || 5;

    try {
        const eventsByCategory = await eventService.getEventsByCategory(limit);
        res.status(200).json({
            success: true,
            eventsByCategory
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error instanceof Error ? error.message : 'An error occurred' })
    }
}

exports.joinEvent = async (req: express.Request, res: express.Response) => {
    const { eventId } = req.params;
    const userId = req.userId;

    if (!userId) {
        return res.status(401).json({ success: false, message: 'User not authenticated' });
    }

    try {
        await eventService.joinEvent(eventId, userId);
        const participantCount = await eventService.getParticipantCount(eventId);
        res.status(200).json({
            success: true,
            message: 'Successfully joined event',
            participantCount
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error instanceof Error ? error.message : 'An error occurred' })
    }
}

exports.checkParticipation = async (req: express.Request, res: express.Response) => {
    const { eventId } = req.params;
    const userId = req.userId;

    if (!userId) {
        return res.status(401).json({ success: false, message: 'User not authenticated' });
    }

    try {
        const isParticipating = await eventService.checkParticipation(eventId, userId);
        res.status(200).json({
            success: true,
            isParticipating
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error instanceof Error ? error.message : 'An error occurred' })
    }
}

exports.updateEvent = async (req: express.Request, res: express.Response) => {
    const { eventId } = req.params;
    const userId = req.userId;

    if (!userId) {
        return res.status(401).json({ success: false, message: 'User not authenticated' });
    }

    try {
        const updatedEvent = await eventService.updateEvent(eventId, userId, req.body);
        res.status(200).json({
            success: true,
            message: 'Event updated successfully',
            event: updatedEvent
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error instanceof Error ? error.message : 'An error occurred' })
    }
}

exports.deleteEvent = async (req: express.Request, res: express.Response) => {
    const { eventId } = req.params;
    const userId = req.userId;

    if (!userId) {
        return res.status(401).json({ success: false, message: 'User not authenticated' });
    }

    try {
        await eventService.deleteEvent(eventId, userId);
        res.status(200).json({
            success: true,
            message: 'Event deleted successfully'
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error instanceof Error ? error.message : 'An error occurred' })
    }
}

exports.leaveEvent = async (req: express.Request, res: express.Response) => {
    const { eventId } = req.params;
    const userId = req.userId;

    if (!userId) {
        return res.status(401).json({ success: false, message: 'User not authenticated' });
    }

    try {
        await eventService.leaveEvent(eventId, userId);
        const participantCount = await eventService.getParticipantCount(eventId);
        res.status(200).json({
            success: true,
            message: 'Successfully left event',
            participantCount
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error instanceof Error ? error.message : 'An error occurred' })
    }
}
