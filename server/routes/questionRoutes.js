// server/routes/questionRoutes.js
const express = require('express');
const router = express.Router();
const { getQuestions, addQuestion, deleteQuestion } = require('../controllers/questionController');
const { protect, adminProtect } = require('../middleware/authMiddleware');


router.route('/').get(getQuestions);


router.route('/').post(protect, adminProtect, addQuestion);
router.route('/:id').delete(protect, adminProtect, deleteQuestion);

module.exports = router;