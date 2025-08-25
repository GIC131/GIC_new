// client/app/admin-dashboard/page.js
'use client';
import { useAuth } from '@/context/AuthContext';

const AdminDashboardPage = () => {
    const { user } = useAuth();

    return (
        <div>
            <h1 className="text-3xl font-bold text-light-text mb-2">Welcome back, {user?.name}!</h1>
            <p className="text-dark-text">This is your admin dashboard. Use the sidebar to manage site content.</p>
            {/* We can add stats here later */}
        </div>
    );
};

export default AdminDashboardPage;