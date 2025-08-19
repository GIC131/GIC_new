import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import Calender from './Calander';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const HeroSection = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Your pathway <br /> to interview <br /> 
            <span>confidence</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-md leading-relaxed">
            Professional resume writing, interview coaching, and recruitment solutions to help you stand out in today's competitive job market.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild size="lg" className="bg-black text-white hover:bg-black/90 rounded-xl h-14 text-base transition-all duration-300 shadow-lg hover:shadow-xl">
              <Link href="/sign" className="flex items-center">
                <FontAwesomeIcon icon={faGoogle} className="mr-2 w-5 h-5" />
                Sign up with Google
              </Link>
            </Button>
            
            <Button asChild size="lg" variant="outline" className="border-2 border-gray-300 hover:bg-[#e1e2e3] rounded-xl h-14 text-base font-medium transition-all duration-300">
              <Link href="/sign" className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2 w-5 h-5" />
                Sign up with Email
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <Calender className="ml-auto transform hover:scale-[1.02] transition-all duration-500" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 