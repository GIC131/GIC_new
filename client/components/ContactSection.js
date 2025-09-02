// client/components/ContactSection.js
'use client'; 

import { useState } from 'react';
import axios from 'axios';

const InfoItem = ({ icon, title, value, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group">
    <div className="bg-secondary p-3 rounded-full group-hover:bg-accent transition-colors duration-300">
      {icon}
    </div>
    <div>
      <p className="font-bold text-light-text">{title}</p>
      <p className="text-dark-text group-hover:text-accent transition-colors duration-300">{value}</p>
    </div>
  </a>
);

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // <-- THIS LINE WAS MISSING
    setStatus('Sending...');
    try {
      // ** PASTE YOUR FORMSPREE URL HERE **
      await axios.post('https://formspree.io/f/your_unique_id', formData);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
    }
  };

  // Social and Map Links (ensure these are correct)
  const googleMapsLink = "https://maps.app.goo.gl/3wyJQRK2WiaRrbSS6";
  const instagramLink = "https://www.instagram.com/get.interview.confidence/";
  const linkedinLink = "https://www.linkedin.com/company/get-inteview-confidence/";

  return (
    <section id="contact" className="bg-primary py-20 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-light-text">We'd love to hear from you</h2>
          <p className="mt-4 text-lg text-dark-text">Whether you have questions, need assistance, or want to provide feedback, our team is here to help.</p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side: Contact Details */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-light-text">Get in Touch</h3>
            <p className="text-dark-text">
              Have a question or need assistance? We're here to help you with all your interview preparation needs.
            </p>
            <div className="space-y-6">
              {/* InfoItem components */}
            </div>
            <div className="flex space-x-4 pt-4">
              {/* Social Media Links */}
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-secondary p-8 rounded-lg border border-slate-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark-text">Your Name</label>
                  <input type="text" id="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" className="mt-1 w-full bg-primary border border-slate-600 rounded-md py-2 px-3 text-light-text focus:outline-none focus:ring-accent focus:border-accent" />
                </div>
                 <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-text">Your Email</label>
                  <input type="email" id="email" value={formData.email} onChange={handleChange} required placeholder="example@email.com" className="mt-1 w-full bg-primary border border-slate-600 rounded-md py-2 px-3 text-light-text focus:outline-none focus:ring-accent focus:border-accent" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-dark-text">Subject</label>
                <input type="text" id="subject" value={formData.subject} onChange={handleChange} required placeholder="Interview Preparation Inquiry" className="mt-1 w-full bg-primary border border-slate-600 rounded-md py-2 px-3 text-light-text focus:outline-none focus:ring-accent focus:border-accent" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-text">Your Message</label>
                <textarea id="message" rows="5" value={formData.message} onChange={handleChange} required placeholder="Tell us how we can help you..." className="mt-1 w-full bg-primary border border-slate-600 rounded-md py-2 px-3 text-light-text focus:outline-none focus:ring-accent focus:border-accent"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-accent text-primary font-bold py-3 px-4 rounded-lg hover:bg-sky-400 transition-colors duration-300 flex items-center justify-center space-x-2">
                  <span>{status ? status : 'Send Message'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;