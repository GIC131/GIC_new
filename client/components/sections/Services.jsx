import { Briefcase, Target, FileText, Users, Building, GraduationCap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Briefcase className="h-12 w-12 text-blue-600" />,
      title: "Job & Internship Opportunities",
      description: "Access exclusive job openings and internships from top companies. Get matched with opportunities that align with your skills and career goals."
    },
    {
      icon: <Target className="h-12 w-12 text-blue-600" />,
      title: "Interview Preparation",
      description: "Master your interviews with expert-led coaching, mock sessions, and proven strategies for technical and behavioral questions."
    },
    {
      icon: <FileText className="h-12 w-12 text-blue-600" />,
      title: "Resume & LinkedIn Optimization",
      description: "Stand out with professionally crafted resumes and LinkedIn profiles that attract recruiters and showcase your best self."
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Career Counseling",
      description: "Get personalized guidance on career paths, skill development, and strategic decision-making from industry experts."
    },
    {
      icon: <Building className="h-12 w-12 text-blue-600" />,
      title: "Industry Connections",
      description: "Connect with hiring managers and industry professionals through our exclusive recruitment drives and networking events."
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-blue-600" />,
      title: "Skill Development",
      description: "Enhance your capabilities with free training sessions, workshops, and hands-on project experiences."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Career Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From resume building to interview mastery, we provide everything you need to succeed in your career journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;