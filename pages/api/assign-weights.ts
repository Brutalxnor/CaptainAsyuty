// import { NextApiRequest, NextApiResponse } from 'next';
// import clientPromise from '@/lib/mongodb';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'POST') {
//     res.setHeader('Allow', ['POST']);
//     return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
//   }

//   const { email, exerciseId, weights, reps } = req.body;

//   if (!email || !exerciseId || !weights || !reps) {
//     return res.status(400).json({ message: 'Email, exerciseId, weights, and reps are required' });
//   }

//   try {
//     const client = await clientPromise;
//     const db = client.db('ClientsDB');

//     const result = await db.collection('Exercises').updateOne(
//       { email, 'exercises.id': exerciseId },
//       { $set: { 'exercises.$.weights': weights, 'exercises.$.reps': reps } }
//     );

//     if (result.matchedCount === 0) {
//       return res.status(404).json({ message: 'Exercise not found' });
//     }

//     res.status(200).json({ message: 'Weights and reps assigned successfully' });
//   } catch (error: any) {
//     console.error('Error assigning weights and reps:', error.message);
//     res.status(500).json({ message: 'Error assigning weights and reps', error: error.message });
//   }
// }




import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }

  const { email, exerciseId, weights, reps } = req.body;

  // Validate the request body
  if (!email || !exerciseId || !Array.isArray(weights) || !Array.isArray(reps)) {
    return res.status(400).json({ message: 'Invalid input: Email, exerciseId, weights, and reps must be provided as arrays' });
  }

  try {
    const client = await clientPromise;
    const db = client.db('ClientsDB');

    // Ensure we're updating only the correct exercise within the array of exercises for the user
    const result = await db.collection('Exercises').updateOne(
      { email, 'exercises.id': exerciseId },
      {
        $set: {
          'exercises.$.weights': weights.length > 0 ? weights : [0], // Default to [0] if weights is empty
          'exercises.$.reps': reps.length > 0 ? reps : [0], // Default to [0] if reps is empty
        }
      }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: 'Exercise not found' });
    }

    res.status(200).json({ message: 'Weights and reps assigned successfully' });
  } catch (error: any) {
    console.error('Error assigning weights and reps:', error.message);
    res.status(500).json({ message: 'Error assigning weights and reps', error: error.message });
  }
}
