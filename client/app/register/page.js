// client/app/register/page.js
'use client';

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { name, email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (password.length < 6) {
        setError('Password must be at least 6 characters');
        setLoading(false);
        return;
    }

    try {
      const newUser = { name, email, password };
      const config = { headers: { 'Content-Type': 'application/json' } };
      const body = JSON.stringify(newUser);
      
      await axios.post('http://localhost:5000/api/auth/register', body, config);
      
      alert('Registration successful! Please log in.');
      router.push('/login');
    } catch (err) {
      setError(err.response?.data?.msg || 'An error occurred during registration.');
      console.error(err.response);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-secondary p-10 rounded-xl border border-slate-700">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-light-text">
            Create your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={onSubmit}>
          {error && <p className="text-center bg-red-500/20 text-red-400 p-3 rounded-md">{error}</p>}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input id="name" name="name" type="text" value={name} onChange={onChange} required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-slate-600 bg-primary placeholder-dark-text text-light-text rounded-t-md focus:outline-none focus:ring-accent focus:border-accent focus:z-10 sm:text-sm"
                placeholder="Full Name"
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" value={email} onChange={onChange} required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-slate-600 bg-primary placeholder-dark-text text-light-text focus:outline-none focus:ring-accent focus:border-accent focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" name="password" type="password" value={password} onChange={onChange} required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-slate-600 bg-primary placeholder-dark-text text-light-text rounded-b-md focus:outline-none focus:ring-accent focus:border-accent focus:z-10 sm:text-sm"
                placeholder="Password (min. 6 characters)"
              />
            </div>
          </div>

          <div>
            <button type="submit" disabled={loading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-primary bg-accent hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent disabled:bg-slate-500 disabled:cursor-not-allowed">
              {loading ? 'Registering...' : 'Sign up'}
            </button>
          </div>
          <p className="text-center text-sm text-dark-text">
            Already have an account?{' '}
            <Link href="/login" className="font-medium text-accent hover:text-sky-400">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;