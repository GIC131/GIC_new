// client/app/page.js
import Hero from "@/components/Hero";
import OfferBanner from "@/components/OfferBanner";
import Features from "@/components/Features";
import FounderSection from "@/components/Foundersection";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import ContactSection from "@/components/ContactSection"; // <-- Import

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
      <ContactSection /> {/* <-- Add the new section here */}
    </div>
  );
}