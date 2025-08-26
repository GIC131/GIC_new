// client/app/page.js
import Hero from "@/components/Hero";
import OfferBanner from "@/components/OfferBanner";
import Features from "@/components/Features";
import FounderSection from "@/components/Foundersection";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import ContactSection from "@/components/ContactSection";

// The metadata for the homepage goes here
export const metadata = {
  title: 'Career Counselling & Job Placement Services | GetInterviewConfidence',
  description: 'Expert career counselling, interview preparation, and job placement services in Kolkata. Achieve a 95% success rate with our proven methodologies. Get your dream job now!',
};

export default function Home() {
  return (
    <div>
      <Hero />
      <OfferBanner />
      <Features />
      <FounderSection />
      <Services />
      <Testimonials />
      <Gallery />
      <ContactSection />
    </div>
  );
}