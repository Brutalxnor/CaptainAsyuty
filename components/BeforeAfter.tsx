







//   // components/BeforeAfter.tsx
// import React from 'react';
// import { useLanguage } from '@/contexts/LanguageContext';

// const beforeAfterData = {
//   muscleGain: [
//     '/images/muscle-gain-1.jpg',
//     '/images/muscle-gain-2.jpg',
//     '/images/muscle-gain-3.jpg',
//     '/images/muscle-gain-4.jpg',
//     '/images/muscle-gain-5.jpg',
//     '/images/muscle-gain-6.jpg',
//     '/images/muscle-gain-7.jpg',
//     '/images/muscle-gain-8.jpg',
//     '/images/muscle-gain-10.jpg',
//   ],
//   fatLoss: [
//     '/images/fat-loss-1.jpg',
//     '/images/fat-loss-2.jpg',
//     '/images/fat-loss-3.jpg',
//     '/images/fat-loss-4.jpg',
//     '/images/fat-loss-5.jpg',
//     '/images/fat-loss-6.jpg',
//     '/images/fat-loss-7.jpg',
//     '/images/muscle-gain-9.jpg',
//     '/images/fat-loss-8.jpg',
//   ],
// };

// const BeforeAfter: React.FC = () => {
//   const { language } = useLanguage();

//   return (
//     <div className="bg-gray-100 py-12 relative">
//       <div className="container mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
//           {language === 'en' ? 'Amazing Results' : 'نتائج مذهلة'}
//         </h2>
//         <div className="mb-8">
//           <h3 className="text-2xl font-bold mb-4 bg-gray-300 p-2 rounded-lg text-center text-gray-900">
//             {language === 'en' ? 'Muscle Gain' : 'زيادة العضلات'}
//           </h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//             {beforeAfterData.muscleGain.map((src, index) => (
//               <div key={index} className="bg-white p-4 rounded-lg shadow-md">
//                 <img src={src} alt={`Muscle Gain ${index + 1}`} className="rounded-lg w-full" />
//                 <p className="text-center mt-2 text-gray-900">{language === 'en' ? 'Before and After' : 'قبل وبعد'}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div>
//           <h3 className="text-2xl font-bold mb-4 bg-gray-300 p-2 rounded-lg text-center text-gray-900">
//             {language === 'en' ? 'Fat Loss' : 'خسارة الدهون'}
//           </h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//             {beforeAfterData.fatLoss.map((src, index) => (
//               <div key={index} className="bg-white p-4 rounded-lg shadow-md">
//                 <img src={src} alt={`Fat Loss ${index + 1}`} className="rounded-lg w-full" />
//                 <p className="text-center mt-2 text-gray-900">{language === 'en' ? 'Before and After' : 'قبل وبعد'}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BeforeAfter;






import React from 'react';
import Slider from 'react-slick';
import { useLanguage } from '@/contexts/LanguageContext';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const beforeAfterData = {
  muscleGain: [
    '/images/muscle-gain-1.jpg',
    '/images/muscle-gain-2.jpg',
    '/images/muscle-gain-3.jpg',
    '/images/muscle-gain-4.jpg',
    '/images/muscle-gain-5.jpg',
    '/images/muscle-gain-6.jpg',
    '/images/muscle-gain-7.jpg',
    '/images/muscle-gain-8.jpg',
    '/images/muscle-gain-10.jpg',
    '/images/muscle-gain-11.jpg', // Additional images
    '/images/muscle-gain-13.jpg',
    '/images/muscle-gain-14.jpg',
    '/images/muscle-gain-15.jpg',
    '/images/muscle-gain-16.jpg',
  ],
  fatLoss: [
    '/images/fat-loss-1.jpg',
    '/images/fat-loss-2.jpg',
    '/images/fat-loss-3.jpg',
    '/images/fat-loss-4.jpg',
    '/images/fat-loss-5.jpg',
    '/images/fat-loss-7.jpg',
    '/images/muscle-gain-9.jpg',
    '/images/fat-loss-8.jpg',
    '/images/fat-loss-9.jpg', // Additional images
    '/images/fat-loss-10.jpg',
    '/images/fat-loss-11.jpg',
    '/images/fat-loss-12.jpg',
    '/images/fat-loss-13.jpg',
    '/images/fat-loss-14.jpg',
    '/images/fat-loss-15.jpg',
  ],
};

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const BeforeAfter: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className=" bg-[#f4f4f4] text-black py-12 relative">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
          {language === 'en' ? 'Amazing Results' : 'نتائج مذهلة'}
        </h2>
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 bg-black text-slate-100 p-2 rounded-lg text-center ">
            {language === 'en' ? 'Muscle Gain' : 'زيادة العضلات'}
          </h3>
          <Slider {...sliderSettings}>
            {beforeAfterData.muscleGain.map((src, index) => (
              <div key={index} className="p-4">
                <div className="p-4 rounded-lg shadow-md">

                  <img src={src} alt={`Muscle Gain ${index + 1}`} className="rounded-lg w-full" />
                  <p className="text-center mt-2 text-gray-900">{language === 'en' ? 'Before and After' : 'قبل وبعد'}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4 bg-black text-slate-100 p-2 rounded-lg text-center">
            {language === 'en' ? 'Fat Loss' : 'خسارة الدهون'}
          </h3>
          <Slider {...sliderSettings}>
            {beforeAfterData.fatLoss.map((src, index) => (
              <div key={index} className="p-4">
                <div className=" p-4 rounded-lg shadow-md">
                  <img src={src} alt={`Fat Loss ${index + 1}`} className="rounded-lg w-full" />
                  <p className="text-center mt-2 text-black">{language === 'en' ? 'Before and After' : 'قبل وبعد'}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfter;
