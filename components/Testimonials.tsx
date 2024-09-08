
// components/Testimonials.tsx
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './pricing.module.css';

interface Testimonial {
  text: {
    en: string;
    ar: string;
  };
  author: {
    en: string;
    ar: string;
  };
}

const testimonials: Testimonial[] = [
  {
    text: {
      en: 'Excellent service and high customization that suits my needs. I recommend this service to everyone.',
      ar: 'خدمة ممتازة وتخصيص عالي يناسب احتياجاتي. أوصي بهذه الخدمة للجميع.'
    },
    author: {
      en: 'Senior Officer in the Military',
      ar: 'ضابط كبير في الجيش'
    }
  },
  {
    text: {
      en: 'Great and enjoyable experience. The available programs really help in achieving my health goals.',
      ar: 'تجربة رائعة وممتعة. البرامج المتاحة فعلاً تساعد في تحقيق أهدافي الصحية.'
    },
    author: {
      en: 'High-Ranking Military Official',
      ar: 'مسؤول عسكري رفيع المستوى'
    }
  },
  {
    text: {
      en: 'Excellent support from the team. I can see a big difference in my fitness level since I started using this program.',
      ar: 'دعم متميز من الفريق. يمكنني أن أرى فرقاً كبيراً في مستوى لياقتي منذ أن بدأت استخدام هذا البرنامج.'
    },
    author: {
      en: 'Airport Executive',
      ar: 'مدير مطار'
    }
  },
  {
    text: {
      en: 'Excellent service and high customization that suits my needs. I recommend this service to everyone.',
      ar: 'خدمة ممتازة وتخصيص عالي يناسب احتياجاتي. أوصي بهذه الخدمة للجميع.'
    },
    author: {
      en: 'Corporate Executive in the Automotive Industry',
      ar: 'مدير تنفيذي في صناعة السيارات'
    }
  },
];


const Testimonials: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className= "bg-[#f4f4f4] py-12 mt-10 py-12 relative" >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-black">
          {language === 'en' ? 'Our Clients Love Us' : 'عملائنا يحبوننا'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-blue-100 p-6 text-black rounded-lg shadow-lg">
              <p className="text-lg mb-4 ">{testimonial.text[language as 'en' | 'ar']}</p>
              <p className="text-sm text-right font-bold text-gray-900">- {testimonial.author[language as 'en' | 'ar']}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
