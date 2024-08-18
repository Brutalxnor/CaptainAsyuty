import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useRouter } from 'next/router';

const AboutMe: React.FC = () => {
  const { language } = useLanguage();
  const router = useRouter();

  const content = {
    title: {
      en: 'About Captain El Asyuty',
      ar: 'عن الكابتن الأسيوطي',
    },
    briefDescription: {
      en: 'Captain El Asyuty is a renowned fitness expert with over 8 years of experience. He helps individuals achieve their fitness goals through personalized training programs and nutrition plans.',
      ar: 'الكابتن الأسيوطي هو خبير لياقة مشهور بأكثر من 8 سنوات من الخبرة. يساعد الأفراد على تحقيق أهدافهم اللياقية من خلال برامج تدريب شخصية وخطط تغذية.',
    },
    moreButton: {
      en: 'More About Me',
      ar: 'المزيد عني',
    },
  };

  const handleMoreAboutMe = () => {
    router.push('/about');
  };

  return (
    <div className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-white-700">
          {content.title[language as 'en' | 'ar']}
        </h2>
        <div className="shadow-lg rounded-lg p-6 max-w-4xl mx-auto bg-transparent">
          <p className="text-lg text-center text-gray-200 mb-4">
            {content.briefDescription[language as 'en' | 'ar']}
          </p>
        </div>
        <div className="text-center mt-6">
          <button
            onClick={handleMoreAboutMe}
            className="bg-blue-500 text-white py-2 px-4 rounded-full shadow hover:bg-blue-600 transition duration-300"
          >
            {content.moreButton[language as 'en' | 'ar']}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
