// client/app/page.js
import Hero from "@/components/Hero";
import Certifications from "@/components/Certifications";
import OfferBanner from "@/components/OfferBanner";
import Features from "@/components/Features";
import FounderSection from "@/components/Foundersection";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <Certifications />
      <OfferBanner />
      <Features />
      <FounderSection />
      <Services />
      <Testimonials />
      <Gallery
        category="Event"
        title="Event Gallery"
        description="Highlights and moments from our events."
      />
      <Gallery
        category="Career"
        title="Career Gallery"
        description="Snapshots from our career programs and achievements."
      />
      <ContactSection />
    </div>
  );
}