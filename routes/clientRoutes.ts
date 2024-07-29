import { FaHome, FaDumbbell, FaInfoCircle, FaAppleAlt, FaBarcode, FaCalculator, FaDollarSign } from 'react-icons/fa';
import { Route } from '@/types/Route';

export const clientRoutes: Route[] = [
  {
    label: 'Dashboard',
    icon: FaHome,
    href: '/dashboard/client',
    color: '#0ea5e9',  // sky-500
  },
  {
    label: 'Exercises',
    icon: FaDumbbell,
    href: '/dashboard/client-exercises',
    color: '#6366f1',  // black-200 (changed to a readable hex color)
  },
  {
    label: 'Nutrition',
    icon: FaAppleAlt,
    href: '/dashboard/client-nutrition',
    color: '#ef4444',  // red-500
  },
  {
    label: 'My Barcode',
    icon: FaBarcode,
    href: '/dashboard/barcode',
    color: '#a855f7',  // purple-500
  },
  {
    label: 'Calorie Calculator',
    icon: FaCalculator,
    href: '/dashboard/calorie-calculator',
    color: '#facc15',  // yellow-500
  },
  {
    label: 'Enter Info',
    icon: FaInfoCircle,
    href: '/dashboard/client-info',
    color: '#1d4ed8',  // blue-700
  },
  {
    label: 'Payments',
    icon: FaDollarSign,
    href: '/dashboard/payments',
    color: '#22c55e',  // green-700
  },
];
