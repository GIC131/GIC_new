// server/routes/authRoutes.js

const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getLoggedInUser } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware'); // Import protect

// Define the routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/', protect, getLoggedInUser); // Add this new route

module.exports = router;