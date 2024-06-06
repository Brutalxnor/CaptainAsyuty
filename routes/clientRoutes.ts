// routes/clientRoutes.ts
import { FaHome, FaDumbbell, FaInfoCircle } from 'react-icons/fa';
import { Route } from '@/types';

export const clientRoutes: Route[] = [
  {
    label: 'Dashboard',
    icon: FaHome,
    href: '/dashboard/client',
    color: 'text-sky-500',
  },
  {
    label: 'Exercises',
    icon: FaDumbbell,
    href: '/dashboard/exercises',
    color: 'text-green-700',
  },
  {
    label: 'Enter Info',
    icon: FaInfoCircle,
    href: '/dashboard/client-info',
    color: 'text-yellow-700',
  },
];
