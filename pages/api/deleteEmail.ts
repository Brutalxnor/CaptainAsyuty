import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(`Received ${req.method} request`); // Debug log
  if (req.method === 'DELETE') {
    try {
      const client = await clientPromise;
      const db = client.db('ClientsDB');
      const { email } = req.body;

      if (!email) {
        throw new Error('Email is required');
      }

      const result = await db.collection('Clients').deleteOne({ email });

      if (result.deletedCount === 0) {
        res.status(404).json({ message: 'Email not found' });
      } else {
        res.status(200).json({ message: 'Email deleted successfully' });
      }
    } catch (error: any) {
      console.error('Error deleting email:', error);
      res.status(500).json({ message: 'Error deleting email', error: error.message });
    }
  } else {
    console.log(`Method ${req.method} Not Allowed`); // Debug log
    res.setHeader('Allow', ['DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
