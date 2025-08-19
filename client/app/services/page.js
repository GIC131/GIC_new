"use client";
import Navbar from "../../components/layout/Navbar";
import ServicesSection from "../../components/sections/ServicesSection";
import Footer from "../../components/layout/Footer";

export default function Services() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}
