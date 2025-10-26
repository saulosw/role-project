const router = require('express').Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/profile', authMiddleware.requireAuth, userController.getProfile);
router.get('/my-events', authMiddleware.requireAuth, userController.getMyEvents);
router.get('/participating-events', authMiddleware.requireAuth, userController.getParticipatingEvents);

module.exports = router;
