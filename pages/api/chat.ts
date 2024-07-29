

// pages/api/chat.ts
import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const client = await clientPromise;
    const db = client.db('Chat');

    if (req.method === 'GET') {
      const messages = await db.collection('ClientChat').find({}).toArray();
      res.status(200).json(messages);
    } else if (req.method === 'POST') {
      const { userId, username, text, timestamp } = req.body;

      if (!userId || !text) {
        return res.status(400).json({ message: 'User ID and text are required' });
      }

      const newMessage = {
        userId,
        username,
        text,
        timestamp,
      };

      await db.collection('ClientChat').insertOne(newMessage);
      res.status(201).json(newMessage);
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Error handling chat messages:', error);
    res.status(500).json({ message: 'Error handling chat messages', error });
  }
}
