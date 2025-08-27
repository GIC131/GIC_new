// client/app/dashboard/page.js
'use client';

import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';

// A reusable card component for the dashboard
const DashboardCard = ({ title, description, href, icon }) => (
    <Link href={href}>
        <div className="bg-secondary p-6 rounded-lg border border-slate-700 hover:border-accent hover:scale-105 transition-all duration-300 h-full">
            <div className="text-accent mb-4">{icon}</div>
            <h3 className="text-xl font-bold text-light-text mb-2">{title}</h3>
            <p className="text-dark-text">{description}</p>
        </div>
    </Link>
);

const UserDashboardPage = () => {
  const { user } = useAuth();

  const cards = [
    {
      title: "Resume Building",
      description: "Get tips and download our template to create a winning resume.",
      href: "/resume-building",
      icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
    },
    {
      title: "Interview Questions",
      description: "Practice common questions and learn expert strategies to answer them.",
      href: "/interview-questions",
      icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    },
    {
      title: "Contact HR",
      description: "Have a specific question? Get in touch with our HR team directly.",
      href: "/contact",
      icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    },
  ];

  return (
    <div className="min-h-screen bg-primary py-20">
      <div className="container mx-auto px-6">
        {/* Welcome Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-light-text">
            Welcome back, <span className="text-accent">{user?.name}!</span>
          </h1>
          <p className="text-lg text-dark-text mt-2">
            Here are some quick links to help you get started on your career journey.
          </p>
        </div>

        {/* Quick Access Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map(card => (
            <DashboardCard key={card.title} {...card} />
          ))}
        </div>

        {/* We can add a "Saved Questions" or "My Progress" section here in the future */}
      </div>
    </div>
  );
};

export default UserDashboardPage;