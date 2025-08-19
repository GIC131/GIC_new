import React from 'react';
import { Users, Building, Handshake, Target } from 'lucide-react';

const Goals = () => {
  const objectives = [
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Empower Job Seekers",
      description: "Provide industry-leading resume writing and interview preparation services to help professionals land their dream jobs."
    },
    {
      icon: <Building className="h-12 w-12 text-blue-600" />,
      title: "Support Businesses",
      description: "Offer comprehensive HR consultancy, recruitment solutions, and brand-building strategies for companies of all sizes."
    },
    {
      icon: <Handshake className="h-12 w-12 text-blue-600" />,
      title: "Foster Collaborations",
      description: "Create meaningful partnerships between businesses, recruiters, and industry leaders to drive mutual success."
    },
    {
      icon: <Target className="h-12 w-12 text-blue-600" />,
      title: "Optimize Opportunities",
      description: "Help companies enhance their profiles and credibility to attract the right talent and business opportunities."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Goals & Objectives
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our mission-driven approach focuses on creating value for all stakeholders in the career ecosystem.
          </p>
        </div>

        {/* Objectives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {objectives.map((objective, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-6">
                {objective.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {objective.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {objective.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Goals;