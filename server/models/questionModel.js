// server/models/questionModel.js
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    trim: true,
  },
  answerTip: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    default: 'General',
  },
}, { timestamps: true });

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;