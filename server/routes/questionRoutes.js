// server/routes/questionRoutes.js
const express = require('express');
const router = express.Router();
const { getQuestions, addQuestion, deleteQuestion } = require('../controllers/questionController');
const { protect, adminProtect } = require('../middleware/authMiddleware');

// Public route to get all questions
router.route('/').get(getQuestions);

// Admin-only routes to add and delete questions
router.route('/').post(protect, adminProtect, addQuestion);
router.route('/:id').delete(protect, adminProtect, deleteQuestion);

module.exports = router;