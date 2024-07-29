





import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Route } from '@/types/Route';
import { FC } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

interface SidebarProps {
  routes: Route[];
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: FC<SidebarProps> = ({ routes, isOpen, toggleSidebar }) => {
  const pathname = usePathname();

  return (
    <>
      <div className={`fixed inset-0 z-30 lg:static lg:z-auto lg:flex-shrink-0 ${isOpen ? 'block' : 'hidden'} lg:block`}>
        <div
          className={`fixed inset-y-0 left-0 bg-[var(--sidebar-background-color)] text-[var(--sidebar-text-color)] shadow-lg transform transition-transform duration-300 z-40 w-64 lg:w-64 lg:relative lg:translate-x-0 ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <button
            onClick={toggleSidebar}
            className="absolute lg:hidden  top-2 right-2 lg:hidden bg-red-500 text-white p-1 rounded-full focus:outline-none"
            style={{ borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <FaTimes />
          </button>
          <div className="space-y-4 py-4 flex flex-col h-full">
            <div className="px-1 py-2 flex-1">
              <div className="flex items-center pl-3 mb-14">
                <div className="relative w-8 h-8 mr-4">
                  <Image fill alt="Logo" src="/logo.png" />
                </div>
                <h1 className="text-md font-bold">Captain Asyuty</h1>
              </div>
              <div className="space-y-1 text-lg">
                {routes.map((route) => (
                  <Link
                    href={route.href}
                    key={route.href}
                    className={`text-md group flex p-3 w-full justify-start font-bold active:italic focus:outline-none focus:ring focus:ring-violet-300 cursor-pointer hover:not-italic hover:text-emerald-500 rounded-lg transition ${
                      pathname === route.href ? 'text-blue-800 bg-blue-800/10' : 'text-[var(--sidebar-text-color)]'
                    }`}
                  >
                    <div className="flex items-center flex-1 text-base/[20px]">
                      <div
                        className="flex items-center justify-center h-8 w-8 rounded-full mr-3"
                        style={{ backgroundColor: `${route.color}20` }} // Adding transparency to the background color
                      >
                        <route.icon className="h-5 w-5" style={{ color: route.color }} />
                      </div>
                      {route.label}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {!isOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 lg:hidden bg-blue-500 text-white p-2 rounded-full focus:outline-none z-50"
          style={{ borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <FaBars />
        </button>
      )}
    </>
  );
};

export default Sidebar;
