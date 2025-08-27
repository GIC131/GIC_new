// client/app/admin-dashboard/page.js
'use client';

import { useAuth } from '@/context/AuthContext';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

// A reusable card for displaying stats
const StatCard = ({ title, value, icon, href }) => (
    <Link href={href}>
        <div className="bg-secondary p-6 rounded-lg border border-slate-700 hover:border-accent transition-colors duration-300">
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-dark-text uppercase text-sm font-bold">{title}</p>
                    <p className="text-3xl font-bold text-light-text mt-2">{value}</p>
                </div>
                <div className="bg-slate-700 p-3 rounded-lg text-accent">
                    {icon}
                </div>
            </div>
        </div>
    </Link>
);

const AdminDashboardPage = () => {
    const { user } = useAuth();
    const [stats, setStats] = useState({ users: 0, media: 0, questions: 0 });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                // Fetch all data in parallel for speed
                const [userRes, mediaRes, questionRes] = await Promise.all([
                    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/users`),
                    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/gallery`),
                    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/questions`),
                ]);

                setStats({
                    users: userRes.data.length,
                    media: mediaRes.data.length,
                    questions: questionRes.data.length,
                });
            } catch (error) {
                console.error("Failed to fetch dashboard stats", error);
            } finally {
                setLoading(false);
            }
        };
        if (user) fetchStats(); // Fetch stats only when user is loaded
    }, [user]);

    return (
        <div>
            <h1 className="text-3xl font-bold text-light-text mb-2">Welcome back, {user?.name}!</h1>
            <p className="text-dark-text mb-8">Here's a snapshot of your website's content.</p>

            {/* Stats Cards Grid */}
            {loading ? <p>Loading stats...</p> : (
                <div className="grid md:grid-cols-3 gap-6">
                    <StatCard
                        title="Total Users"
                        value={stats.users}
                        href="/admin-dashboard/users"
                        icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a3 3 0 015.688 0M12 14a3 3 0 100-6 3 3 0 000 6z" /></svg>}
                    />
                    <StatCard
                        title="Media Items"
                        value={stats.media}
                        href="/admin-dashboard/media"
                        icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
                    />
                    <StatCard
                        title="Interview Questions"
                        value={stats.questions}
                        href="/admin-dashboard/questions"
                        icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                    />
                </div>
            )}
        </div>
    );
};

export default AdminDashboardPage;