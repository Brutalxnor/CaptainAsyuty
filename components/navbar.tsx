



// 'use client';

// import Link from 'next/link';
// import Image from 'next/image';
// import { useRouter } from 'next/router';
// import { useState, useEffect } from 'react';
// import { UserButton } from '@clerk/nextjs';
// import { FaBars, FaTimes, FaHome } from 'react-icons/fa';
// import { useLanguage } from '@/contexts/LanguageContext'; // Import useLanguage

// const Navbar: React.FC = () => {
//   const router = useRouter();
//   const { language } = useLanguage(); // Use the language context
//   const [error, setError] = useState<string | null>(null);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleRouteChange = () => setError(null);
//     router.events.on('routeChangeStart', handleRouteChange);

//     return () => {
//       router.events.off('routeChangeStart', handleRouteChange);
//     };
//   }, [router]);

//   const handleLoginClick = async () => {
//     try {
//       await router.push('/sign-in');
//     } catch (error) {
//       setError('Failed to navigate to login page');
//       console.error(error);
//     }
//   };

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const menuItems = [
//     { href: '/about', label: { en: 'About', ar: 'عنى' } },
//     { href: '/contact', label: { en: 'Contact', ar: 'اتصل بنا' } },
//   ];

//   return (
//     <nav className="absolute top-0 left-0 w-full flex items-center justify-between p-4 bg-transparent z-50 backdrop-filter backdrop-blur-lg">
//       {error && <div className="bg-red-500 text-white p-2 rounded">{error}</div>}
//       <div className="flex items-center">
//         <Link href="/" legacyBehavior>
//           <a className="flex flex-row justify-center items-center hover:translate-y-[-5px] transition-transform duration-300">
//             <Image src="/logo.png" alt="Logo" width={50} height={50} />
//             <span className="ml-4 text-white text-2xl font-serif flex">Captain Asyuty</span>
//           </a>
//         </Link>
//       </div>
//       <div className="lg:hidden">
//         <button onClick={toggleMenu} className="text-white text-2xl">
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>
//       <div
//         className={`flex-col justify-center items-center lg:flex lg:flex-row lg:items-center lg:space-x-10 lg:static absolute top-16 left-0 w-full lg:w-auto ${
//           menuOpen ? 'bg-transparent text-white flex' : 'hidden'
//         }`}
//         style={{ background: 'rgba(60, 60, 60, 0.4)', backdropFilter: 'blur(10px)', borderRadius: '12px' }}
//       >
//         {menuItems.map((item, index) => (
//           <Link href={item.href} key={index} legacyBehavior>
//             <a className="text-white text-xl font-bold p-4 lg:p-4 hover:text-yellow-300 transition-colors duration-300" onClick={toggleMenu}>
//               {item.label[language as 'en' | 'ar']}
//             </a>
//           </Link>
//         ))}
//         <div className="lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4 p-4 lg:p-0">
//           <button onClick={handleLoginClick} className="bg-blue-500 text-white text-xl font-bold py-2 px-6 rounded-full cursor-pointer hover:bg-yellow-300 hover:text-black transition-colors duration-300">
//             {language === 'en' ? 'Log In' : 'تسجيل الدخول'}
//           </button>
//         </div>
//         <UserButton />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

















// 'use client';

// import Link from 'next/link';
// import Image from 'next/image';
// import { useRouter } from 'next/router';
// import { useState, useEffect } from 'react';
// import { FaBars, FaTimes, FaHome } from 'react-icons/fa';
// import { useLanguage } from '@/contexts/LanguageContext'; // Import useLanguage
// import { useAuth } from '@/contexts/AuthContext'; // Import useAuth

// const Navbar: React.FC = () => {
//   const router = useRouter();
//   const { language } = useLanguage(); // Use the language context
//   const { user, signOut } = useAuth(); // Use the authentication context
//   const [error, setError] = useState<string | null>(null);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleRouteChange = () => setError(null);
//     router.events.on('routeChangeStart', handleRouteChange);

//     return () => {
//       router.events.off('routeChangeStart', handleRouteChange);
//     };
//   }, [router]);

//   const handleLoginClick = async () => {
//     try {
//       await router.push('/sign-in');
//     } catch (error) {
//       setError('Failed to navigate to login page');
//       console.error(error);
//     }
//   };

//   const handleSignOutClick = async () => {
//     try {
//       signOut();
//       await router.push('/');
//     } catch (error) {
//       setError('Failed to sign out');
//       console.error(error);
//     }
//   };

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const menuItems = [
//     { href: '/about', label: { en: 'About', ar: 'عنى' } },
//     { href: '/contact', label: { en: 'Contact', ar: 'اتصل بنا' } },
//   ];

//   return (
//     <nav className="absolute top-0 left-0 w-full flex items-center justify-between p-4 bg-transparent z-50 backdrop-filter backdrop-blur-lg">
//       {error && <div className="bg-red-500 text-white p-2 rounded">{error}</div>}
//       <div className="flex items-center">
//         <Link href="/" legacyBehavior>
//           <a className="flex flex-row justify-center items-center hover:translate-y-[-5px] transition-transform duration-300">
//             <Image src="/logo.png" alt="Logo" width={50} height={50} />
//             <span className="ml-4 text-white text-2xl font-serif flex">Captain Asyuty</span>
//           </a>
//         </Link>
//       </div>
//       <div className="lg:hidden">
//         <button onClick={toggleMenu} className="text-white text-2xl">
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>
//       <div
//         className={`flex-col justify-center items-center lg:flex lg:flex-row lg:items-center lg:space-x-10 lg:static absolute top-16 left-0 w-full lg:w-auto ${
//           menuOpen ? 'bg-transparent text-white flex' : 'hidden'
//         }`}
//         style={{ background: 'rgba(60, 60, 60, 0.4)', backdropFilter: 'blur(10px)', borderRadius: '12px' }}
//       >
//         {menuItems.map((item, index) => (
//           <Link href={item.href} key={index} legacyBehavior>
//             <a className="text-white text-xl font-bold p-4 lg:p-4 hover:text-yellow-300 transition-colors duration-300" onClick={toggleMenu}>
//               {item.label[language as 'en' | 'ar']}
//             </a>
//           </Link>
//         ))}
//         <div className="lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4 p-4 lg:p-0">
//           {!user ? (
//             <button onClick={handleLoginClick} className="bg-blue-500 text-white text-xl font-bold py-2 px-6 rounded-full cursor-pointer hover:bg-yellow-300 hover:text-black transition-colors duration-300">
//               {language === 'en' ? 'Log In' : 'تسجيل الدخول'}
//             </button>
//           ) : (
//             <button onClick={handleSignOutClick} className="bg-red-500 text-white text-xl font-bold py-2 px-6 rounded-full cursor-pointer hover:bg-yellow-300 hover:text-black transition-colors duration-300">
//               {language === 'en' ? 'Sign Out' : 'تسجيل الخروج'}
//             </button>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;






'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext'; 
import { useAuth } from '@/contexts/AuthContext'; 

const Navbar: React.FC = () => {
  const router = useRouter();
  const { language } = useLanguage(); 
  const { user } = useAuth(); 
  const [error, setError] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => setError(null);
    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);

  const handleLoginClick = async () => {
    try {
      await router.push('/sign-in');
    } catch (error) {
      setError('Failed to navigate to login page');
      console.error(error);
    }
  };

  const handleDashboardClick = async () => {
    try {
      await router.push('/dashboard');
    } catch (error) {
      setError('Failed to navigate to the dashboard');
      console.error(error);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuItems = [
    { href: '/about', label: { en: 'About', ar: 'عنى' } },
    { href: '/contact', label: { en: 'Contact', ar: 'اتصل بنا' } },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full flex items-center justify-between p-4 bg-transparent z-50 backdrop-filter backdrop-blur-lg">
      {error && <div className="bg-red-500 text-white p-2 rounded">{error}</div>}
      <div className="flex items-center">
        <Link href="/" legacyBehavior>
          <a className="flex flex-row justify-center items-center hover:translate-y-[-5px] transition-transform duration-300">
            <Image src="/logo.png" alt="Logo" width={50} height={50} />
            <span className="ml-4 text-white text-2xl font-serif flex">Captain Asyuty</span>
          </a>
        </Link>
      </div>
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-white text-2xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div
        className={`flex-col justify-center items-center lg:flex lg:flex-row lg:items-center lg:space-x-10 lg:static absolute top-16 left-0 w-full lg:w-auto ${
          menuOpen ? 'bg-transparent text-white flex' : 'hidden'
        }`}
        style={{ background: 'rgba(60, 60, 60, 0.4)', backdropFilter: 'blur(10px)', borderRadius: '12px' }}
      >
        {menuItems.map((item, index) => (
          <Link href={item.href} key={index} legacyBehavior>
            <a className="text-white text-xl font-bold p-4 lg:p-4 hover:text-yellow-300 transition-colors duration-300" onClick={toggleMenu}>
              {item.label[language as 'en' | 'ar']}
            </a>
          </Link>
        ))}
        <div className="lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4 p-4 lg:p-0">
          {!user ? (
            <button onClick={handleLoginClick} className="bg-blue-500 text-white text-xl font-bold py-2 px-6 rounded-full cursor-pointer hover:bg-yellow-300 hover:text-black transition-colors duration-300">
              {language === 'en' ? 'Log In' : 'تسجيل الدخول'}
            </button>
          ) : (
            <button onClick={handleDashboardClick} className="bg-red-500 text-white text-xl font-bold py-2 px-6 rounded-full cursor-pointer hover:bg-yellow-300 hover:text-black transition-colors duration-300">
              {language === 'en' ? 'Go to Dashboard' : 'لوحة القيادة'}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
