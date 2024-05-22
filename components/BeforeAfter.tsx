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
    ],
    fatLoss: [
      '/images/fat-loss-1.jpg',
      '/images/fat-loss-2.jpg',
      '/images/fat-loss-3.jpg',
      '/images/fat-loss-4.jpg',
      '/images/fat-loss-5.jpg',
      '/images/fat-loss-6.jpg',
      '/images/fat-loss-7.jpg',
      '/images/muscle-gain-9.jpg',
      '/images/fat-loss-8.jpg',
    ],
  };
  const BeforeAfter: React.FC = () => {
    return (
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">نتائج مذهلة</h2>
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 bg-gray-300 p-2 rounded-lg text-center">زيادة العضلات</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {beforeAfterData.muscleGain.map((src, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                  <img src={src} alt={`Muscle Gain ${index + 1}`} className="rounded-lg w-full" />
                  <p className="text-center mt-2">Before and After</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gray-300 p-2 rounded-lg text-center">خسارة الدهون</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {beforeAfterData.fatLoss.map((src, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                  <img src={src} alt={`Fat Loss ${index + 1}`} className="rounded-lg w-full" />
                  <p className="text-center mt-2">Before and After</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default BeforeAfter;
   
  // const BeforeAfter: React.FC = () => {
  //   return (
  //     <div className="bg-gray-300 py-12 px-6 rounded-2xl mx-6 my-8">
  //       <h2 className="text-3xl font-bold text-center mb-8">نتائج مذهلة</h2>
  //       <div className="mb-8">
  //         <h3 className="text-2xl font-bold mb-4 text-center">زيادة العضلات</h3>
  //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  //           {beforeAfterData.muscleGain.map((src, index) => (
  //             <div key={index} className="bg-white p-4 rounded-2xl shadow-md">
  //               <img src={src} alt={`Muscle Gain ${index + 1}`} className="w-full rounded-2xl" />
  //               <p className="text-center mt-2">Before and After</p>
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //       <div>
  //         <h3 className="text-2xl font-bold mb-4 text-center">خسارة الدهون</h3>
  //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  //           {beforeAfterData.fatLoss.map((src, index) => (
  //             <div key={index} className="bg-white p-4 rounded-2xl shadow-md">
  //               <img src={src} alt={`Fat Loss ${index + 1}`} className="w-full rounded-2xl" />
  //               <p className="text-center mt-2">Before and After</p>
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
  // export default BeforeAfter;
  