import Link from 'next/link';
import Image from 'next/image';
import { faFacebook, faTwitter, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-4 ">
      <div className="container mx-auto flex flex-col items-center">
        
        <div className="flex space-x-4 mb-4 mt-5">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTiktok} size="2x" />
          </a>
        </div>
        <Link href="/contact" legacyBehavior>
          <a className="bg-blue-500 text-white px-4 py-2 rounded-2xl mt-5">Contact Us</a>
        </Link>
        <div className="flex items-center mb-4 mt-5">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
          <span className="ml-4">&copy; 2024 Captain El Asyuty</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
