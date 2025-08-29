// client/components/Features.js

const FeatureItem = ({ text }) => (
  <li className="flex items-center space-x-3">
    <div className="flex-shrink-0">
      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </div>
    <span className="text-lg text-dark-text">{text}</span>
  </li>
);

const Features = () => {
  const features = [
    "Certified career counselors providing expert guidance",
    "Personalized learning paths for individual success",
    "Industry-standard psychometric and aptitude assessments",
    "Real-time progress tracking for students and institutions",
  ];

  return (
    <section id="about" className="bg-primary py-20 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Statistic */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-light-text mb-4">
              Empowering Educational Institutions
            </h2>
            <p className="text-lg text-dark-text mb-8 max-w-lg">
              We partner with schools and colleges to provide scalable, effective career development solutions that prepare students for the competitive job market.
            </p>
            <div className="bg-secondary p-8 rounded-lg inline-block">
              <p className="text-5xl md:text-6xl font-bold text-accent">5000+</p>
              <p className="text-xl text-light-text mt-2">Students Successfully Guided</p>
            </div>
          </div>

          {/* Right Side - Features List */}
          <div className="bg-secondary p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-light-text mb-6">Our Core Methodologies</h3>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <FeatureItem key={index} text={feature} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;