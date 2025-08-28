// server/controllers/questionController.js
const Question = require('../models/questionModel');


const getQuestions = async (req, res) => {
  try {
    const questions = await Question.find({}).sort({ createdAt: -1 });
    res.json(questions);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};


const addQuestion = async (req, res) => {
  const { question, answerTip, category } = req.body;
  try {
    const newQuestion = new Question({ question, answerTip, category });
    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};


const deleteQuestion = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) {
      return res.status(404).json({ msg: 'Question not found' });
    }
    await question.deleteOne();
    res.json({ msg: 'Question removed' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

module.exports = { getQuestions, addQuestion, deleteQuestion };