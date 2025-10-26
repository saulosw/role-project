import express = require('express');
const userService = require('../services/userService');

exports.getProfile = async (req: express.Request, res: express.Response) => {
    try {
        const userId = req.userId;

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: 'User ID not found'
            });
        }

        const user = await userService.getUserProfile(userId);

        res.status(200).json({
            success: true,
            user: user
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error instanceof Error ? error.message : 'An error occurred'
        });
    }
};

exports.getMyEvents = async (req: express.Request, res: express.Response) => {
    try {
        const userId = req.userId;

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: 'User ID not found'
            });
        }

        const events = await userService.getUserEvents(userId);

        res.status(200).json({
            success: true,
            events: events
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error instanceof Error ? error.message : 'An error occurred'
        });
    }
};

exports.getParticipatingEvents = async (req: express.Request, res: express.Response) => {
    try {
        const userId = req.userId;

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: 'User ID not found'
            });
        }

        const events = await userService.getUserParticipatingEvents(userId);

        res.status(200).json({
            success: true,
            events: events
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error instanceof Error ? error.message : 'An error occurred'
        });
    }
};
