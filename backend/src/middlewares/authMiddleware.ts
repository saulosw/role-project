import express = require('express');

declare global {
    namespace Express {
        interface Request {
            userId?: string;
        }
    }
}

exports.requireAuth = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const userId = req.headers['x-user-id'] as string;

    if (!userId) {
        return res.status(401).json({
            success: false,
            message: 'Authentication required. Please provide x-user-id header.'
        });
    }

    req.userId = userId;
    next();
};
