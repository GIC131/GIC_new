// client/components/Footer.js
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-slate-700 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Founder Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
             <Image src="/images/founder1.png" alt="Founder" width={100} height={100} className="rounded-full mb-4 border-2 border-accent" />
             <h3 className="text-xl font-bold text-light-text">Ayushe Mandal, Founder</h3>
             <p className="text-dark-text mt-2 max-w-sm">
               Empowering professionals to achieve their career goals through expert guidance and proven strategies.
             </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-light-text uppercase tracking-wider">Quick Links</h3>
            <div className="mt-4 flex flex-col space-y-2">
              <Link href="#about" className="text-dark-text hover:text-accent transition-colors">About Us</Link>
              <Link href="#services" className="text-dark-text hover:text-accent transition-colors">Services</Link>
              <Link href="/resume-building" className="text-dark-text hover:text-accent transition-colors">Resume Building</Link>
              <Link href="/interview-questions" className="text-dark-text hover:text-accent transition-colors">Interview Questions</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-light-text uppercase tracking-wider">Contact Us</h3>
            <div className="mt-4 flex flex-col space-y-2">
              <p className="text-dark-text">Email: <a href="mailto:hr@getinteviewconfidence.com" className="hover:text-accent">hr@getinteviewconfidence.com</a></p>
              <p className="text-dark-text">Phone: <a href="tel:+919674168149" className="hover:text-accent">+91 96741 68149</a></p>
              <a href="https://forms.gle/QrwQcPD81Y1n9VVw8" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 bg-accent text-primary font-semibold px-4 py-2 rounded-lg hover:bg-sky-400 transition-colors duration-300 w-fit">
                Contact HR
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-dark-text border-t border-slate-700 mt-12 pt-6">
          <p>© {new Date().getFullYear()} Get Interview Confidence. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;