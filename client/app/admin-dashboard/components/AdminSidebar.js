// client/app/admin-dashboard/components/AdminSidebar.js
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/context/AuthContext'; // <-- Import useAuth

const AdminSidebar = () => {
    const { user, logout } = useAuth(); // <-- Get user and logout function
    const pathname = usePathname();

    const navLinks = [
        { name: 'Dashboard', href: '/admin-dashboard' },
        { name: 'Event Gallery', href: '/admin-dashboard/event-gallery' },
        { name: 'Career\'s Gallery', href: '/admin-dashboard/career-gallery' },
        { name: 'Certificates', href: '/admin-dashboard/certificates' },
        { name: 'User Management', href: '/admin-dashboard/users' },
        { name: 'Questions', href: '/admin-dashboard/questions' },
    ];

    return (
        <aside className="w-64 bg-secondary p-6 flex flex-col justify-between">
            <div>
                <h2 className="text-2xl font-bold text-light-text mb-8">Admin Menu</h2>
                <nav className="space-y-4">
                    {navLinks.map(link => (
                        <Link key={link.name} href={link.href}
                           className={`block py-2 px-4 rounded-lg transition-colors ${pathname === link.href ? 'bg-accent text-primary' : 'text-dark-text hover:bg-slate-700 hover:text-light-text'}`}>
                               {link.name}
                        </Link>
                    ))}
                </nav>
            </div>
            
            {/* --- THIS SECTION WAS MISSING --- */}
            <div className="border-t border-slate-700 pt-4">
                <p className="text-sm text-dark-text">Signed in as</p>
                <p className="font-semibold text-light-text truncate">{user?.name}</p>
                <button
                    onClick={logout}
                    className="w-full mt-4 bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
                >
                    Logout
                </button>
            </div>
        </aside>
    );
}

export default AdminSidebar;