const roter = require('express').Router();
const eventController = require('../controllers/eventController');
const authMiddleware = require('../middlewares/authMiddleware');

roter.post('/event/newEvent', authMiddleware.requireAuth, eventController.newEvent);
roter.get('/event/getEvent/:eventId', eventController.getEventData);

module.exports = roter;