import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      return getNutritionForClient(req, res);
    case 'POST':
      return assignNutrition(req, res);
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
}

const getNutritionForClient = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email } = req.query;
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const client = await clientPromise;
    const db = client.db('ClientsDB');
    const nutrition = await db.collection('Nutrition').findOne({ email: email });

    if (!nutrition) {
      return res.status(200).json({ nutritions: [] });
    }

    res.status(200).json(nutrition);
  } catch (error: any) {
    console.error('Error fetching nutrition data:', error.message);
    res.status(500).json({ message: 'Error fetching nutrition data', error: error.message });
  }
};

const assignNutrition = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, nutritions } = req.body;

  console.log('Received request:', { email, nutritions }); // Debug log

  if (!email || !nutritions) {
    return res.status(400).json({ message: 'Email and nutritions are required' });
  }

  try {
    const client = await clientPromise;
    const db = client.db('ClientsDB');
    const updateResult = await db.collection('Nutrition').updateOne(
      { email },
      { $set: { nutritions } },
      { upsert: true }
    );

    if (updateResult.modifiedCount === 0 && updateResult.upsertedCount === 0) {
      throw new Error('Failed to update or insert nutrition');
    }

    console.log(`Successfully assigned nutrition to ${email}`);
    res.status(200).json({ message: 'Nutrition assigned successfully' });
  } catch (error: any) {
    console.error('Error assigning nutrition:', error.message);
    res.status(500).json({ message: 'Error assigning nutrition', error: error.message });
  }
};
