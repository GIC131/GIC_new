// client/components/AuthRedirect.js
'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const AuthRedirect = ({ children }) => {
  const { isAuthenticated, user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && isAuthenticated) {
      // If the user is loaded and authenticated, redirect them
      if (user?.role === 'Admin' || user?.role === 'Super Admin') {
        router.push('/admin-dashboard');
      } else {
        router.push('/dashboard');
      }
    }
  }, [isAuthenticated, user, loading, router]);

  // While loading, or if the user is not authenticated, show the page content
  if (loading || !isAuthenticated) {
    return <>{children}</>;
  }

  // Otherwise, show a loading message while redirecting
  return (
    <div className="flex justify-center items-center min-h-screen">
      <p className="text-accent text-xl">Redirecting...</p>
    </div>
  );
};

export default AuthRedirect;