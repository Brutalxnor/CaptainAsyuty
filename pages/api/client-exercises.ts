// import { NextApiRequest, NextApiResponse } from 'next';
// import clientPromise from '@/lib/mongodb';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'GET' && req.method !== 'POST') {
//     res.status(405).json({ message: 'Method not allowed' });
//     return;
//   }
//   const email = req.method === 'POST' ? req.body.email : req.query.email;

//   try {
//     const client = await clientPromise;
//     const db = client.db('ClientsDB');

//     // Fetch all clients
//     const clients = await db.collection('Clients').find({}).toArray();

//     // Fetch exercises for each client
//     const clientsWithExercises = await Promise.all(clients.map(async (client) => {
//       const exercisesData = await db.collection('Exercises').find({ clientEmail: client.email }).toArray();
//       client.exercises = exercisesData;
//       return client;
//     }));

//     res.status(200).json(clientsWithExercises);
//   } catch (error: any) {
//     console.error('Error fetching client data:', error.message);
//     res.status(500).json({ message: 'Error fetching client data', error: error.message });
//   }
// }


//client-exercises.ts
import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  try {
    const client = await clientPromise;
    const db = client.db('ClientsDB');

    // Fetch all clients
    const clients = await db.collection('Clients').find({}).toArray();

    // Fetch exercises for each client
    const clientsWithExercises = await Promise.all(clients.map(async (client) => {
      const exercisesData = await db.collection('Exercises').find({ email: client.email }).toArray();
      client.exercises = exercisesData.length ? exercisesData[0].exercises : [];
      return client;
    }));

    res.status(200).json(clientsWithExercises);
  } catch (error: any) {
    console.error('Error fetching client data:', error.message);
    res.status(500).json({ message: 'Error fetching client data', error: error.message });
  }
}
