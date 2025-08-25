// client/app/interview-questions/page.js

const InterviewQuestionsPage = () => {
  const commonQuestions = [
    "Tell me about yourself.",
    "What are your strengths and weaknesses?",
    "Why do you want to work for this company?",
    "Where do you see yourself in 5 years?",
    "Describe a challenging situation you faced and how you handled it."
  ];

  return (
    <div className="min-h-screen bg-primary py-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-light-text mb-4">
            Common Interview Questions
          </h1>
          <p className="text-lg text-dark-text mb-12">
            Prepare to ace your next interview. Here are some of the most common questions you might face, along with tips on how to answer them.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-secondary p-8 rounded-lg border border-slate-700">
          <h2 className="text-2xl font-bold text-accent mb-6">Top 5 Questions to Practice</h2>
          <ul className="space-y-6">
            {commonQuestions.map((question, index) => (
              <li key={index} className="border-b border-slate-700 pb-4">
                <p className="text-xl font-semibold text-light-text">{index + 1}. {question}</p>
                <p className="text-dark-text mt-2 text-sm">
                  <strong>Tip:</strong> Structure your answer using the STAR method (Situation, Task, Action, Result) for behavioral questions.
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InterviewQuestionsPage;