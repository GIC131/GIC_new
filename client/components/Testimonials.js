// client/components/Testimonials.js

const testimonialsData = [
  {
    quote: "The career guidance program transformed me think about my future. The engagement levels have never been higher.",
    author: "Mr. Amit Kumar",
    title: "Sr Developer, InfroHigh"
  },
  {
    quote: "Our graduates are now securing placements at top companies thanks to the comprehensive interview coaching and resume optimization.",
    author: "Mr. Rakesh Sharma",
    title: "Placement Officer, VIT VELLORE"
  },
  {
    quote: "The HR consulting services helped us streamline my recruitment process and improve my branding significantly.",
    author: "Ms. Divya Sukheja",
    title: "SDE, TechCorp Solutions"
  }
];

const TestimonialCard = ({ quote, author, title }) => (
  <div className="bg-secondary p-8 rounded-lg border border-slate-700 flex flex-col h-full">
    <svg className="w-10 h-10 text-accent mb-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
    <p className="text-light-text flex-grow">"{quote}"</p>
    <div className="mt-6">
      <p className="font-bold text-accent">{author}</p>
      <p className="text-dark-text text-sm">{title}</p>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-primary py-20 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-light-text">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-dark-text">
            Hear from educators and business leaders who have transformed their organizations with our comprehensive solutions.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, i) => (
            <TestimonialCard key={i} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;