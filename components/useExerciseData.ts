import { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';

interface ExerciseOption {
  name: string;
  reps?: string;
  day: string;
}

interface ExerciseData {
  [type: string]: {
    [day: string]: ExerciseOption[];
  };
}

const useExerciseData = () => {
  const [exerciseData, setExerciseData] = useState<ExerciseData>({});

  useEffect(() => {
    const fetchExerciseData = async () => {
      try {
        console.log('Fetching exercise data...');
        
        // Define the exercise types and their corresponding file names
        const exerciseFiles = [
          'Power Series 3 Days.xlsx',
          'Power Series 5 Days.xlsx',
          'Power Series 6 Days.xlsx',
          'Pro Split 4 Days.xlsx',
          'Push-Pull-Leg 3 Days.xlsx',
          'Push-Pull-Leg 5 Days.xlsx',
          'Push-Pull-Leg 6 Days.xlsx',
          'Upper-Lower 3 Days.xlsx',
          'Upper-Lower 4 Days.xlsx',
          'Upper-Lower 5 Days.xlsx',
          'Upper-Lower 6 Days.xlsx'
        ];

        const parsedData: ExerciseData = {};

        for (const file of exerciseFiles) {
          const response = await fetch(`/${file}`); // URL relative to the public folder
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.arrayBuffer();
          console.log(`Exercise data fetched successfully from ${file}:`, data);

          const workbook = XLSX.read(data, { type: 'array' });
          console.log('Workbook read successfully:', workbook);

          const type = file.replace('.xlsx', '');
          workbook.SheetNames.forEach(sheetName => {
            const sheet = workbook.Sheets[sheetName];
            const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 }) as string[][];

            const day = sheetName;
            if (!parsedData[type]) parsedData[type] = {};
            parsedData[type][day] = rows.slice(1).map(row => ({
              name: row[0],
              day: day,
            }));
            console.log(`Parsed data for sheet ${sheetName} in file ${file}:`, parsedData[type][day]);
          });
        }

        setExerciseData(parsedData);
        console.log('Exercise data set successfully:', parsedData);
      } catch (error) {
        console.error('Error fetching exercise data:', error);
      }
    };

    fetchExerciseData();
  }, []);

  return exerciseData;
};

export default useExerciseData;
