


import React from 'react';
import { FaMedal, FaCertificate } from 'react-icons/fa';
import Layout from '../components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggleLanding from '@/components/LanguageToggleLanding';

const About = () => {
  const { language } = useLanguage();

  const content = {
    title: {
      en: 'About Captain El Asyuty',
      ar: 'عن الكابتن الأسيوطي',
    },
    description: [
      {
        en: 'Captain El Asyuty is a renowned fitness expert and coach with over 8 years of experience in the field of health and fitness. He is dedicated to helping individuals achieve their fitness goals through personalized training programs and nutrition plans. Captain El Asyuty holds multiple certifications in fitness and nutrition, making him a trusted authority in the industry.',
        ar: 'الكابتن الأسيوطي هو خبير لياقة ومدرب مشهور بأكثر من 8 عامًا من الخبرة في مجال الصحة واللياقة البدنية. يكرس نفسه لمساعدة الأفراد على تحقيق أهدافهم اللياقية من خلال برامج تدريب شخصية وخطط تغذية. يحمل الكابتن الأسيوطي العديد من الشهادات في اللياقة والتغذية، مما يجعله مرجعًا موثوقًا في هذا المجال.',
      },
      {
        en: 'With a background in competitive sports, Captain El Asyuty has developed a unique training methodology that combines strength training, cardio workouts, and flexibility exercises. His approach is tailored to meet the needs of each client, ensuring optimal results and a sustainable healthy lifestyle.',
        ar: 'بفضل خلفيته في الرياضات التنافسية، طور الكابتن الأسيوطي منهجية تدريب فريدة تجمع بين تدريب القوة وتمارين القلب وتمارين المرونة. يهدف نهجه إلى تلبية احتياجات كل عميل، مما يضمن تحقيق نتائج مثالية ونمط حياة صحي مستدام.',
      },
      {
        en: 'Captain El Asyuty is also a certified personal trainer by the International Sports Sciences Association (ISSA) and holds a CPR certification, demonstrating his commitment to safety and professional excellence.',
        ar: 'الكابتن الأسيوطي هو أيضًا مدرب شخصي معتمد من الجمعية الدولية لعلوم الرياضة (ISSA) ويحمل شهادة CPR، مما يبرز التزامه بالأمان والتميز المهني.',
      },
    ],
    buttons: {
      issa: {
        en: 'Download ISSA Certificate',
        ar: 'تحميل شهادة ISSA',
      },
      cpr: {
        en: 'Download CPR Certificate',
        ar: 'تحميل شهادة CPR',
      },
    },
  };

  return (
    <Layout>
      <div className="min-h-screen bg-black flex flex-col items-center justify-center py-12 px-4">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              {content.title[language as 'en' | 'ar']}
            </h1>
            <img
              src="/captain asuyty.jpeg"
              alt="Captain El Asyuty"
              className="mx-auto rounded-full w-32 h-32 mb-4"
            />
            {content.description.map((desc, index) => (
              <p key={index} className="text-lg text-gray-600 mb-4">
                {desc[language as 'en' | 'ar']}
              </p>
            ))}
            <div className="flex justify-center mt-8">
              <div className="mx-4">
                <a
                  href="/ISSA.pdf"
                  target="_blank"
                  className="flex items-center bg-blue-500 text-white py-2 px-4 rounded-full shadow hover:bg-blue-600 transition duration-300"
                >
                  <FaCertificate className="mr-2" />
                  {content.buttons.issa[language as 'en' | 'ar']}
                </a>
              </div>
              <div className="mx-4">
                <a
                  href="/CPR.pdf"
                  target="_blank"
                  className="flex items-center bg-green-500 text-white py-2 px-4 rounded-full shadow hover:bg-green-600 transition duration-300"
                >
                  <FaMedal className="mr-2" />
                  {content.buttons.cpr[language as 'en' | 'ar']}
                </a>
              </div>
            </div>
          </div>
        </div>
        <LanguageToggleLanding />
      </div>
    </Layout>
  );
};

export default About;
