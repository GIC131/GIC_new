"use client";
import React from 'react';
import { Award, Users, Puzzle, Lightbulb, HandHeart, User, ArrowRight } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      number: '01',
      title: 'Proven Success',
      description: 'High placement rate for job seekers with measurable results and industry recognition.',
      metric: '95% Success Rate'
    },
    {
      number: '02',
      title: 'Industry Expertise',
      description: 'Experienced consultants and HR professionals with deep market knowledge.',
      metric: '15+ Years Experience'
    },
    {
      number: '03',
      title: 'Tailored Solutions',
      description: 'Customized services for both individuals and businesses across all industries.',
      metric: '500+ Companies Served'
    },
    {
      number: '04',
      title: 'Strong Network',
      description: 'Collaborations with recruiters, brands, and organizations worldwide.',
      metric: '1000+ Partners'
    },
    {
      number: '05',
      title: 'Future-Ready Approach',
      description: 'AI-driven solutions for resume building and interview preparation.',
      metric: 'Next-Gen Technology'
    }
  ];

  const orbitalIcons = [
    { Icon: Award, position: 'top-8 right-20', delay: '0s' },
    { Icon: Puzzle, position: 'top-24 right-8', delay: '0.2s' },
    { Icon: Lightbulb, position: 'bottom-8 right-20', delay: '0.4s' },
    { Icon: HandHeart, position: 'bottom-24 left-8', delay: '0.6s' },
    { Icon: Users, position: 'top-24 left-8', delay: '0.8s' }
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Sophisticated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-indigo-200/20 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-slate-100/60 to-gray-200/30 rounded-full blur-3xl transform -translate-x-24 translate-y-24"></div>
        
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, #1e40af 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Subtle Grid Lines */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(90deg, #3b82f6 1px, transparent 1px),
                             linear-gradient(180deg, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Premium Header Design */}
        <div className="text-center mb-20">
          
          <div className="relative inline-block">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 mb-6 tracking-tight">
              Why Choose Us?
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
          </div>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mt-8 leading-relaxed">
            Discover what sets us apart in delivering exceptional results and building lasting partnerships
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Enhanced Reasons List */}
          <div className="space-y-8">
            {reasons.map((reason, index) => (
              <div 
                key={index} 
                className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-200/50 hover:border-blue-200/50 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <span className="text-xl font-black text-white">{reason.number}</span>
                      </div>
                      <div className="absolute -inset-1 bg-gradient-to-br from-blue-600/20 to-indigo-700/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors duration-300">
                        {reason.title}
                      </h3>
                      <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                    
                    <p className="text-slate-600 text-lg leading-relaxed mb-4">
                      {reason.description}
                    </p>
                    
                    <div className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold">
                      {reason.metric}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Premium Orbital Visualization */}
          <div className="relative h-[500px] flex items-center justify-center">
            {/* Animated Background Rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 border border-slate-300/30 rounded-full animate-spin" style={{ animationDuration: '60s' }}></div>
              <div className="absolute w-80 h-80 border border-slate-300/20 rounded-full animate-spin" style={{ animationDuration: '45s', animationDirection: 'reverse' }}></div>
              <div className="absolute w-64 h-64 border border-slate-300/10 rounded-full animate-spin" style={{ animationDuration: '30s' }}></div>
            </div>

            {/* Connecting Grid Lines */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <div className="w-96 h-96 relative">
                {/* Radial lines */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-0.5 h-48 bg-gradient-to-t from-transparent via-slate-400 to-transparent origin-bottom"
                    style={{
                      transform: `translate(-50%, -100%) rotate(${i * 45}deg)`
                    }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Central Logo Hub */}
            <div className="relative z-10">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-800 rounded-full flex items-center justify-center shadow-2xl border-4 border-white relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent animate-pulse"></div>
                
                <div className="relative w-20 h-20 bg-gradient-to-br from-yellow-400 via-orange-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <User className="w-10 h-10 text-white drop-shadow-sm" />
                </div>
                
                {/* Rotating Ring */}
                <div className="absolute inset-2 border-2 border-white/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
              </div>
              
              {/* Pulsing Glow Effect */}
              <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-xl animate-pulse"></div>
            </div>

            {/* Enhanced Orbital Icons */}
            {orbitalIcons.map((item, index) => (
              <div
                key={index}
                className={`absolute w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center shadow-xl transform transition-all duration-500 hover:scale-125 hover:shadow-2xl border-2 border-white/10 ${item.position}`}
                style={{
                  animation: `float 6s ease-in-out infinite`,
                  animationDelay: item.delay
                }}
              >
                <item.Icon className="w-8 h-8 text-white drop-shadow-sm" />
                
                {/* Icon Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Connecting Pulse */}
                <div className="absolute inset-0 border-2 border-blue-400/30 rounded-full animate-ping opacity-0 hover:opacity-100"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
            <span className="text-lg font-semibold">Ready to get started?</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;