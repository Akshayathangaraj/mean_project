const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/authController');

// Sign up route
router.post('/signup', registerUser);

module.exports = router;
