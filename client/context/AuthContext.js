// client/context/AuthContext.js
'use client';

import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        setAuthToken(token);
        try {
          const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/auth`);
          setUser(res.data);
          setIsAuthenticated(true);
        } catch (err) {
          localStorage.removeItem('token');
          setIsAuthenticated(false);
          setUser(null);
        }
      }
      setLoading(false);
    };
    loadUser();
  }, []);

  const login = async (email, password) => {
    const body = JSON.stringify({ email, password });
    const config = { headers: { 'Content-Type': 'application/json' } };

    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, body, config);
      localStorage.setItem('token', res.data.token);
      setAuthToken(res.data.token);

      const userRes = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/auth`);
      setUser(userRes.data);
      setIsAuthenticated(true);

      if (userRes.data.role === 'Admin' || userRes.data.role === 'Super Admin') {
        router.push('/admin-dashboard');
      } else {
        router.push('/dashboard');
      }
    } catch (err) {
      // THIS IS THE CORRECTED PART
      const errorMessage = err.response?.data?.msg || 'Login failed. Is the server running?';
      console.error(err);
      throw new Error(errorMessage);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuthToken(null);
    setUser(null);
    setIsAuthenticated(false);
    router.push('/login');
  };

  const authContextValue = {
    user,
    isAuthenticated,
    loading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};