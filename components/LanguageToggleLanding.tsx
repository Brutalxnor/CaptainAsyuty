import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggleLanding: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-600 transition-colors duration-300 z-50"
    >
      {language === 'en' ? 'AR' : 'US'}
    </button>
  );
};

export default LanguageToggleLanding;
