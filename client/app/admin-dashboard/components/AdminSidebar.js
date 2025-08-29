// client/app/admin-dashboard/components/AdminSidebar.js
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const AdminSidebar = () => {
    const pathname = usePathname();
    const navLinks = [
        { name: 'Dashboard', href: '/admin-dashboard' },
        { name: 'Event Gallery', href: '/admin-dashboard/event-gallery' },
        { name: 'Career\'s Gallery', href: '/admin-dashboard/career-gallery' },
        { name: 'User Management', href: '/admin-dashboard/users' },
        { name: 'Questions', href: '/admin-dashboard/questions' },
    ];

    return (
        <aside className="w-64 bg-secondary p-6">
            <h2 className="text-2xl font-bold text-light-text mb-8">Admin Menu</h2>
            <nav className="space-y-4">
                {navLinks.map(link => (
                    <Link key={link.name} href={link.href}
                       className={`block py-2 px-4 rounded-lg transition-colors ${pathname === link.href ? 'bg-accent text-primary' : 'text-dark-text hover:bg-slate-700 hover:text-light-text'}`}>
                           {link.name}
                    </Link>
                ))}
            </nav>
        </aside>
    );
}

export default AdminSidebar;