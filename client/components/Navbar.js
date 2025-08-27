// client/components/Navbar.js
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();

  const navLinks = [
    { text: "Services", link: "/#services" },
    { text: "Gallery", link: "/#gallery" },
    { text: "Resume Building", link: "/resume-building" },
    { text: "Interview Questions", link: "/interview-questions" },
    { text: "Contact", link: "/contact" },
  ];

  const authLinks = (
    <>
      <span className="text-dark-text hidden lg:block">Welcome, {user?.name}</span>
      {(user?.role === 'Admin' || user?.role === 'Super Admin') && (
        <Link href="/admin-dashboard" className="text-dark-text hover:text-accent transition-colors duration-300">
          Admin
        </Link>
      )}
      <Link href="/dashboard" className="text-dark-text hover:text-accent transition-colors duration-300">
        Dashboard
      </Link>
      <button onClick={logout} className="bg-red-500 text-light-text font-semibold px-5 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300">
        Logout
      </button>
    </>
  );

  const guestLinks = (
    <Link href="/login" className="bg-accent text-primary font-semibold px-5 py-2 rounded-lg hover:bg-sky-400 transition-colors duration-300">
      Sign In
    </Link>
  );

  return (
    <header className="bg-secondary/80 backdrop-blur-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Updated this Link component */}
        <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
          <Image src="/images/logo.jpg" alt="GIC Logo" width={40} height={40} />
          <span className="text-xl font-bold text-light-text hidden sm:inline">GetInterviewConfidence</span>
        </Link>

        {/* Desktop Menu - Adjusted responsive classes */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((item) => (
            <Link key={item.text} href={item.link} className="text-dark-text hover:text-accent transition-colors duration-300 whitespace-nowrap">
              {item.text}
            </Link>
          ))}
          {isAuthenticated ? authLinks : guestLinks}
        </div>

        {/* Mobile Menu Button - Changed from md:hidden to lg:hidden */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-light-text focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path></svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Changed from md:hidden to lg:hidden */}
      {isOpen && (
        <div className="lg:hidden px-6 pb-4 flex flex-col items-start space-y-4">
          {navLinks.map((item) => (
             <Link key={item.text} href={item.link} className="text-dark-text hover:text-accent transition-colors duration-300" onClick={() => setIsOpen(false)}>
              {item.text}
            </Link>
          ))}
          <div className="border-t border-slate-700 w-full pt-4 flex flex-col items-start space-y-4">
             {isAuthenticated ? (
                <>
                  <span className="text-dark-text">Welcome, {user?.name}</span>
                   {(user?.role === 'Admin' || user?.role === 'Super Admin') && (
                    <Link href="/admin-dashboard" className="text-dark-text hover:text-accent transition-colors duration-300" onClick={() => setIsOpen(false)}>Admin</Link>
                  )}
                  <Link href="/dashboard" className="text-dark-text hover:text-accent transition-colors duration-300" onClick={() => setIsOpen(false)}>Dashboard</Link>
                  <button onClick={() => { logout(); setIsOpen(false); }} className="bg-red-500 text-light-text font-semibold w-full text-center px-5 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300">Logout</button>
                </>
              ) : (
                <Link href="/login" className="bg-accent text-primary font-semibold w-full text-center px-5 py-2 rounded-lg hover:bg-sky-400 transition-colors duration-300" onClick={() => setIsOpen(false)}>Sign In</Link>
              )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;