// client/components/PrivateRoute.js
'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, loading, router]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-accent text-xl">Loading...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; 
  }

  if (user.role !== 'Admin' && user.role !== 'Super Admin') {
     return (
      <div className="flex flex-col justify-center items-center min-h-screen text-center">
        <h1 className="text-4xl font-bold text-red-500">Access Denied</h1>
        <p className="text-dark-text mt-4">You do not have permission to view this page.</p>
        <button onClick={() => router.push('/')} className="mt-6 bg-accent text-primary font-bold px-6 py-2 rounded-lg">
          Go to Homepage
        </button>
      </div>
    );
  }

  return children; 
};

export default PrivateRoute;