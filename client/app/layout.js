// client/app/layout.js
'use client'; 

import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext";
import { usePathname } from 'next/navigation'; 
import Head from 'next/head'; // Import Head

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith('/admin-dashboard');
  const canonicalUrl = `https://www.getinterviewconfidence.com${pathname}`;

  return (
    <html lang="en" className="!scroll-smooth">
      <Head>
        <title>Career Counselling & Job Placement Services | GetInterviewConfidence</title>
        <meta name="description" content="Expert career counselling, interview preparation, and job placement services in Kolkata. Achieve a 95% success rate with our proven methodologies. Get your dream job now!" />
        <link rel="canonical" href={canonicalUrl} key="canonical" />
      </Head>
      <body>
        <AuthProvider>
          {!isAdminRoute && <Navbar />} 
          {children}
          {!isAdminRoute && <Footer />} 
        </AuthProvider>
      </body>
    </html>
  );
}