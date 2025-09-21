const router = require('express').Router();
const authController = require('../controllers/authController');

router.post('/signIn', authController.signIn);
router.post('/login', authController.login);

module.exports = router;