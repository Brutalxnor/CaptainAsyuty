import Link from 'next/link';
import Image from 'next/image';
import { faFacebook, faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-4 ">
      <div className="container mx-auto flex flex-col items-center">
        
        <div className="flex space-x-4 mb-4 mt-5">
          <a href="https://www.facebook.com/profile.php?id=100005772551245&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.instagram.com/cap_abdelrahmaan" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://youtube.com/@abdelrahmanshehata1205?si=nDEzI39x-pYsuf7d" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          <a href="https://www.tiktok.com/@abdelrahmanshehata?_t=8pcSmojGOu7&_r=1" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTiktok} size="2x" />
          </a>
        </div>
        <Link href="/contact" legacyBehavior>
          <a className="bg-blue-500 text-white px-4 py-2 rounded-2xl mt-5">Contact Us</a>
        </Link>
        <div className="flex items-center mb-4 mt-5">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
          <span className="ml-4">&copy; 2025 Captain El Asyuty</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
