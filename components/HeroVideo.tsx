


import React, { useEffect, useRef } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { language } = useLanguage();

  useEffect(() => {
    const handleAutoplay = () => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => {
          videoRef.current?.setAttribute('controls', 'controls');
        });
      }
    };

    handleAutoplay();

    const handleUserInteraction = () => {
      if (videoRef.current) {
        videoRef.current.play();
      }
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
  }, []);

  return (
    <div className="relative h-[75vh] overflow-hidden rounded-lg">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
        playsInline
      >
        <source src="/website.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white z-20">
        <h1
          className={`text-5xl text-center font-bold justify-center rounded-lg px-6 py-2`}
          style={{
            background: 'linear-gradient(90deg, #FFD700, #FF8C00, #FF4500)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {language === 'en' ? 'Strong, Brave, Confident' : 'قوي، شجاع، مميز'}
        </h1>
        <p
          className={`mt-4 text-xl font-serif rounded-lg px-6 py-2`}
          style={{
            background: 'linear-gradient(90deg, #FFD700, #FF8C00, #FF4500)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {language === 'en'
            ? 'Together we achieve the impossible'
            : 'معاً نحقق المستحيل'}
        </p>
        <div className="mt-6">
          <ScrollLink
            to="pricing-section"
            smooth={true}
            duration={1000}
            className="text-white text-xl font-bold py-2 px-6 rounded-full cursor-pointer transition duration-300"
            style={{
              background: 'linear-gradient(90deg, #00C9FF, #92FE9D)',
              boxShadow: '0 4px 15px rgba(0, 201, 255, 0.4)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 20px rgba(0, 201, 255, 0.5)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 15px rgba(0, 201, 255, 0.4)';
            }}
          >
            {language === 'en' ? 'Get Started' : 'ابدأ الآن'}
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default HeroVideo;
