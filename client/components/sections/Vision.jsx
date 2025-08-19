import React from 'react';
import { Lightbulb, Users, Shield } from 'lucide-react';

const Vision = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Vision
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering careers through three core pillars of excellence
          </p>
        </div>

        {/* Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Innovative Strategies */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Innovative Strategies
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Cutting-edge methodologies and modern approaches to career development that keep you ahead of industry trends.
            </p>
          </div>

          {/* Personalized Guidance */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Personalized Guidance
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Tailored coaching and mentorship designed specifically for your unique career goals and professional aspirations.
            </p>
          </div>

          {/* Industry Expertise */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Industry Expertise
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Deep knowledge and proven experience across various industries to provide you with relevant, actionable insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;