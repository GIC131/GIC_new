import React from 'react';
import { Award, Users, Target, Star } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Our Founder
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the visionary behind Get Interview Confidence, dedicated to transforming careers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Founder Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/ayushe Mandal/image.png"
                  alt="Ayushe Mandal"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-70"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-50 rounded-full opacity-50"></div>
            </div>
          </div>

          {/* Founder Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Ayushe Mandal</h3>
              <p className="text-xl text-blue-600 font-semibold mb-6">Founder & CEO</p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 5 years of experience in career development and recruitment, 
                Ayushe has dedicated her career to helping professionals unlock their potential. 
                Her proven methodologies have helped hundreds of individuals secure their dream jobs 
                at top companies across various industries.
              </p>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Users className="h-8 w-8 text-blue-600" />, number: '500+', label: 'Clients Mentored' },
                { icon: <Award className="h-8 w-8 text-blue-600" />, number: '95%', label: 'Success Rate' },
                { icon: <Target className="h-8 w-8 text-blue-600" />, number: '50+', label: 'Partner Companies' },
                { icon: <Star className="h-8 w-8 text-blue-600" />, number: '4.9', label: 'Client Rating' }
              ].map((stat, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;