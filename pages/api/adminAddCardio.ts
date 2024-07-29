//pages/api/adminAddCardio.ts
import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      return getCardioForClient(req, res);
    case 'POST':
      return assignCardio(req, res);
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
}

const getCardioForClient = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email } = req.query;
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const client = await clientPromise;
    const db = client.db('ClientsDB');
    const cardio = await db.collection('Cardio').findOne({ email: email });

    if (!cardio) {
      return res.status(200).json({ exercises: [] });
    }

    res.status(200).json(cardio);
  } catch (error: any) {
    console.error('Error fetching cardio data:', error.message);
    res.status(500).json({ message: 'Error fetching cardio data', error: error.message });
  }
};

const assignCardio = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, exercises, type } = req.body;

  console.log('Received request:', { email, exercises, type }); // Debug log

  if (!email || !exercises || !type) {
    return res.status(400).json({ message: 'Email, exercises, and type are required' });
  }

  try {
    const client = await clientPromise;
    const db = client.db('ClientsDB');
    const updateResult = await db.collection('Cardio').updateOne(
      { email },
      { $set: { exercises, exerciseType: type } },
      { upsert: true }
    );

    if (updateResult.modifiedCount === 0 && updateResult.upsertedCount === 0) {
      throw new Error('Failed to update or insert cardio exercises');
    }

    console.log(`Successfully assigned cardio exercises and type to ${email}`);
    res.status(200).json({ message: 'Cardio exercises and type assigned successfully' });
  } catch (error: any) {
    console.error('Error assigning cardio exercises:', error.message);
    res.status(500).json({ message: 'Error assigning cardio exercises', error: error.message });
  }
};
