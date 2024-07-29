




import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      return getClientsAndExercises(req, res);
    case 'POST':
      return assignExercises(req, res);
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
}

const getClientsAndExercises = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const client = await clientPromise;
    const db = client.db('ClientsDB');
    const clients = await db.collection('Clients').find({}).toArray();
    const exercises = await db.collection('Exercises').find({}).toArray();
    res.status(200).json({ clients, exercises });
  } catch (error: any) {
    console.error('Error fetching data:', error.message);
    res.status(500).json({ message: 'Error fetching data', error: error.message });
  }
};

const assignExercises = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, exercises, type, date } = req.body;

  console.log('Received request:', { email, exercises, type, date }); // Debug log

  if (!email || !exercises || !type || !date) {
    return res.status(400).json({ message: 'Email, exercises, type, and date are required' });
  }

  try {
    const client = await clientPromise;
    const db = client.db('ClientsDB');
    const updateResult = await db.collection('Exercises').updateOne(
      { email },
      { $set: { exercises, exerciseType: type, date } },
      { upsert: true }
    );

    if (updateResult.modifiedCount === 0 && updateResult.upsertedCount === 0) {
      throw new Error('Failed to update or insert exercises');
    }

    console.log(`Successfully assigned exercises, type, and date to ${email}`);
    res.status(200).json({ message: 'Exercises, type, and date assigned successfully' });
  } catch (error: any) {
    console.error('Error assigning exercises:', error.message);
    res.status(500).json({ message: 'Error assigning exercises', error: error.message });
  }
};





