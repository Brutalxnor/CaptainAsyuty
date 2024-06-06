// // pages/api/assigned-exercises.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import dbConnect from '@/utils/dbConnect';
// import Client from '@/models/Client';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   await dbConnect();

//   try {
//     const clients = await Client.find({});

//     const assignedExercises = clients.flatMap(client => 
//       client.exercises.map(exercise => ({
//         clientEmail: client.email,
//         exercise
//       }))
//     );

//     res.status(200).json(assignedExercises);
//   } catch (error) {
//     console.error('Error fetching assigned exercises:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// // }
// import { NextApiRequest, NextApiResponse } from 'next';
// import { auth } from '@clerk/nextjs/server';
// import Client from '@/models/Client';
// import dbConnect from '@/utils/dbConnect';

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   await dbConnect();

//   const { userId } = auth();

//   if (!userId) {
//     return res.status(401).json({ error: 'Unauthorized' });
//   }

//   if (req.method !== 'GET') {
//     return res.status(405).json({ error: 'Method not allowed' });
//   }

//   try {
//     const clients = await Client.find({});
//     if (!clients) {
//       return res.status(404).json({ error: 'Clients not found' });
//     }

//     return res.status(200).json(clients);
//   } catch (error) {
//     return res.status(500).json({ error: 'Server error' });
//   }
// };

// export default handler;



// pages/api/assigned-exercises.ts
// pages/api/assigned-exercises.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { getAuth } from '@clerk/nextjs/server';
import dbConnect from '@/utils/dbConnect';
import Exercise from '@/models/Exercise';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
  const { userId } = getAuth(req);

  if (!userId) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const exercises = await Exercise.find({ userId });
    res.status(200).json(exercises);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export default handler;

