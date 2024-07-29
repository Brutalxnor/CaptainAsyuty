import { FaTachometerAlt, FaDumbbell, FaUsers, FaHeartbeat, FaAppleAlt } from 'react-icons/fa';
import { Route } from '@/types/Route';

export const adminRoutes: Route[] = [
  {
    label: 'Dashboard',
    icon: FaTachometerAlt,
    href: '/dashboard/admin',
    color: '#0ea5e9',  // sky-500
  },
  {
    label: 'Client List',
    icon: FaUsers,
    href: '/dashboard/admin-client-list',
    color: '#f43f5e',  // rose-500
  },
  {
    label: 'Add Exercises',
    icon: FaDumbbell,
    href: '/dashboard/admin-add-exercises',
    color: '#6366f1',  // indigo-500
  },
  {
    label: 'Add Cardio',
    icon: FaHeartbeat,
    href: '/dashboard/admin-add-cardio',
    color: '#ef4444',  // red-500
  },
  {
    label: 'Add Nutrition',
    icon: FaAppleAlt,
    href: '/dashboard/admin-add-nutrition',
    color: '#22c55e',  // green-500
  },
];
