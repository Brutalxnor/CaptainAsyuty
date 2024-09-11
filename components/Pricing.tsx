


import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './pricing.module.css';

const Pricing = () => {
  const { language } = useLanguage();

  const plans = [
    {
      title: { en: '1 Month', ar: 'شهر 2' },
      price: { en: '999 EGP / month', ar: '999 جنيه / شهرين' },
      features: [
        { en: 'Weekly Exercise Updates', ar: 'تحديثات التمرين أسبوعياً' },
        { en: 'Nutrition Plan', ar: 'خطة تغذية' },
        { en: 'Basic Support', ar: 'مساعدة أساسية' },
      ],
      link: '/sign-up?plan=1month',
      buttonColor: 'bg-gradient-to-r from-blue-400 to-blue-600',
      buttonHoverColor: 'hover:from-blue-500 hover:to-blue-700',
    },
    {
      title: { en: '3 Months', ar: '3 شهور' },
      price: { en: '1299 EGP / 3 months', ar: '1199 جنيه / 3 شهور' },
      features: [
        { en: 'Weekly Exercise Updates', ar: 'تحديثات التمرين أسبوعياً' },
        { en: 'Nutrition Plan', ar: 'خطة تغذية' },
        { en: 'Priority Support', ar: 'مساعدة ذات أولوية' },
      ],
      link: '/sign-up?plan=3months',
      buttonColor: 'bg-gradient-to-r from-green-400 to-green-600',
      buttonHoverColor: 'hover:from-green-500 hover:to-green-700',
    },
    {
      title: { en: '6 Months', ar: '6 شهور' },
      price: { en: '2399 EGP / 6 months', ar: '2299 جنيه / 6 شهور' },
      features: [
        { en: 'Weekly Exercise Updates', ar: 'تحديثات التمرين أسبوعياً' },
        { en: 'Nutrition Plan', ar: 'خطة تغذية' },
        { en: 'Personal Support', ar: 'مساعدة شخصية' },
      ],
      link: '/sign-up?plan=6months',
      buttonColor: 'bg-gradient-to-r from-red-400 to-red-600',
      buttonHoverColor: 'hover:from-red-500 hover:to-red-700',
    },
  ];
  
  return (
    <div className={styles.pricingContainer + " py-12 mt-10"}>
      <h2 className={styles.heading + " text-center text-4xl font-bold mb-8 text-black font-serif"}>
        {language === 'en' ? 'Reasonable and Flexible Plans' : 'خطط معقولة ومرنة'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div key={index} className={styles.pricingCard + " border border-gray-300 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 font-serif"}>
            <h3 className={styles.cardTitle + " text-2xl font-bold mb-4 text-center"}>
              {plan.title[language as 'en' | 'ar']}
            </h3>
            <p className={styles.price + " text-3xl font-bold text-center"}>
              {plan.price[language as 'en' | 'ar']}
            </p>
            <div className={styles.features + " mt-4"}>
              {plan.features.map((feature, idx) => (
                <p key={idx} className="font-bold">
                  {feature[language as 'en' | 'ar']}
                </p>
              ))}
            </div>
            <Link href={plan.link}>
              <button className={`${styles.subscribeBtn} ${plan.buttonColor} text-white py-3 px-6 rounded-full mt-6 block mx-auto ${plan.buttonHoverColor} transition-colors duration-300 font-serif transform hover:scale-105`}>
                {language === 'en' ? 'Sign Up Now' : 'اشترك الآن'}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
