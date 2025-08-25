// client/components/Services.js

// A reusable card component for individual services
const ServiceCard = ({ category, title, duration, details }) => (
  <div className="bg-secondary p-6 rounded-lg border border-slate-700 h-full flex flex-col">
    <div className="flex-grow">
      <span className="text-accent font-semibold uppercase text-sm">{category}</span>
      <h4 className="text-xl font-bold text-light-text mt-2 mb-3">{title}</h4>
      <ul className="space-y-2 list-disc list-inside text-dark-text">
        {details.map((detail, i) => <li key={i}>{detail}</li>)}
      </ul>
    </div>
    <p className="text-sm text-slate-500 mt-4 flex-shrink-0">Duration: {duration}</p>
  </div>
);

// Data for the services, taken from your JSON
const servicesData = {
  forSchools: {
    title: "FOR SCHOOLS",
    heading: "Early Career Development",
    description: "Comprehensive programs designed to introduce young minds to career possibilities and build foundational skills for future success.",
    serviceList: [
      { category: 'Foundation', title: 'Early Career Awareness', duration: '6-8 weeks', details: ['Age-appropriate career exploration', 'Interactive learning modules'] },
      { category: 'Engagement', title: 'Interactive Workshops', duration: '4-6 weeks', details: ['Hands-on activities', 'Industry simulations'] },
      { category: 'Assessment', title: 'Aptitude & Psychometric Assessments', duration: '2-3 weeks', details: ['Comprehensive testing', 'Detailed reports'] },
      { category: 'Personal', title: 'One-on-One Counseling', duration: 'Ongoing', details: ['Individual sessions', 'Goal setting'] },
    ]
  },
  forColleges: {
    title: "FOR COLLEGES AND UNIVERSITIES",
    heading: "Professional Career Preparation",
    description: "Advanced career services designed to prepare college students for successful transitions into professional careers with industry-ready skills.",
    serviceList: [
      { category: 'Professional', title: 'Career Readiness & Interview Coaching', duration: '8-10 weeks', details: ['Mock interview sessions', 'Communication enhancement'] },
      { category: 'Optimization', title: 'Professional Resume Writing Support', duration: '2-3 weeks', details: ['CV personalization', 'LinkedIn optimization'] },
      { category: 'Opportunities', title: 'Internship & Job Opportunities', duration: 'Ongoing', details: ['Curated job listings', 'Application support'] },
      { category: 'Certification', title: 'Certification Programs', duration: '2 months', details: ['Guided coaching', 'Placement training'] },
    ]
  },
};

const Services = () => {
  return (
    <section id="services" className="bg-primary py-20 sm:py-24">
      <div className="container mx-auto px-6">
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-light-text">
            Tailored Solutions for Growth
          </h2>
          <p className="mt-4 text-lg text-dark-text">
            From foundational career awareness for school students to professional preparation for university graduates, our services cover the entire educational journey.
          </p>
        </div>

        {/* Services for Schools */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-accent mb-1 uppercase tracking-wider">{servicesData.forSchools.title}</h3>
          <p className="text-lg text-dark-text mb-8">{servicesData.forSchools.description}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesData.forSchools.serviceList.map((service, i) => (
              <ServiceCard key={i} {...service} />
            ))}
          </div>
        </div>

        {/* Services for Colleges */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-accent mb-1 uppercase tracking-wider">{servicesData.forColleges.title}</h3>
          <p className="text-lg text-dark-text mb-8">{servicesData.forColleges.description}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesData.forColleges.serviceList.map((service, i) => (
              <ServiceCard key={i} {...service} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;