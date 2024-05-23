// components/Sidebar.tsx
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Route } from '@/types';

interface SidebarProps {
  routes: Route[];
}

const Sidebar: React.FC<SidebarProps> = ({ routes }) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full bg-white text-black border-white border rounded-lg" style={{ borderRadius: '30px', overflow: 'hidden' }}>
      <div className="space-y-4 py-4 flex flex-col h-full">
        <div className="px-1 py-2 flex-1">
          <Link href="/dashboard" className="flex items-center pl-3 mb-14">
            <div className="relative w-8 h-8 mr-4">
              <Image fill alt="Logo" src="/logo.png" />
            </div>
            <h1 className="text-2xl font-bold">YourAppName</h1>
          </Link>
          <div className="space-y-1 text-lg">
            {routes.map((route) => (
              <Link
                href={route.href}
                key={route.href}
                className={`text-md group flex p-3 w-full justify-start font-bold active:italic focus:outline-none focus:ring focus:ring-violet-300 cursor-pointer hover:not-italic hover:text-emerald-500 rounded-lg transition ${
                  pathname === route.href ? 'text-blue-800 bg-blue-800/10' : 'text-black'
                }`}
              >
                <div className="flex items-center flex-1 text-base/[20px]">
                  <route.icon className={`mt-1 mb-1 h-5 w-5 mr-3 ${route.color}`} />
                  {route.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
