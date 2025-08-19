"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faChevronRight, faSearch, faTimes, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";
import { useAuth } from "../../hooks/useAuth";

const NavLink = ({ href, text }) => {
  return (
    <Link href={href} className="text-sm font-medium relative group">
      {text}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-black to-gray-600 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
};

const SearchModal = ({ isOpen, onClose }) => {
  const inputRef = useRef(null);
  
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/75 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white/95 backdrop-blur-sm rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] overflow-hidden animate-in zoom-in-95 duration-150 border border-white/20">
        <div className="relative flex items-center p-2">
          <div className="flex items-center justify-center w-11 h-11 ml-1">
            <FontAwesomeIcon icon={faSearch} className="text-gray-500 w-4 h-4" />
          </div>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search Services"
            className="flex-1 p-3 text-base border-none outline-none bg-transparent"
            autoFocus
          />
          <button 
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center text-gray-500 hover:text-black mr-2 transition-colors duration-200 rounded-full hover:bg-gray-100"
          >
            <FontAwesomeIcon icon={faTimes} className="w-4 h-4" />
          </button>
        </div>
        <div className="px-4 py-2 border-t border-gray-100 text-xs text-gray-500 flex justify-between items-center">
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { isAuthenticated } = useAuth();
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false);
      }
      
      // Command+K or Ctrl+K to open search
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    // On mount, check system or saved preference
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };
  
  return (
    <>
      <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/90 border-b border-gray-100 py-3 px-0 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] dark:bg-[#07112a] dark:border-[#132040] dark:shadow-[0_4px_20px_-10px_rgba(7,17,42,0.7)]">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 lg:px-12">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-3">
              <img
                src="/images/logo/image.png"
                alt="Website Logo"
                className="w-10 h-10 rounded-2xl object-cover shadow-md"
              />
              <div className="flex flex-col">
                <span className="text-base font-bold tracking-tight">
                  GetInterviewConfidence
                </span>
                <div className="text-xs inline-flex items-center ml-1 mt-0.5">
                  <span className="inline-block w-1 h-1 bg-black rounded-full mr-1 animate-pulse"></span>
                  Beta
                </div>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-10 ml-12">
            <NavLink href="/" text="Home" />
            <NavLink href="/about" text="About Us" />
            <NavLink href="/services" text="Services" />
            <NavLink href="/gallery" text="Gallery" />
            <NavLink href="/contact" text="Contact" />
          </div>

          <div className="flex items-center gap-4">
            <div className="h-7 w-px bg-gradient-to-b from-gray-200 to-gray-100 hidden md:block mx-0.5"></div>
            <button
              onClick={toggleDarkMode}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-[#223366] text-gray-700 dark:text-blue-200 hover:bg-gray-200 dark:hover:bg-[#1a2a4a] transition-colors duration-200 mr-2"
              aria-label="Toggle dark mode"
            >
              <FontAwesomeIcon icon={isDark ? faSun : faMoon} className="w-5 h-5" />
            </button>
            
            <Link
              href="/sign"
              className="text-sm font-medium text-gray-700 hover:text-black hidden md:inline-flex items-center transition-all duration-200 hover:translate-y-[-1px]"
            >
              <div className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 mr-2">
                <FontAwesomeIcon icon={faUser} className="w-3.5 h-3.5 text-gray-700" />
              </div>
              <span>Sign In</span>
            </Link>
            
          </div>
        </div>
      </nav>
      
    </>
  );
};

export default Navbar;
