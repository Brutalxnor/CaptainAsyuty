




// import React, { useState, useEffect, ReactNode } from 'react';
// import Sidebar from "@/components/sidebar";
// import { useUser, UserButton } from '@clerk/nextjs';
// import { clientRoutes } from '@/routes/clientRoutes';
// import { adminRoutes } from '@/routes/adminRoutes';
// import ChatModal from '@/components/ChatModal';
// import LanguageToggle from '@/components/LanguageToggle';
// // // import LanguageSwitcher from '../components/LanguageSwitcher';
// // import i18n from '../i18n';

// interface DashboardLayoutProps {
//   children: ReactNode;
// }

// const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
//   const { user } = useUser();
//   const routes = user?.publicMetadata.role === 'admin' ? adminRoutes : clientRoutes;
//   const [theme, setTheme] = useState('light');
//   const [isSidebarOpen, setSidebarOpen] = useState(false);
//   const [isChatOpen, setChatOpen] = useState(false);

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme') || 'light';
//     setTheme(savedTheme);
//     document.documentElement.setAttribute('data-theme', savedTheme);
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = theme === 'light' ? 'dark' : 'light';
//     setTheme(newTheme);
//     document.documentElement.setAttribute('data-theme', newTheme);
//     localStorage.setItem('theme', newTheme);
//   };

//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   const openChat = () => {
//     setChatOpen(true);
//   };

//   const closeChat = () => {
//     setChatOpen(false);
//   };

//   return (
//       <div className="flex h-screen w-full">
//         <Sidebar routes={routes} isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
//         <div className="flex-1 flex flex-col">
//           <header className="flex justify-between items-center p-4 bg-[var(--background-color)] text-[var(--text-color)] border-b-[var(--border-color)]">
//             <div className="flex w-full justify-end space-x-4">
//               <UserButton />
//             </div>
//           </header>
//           <main className="p-4 flex-1 overflow-y-auto">{children}</main>
//           {isChatOpen && <ChatModal onClose={closeChat} />}
//           <div className="fixed bottom-4 right-4 flex flex-col space-y-4">
//             <button
//               onClick={toggleTheme}
//               className="bg-blue-500 text-white p-2 rounded-full shadow-md"
//             >
//               {theme === 'light' ? '🌙' : '☀️'}
//             </button>
//             <button
//               onClick={openChat}
//               className="bg-green-500 text-white p-2 rounded-full shadow-md flex items-center justify-center"
//               style={{ width: '40px', height: '40px' }}
//             >
//               💬
//             </button>
//             <LanguageToggle />
//           </div>
//         </div>
//       </div>
//   );
// };

// export default DashboardLayout;












// // components/DashboardLayout.tsx

// import React, { useState, useEffect, ReactNode } from 'react';
// import Sidebar from "@/components/sidebar";
// import { useAuth } from '@/contexts/AuthContext';
// import { clientRoutes } from '@/routes/clientRoutes';
// import { adminRoutes } from '@/routes/adminRoutes';
// import ChatModal from '@/components/ChatModal';
// import LanguageToggle from '@/components/LanguageToggle';

// interface DashboardLayoutProps {
//   children: ReactNode;
// }

// const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
//   const { user, signOut } = useAuth();
//   const routes = user?.role === 'admin' ? adminRoutes : clientRoutes;
//   const [theme, setTheme] = useState('light');
//   const [isSidebarOpen, setSidebarOpen] = useState(false);
//   const [isChatOpen, setChatOpen] = useState(false);

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme') || 'light';
//     setTheme(savedTheme);
//     document.documentElement.setAttribute('data-theme', savedTheme);
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = theme === 'light' ? 'dark' : 'light';
//     setTheme(newTheme);
//     document.documentElement.setAttribute('data-theme', newTheme);
//     localStorage.setItem('theme', newTheme);
//   };

//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   const openChat = () => {
//     setChatOpen(true);
//   };

//   const closeChat = () => {
//     setChatOpen(false);
//   };

//   return (
//     <div className="flex h-screen w-full">
//       <Sidebar routes={routes} isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
//       <div className="flex-1 flex flex-col">
//         <header className="flex justify-between items-center p-4 bg-[var(--background-color)] text-[var(--text-color)] border-b-[var(--border-color)]">
//           <div className="flex w-full justify-end space-x-4">
//             <button onClick={signOut} className="bg-red-500 text-white px-4 py-2 rounded">
//               Sign Out
//             </button>
//           </div>
//         </header>
//         <main className="p-4 flex-1 overflow-y-auto">{children}</main>
//         {isChatOpen && <ChatModal onClose={closeChat} />}
//         <div className="fixed bottom-4 right-4 flex flex-col space-y-4">
//           <button
//             onClick={toggleTheme}
//             className="bg-blue-500 text-white p-2 rounded-full shadow-md"
//           >
//             {theme === 'light' ? '🌙' : '☀️'}
//           </button>
//           <button
//             onClick={openChat}
//             className="bg-green-500 text-white p-2 rounded-full shadow-md flex items-center justify-center"
//             style={{ width: '40px', height: '40px' }}
//           >
//             💬
//           </button>
//           <LanguageToggle />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;













// // components/DashboardLayout.tsx

// import React, { useState, useEffect, ReactNode } from 'react';
// import Sidebar from "@/components/sidebar";
// import { useAuth } from '@/contexts/AuthContext';
// import { clientRoutes } from '@/routes/clientRoutes';
// import { adminRoutes } from '@/routes/adminRoutes';
// import ChatModal from '@/components/ChatModal';
// import LanguageToggle from '@/components/LanguageToggle';
// import SettingsModal from '@/components/SettingsModal'; // Import the new SettingsModal component


// interface DashboardLayoutProps {
//   children: ReactNode;
// }

// const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
//   const { user, signOut } = useAuth();
//   const routes = user?.role === 'admin' ? adminRoutes : clientRoutes;
//   const [theme, setTheme] = useState('light');
//   const [isSidebarOpen, setSidebarOpen] = useState(false);
//   const [isChatOpen, setChatOpen] = useState(false);
//   const [isSettingsOpen, setSettingsOpen] = useState(false); // State to manage modal visibility

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme') || 'light';
//     setTheme(savedTheme);
//     document.documentElement.setAttribute('data-theme', savedTheme);
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = theme === 'light' ? 'dark' : 'light';
//     setTheme(newTheme);
//     document.documentElement.setAttribute('data-theme', newTheme);
//     localStorage.setItem('theme', newTheme);
//   };

//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   const openChat = () => {
//     setChatOpen(true);
//   };

//   const closeChat = () => {
//     setChatOpen(false);
//   };

//   const openSettings = () => {
//     setSettingsOpen(true);
//   };

//   const closeSettings = () => {
//     setSettingsOpen(false);
//   };

//   return (
//     <div className="flex h-screen w-full ">
//       <Sidebar routes={routes} isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
//       <div className="flex-1 flex flex-col">
//         <header className="flex justify-between items-center p-4 bg-[var(--background-color)] text-[var(--text-color)] border-b-[var(--border-color)]">
//           <div className="flex w-full justify-end space-x-4">
//             {/* Replacing sign-out button with settings button */}
//             <button onClick={openSettings} className="text-white px-4 py-2 rounded" style={{ fontSize: '1.5rem' }}>
//               ⚙️
//             </button>
//           </div>
//         </header>
//         <main className="p-4 flex-1 overflow-y-auto">{children}</main>
//         {isChatOpen && <ChatModal onClose={closeChat} />}
//         {isSettingsOpen && <SettingsModal onClose={closeSettings} />} {/* Render modal */}
//         <div className="fixed bottom-4 right-4 flex flex-col space-y-4">
//           <button
//             onClick={toggleTheme}
//             className="bg-blue-500 text-white p-2 rounded-full shadow-md"
//           >
//             {theme === 'light' ? '🌙' : '☀️'}
//           </button>
//           <button
//             onClick={openChat}
//             className="bg-green-500 text-white p-2 rounded-full shadow-md flex items-center justify-center"
//             style={{ width: '40px', height: '40px' }}
//           >
//             💬
//           </button>
//           <LanguageToggle />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;





import React, { useState, useEffect, ReactNode } from 'react';
import Sidebar from "@/components/sidebar";
import { useAuth } from '@/contexts/AuthContext';
import { clientRoutes } from '@/routes/clientRoutes';
import { adminRoutes } from '@/routes/adminRoutes';
import ChatModal from '@/components/ChatModal';
import LanguageToggle from '@/components/LanguageToggle';
import SettingsModal from '@/components/SettingsModal'; // Import the new SettingsModal component

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { user, signOut } = useAuth();
  const routes = user?.role === 'admin' ? adminRoutes : clientRoutes;
  const [theme, setTheme] = useState('light');
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isChatOpen, setChatOpen] = useState(false);
  const [isSettingsOpen, setSettingsOpen] = useState(false); // State to manage modal visibility
  const [isButtonsVisible, setButtonsVisible] = useState(false); // Toggle visibility for buttons

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const openChat = () => {
    setChatOpen(true);
  };

  const closeChat = () => {
    setChatOpen(false);
  };

  const openSettings = () => {
    setSettingsOpen(true);
  };

  const closeSettings = () => {
    setSettingsOpen(false);
  };

  const toggleButtonsVisibility = () => {
    setButtonsVisible(!isButtonsVisible); // Toggle visibility of buttons
  };

  return (
    <div className="flex h-screen w-full">
      <Sidebar routes={routes} isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col">
        <header className="flex justify-between items-center p-4 bg-[var(--background-color)] text-[var(--text-color)] border-b-[var(--border-color)]">
          <div className="flex w-full justify-end space-x-4 ">
            <button onClick={openSettings} className="text-white px-4 py-2 rounded" style={{ fontSize: '1.5rem' }}>
              ⚙️
            </button>
          </div>
        </header>
        <main className="p-4 flex-1 overflow-y-auto">{children}</main>
        {isChatOpen && <ChatModal onClose={closeChat} />}
        {isSettingsOpen && <SettingsModal onClose={closeSettings} />} {/* Render modal */}
        <div className="fixed bottom-4 right-4 flex flex-col space-y-4">
          {/* Button to show the 3 buttons */}
          <button
            onClick={toggleButtonsVisibility}
            className="bg-purple-500 text-white p-2 rounded-full shadow-md flex items-center justify-center"
            style={{ width: '40px', height: '40px' }}
          >
            {isButtonsVisible ? '❌' : '⋮'}
          </button>

          {/* Conditional rendering of the three buttons */}
          {isButtonsVisible && (
            <>
              <button
                onClick={toggleTheme}
                className="bg-blue-500 text-white p-2 rounded-full shadow-md"
              >
                {theme === 'light' ? '🌙' : '☀️'}
              </button>
              <button
                onClick={openChat}
                className="bg-green-500 text-white p-2 rounded-full shadow-md flex items-center justify-center"
                style={{ width: '40px', height: '40px' }}
              >
                💬
              </button>
              <LanguageToggle />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
