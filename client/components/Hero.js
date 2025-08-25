// client/components/Hero.js
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="bg-primary text-light-text">
      <div className="container mx-auto px-6 py-20 md:py-28 flex flex-col md:flex-row items-center">
        {/* Left Side (Text Content) */}
        <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <span className="text-accent font-semibold uppercase tracking-wider">
            Educational Excellence Services
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-light-text mt-4 mb-6 leading-tight animate-fade-in-down">
            Unlock Your Career Potential
          </h1>
          <p className="text-lg text-dark-text max-w-xl mx-auto md:mx-0 mb-8">
            Transform your future with comprehensive career development programs that guide you toward success through proven methodologies and expert guidance.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <Link href="#services" className="bg-accent text-primary font-bold px-8 py-3 rounded-lg hover:bg-sky-400 transition-transform duration-300 hover:scale-105">
              Start Your Journey
            </Link>
            <Link href="#demo" className="bg-secondary text-light-text font-bold px-8 py-3 rounded-lg hover:bg-slate-600 transition-colors duration-300">
              Watch Demo
            </Link>
          </div>
        </div>

        {/* Right Side (Image/Graphic) */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
             <Image 
               src="/images/gallery-short-description-25.jpg" // Make sure you have an image with this name
               alt="Career Development Graphic" 
               fill
               className="object-contain"
               priority={true} // Prioritize loading this image for better SEO (LCP)
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;