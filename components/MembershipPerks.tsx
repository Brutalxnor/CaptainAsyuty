


// components/MembershipPerks.tsx
import { FC } from 'react';
import { FaBullhorn, FaVideo, FaUsers, FaClipboard, FaUtensils, FaEnvelope } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

interface Perk {
  icon: JSX.Element;
  title: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
}

const perks: Perk[] = [
  {
    icon: <FaBullhorn className="mx-auto text-4xl text-blue-500 mb-4 " />,
    title: {
      en: 'Stay Motivated',
      ar: 'خليك دايما متحمس'
    },
    description: {
      en: 'We publish new workouts regularly so you stay motivated with our programs. Trust us, you will never get bored of your routine.',
      ar: 'ننشر تدريبات جديدة بانتظام حتى تظل متحمسًا ببرامجنا. ثق بنا، لن تشعر بالملل أبدًا من روتينك.'
    }
  },
  {
    icon: <FaVideo className="mx-auto text-4xl text-blue-500 mb-4" />,
    title: {
      en: 'Easy-to-Follow Videos',
      ar: 'فيديوهات سهلة المتابعة'
    },
    description: {
      en: 'Our videos with simple instructions ensure that you are working out correctly and avoiding injuries.',
      ar: 'فيديوهاتنا مع تعليمات بسيطة تضمن أنك تتدرب بالطريقة الصحيحة وتتجنب الإصابات.'
    }
  },
  {
    icon: <FaUsers className="mx-auto text-4xl text-blue-500 mb-4" />,
    title: {
      en: 'Community',
      ar: 'مجتمع'
    },
    description: {
      en: 'Travel Well Club is all about building a community that cares about maintaining or creating healthy habits, even while on the go!',
      ar: 'نادي ترافيل ويل يتمحور حول بناء مجتمع يهتم بالمحافظة على العادات الصحية أو إنشائها، حتى أثناء التنقل!'
    }
  },
  {
    icon: <FaClipboard className="mx-auto text-4xl text-blue-500 mb-4" />,
    title: {
      en: 'Workout Programs',
      ar: 'برامج التدريبات'
    },
    description: {
      en: 'Our programs are tailored for all fitness levels and ages, so you can achieve your goals no matter what they are.',
      ar: 'برامجنا مخصصة لجميع مستويات اللياقة والأعمار، حتى تتمكن من تحقيق أهدافك مهما كانت.'
    }
  },
  {
    icon: <FaUtensils className="mx-auto text-4xl text-blue-500 mb-4" />,
    title: {
      en: 'Simplified Nutrition',
      ar: 'تغذية مبسطة'
    },
    description: {
      en: 'Know exactly what to eat, what to buy at the grocery store, and how to find foods that will keep you energized and thriving.',
      ar: 'تعرف بالضبط ما يجب تناوله، وما يجب شراؤه من البقالة، وكيفية اكتشاف الأطعمة التي ستبقيك نشيطًا ومفعمًا بالحيوية.'
    }
  },
  {
    icon: <FaEnvelope className="mx-auto text-4xl text-blue-500 mb-4" />,
    title: {
      en: 'Talk to Me',
      ar: 'تحدث معي'
    },
    description: {
      en: 'Message me directly in the app if you have any questions. We always strive to improve our programs and support!',
      ar: 'راسلني مباشرة في التطبيق إذا كان لديك أي أسئلة. نحن دائمًا نسعى لتحسين برامجنا ودعمنا!'
    }
  }
];

const MembershipPerks: FC = () => {
  const { language } = useLanguage();

  return (
    <div className=" py-12 text-gray-900 relative">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          {language === 'en' ? 'Membership Perks' : 'مميزات العضوية'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {perks.map((perk, index) => (
            <div key={index} className="text-center text-gray-900">
              {perk.icon}
              <h3 className="text-xl font-bold mb-2 text-gray-900">{perk.title[language as 'en' | 'ar']}</h3>
              <p>{perk.description[language as 'en' | 'ar']}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MembershipPerks;
