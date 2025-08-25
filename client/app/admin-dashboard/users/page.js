// client/app/admin-dashboard/users/page.js
'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '@/context/AuthContext';

const UserManagementPage = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const { token } = useAuth();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/users`);
                setUsers(res.data);
            } catch (error) {
                console.error("Failed to fetch users", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, [token]);

    if (loading) return <p className="text-light-text">Loading users...</p>;

    return (
        <div>
            <h1 className="text-3xl font-bold text-light-text mb-6">User Management</h1>
            <div className="bg-secondary p-6 rounded-lg overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="border-b border-slate-700">
                        <tr>
                            <th className="p-4 text-accent">Name</th>
                            <th className="p-4 text-accent">Email</th>
                            <th className="p-4 text-accent">Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user._id} className="border-b border-slate-800">
                                <td className="p-4 text-light-text">{user.name}</td>
                                <td className="p-4 text-dark-text">{user.email}</td>
                                <td className="p-4 text-light-text">{user.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserManagementPage;