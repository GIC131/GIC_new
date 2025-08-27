// client/components/Certifications.js
import Image from 'next/image';

const certifications = [
    { name: 'ISO Certified', src: '/images/certifications/iso.jpg' },
    { name: 'MSME Registered', src: '/images/certifications/msme.jpg' },
    { name: 'Six Sigma Gold Belt', src: '/images/certifications/gold-belt.png' },
    { name: 'Six Sigma Yellow Belt', src: '/images/certifications/yellow-belt.png' },
    { name: 'Six Sigma White Belt', src: '/images/certifications/white-belt.png' },
    { name: 'Six Sigma Green Belt', src: '/images/certifications/green-belt.png' },
    { name: 'Six Sigma Black Belt', src: '/images/certifications/black-belt.png' }
];

const Certifications = () => {
    return (
        <section className="bg-secondary py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-center text-2xl font-bold text-dark-text mb-8">
                    Our Accreditations & Certifications
                </h2>
                <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
                    {certifications.map(cert => (
                        <div key={cert.name} className="flex flex-col items-center">
                            <div className="relative h-40 w-40 grayscale hover:grayscale-0 transition-all duration-300">
                                <Image
                                    src={cert.src}
                                    alt={cert.name}
                                    fill
                                    className="object-contain"
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