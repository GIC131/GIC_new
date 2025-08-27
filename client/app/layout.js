// client/app/layout.js
'use client'; 

import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext";
import { usePathname } from 'next/navigation'; 
import Head from 'next/head';
import Script from 'next/script';

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
        {/* --- GTM <noscript> Snippet --- */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-WXFGK4BF"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        {/* --- GTM <script> Snippet (Moved Here) --- */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WXFGK4BF'); // Replace with your GTM ID
          `}
        </Script>

        <AuthProvider>
          {!isAdminRoute && <Navbar />} 
          {children}
          {!isAdminRoute && <Footer />} 
        </AuthProvider>
      </body>
    </html>
  );
}