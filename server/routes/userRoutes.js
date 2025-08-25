const express = require('express');
const router = express.Router();
const { getAllUsers } = require('../controllers/userController');
const { protect, adminProtect } = require('../middleware/authMiddleware');
router.route('/').get(protect, adminProtect, getAllUsers);
module.exports = router;