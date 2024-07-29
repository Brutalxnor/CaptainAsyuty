// import { NextApiRequest, NextApiResponse } from 'next';
// import clientPromise from '@/lib/mongodb';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'POST') {
//     res.setHeader('Allow', ['POST']);
//     return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
//   }

//   const { email, exerciseName, setIndex, started, finished, timer, exerciseStarted, exerciseFinished } = req.body;

//   if (!email || !exerciseName) {
//     return res.status(400).json({ message: 'Email and exerciseName are required' });
//   }

//   try {
//     const client = await clientPromise;
//     const db = client.db('ClientsDB');
//     const updateData: any = {};

//     // Update set-specific properties
//     if (setIndex !== undefined) {
//       if (started !== undefined) updateData[`exercises.$[exercise].sets.${setIndex}.started`] = started;
//       if (finished !== undefined) updateData[`exercises.$[exercise].sets.${setIndex}.finished`] = finished;
//       if (timer !== undefined) updateData[`exercises.$[exercise].sets.${setIndex}.timer`] = timer;
//     }

//     // Update exercise-level properties
//     if (exerciseStarted !== undefined) updateData['exercises.$[exercise].started'] = exerciseStarted;
//     if (exerciseFinished !== undefined) updateData['exercises.$[exercise].finished'] = exerciseFinished;

//     console.log('Update data:', updateData);

//     const result = await db.collection('Exercises').updateOne(
//       { email, 'exercises.name': exerciseName },
//       { $set: updateData },
//       { arrayFilters: [{ 'exercise.name': exerciseName }] }
//     );

//     if (result.matchedCount === 0) {
//       console.error('Failed to update exercise set: No documents matched the query criteria.');
//       return res.status(404).json({ message: 'Exercise not found' });
//     }

//     if (result.modifiedCount === 0) {
//       console.error('Failed to update exercise set: Document found but not modified.');
//       return res.status(304).json({ message: 'No changes made to the exercise set' });
//     }

//     res.status(200).json({ message: 'Exercise set updated successfully' });
//   } catch (error: any) {
//     console.error('Error updating exercise set:', error.message);
//     res.status(500).json({ message: 'Error updating exercise set', error: error.message });
//   }
// }








// import { NextApiRequest, NextApiResponse } from 'next';
// import clientPromise from '@/lib/mongodb';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'POST') {
//     res.setHeader('Allow', ['POST']);
//     return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
//   }

//   const { email, exerciseName, setIndex, started, finished } = req.body;

//   if (!email || !exerciseName) {
//     return res.status(400).json({ message: 'Email and exerciseName are required' });
//   }

//   try {
//     const client = await clientPromise;
//     const db = client.db('ClientsDB');
//     const updateData: any = {};

//     // Update set-specific properties
//     if (setIndex !== undefined) {
//       if (started !== undefined) updateData[`exercises.$[exercise].sets.${setIndex}.started`] = started;
//       if (finished !== undefined) updateData[`exercises.$[exercise].sets.${setIndex}.finished`] = finished;
//     }

//     console.log('Update data:', updateData);

//     const result = await db.collection('Exercises').updateOne(
//       { email, 'exercises.name': exerciseName },
//       { $set: updateData },
//       { arrayFilters: [{ 'exercise.name': exerciseName }] }
//     );

//     if (result.matchedCount === 0) {
//       console.error('Failed to update exercise set: No documents matched the query criteria.');
//       return res.status(404).json({ message: 'Exercise not found' });
//     }

//     if (result.modifiedCount === 0) {
//       console.error('Failed to update exercise set: Document found but not modified.');
//       return res.status(304).json({ message: 'No changes made to the exercise set' });
//     }

//     res.status(200).json({ message: 'Exercise set updated successfully' });
//   } catch (error: any) {
//     console.error('Error updating exercise set:', error.message);
//     res.status(500).json({ message: 'Error updating exercise set', error: error.message });
//   }
// }





// import { NextApiRequest, NextApiResponse } from 'next';
// import clientPromise from '@/lib/mongodb';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'POST') {
//     res.setHeader('Allow', ['POST']);
//     return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
//   }

//   const { email, exerciseName, setIndex, started, finished, timer, exerciseStarted, exerciseFinished  } = req.body;

//   if (!email || !exerciseName) {
//     return res.status(400).json({ message: 'Email and exerciseName are required' });
//   }

//   try {
//     const client = await clientPromise;
//     const db = client.db('ClientsDB');

//     const updateData: any = {};
//     if (setIndex !== undefined) {
//       if (started !== undefined) updateData[`exercises.$[exercise].sets.${setIndex}.started`] = started;
//       if (finished !== undefined) updateData[`exercises.$[exercise].sets.${setIndex}.finished`] = finished;
//       if (timer !== undefined) updateData[`exercises.$[exercise].sets.${setIndex}.timer`] = timer;
//     }
//     if (exerciseStarted !== undefined) updateData['exercises.$[exercise].started'] = exerciseStarted;
//     if (exerciseFinished !== undefined) updateData['exercises.$[exercise].finished'] = exerciseFinished;
    
//     const result = await db.collection('Exercises').updateOne(
//       { email, 'exercises.name': exerciseName },
//       { $set: updateData },
//       { arrayFilters: [{ 'exercise.name': exerciseName }] }
//     );

//     if (result.matchedCount === 0) {
//       return res.status(404).json({ message: 'Exercise not found' });
//     }

//     res.status(200).json({ message: 'Exercise set updated successfully' });
//   } catch (error: any) {
//     console.error('Error updating exercise set:', error.message);
//     res.status(500).json({ message: 'Error updating exercise set', error: error.message });
//   }
// }






// import { NextApiRequest, NextApiResponse } from 'next';
// import clientPromise from '@/lib/mongodb';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'POST') {
//     res.setHeader('Allow', ['POST']);
//     return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
//   }

//   const { email, exerciseId, exerciseStarted } = req.body;

//   if (!email || !exerciseId) {
//     return res.status(400).json({ message: 'Email and exerciseId are required' });
//   }

//   try {
//     const client = await clientPromise;
//     const db = client.db('ClientsDB');

//     const updateData: any = {};
//     if (exerciseStarted !== undefined) updateData['exercises.$[exercise].started'] = exerciseStarted;
    
//     const result = await db.collection('Exercises').updateOne(
//       { email, 'exercises.id': exerciseId },
//       { $set: updateData },
//       { arrayFilters: [{ 'exercise.id': exerciseId }] }
//     );

//     if (result.matchedCount === 0) {
//       return res.status(404).json({ message: 'Exercise not found' });
//     }

//     res.status(200).json({ message: 'Exercise updated successfully' });
//   } catch (error: any) {
//     console.error('Error updating exercise:', error.message);
//     res.status(500).json({ message: 'Error updating exercise', error: error.message });
//   }
// }



// import { NextApiRequest, NextApiResponse } from 'next';
// import clientPromise from '@/lib/mongodb';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'POST') {
//     res.setHeader('Allow', ['POST']);
//     return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
//   }

//   const { email, exerciseId, setIndex, weight, reps, exerciseStarted } = req.body;

//   if (!email || !exerciseId) {
//     return res.status(400).json({ message: 'Email and exerciseId are required' });
//   }

//   try {
//     const client = await clientPromise;
//     const db = client.db('ClientsDB');

//     const updateData: any = {};
//     if (setIndex !== undefined) {
//       if (weight !== undefined) updateData[`exercises.$[exercise].sets.${setIndex}.weight`] = weight;
//       if (reps !== undefined) updateData[`exercises.$[exercise].sets.${setIndex}.reps`] = reps;
//     }
//     if (exerciseStarted !== undefined) updateData['exercises.$[exercise].started'] = exerciseStarted;
    
//     const result = await db.collection('Exercises').updateOne(
//       { email, 'exercises.id': exerciseId },
//       { $set: updateData },
//       { arrayFilters: [{ 'exercise.id': exerciseId }] }
//     );

//     if (result.matchedCount === 0) {
//       return res.status(404).json({ message: 'Exercise not found' });
//     }

//     res.status(200).json({ message: 'Exercise set updated successfully' });
//   } catch (error: any) {
//     console.error('Error updating exercise set:', error.message);
//     res.status(500).json({ message: 'Error updating exercise set', error: error.message });
//   }
// }

// pages/api/update-exercise.ts
import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }

  const { email, exerciseId, weights, reps, exerciseStarted } = req.body;

  if (!email || !exerciseId) {
    return res.status(400).json({ message: 'Email and exerciseId are required' });
  }

  try {
    const client = await clientPromise;
    const db = client.db('ClientsDB');

    const updateData: any = {};
    if (weights !== undefined) updateData['exercises.$[exercise].weights'] = weights;
    if (reps !== undefined) updateData['exercises.$[exercise].reps'] = reps;
    if (exerciseStarted !== undefined) updateData['exercises.$[exercise].started'] = exerciseStarted;

    const result = await db.collection('Exercises').updateOne(
      { email, 'exercises.id': exerciseId },
      { $set: updateData },
      { arrayFilters: [{ 'exercise.id': exerciseId }] }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: 'Exercise not found' });
    }

    res.status(200).json({ message: 'Exercise set updated successfully' });
  } catch (error: any) {
    console.error('Error updating exercise set:', error.message);
    res.status(500).json({ message: 'Error updating exercise set', error: error.message });
  }
}
