// import React from 'react';
// import Link from 'next/link';

// const Navbar: React.FC = () => {
//   return (
//     <nav className="fixed w-full bg-transparent z-10 top-0">
//       <div className="container mx-auto flex justify-between items-center p-4">
//         <div className="text-white text-2xl font-bold">
//           <Link href="/">Fitness Website</Link>
//         </div>
//         <div className="space-x-4">
//           <Link href="/" className="text-white hover:text-blue-500">Home</Link>
//           <Link href="/about" className="text-white hover:text-blue-500">About</Link>
//           <Link href="/onlineGym" className="text-white hover:text-blue-500">Online Gym</Link>
//           <Link href="/contact" className="text-white hover:text-blue-500">Contact</Link>
//           <Link href="/shop" className="text-white hover:text-blue-500">Shop</Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
// components/Navbar.tsx





// import Link from 'next/link';
// import Image from 'next/image';

// const Navbar: React.FC = () => {
//   return (
//     <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-4">
//       <Link href="/" legacyBehavior>
//         <a className="flex items-center hover:translate-y-[-5px] transition-transform duration-300">
//           <Image src="/logo.png" alt="Logo" width={50} height={50} />
//           <span className="ml-4 text-white text-2xl font-bold">Fitness Website</span>
//         </a>
//       </Link>
//       <div className="flex space-x-10 mx-auto text-white text-xl font-bold">
//         <Link href="/online-gym" legacyBehavior>
//           <a className="text-white">Online Gym</a>
//         </Link>
//         <Link href="/about" legacyBehavior>
//           <a className="text-white">About</a>
//         </Link>
//         <Link href="/contact" legacyBehavior>
//           <a className="text-white">Contact</a>
//         </Link>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;



import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-4">
      <Link href="/" legacyBehavior>
        <a className="flex items-center hover:translate-y-[-5px] transition-transform duration-300">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
          <span className="ml-4 text-white text-2xl font-bold">Fitness Website</span>
        </a>
      </Link>
      <div className="flex space-x-10 mx-auto text-white text-xl font-bold">
        <Link href="/online-gym" legacyBehavior>
          <a className="text-white">Online Gym</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a className="text-white">About</a>
        </Link>
        <Link href="/contact" legacyBehavior>
          <a className="text-white">Contact</a>
        </Link>
      </div>
      <button
          onClick={() => router.push('/auth?mode=sign-in')}
          className="bg-blue-500 text-white px-4 py-2 rounded-2xl"
        >
          Log In
      </button>
      
    </nav>
  );
}

export default Navbar;
