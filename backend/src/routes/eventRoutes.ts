const roter = require('express').Router();
const eventController = require('../controllers/eventController');
const authMiddleware = require('../middlewares/authMiddleware');

roter.post('/event/newEvent', authMiddleware.requireAuth, eventController.newEvent);
roter.get('/event/getEvent/:eventId', eventController.getEventData);
roter.get('/event/getAllEvents', eventController.getAllEvents);
roter.get('/event/getEventsByCategory', eventController.getEventsByCategory);
roter.post('/event/joinEvent/:eventId', authMiddleware.requireAuth, eventController.joinEvent);
roter.get('/event/checkParticipation/:eventId', authMiddleware.requireAuth, eventController.checkParticipation);

module.exports = roter;