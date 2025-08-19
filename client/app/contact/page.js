"use client";
import Navbar from "../../components/layout/Navbar";
import ContactForm from "../../components/sections/ContactForm";


export default function Contact() {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="relative bg-gradient-to-b from-gray-50 to-white pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              We'd love to hear from you
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Whether you have questions about our services, need assistance, or
              want to provide feedback, our team is here to help you succeed.
            </p>
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  );
}
