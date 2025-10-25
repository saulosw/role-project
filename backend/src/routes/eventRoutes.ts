const roter = require('express').Router();
const eventController = require('../controllers/eventController');
const authMiddleware = require('../middlewares/authMiddleware');

roter.post('/event/newEvent', authMiddleware.requireAuth, eventController.newEvent);
roter.get('/event/getEvent/:eventId', eventController.getEventData);
roter.get('/event/getAllEvents', eventController.getAllEvents);

module.exports = roter;