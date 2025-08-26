// client/app/interview-questions/page.js

// Fetch data on the server for better SEO
async function getDynamicQuestions() {
  try {
    // We use fetch here because this is a Server Component
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/questions`, { cache: 'no-store' });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("Failed to fetch dynamic questions", error);
    return [];
  }
}

const InterviewQuestionsPage = async () => {
  // These are your original, static questions
  const staticQuestions = [
    { question: "Tell me about yourself.", answerTip: "Structure your answer around your past, present, and future career goals." },
    { question: "What are your strengths and weaknesses?", answerTip: "Choose a real weakness and show how you are working to improve it." },
    { question: "Why do you want to work for this company?", answerTip: "Research the company's values and mission, and align your answer with them." },
    { question: "Where do you see yourself in 5 years?", answerTip: "Show ambition but be realistic and relevant to the role you're applying for." },
    { question: "Describe a challenging situation you faced.", answerTip: "Use the STAR method (Situation, Task, Action, Result) to frame your response." },
  ];

  const dynamicQuestions = await getDynamicQuestions();
  const allQuestions = [...staticQuestions, ...dynamicQuestions];

  return (
    <div className="min-h-screen bg-primary py-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-light-text mb-4">
            Interview Questions
          </h1>
          <p className="text-lg text-dark-text mb-12">
            Prepare to ace your next interview. Here are some of the most common questions, along with expert tips on how to answer them.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-secondary p-8 rounded-lg border border-slate-700">
          <h2 className="text-2xl font-bold text-accent mb-6">Questions to Practice</h2>
          <ul className="space-y-6">
            {allQuestions.map((item, index) => (
              <li key={index} className="border-b border-slate-700 pb-4">
                <p className="text-xl font-semibold text-light-text">{index + 1}. {item.question}</p>
                <p className="text-dark-text mt-2 text-sm">
                  <strong>Tip:</strong> {item.answerTip}
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