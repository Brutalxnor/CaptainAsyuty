// import React, { useState } from 'react';
// import * as XLSX from 'xlsx';

// const ExcelReader = () => {
//   const [data, setData] = useState<{ [key: string]: any[] }>({});

//   const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         const arrayBuffer = e.target?.result;
//         const workbook = XLSX.read(arrayBuffer, { type: 'array' });
//         const sheetsData: { [key: string]: any[] } = {};

//         workbook.SheetNames.forEach(sheetName => {
//           const worksheet = workbook.Sheets[sheetName];
//           const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
//           sheetsData[sheetName] = jsonData;
//         });

//         setData(sheetsData);
//       };
//       reader.readAsArrayBuffer(file);
//     }
//   };

//   return (
//     <div>
//       <h1>Excel File Reader</h1>
//       <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
//       {Object.keys(data).map(sheetName => (
//         <div key={sheetName}>
//           <h2>{sheetName}</h2>
//           {data[sheetName].length > 0 && (
//             <table>
//               <thead>
//                 <tr>
//                   {data[sheetName][0].map((header, index) => (
//                     <th key={index}>{header}</th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {data[sheetName].slice(1).map((row, rowIndex) => (
//                   <tr key={rowIndex}>
//                     {row.map((cell, cellIndex) => (
//                       <td key={cellIndex}>{cell}</td>
//                     ))}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ExcelReader;
