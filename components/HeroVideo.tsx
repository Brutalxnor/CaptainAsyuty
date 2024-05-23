// import React from 'react';
// import Navbar from '@/components/navbar';

// const HeroVideo: React.FC = () => {
//   return (
//     <div className="relative h-[75vh] overflow-hidden">
//         <Navbar />
//       <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
//         <source src="/website.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white z-20">
//         <h1 className="text-5xl font-bold">قوي، جذاب، واثق</h1>
//         <p className="mt-4 text-xl">خلينا نبقى أفضل بنسبة 1% كل يوم</p>
//         <div className="mt-6 flex space-x-4">
//           <button className="bg-black text-white py-2 px-6 rounded-full" style={{ borderRadius: '30px' }}>ابدأ الآن</button>
//           <button className="bg-black text-white py-2 px-6 rounded-full" style={{ borderRadius: '30px' }}>المتجر</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroVideo;


import React from 'react';
import Navbar from '@/components/navbar';

const HeroVideo: React.FC = () => {
  return (
    <div className="relative h-[75vh] overflow-hidden">
      <Navbar />
      <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
        <source src="/website.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white z-20">
        <h1 className="text-6xl font-bold">قوي، جذاب، واثق</h1>
        <p className="mt-4 text-xl">خلينا نبقى أفضل بنسبة 1% كل يوم</p>
        <div className="mt-6 flex space-x-4">
          <button className="bg-black text-white text-xl font-bold py-2 px-6 rounded-full" style={{ borderRadius: '30px' }}>ابدأ الآن</button>
          <button className="bg-black text-white text-xl font-bold py-2 px-6 rounded-full" style={{ borderRadius: '30px' }}>المتجر</button>
        </div>
      </div>
    </div>
  );
};

export default HeroVideo;