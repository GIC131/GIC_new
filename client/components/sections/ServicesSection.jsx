import React from 'react';
import { Users, Settings, HelpCircle, MessageSquare, UserCheck, TrendingUp, ArrowRight, CheckCircle, Star, Award, Target, Zap, GraduationCap, FileText, Handshake, Building, AlignCenterVertical as Certificate, Briefcase, Shield, FileCheck, Network, Megaphone, Search, Cog, UserPlus, Share2 } from 'lucide-react';

const Services = () => {
  const schoolServices = [
    {
      icon: Users,
      title: 'Early Career Awareness',
      description: 'Structured sessions to help students begin thinking about career options from an early stage.',
      badge: 'Foundation',
      features: ['Age-appropriate career exploration', 'Interactive learning modules', 'Progress tracking'],
      duration: '6-8 weeks'
    },
    {
      icon: Settings,
      title: 'Interactive Workshops',
      description: 'Engaging career exploration sessions highlighting future academic and professional pathways.',
      badge: 'Engagement',
      features: ['Hands-on activities', 'Industry simulations', 'Peer collaboration'],
      duration: '4-6 weeks'
    },
    {
      icon: HelpCircle,
      title: 'Aptitude & Psychometric Assessments',
      description: 'Scientifically designed tools to help students understand their strengths, preferences, and personality traits.',
      badge: 'Assessment',
      features: ['Comprehensive testing', 'Detailed reports', 'Personalized insights'],
      duration: '2-3 weeks'
    },
    {
      icon: MessageSquare,
      title: 'One-on-One Counseling',
      description: 'Personalized guidance by certified career experts to help students make well-informed decisions.',
      badge: 'Personal',
      features: ['Individual sessions', 'Goal setting', 'Action planning'],
      duration: 'Ongoing'
    },
    {
      icon: UserCheck,
      title: 'Parent-Student Seminars',
      description: 'Joint sessions to bridge the gap between aspirations, opportunities, and real-world challenges.',
      badge: 'Collaborative',
      features: ['Family involvement', 'Communication strategies', 'Shared understanding'],
      duration: '3-4 sessions'
    },
    {
      icon: TrendingUp,
      title: 'Career Fairs & Industry Exposure',
      description: 'Live interactions with industry professionals to give students a practical understanding of various fields.',
      badge: 'Experience',
      features: ['Industry networking', 'Real-world insights', 'Mentorship opportunities'],
      duration: 'Quarterly events'
    }
  ];

  const collegeServices = [
    {
      icon: GraduationCap,
      title: 'Career Readiness & Interview Coaching',
      description: 'Live sessions and mock interviews to enhance communication, soft skills, and placement confidence.',
      badge: 'Professional',
      features: ['Mock interview sessions', 'Communication enhancement', 'Confidence building', 'Industry-specific preparation'],
      duration: '8-10 weeks'
    },
    {
      icon: FileText,
      title: 'Professional Resume Writing Support',
      description: 'Personalized CVs and LinkedIn profile optimization to match industry standards.',
      badge: 'Optimization',
      features: ['CV personalization', 'LinkedIn optimization', 'Industry alignment', 'ATS compatibility'],
      duration: '2-3 weeks'
    },
    {
      icon: Handshake,
      title: 'Internship & Job Opportunities',
      description: 'Access to curated openings through our recruitment network.',
      badge: 'Opportunities',
      features: ['Curated job listings', 'Recruitment network access', 'Application support', 'Interview coordination'],
      duration: 'Ongoing'
    },
    {
      icon: Building,
      title: 'Campus Drives & Industry Interface',
      description: 'Participation in recruitment events and industry interactions.',
      badge: 'Networking',
      features: ['Campus recruitment events', 'Industry interactions', 'Professional networking', 'Company partnerships'],
      duration: 'Semester-based'
    },
    {
      icon: Certificate,
      title: 'Certification Programs',
      description: '2-month guided interview coaching and placement training with certification.',
      badge: 'Certification',
      features: ['Guided coaching', 'Placement training', 'Industry certification', 'Skill validation'],
      duration: '2 months'
    }
  ];

  const hrBusinessServices = [
    {
      icon: Search,
      title: 'Recruitment & Talent Acquisition',
      description: 'Sourcing, screening, and placing top talent.',
      badge: 'Talent',
      features: ['Executive search', 'Bulk hiring', 'Specialized recruitment', 'Talent pipeline development'],
      duration: 'Project-based'
    },
    {
      icon: Shield,
      title: 'HR Process & Policy Consulting',
      description: 'Developing efficient HR policies and compliance frameworks.',
      badge: 'Compliance',
      features: ['Policy development', 'Compliance audits', 'Process optimization', 'Legal framework'],
      duration: '4-8 weeks'
    },
    {
      icon: FileCheck,
      title: 'Company Profile & Business Proposal Creation',
      description: 'Craft compelling corporate presentations.',
      badge: 'Branding',
      features: ['Corporate presentations', 'Business proposals', 'Company profiles', 'Marketing materials'],
      duration: '2-4 weeks'
    },
    {
      icon: Network,
      title: 'Collaboration & Partnership Proposals',
      description: 'Connecting brands, businesses, and recruiters for growth.',
      badge: 'Partnerships',
      features: ['Strategic partnerships', 'Business networking', 'Collaboration frameworks', 'Growth strategies'],
      duration: 'Ongoing'
    },
    {
      icon: Briefcase,
      title: 'Company Profile & Branding Solutions',
      description: 'Crafting compelling company profiles for market positioning.',
      badge: 'Positioning',
      features: ['Brand development', 'Market positioning', 'Corporate identity', 'Digital presence'],
      duration: '6-10 weeks'
    }
  ];

  const recruitmentServices = [
    {
      icon: Cog,
      title: 'Customized Hiring Solutions',
      description: 'Based on market rates and specific requirements.',
      badge: 'Custom',
      features: ['Market-rate analysis', 'Custom solutions', 'Flexible pricing', 'Tailored approach'],
      duration: 'Variable'
    },
    {
      icon: UserPlus,
      title: 'End-to-End Recruitment Services',
      description: 'From sourcing to onboarding.',
      badge: 'Complete',
      features: ['Full-cycle recruitment', 'Onboarding support', 'Background verification', 'Post-placement support'],
      duration: '4-12 weeks'
    },
    {
      icon: Settings,
      title: 'Flexible Partnership Models',
      description: 'To suit business needs.',
      badge: 'Flexible',
      features: ['Multiple engagement models', 'Scalable solutions', 'Performance-based pricing', 'Long-term partnerships'],
      duration: 'Ongoing'
    },
    {
      icon: Share2,
      title: 'Social Media & LinkedIn Post Optimization',
      description: 'Improve employer branding & visibility.',
      badge: 'Digital',
      features: ['Content strategy', 'LinkedIn optimization', 'Employer branding', 'Social media management'],
      duration: '3-6 months'
    }
  ];

  const features = [
    'Certified career counselors',
    'Personalized learning paths',
    'Industry-standard assessments',
    'Real-time progress tracking',
    '24/7 support system',
    'Comprehensive reporting',
    'Parent engagement tools',
    'Multi-language support'
  ];

  const testimonials = [
    {
      quote: "The career guidance program transformed how our students think about their futures. The engagement levels have never been higher.",
      author: "Dr. Sarah Johnson",
      role: "Principal, Greenwood High School",
      rating: 5
    },
    {
      quote: "Our graduates are now securing placements at top companies thanks to the comprehensive interview coaching and resume optimization.",
      author: "Prof. Michael Chen",
      role: "Placement Officer, Tech University",
      rating: 5
    },
    {
      quote: "The HR consulting services helped us streamline our recruitment process and improve our employer branding significantly.",
      author: "Ms. Rachel Thompson",
      role: "HR Director, TechCorp Solutions",
      rating: 5
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Initial Assessment',
      description: 'Comprehensive evaluation of student interests, aptitudes, and current academic standing.'
    },
    {
      step: '02',
      title: 'Personalized Planning',
      description: 'Custom career development roadmap tailored to each student\'s unique profile and goals.'
    },
    {
      step: '03',
      title: 'Active Implementation',
      description: 'Hands-on workshops, counseling sessions, and real-world exposure activities.'
    },
    {
      step: '04',
      title: 'Continuous Monitoring',
      description: 'Regular progress reviews and plan adjustments to ensure optimal outcomes.'
    }
  ];

  return (
    <section className="bg-white min-h-screen">
      {/* Hero Section - Full Screen */}
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-32 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, #1e40af 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-8">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                Educational Excellence
              </div>
              
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-gray-900 mb-8 tracking-tight leading-none">
                Services
                <br />
                {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                </span> */}
              </h1>
              
              <p className="text-2xl text-gray-600 mb-12 leading-relaxed max-w-2xl">
                Transform your institution with comprehensive career development programs that guide students toward successful futures through proven methodologies and expert guidance.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <button className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all duration-200 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl">
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-6 h-6" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-10 py-5 rounded-2xl font-bold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200">
                  Watch Demo
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-8 text-gray-500">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5" />
                  <span className="text-sm font-medium">Certified Programs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Target className="w-5 h-5" />
                  <span className="text-sm font-medium">95% Success Rate</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5" />
                  <span className="text-sm font-medium">500+ Schools</span>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center bg-gray-900 text-white px-6 py-3 rounded-xl text-lg font-bold">
                    FOR ALL INSTITUTIONS
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-black text-blue-600 mb-2">50,000+</div>
                  <div className="text-gray-600 font-medium">Students Successfully Guided</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-gray-900 mb-6">Our Proven Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to career development that ensures every student receives personalized guidance and achieves their full potential.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
                  <div className="text-6xl font-black text-blue-100 mb-4">{step.step}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-blue-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Schools Services Section */}
      <div className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-green-100 border border-green-200 rounded-full px-6 py-3 text-green-700 text-lg font-bold mb-8">
              FOR SCHOOLS
            </div>
            <h2 className="text-5xl font-black text-gray-900 mb-6">Early Career Development</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs designed to introduce young minds to career possibilities and build foundational skills for future success.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {schoolServices.map((service, index) => (
              <div 
                key={index}
                className="group bg-white border-2 border-gray-100 rounded-3xl p-10 hover:border-green-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-green-600 uppercase tracking-wider mb-2">
                        {service.badge}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-gray-500 mb-1">Duration</div>
                    <div className="text-sm font-bold text-green-600">{service.duration}</div>
                  </div>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="flex items-center text-green-600 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="font-semibold">Learn more</span>
                    <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                  <div className="text-sm text-gray-400">
                    Service #{index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Colleges Services Section */}
      <div className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-indigo-100 border border-indigo-200 rounded-full px-6 py-3 text-indigo-700 text-lg font-bold mb-8">
              FOR COLLEGES AND UNIVERSITIES
            </div>
            <h2 className="text-5xl font-black text-gray-900 mb-6">Professional Career Preparation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced career services designed to prepare college students for successful transitions into professional careers with industry-ready skills.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {collegeServices.map((service, index) => (
              <div 
                key={index}
                className="group bg-white border-2 border-gray-100 rounded-3xl p-10 hover:border-indigo-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-2">
                        {service.badge}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-gray-500 mb-1">Duration</div>
                    <div className="text-sm font-bold text-indigo-600">{service.duration}</div>
                  </div>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="flex items-center text-indigo-600 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="font-semibold">Learn more</span>
                    <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                  <div className="text-sm text-gray-400">
                    Service #{index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Other Services Section */}
      <div className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-slate-100 border border-slate-200 rounded-full px-6 py-3 text-slate-700 text-lg font-bold mb-8">
              OTHER SERVICES
            </div>
            <h2 className="text-5xl font-black text-gray-900 mb-6">HR & Business Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive business consulting and recruitment services designed to help organizations grow and optimize their human resources.
            </p>
          </div>

          {/* HR & Business Consulting Services */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">HR & Business Consulting Services</h3>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              {hrBusinessServices.map((service, index) => (
                <div 
                  key={index}
                  className="group bg-white border-2 border-gray-100 rounded-3xl p-10 hover:border-slate-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex items-center space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-gray-700 rounded-2xl flex items-center justify-center shadow-lg">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                          {service.badge}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-gray-500 mb-1">Duration</div>
                      <div className="text-sm font-bold text-slate-600">{service.duration}</div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-slate-500 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div className="flex items-center text-slate-600 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="font-semibold">Learn more</span>
                      <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                    <div className="text-sm text-gray-400">
                      Service #{index + 1}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recruitment Vendor Partnerships */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Recruitment Vendor Partnerships</h3>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              {recruitmentServices.map((service, index) => (
                <div 
                  key={index}
                  className="group bg-white border-2 border-gray-100 rounded-3xl p-10 hover:border-orange-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex items-center space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">
                          {service.badge}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-gray-500 mb-1">Duration</div>
                      <div className="text-sm font-bold text-orange-600">{service.duration}</div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div className="flex items-center text-orange-600 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="font-semibold">Learn more</span>
                      <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                    <div className="text-sm text-gray-400">
                      Service #{index + 1}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-white mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from educators and business leaders who have transformed their organizations with our comprehensive solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-3xl p-10 shadow-2xl">
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl text-gray-700 leading-relaxed mb-8 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-bold text-gray-900 text-lg">{testimonial.author}</div>
                  <div className="text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section - Full Width */}
      <div className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-6xl font-black text-white mb-8">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join hundreds of institutions and businesses already using our comprehensive solutions to achieve their goals. Start your transformation today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
            <button className="bg-white text-blue-600 px-12 py-6 rounded-2xl font-bold text-xl hover:bg-gray-50 transition-all duration-200 flex items-center space-x-3 shadow-2xl">
              <span>Get Started Today</span>
              <ArrowRight className="w-6 h-6" />
            </button>
            <button className="border-2 border-white text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white hover:text-blue-600 transition-all duration-200">
              Schedule a Demo
            </button>
          </div>

          {/* Final Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-16 border-t border-blue-500">
            <div>
              <div className="text-5xl font-black text-white mb-3">500+</div>
              <div className="text-blue-100 text-lg font-medium">Institutions Served</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-3">50K+</div>
              <div className="text-blue-100 text-lg font-medium">Students Guided</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-3">95%</div>
              <div className="text-blue-100 text-lg font-medium">Success Rate</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-3">24/7</div>
              <div className="text-blue-100 text-lg font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;