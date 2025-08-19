"use client";
import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import Services from "../components/sections/Services";
import Vision from "../components/sections/Vision";
import Goals from "../components/sections/Goals";
import About from "../components/sections/AboutF";
import Testimonials from "../components/sections/Testimonials";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white dark:from-[#030712] dark:via-[#030712] dark:to-[#030712] text-gray-800 dark:text-gray-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[89vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-[#101624] dark:via-[#030712] dark:to-[#101624] border-b border-blue-100 dark:border-[#101624] mt-0">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/videos/cover_vid.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-blue-900/40 z-10" />
        <div className="relative z-20 w-full flex flex-col items-center justify-center text-center py-36 md:py-52 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white leading-tight drop-shadow-lg">Get Interview Confidence</h1>
          <p className="text-lg md:text-2xl text-gray-100 mb-8 drop-shadow">Build confidence with expert tips, AI mock interviews, and real success stories.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/sign" className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center shadow-2xl backdrop-blur-sm">
              Get Started Today
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link href="/services" className="border-2 border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm">
              View Our Services
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
        
      </section>

    <Services />
    <Vision />
    <Goals />
    <About />
    <Testimonials />
    <Contact />
    <Footer />

    </div>
  );
}
