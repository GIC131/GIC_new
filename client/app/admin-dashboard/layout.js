// client/app/admin-dashboard/layout.js
import PrivateRoute from "@/components/PrivateRoute";
import AdminSidebar from "./components/AdminSidebar";

export default function AdminDashboardLayout({ children }) {
    return (
        <PrivateRoute>
            <div className="flex min-h-screen">
                <AdminSidebar />
                <main className="flex-grow p-8 bg-primary">
                    {children}
                </main>
            </div>
        </PrivateRoute>
    );
}