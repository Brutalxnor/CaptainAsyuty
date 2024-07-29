
// components/Testimonials.tsx
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

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
      en: 'Brigadier General in the Egyptian Army',
      ar: 'عميد بالجيش المصري'
    }
  },
  {
    text: {
      en: 'Great and enjoyable experience. The available programs really help in achieving my health goals.',
      ar: 'تجربة رائعة وممتعة. البرامج المتاحة فعلاً تساعد في تحقيق أهدافي الصحية.'
    },
    author: {
      en: 'Lieutenant Colonel in the Egyptian Army',
      ar: 'مقدم بالجيش المصري'
    }
  },
  {
    text: {
      en: 'Excellent support from the team. I can see a big difference in my fitness level since I started using this program.',
      ar: 'دعم متميز من الفريق. يمكنني أن أرى فرقاً كبيراً في مستوى لياقتي منذ أن بدأت استخدام هذا البرنامج.'
    },
    author: {
      en: 'Head of Almaza Airport',
      ar: 'رئيس مطار ألماظة'
    }
  },
  {
    text: {
      en: 'Excellent service and high customization that suits my needs. I recommend this service to everyone.',
      ar: 'خدمة ممتازة وتخصيص عالي يناسب احتياجاتي. أوصي بهذه الخدمة للجميع.'
    },
    author: {
      en: 'Head of Toyota Kuwait',
      ar: 'رئيس تويوتا الكويت'
    }
  },
];

const Testimonials: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="py-12 bg-gray-100 light:bg-gray-900 relative">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
          {language === 'en' ? 'Our Clients Love Us' : 'عملائنا يحبوننا'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-blue-100 p-6 rounded-lg shadow-lg">
              <p className="text-lg mb-4 text-gray-900">{testimonial.text[language as 'en' | 'ar']}</p>
              <p className="text-sm text-right font-bold text-gray-900">- {testimonial.author[language as 'en' | 'ar']}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
