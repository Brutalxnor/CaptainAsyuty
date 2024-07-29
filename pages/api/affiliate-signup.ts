// pages/api/affiliate-signup.ts
import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const { ref, newUserEmail } = req.body;

  try {
    const client = await clientPromise;
    const db = client.db('ClientsDB');

    // Add the new user to the database
    await db.collection('Clients').insertOne({ email: newUserEmail });

    // Increment the referral points for the referrer
    await db.collection('Clients').updateOne(
      { email: ref },
      { $inc: { points: 1 } }
    );

    res.status(200).json({ message: 'Affiliate sign-up successful' });
  } catch (error: any) {
    console.error('Error processing affiliate sign-up:', error.message);
    res.status(500).json({ message: 'Error processing affiliate sign-up', error: error.message });
  }
}
