"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import {
  Bot,
  CodeIcon,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  MusicIcon,
  Settings,
  Video,
  VideoIcon
} from "lucide-react";

const monserrat = Montserrat({
  weight: "600",
  subsets: ["latin"]
});

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500"
  },
  {
    label: "Knowledge Bot",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500"
  },
  {
    label: "Code Whiz",
    icon: CodeIcon,
    href: "/code",
    color: "text-green-700"
  },
  {
    label: "Picture Perfect",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-700"
  },
  {
    label: "Motion Forge",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-700"
  },
  {
    label: "Tube Craft",
    icon: Video,
    href: "/youtube",
    color: "text-red-700"
  },
  {
    label: "VideoWhiz",
    icon: MusicIcon,
    href: "/videowhiz",
    color: "text-emerald-700"
  },
  {
    label: "Mind Mate",
    icon: Bot,
    href: "/companion",
    color: "text-red-700"
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings"
  }
];

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <div className={`flex flex-col h-full bg-white text-black border-white border rounded-lg`} style={{ borderRadius: '30px', overflow: 'hidden' }}>
      <div className="space-y-4 py-4 flex flex-col h-full">
        <div className="px-1 py-2 flex-1">
          <Link href="/dashboard" className="flex items-center pl-3 mb-14">
            <div className="relative w-8 h-8 mr-4">
              <Image fill alt="Logo" src="/logo.png" />
            </div>
            <h1 className={cn("text-2xl font-bold", monserrat.className)}>AIVerse</h1>
          </Link>
          <div className="space-y-1 text-lg">
            {routes.map((route) => (
              <Link
                href={route.href}
                key={route.href}
                className={cn(
                  "text-md group flex p-3 w-full justify-start font-bold active:italic focus:outline-none focus:ring focus:ring-violet-300 cursor-pointer hover:not-italic hover:text-emerald-500 rounded-lg transition",
                  pathname === route.href
                    ? "text-blue-800 bg-blue-800/10"
                    : "text-black"
                )}
              >
                <div className="flex items-center flex-1 text-base/[20px]">
                  <route.icon className={cn("mt-1 mb-1","h-5 w-5 mr-3 ", route.color)}/>
                  {route.label}
                  <div className="mt-3 mb-3">
                  </div>
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
