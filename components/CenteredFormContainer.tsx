// import React from 'react';

// interface CenteredFormContainerProps {
//   children: React.ReactNode;
// }

// const CenteredFormContainer: React.FC<CenteredFormContainerProps> = ({ children }) => {
//   return (
//     <div className="flex items-center justify-center min-h-full bg-gray-100 place-items-center ">
//       <div className="p-8 bg-white shadow-md rounded-lg ">
//         {children}
//       </div>
//     </div>
//   );
// };

// export default CenteredFormContainer;



// components/CenteredFormContainer.tsx
import React from 'react';

const CenteredFormContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div className="p-8 bg-white shadow-md rounded-lg">
        {children}
      </div>
    </div>
  );
};

export default CenteredFormContainer;
