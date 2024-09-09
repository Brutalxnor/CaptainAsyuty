// import { NextApiRequest, NextApiResponse } from 'next';
// import clientPromise from '@/lib/mongodb';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { newPassword } = req.body;

//     try {
//       const authHeader = req.headers.authorization;
//       if (!authHeader) {
//         return res.status(401).json({ message: 'Authorization header missing' });
//       }

//       const token = authHeader.split(' ')[1]; // Extract Bearer token
//       const decoded = jwt.verify(token, process.env.JWT_SECRET!); // Verify the JWT token

//       // Ensure decoded token is valid and contains email
//       if (typeof decoded === 'string' || !decoded.email) {
//         return res.status(401).json({ message: 'Unauthorized access' });
//       }

//       const client = await clientPromise;
//       const db = client.db('ClientsDB');

//       // Hash the new password
//       const hashedPassword = await bcrypt.hash(newPassword, 10);

//       // Update the user's password
//       const result = await db.collection('Users').updateOne(
//         { email: decoded.email },
//         { $set: { password: hashedPassword } }
//       );

//       if (result.modifiedCount === 0) {
//         return res.status(500).json({ message: 'Failed to update password' });
//       }

//       res.status(200).json({ message: 'Password changed successfully' });
//     } catch (error) {
//       console.error('Error changing password:', error);
//       return res.status(500).json({ message: 'Internal server error' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }





import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import clientPromise from '@/lib/mongodb';
import { parse } from 'cookie';

const bcrypt = require('bcryptjs'); // CommonJS syntax

interface DecodedToken {
  email: string;
  role: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

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
    // Decode the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as DecodedToken;
    console.log('Token decoded successfully:', decoded);

    // Ensure the new password is passed from the request body
    const { newPassword } = req.body;
    if (!newPassword) {
      return res.status(400).json({ message: 'New password is required' });
    }

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db('ClientsDB');

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password in the database
    const result = await db.collection('Users').updateOne(
      { email: decoded.email },
      { $set: { password: hashedPassword } }
    );

    if (result.modifiedCount === 0) {
      console.error('Failed to update password');
      return res.status(500).json({ message: 'Failed to update password' });
    }

    // Respond with success
    res.status(200).json({ message: 'Password changed successfully' });
  } catch (error) {
    console.error('Error processing request:', error);

    if (error instanceof Error) {
      if (error.name === 'TokenExpiredError') {
        return res.status(401).json({ message: 'Unauthorized: Token expired' });
      } else {
        return res.status(500).json({ message: 'Internal server error', error: error.message });
      }
    } else {
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}
