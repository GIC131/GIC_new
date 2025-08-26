// client/components/ContactSection.js
'use client'; 

import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios';

// A small component for the contact info items
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
    e.preventDefault();
    setStatus('Sending...');
    try {
      // ** PASTE YOUR FORMSPREE URL HERE **
      await axios.post('https://formspree.io/f/xgvlwbbg', formData);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
    }
  };

  // Social and Map Links
  const googleMapsLink = "https://maps.app.goo.gl/3wyJQRK2WiaRrbSS6";
  const instagramLink = "https://www.instagram.com/get.interview.confidence/";
  const linkedinLink = "https://www.linkedin.com/company/get-inteview-confidence/";

  return (
    <section id="contact" className="bg-primary py-20 sm:py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-light-text">We'd love to hear from you</h2>
          <p className="mt-4 text-lg text-dark-text">Whether you have questions, need assistance, or want to provide feedback, our team is here to help.</p>
        </div>

        {/* Content Grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side: Contact Details */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-light-text">Get in Touch</h3>
            <p className="text-dark-text">
              Have a question or need assistance? We're here to help you with all your interview preparation needs.
            </p>
            <div className="space-y-6">
              <InfoItem 
                href="tel:+919674168149"
                title="Phone" 
                value="9674168149" 
                icon={<svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>} 
              />
              <InfoItem 
                href="mailto:hr@getinteviewconfidence.com"
                title="Email" 
                value="hr@getinteviewconfidence.com" 
                icon={<svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>}
              />
               <InfoItem 
                href={googleMapsLink}
                title="Location" 
                value="Kolkata, West Bengal, India" 
                icon={<svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>}
              />
            </div>
            {/* Social Media Links */}
            <div className="flex space-x-4 pt-4">
              <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="text-dark-text hover:text-accent transition-colors" aria-label="Follow us on Instagram">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.012-3.584.07-4.85c.148-3.225 1.664 4.771 4.919-4.919 1.266-.057 1.644-.069 4.85-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98C23.986 15.667 24 15.259 24 12s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg>
              </a>
               <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="text-dark-text hover:text-accent transition-colors" aria-label="Follow us on LinkedIn">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
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
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
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