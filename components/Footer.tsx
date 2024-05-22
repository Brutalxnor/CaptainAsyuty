import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
          <span className="ml-4">&copy; 2024 Captain El Asyuty</span>
        </div>
        <Link href="/contact" legacyBehavior>
          <a className="bg-blue-500 text-white px-4 py-2 rounded-2xl">Contact Us</a>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
