// client/app/layout.js
'use client'; 

import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { usePathname } from 'next/navigation'; 
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// We don't need Inter font import for this fix

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isPublicRoute = !pathname.startsWith('/admin-dashboard');

  return (
    <html lang="en" className="!scroll-smooth">
      <body>
        <AuthProvider>
          {isPublicRoute && <Navbar />} 
          <main>
            {children}
          </main>
          {isPublicRoute && <Footer />} 
        </AuthProvider>
      </body>
    </html>
  );
}