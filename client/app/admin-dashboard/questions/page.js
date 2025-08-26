// client/app/admin-dashboard/questions/page.js
'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

const QuestionManager = () => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswerTip, setNewAnswerTip] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchQuestions = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/questions`);
      setQuestions(res.data);
    } catch (error) {
      console.error("Failed to fetch questions", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/questions`, {
        question: newQuestion,
        answerTip: newAnswerTip,
      });
      setNewQuestion('');
      setNewAnswerTip('');
      fetchQuestions(); // Refresh the list
    } catch (error) {
      console.error("Failed to add question", error);
    }
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this question?')) {
        try {
            await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/questions/${id}`);
            fetchQuestions(); // Refresh the list
        } catch (error) {
            console.error("Failed to delete question", error);
        }
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-light-text mb-6">Manage Interview Questions</h1>

      {/* Add New Question Form */}
      <div className="bg-secondary p-6 rounded-lg mb-8">
        <h2 className="text-xl font-bold text-accent mb-4">Add a New Question</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="newQuestion" className="block text-sm font-medium text-dark-text">Question</label>
            <input type="text" id="newQuestion" value={newQuestion} onChange={(e) => setNewQuestion(e.target.value)} required className="mt-1 w-full bg-primary border border-slate-600 rounded-md py-2 px-3 text-light-text" />
          </div>
          <div>
            <label htmlFor="newAnswerTip" className="block text-sm font-medium text-dark-text">Answer Tip</label>
            <textarea id="newAnswerTip" value={newAnswerTip} onChange={(e) => setNewAnswerTip(e.target.value)} required rows="3" className="mt-1 w-full bg-primary border border-slate-600 rounded-md py-2 px-3 text-light-text"></textarea>
          </div>
          <button type="submit" className="bg-accent text-primary font-bold px-5 py-2 rounded-lg">Add Question</button>
        </form>
      </div>

      {/* Existing Questions List */}
      <div className="bg-secondary p-6 rounded-lg">
        <h2 className="text-xl font-bold text-accent mb-4">Existing Questions</h2>
        {loading ? <p>Loading...</p> : (
          <ul className="space-y-4">
            {questions.map(q => (
              <li key={q._id} className="flex justify-between items-center bg-primary p-4 rounded-md">
                <div>
                    <p className="font-semibold text-light-text">{q.question}</p>
                    <p className="text-sm text-dark-text">{q.answerTip}</p>
                </div>
                <button onClick={() => handleDelete(q._id)} className="text-red-500 hover:text-red-400 font-semibold">Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default QuestionManager;