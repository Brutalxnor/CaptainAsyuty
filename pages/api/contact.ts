import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const { name, email, message } = req.body;

  try {
    const client = await clientPromise;
    const db = client.db('ContactDB');

    // Check if the user has sent more than 5 messages
    const messageCount = await db.collection('Messages').countDocuments({ email });
    if (messageCount >= 3) {
      res.status(429).json({ message: 'Message limit reached' });
      return;
    }

    const result = await db.collection('Messages').insertOne({
      name,
      email,
      message,
      createdAt: new Date(),
    });

    res.status(200).json({ message: 'Message saved successfully', data: result });
  } catch (error: any) {
    console.error('Error saving message:', error.message);
    res.status(500).json({ message: error.message });
  }
}
