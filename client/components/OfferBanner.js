// client/components/OfferBanner.js
'use client'; // <-- Important: makes the component interactive

import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext'; // <-- Import the useAuth hook
import { useRouter } from 'next/navigation';

const OfferBanner = () => {
  const { isAuthenticated } = useAuth(); // <-- Get the user's login status
  const router = useRouter();

  // **IMPORTANT**: Replace this with your actual Google Form link
  const googleFormLink = "https://docs.google.com/forms/your-form-id-here";

  const handleButtonClick = () => {
    if (isAuthenticated) {
      // If the user is signed in, open the Google Form in a new tab
      window.open(googleFormLink, '_blank');
    } else {
      // If the user is not signed in, go to the sign-in page
      router.push('/login');
    }
  };

  return (
    <section className="bg-accent py-12">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Left Side: Images */}
        <div className="hidden sm:flex space-x-4 mr-8">
          {/* First Image */}
          <div className="relative w-56 h-56 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/offer-banner.jpg" // <-- Replace with your first image
              alt="Special Offer 1"
              fill
              className="object-cover"
            />
          </div>
          {/* Second Image */}
          <div className="relative w-56 h-56 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/gallery-short-description-35.jpg" // <-- Replace with your second image
              alt="Special Offer 2"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Side: Text and Button */}
        <div className="text-center sm:text-left flex-grow">
          <h2 className="text-2xl font-bold text-primary mb-2">Unlock Your Full Potential</h2>
          <p className="text-primary text-lg mb-4">Get access to all courses, resources, and personalized support.</p>
          <button
            onClick={handleButtonClick}
            className="bg-primary text-accent font-bold py-3 px-6 rounded-full hover:bg-sky-100 transition-colors duration-300"
          >
            Unlock Everything at ₹99
          </button>
        </div>
      </div>
    </section>
  );
};

export default OfferBanner;