// pages/dashboard/admin.tsx
import Sidebar from '@/components/sidebar';
import { FaTachometerAlt, FaCog } from 'react-icons/fa';
import { Route } from '@/types';

const adminRoutes: Route[] = [
  {
    label: 'Dashboard',
    icon: FaTachometerAlt,
    href: '/dashboard/client',
    color: 'text-sky-500',
  },
  {
    label: 'Settings',
    icon: FaCog,
    href: '/dashboard/settings',
    color: 'text-green-700',
  },
];

const AdminDashboard = () => {
  return (
    <div className="flex">
      <Sidebar routes={adminRoutes} />
      <div className="p-8 flex-1">
        <h1>Admin Dashboard</h1>
        {/* Admin Dashboard Content */}
      </div>
    </div>
  );
};

export default AdminDashboard;
