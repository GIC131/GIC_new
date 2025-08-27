// client/components/Hero.js
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-light-text overflow-hidden">
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-fallback.jpg" // Fallback image
          className="w-full h-full object-cover"
        >
          <source src="/hero-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-light-text mt-4 mb-6 leading-tight animate-fade-in-down">
          Job Placement & Career Counselling in Kolkata
        </h1>
        <p className="text-lg text-dark-text max-w-2xl mx-auto mb-8">
          Transform your future with our comprehensive career development programs. We guide students and job seekers to success with proven methodologies and expert guidance.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="#services" className="bg-accent text-primary font-bold px-8 py-3 rounded-lg hover:bg-sky-400 transition-transform duration-300 hover:scale-105">
            Explore Our Services
          </Link>
          <Link href="#founder" className="bg-secondary text-light-text font-bold px-8 py-3 rounded-lg hover:bg-slate-600 transition-colors duration-300">
            Meet The Founder
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;