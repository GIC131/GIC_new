// client/app/admin-dashboard/layout.js
import PrivateRoute from "@/components/PrivateRoute";
import AdminLayout from "./components/AdminLayout";

export default function DashboardLayout({ children }) {
    return (
        <PrivateRoute>
            <AdminLayout>
                {children}
            </AdminLayout>
        </PrivateRoute>
    );
}