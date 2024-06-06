// routes/adminRoutes.ts
import { FaTachometerAlt, FaDumbbell, FaUsers } from 'react-icons/fa';
import { Route } from '@/types';

export const adminRoutes: Route[] = [
  {
    label: 'Dashboard',
    icon: FaTachometerAlt,
    href: '/dashboard/admin',
    color: 'text-sky-500',
  },
  {
    label: 'Client List',
    icon: FaUsers,
    href: '/dashboard/admin-client-list',
    color: 'text-yellow-700',
  },
  {
    label: 'Add Exercises',
    icon: FaDumbbell,
    href: '/dashboard/exercises',
    color: 'text-green-700',
  },
];
