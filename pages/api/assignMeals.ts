



// pages/api/assignMeals.ts
import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      return getMealsForClient(req, res);
    case 'POST':
      return assignMeals(req, res);
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
}

const getMealsForClient = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email } = req.query;
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const client = await clientPromise;
    const db = client.db('ClientsDB');
    const meals = await db.collection('Meals').findOne({ email: email });

    if (!meals) {
      return res.status(200).json({ meals: [] });
    }

    res.status(200).json(meals);
  } catch (error: any) {
    console.error('Error fetching meals data:', error.message);
    res.status(500).json({ message: 'Error fetching meals data', error: error.message });
  }
};

const assignMeals = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, meals } = req.body;

  if (!email || !meals) {
    return res.status(400).json({ message: 'Email and meals are required' });
  }

  try {
    const client = await clientPromise;
    const db = client.db('ClientsDB');
    const updateResult = await db.collection('Meals').updateOne(
      { email },
      { $set: { meals } },
      { upsert: true }
    );

    if (updateResult.modifiedCount === 0 && updateResult.upsertedCount === 0) {
      throw new Error('Failed to update or insert meals');
    }

    res.status(200).json({ message: 'Meals assigned successfully' });
  } catch (error: any) {
    console.error('Error assigning meals:', error.message);
    res.status(500).json({ message: 'Error assigning meals', error: error.message });
  }
};
