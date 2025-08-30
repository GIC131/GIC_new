// client/components/AppWrapper.js
'use client';

import { usePathname } from 'next/navigation';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AppWrapper = ({ children }) => {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith('/admin-dashboard');

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <main>
        {children}
      </main>
      {!isAdminRoute && <Footer />}
    </>
  );
};

export default AppWrapper;