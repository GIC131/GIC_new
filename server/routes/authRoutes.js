// server/routes/authRoutes.js

const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getLoggedInUser } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware'); 


router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/', protect, getLoggedInUser); 

module.exports = router;