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
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-4">
      <Link href="/" legacyBehavior>
        <a className="text-white text-2xl font-bold">Fitness Website</a>
      </Link>
      <div className="flex space-x-4">
        <Link href="/about" legacyBehavior>
          <a className="text-white">About</a>
        </Link>
        <Link href="/online-gym" legacyBehavior>
          <a className="text-white">Online Gym</a>
        </Link>
        <Link href="/contact" legacyBehavior>
          <a className="text-white">Contact</a>
        </Link>
        <Link href="/shop" legacyBehavior>
          <a className="text-white">Shop</a>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
