
//api/me.ts
import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import clientPromise from '@/lib/mongodb';
import { parse } from 'cookie';

interface DecodedToken {
  email: string;
  role: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookie = req.headers.cookie;
  if (!cookie) {
    console.error('No cookie found');
    return res.status(401).json({ message: 'Unauthorized: No cookie' });
  }

  const cookies = parse(cookie);
  const token = cookies['auth-token'];

  if (!token) {
    console.error('No auth-token found in cookies');
    return res.status(401).json({ message: 'Unauthorized: No token' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as DecodedToken;
    console.log('Token decoded successfully:', decoded);

    const client = await clientPromise;
    const db = client.db('ClientsDB');
    const user = await db.collection('Users').findOne({ email: decoded.email });

    if (!user) {
      console.error('User not found with email:', decoded.email);
      return res.status(401).json({ message: 'Unauthorized: User not found' });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error('Error verifying token:', error);

    // Use type guard to check if error is an instance of Error
    if (error instanceof Error) {
      if (error.name === 'TokenExpiredError') {
        res.status(401).json({ message: 'Unauthorized: Token expired' });
      } else {
        res.status(500).json({ message: 'Internal server error', error: error.message });
      }
    } else {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}
