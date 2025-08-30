'use client';

import AdminSidebar from "./AdminSidebar";
import { useAuth } from '@/context/AuthContext';

const AdminLayout = ({ children }) => {
    const { user } = useAuth();

    return (
        <div className="flex min-h-screen">
            <AdminSidebar />
            <main className="flex-grow p-8 bg-primary overflow-y-auto">
                {children}
            </main>
        </div>
    );
};

export default AdminLayout;