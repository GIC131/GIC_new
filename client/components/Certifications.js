// client/components/Certifications.js
import Image from 'next/image';

const certifications = [
    { name: 'ISO Certified', src: '/images/certifications/iso.jpg' },
    { name: 'MSME Registered', src: '/images/certifications/msme.jpg' },
    { name: 'Six Sigma Gold Belt', src: '/images/certifications/gold-belt.png' },
    { name: 'Six Sigma Yellow Belt', src: '/images/certifications/yellow-belt.png' },
    { name: 'Six Sigma Green Belt', src: '/images/certifications/green-belt.png' },
    { name: 'Six Sigma White Belt', src: '/images/certifications/white-belt.png' },
    { name: 'Six Sigma Black Belt', src: '/images/certifications/black-belt.png' },
   
];
const Certifications = () => {
    return (
        <section className="bg-secondary py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-center text-2xl font-bold text-dark-text mb-12">
                    Our Accreditations & Certifications
                </h2>
                {/* Updated container to use flex-wrap */}
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
                    {certifications.map(cert => (
                        <div key={cert.name} className="group">
                            {/* Increased container size to prevent clipping */}
                            <div className="relative h-28 w-44 grayscale hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110">
                                <Image
                                    src={cert.src}
                                    alt={cert.name}
                                    fill
                                    className="object-contain"
                                    sizes="150px"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Certifications;