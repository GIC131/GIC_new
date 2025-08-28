// client/components/FounderSection.js
import Image from 'next/image';

const Metric = ({ value, label }) => (
  <div className="text-center">
    <p className="text-4xl font-bold text-accent">{value}</p>
    <p className="text-dark-text mt-1">{label}</p>
  </div>
);

const FounderSection = () => {
  return (
    <section id="founder" className="bg-secondary py-20 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Image */}
<div className="flex justify-center md:justify-end">
  <div className="relative w-96 h-96 md:w-[30rem] md:h-[30rem] overflow-hidden border-4 border-accent shadow-2xl">
    <Image
      src="/images/founder.png"
      alt="Ayushe Mandal, Founder & CEO"
      fill
      className="object-cover"
      sizes="(max-width: 768px) 80vw, 40vw"
    />
  </div>
</div>


          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-light-text">
              Meet the Founder
            </h2>
            <h3 className="text-2xl font-bold text-accent mt-2">
              Ayushe Mandal
            </h3>
            <p className="text-lg font-semibold text-dark-text mb-4">
              Founder & CEO
            </p>
            <p className="text-light-text max-w-lg mb-8">
              With over 5 years of experience in career development and recruitment, Ayushe has dedicated her career to helping professionals unlock their potential. Her proven methodologies have helped hundreds of individuals secure their dream jobs at top companies across various industries.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 bg-primary p-6 rounded-lg">
              <Metric value="500+" label="Clients Mentored" />
              <Metric value="95%" label="Success Rate" />
              <Metric value="50+" label="Partner Companies" />
              <Metric value="4.9" label="Client Rating" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;