const express = require('express');
const router = express.Router();
const { getAllUsers,getUserCount } = require('../controllers/usercontroller');
const { protect, adminProtect } = require('../middleware/authMiddleware');
router.route('/').get(protect, adminProtect, getAllUsers);
router.route('/count').get(protect, adminProtect, getUserCount);
module.exports = router;