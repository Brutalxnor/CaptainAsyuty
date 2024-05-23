// routes/clientRoutes.ts
import { FaTachometerAlt, FaDumbbell } from 'react-icons/fa';
import { Route } from '@/types';

export const clientRoutes: Route[] = [
  {
    label: 'Dashboard',
    icon: FaTachometerAlt,
    href: '/dashboard/client',
    color: 'text-sky-500',
  },
  {
    label: 'Exercises',
    icon: FaDumbbell,
    href: '/dashboard/exercises',
    color: 'text-green-700',
  },
];
