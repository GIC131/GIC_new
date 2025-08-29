// client/components/Navbar.js
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { useAuth } from '@/context/AuthContext';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const dropdownRef = useRef(null);

  const navLinks = [
    { text: "Services", link: "/#services" },
    { text: "Event Gallery", link: "/event-gallery" },
    { text: "Career's Gallery", link: "/career-gallery" },
    { text: "Resume Building", link: "/resume-building" },
    { text: "Interview Questions", link: "/interview-questions" },
    { text: "Contact", link: "/contact" },
  ];

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);


  const guestLinks = (
    <Link href="/login" className="bg-accent text-primary font-semibold px-5 py-2 rounded-lg hover:bg-sky-400 transition-colors duration-300">
      Sign In
    </Link>
  );

  return (
    <header className="bg-secondary/80 backdrop-blur-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
          <Image src="/images/logo.jpg" alt="GIC Logo" width={40} height={40} className="rounded-full" />
          <span className="text-xl font-bold text-light-text hidden sm:inline">GetInterviewConfidence</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((item) => (
            <Link key={item.text} href={item.link} className="text-dark-text hover:text-accent transition-colors duration-300 whitespace-nowrap">
              {item.text}
            </Link>
          ))}
          <div className="pl-4">
            {isAuthenticated ? (
              <div className="relative" ref={dropdownRef}>
                {/* Dropdown Trigger */}
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center space-x-2 cursor-pointer">
                  <span className="text-dark-text">Welcome, {user?.name}</span>
                  <svg className={`w-4 h-4 text-dark-text transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-secondary rounded-md shadow-lg py-2 border border-slate-700">
                    {/* --- THIS IS THE CORRECTED LOGIC --- */}
                    {(user?.role === 'Admin' || user?.role === 'Super Admin') ? (
                      <Link href="/admin-dashboard" onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2 text-sm text-dark-text hover:bg-slate-700 hover:text-accent">
                        Admin Dashboard
                      </Link>
                    ) : (
                      <Link href="/dashboard" onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2 text-sm text-dark-text hover:bg-slate-700 hover:text-accent">
                        Dashboard
                      </Link>
                    )}
                    <button onClick={() => { logout(); setIsDropdownOpen(false); }} className="block w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-slate-700">Logout</button>
                  </div>
                )}
              </div>
            ) : (
              guestLinks
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-light-text focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path></svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden px-6 pb-4 flex flex-col items-start space-y-4">
          {navLinks.map((item) => (
             <Link key={item.text} href={item.link} className="text-dark-text hover:text-accent" onClick={() => setIsMobileMenuOpen(false)}>
              {item.text}
            </Link>
          ))}
          <div className="border-t border-slate-700 w-full pt-4 flex flex-col items-start space-y-4">
             {isAuthenticated ? (
                <>
                  <span className="text-dark-text">Welcome, {user?.name}</span>
                  {/* --- THIS IS THE CORRECTED LOGIC FOR MOBILE --- */}
                  {(user?.role === 'Admin' || user?.role === 'Super Admin') ? (
                    <Link href="/admin-dashboard" className="text-dark-text hover:text-accent" onClick={() => setIsMobileMenuOpen(false)}>
                      Admin Dashboard
                    </Link>
                  ) : (
                    <Link href="/dashboard" className="text-dark-text hover:text-accent" onClick={() => setIsMobileMenuOpen(false)}>
                      Dashboard
                    </Link>
                  )}
                  <button onClick={() => { logout(); setIsMobileMenuOpen(false); }} className="bg-red-500 text-light-text font-semibold w-full text-center px-5 py-2 rounded-lg">Logout</button>
                </>
              ) : (
                <Link href="/login" className="bg-accent text-primary font-semibold w-full text-center px-5 py-2 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>Sign In</Link>
              )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;