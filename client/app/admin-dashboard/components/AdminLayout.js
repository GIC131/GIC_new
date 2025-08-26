// client/app/admin-dashboard/components/AdminLayout.js
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

const AdminLayout = ({ children }) => {
    const { user, logout } = useAuth();
    const pathname = usePathname();

    const navLinks = [
        { name: 'Dashboard', href: '/admin-dashboard' },
        { name: 'Media Uploads', href: '/admin-dashboard/media' },
        { name: 'User Management', href: '/admin-dashboard/users' },
        { name: 'Questions', href: '/admin-dashboard/questions' },
    ];

    return (
        <div className="flex min-h-screen bg-primary text-light-text">
            {/* Sidebar */}
            <aside className="w-64 bg-secondary p-6 flex flex-col justify-between">
                <div>
                    <h2 className="text-xl font-bold text-light-text mb-8">Admin Panel</h2>
                    <nav className="space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`block py-2.5 px-4 rounded-lg transition-colors ${
                                    pathname === link.href
                                        ? 'bg-accent text-primary'
                                        : 'text-dark-text hover:bg-slate-700 hover:text-light-text'
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>
                {/* User Info and Logout Button */}
                <div className="border-t border-slate-700 pt-4">
                    <p className="text-sm text-dark-text">Signed in as</p>
                    <p className="font-semibold text-light-text">{user?.name}</p>
                    <button
                        onClick={logout}
                        className="w-full mt-4 bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
                    >
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-grow p-8">
                {children}
            </main>
        </div>
    );
};

export default AdminLayout;