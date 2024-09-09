// // pages/api/auth/signin.ts

// import { NextApiRequest, NextApiResponse } from 'next';
// import clientPromise from '@/lib/mongodb';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';

// export const config = {
//   runtime: 'nodejs',
// };

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { email, password } = req.body;

//     try {
//       const client = await clientPromise;
//       const db = client.db('ClientsDB');

//       const user = await db.collection('Users').findOne({ email });

//       if (!user) {
//         return res.status(401).json({ message: 'Invalid email or password' });
//       }

//       const isPasswordValid = await bcrypt.compare(password, user.password);

//       if (!isPasswordValid) {
//         return res.status(401).json({ message: 'Invalid email or password' });
//       }

//       const token = jwt.sign({ email: user.email, role: user.role }, process.env.JWT_SECRET!, {
//         expiresIn: '1h',
//       });

//       res.setHeader('Set-Cookie', `auth-token=${token}; HttpOnly; Path=/; Max-Age=3600`);
//       res.status(200).json({ token, user });
//     } catch (error) {
//       console.error('Error signing in:', error);
//       res.status(500).json({ message: 'Internal server error' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }





//api/signin.ts
import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';
// import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const bcrypt = require('bcryptjs'); // CommonJS syntax

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { identifier, password } = req.body;

    try {
      const client = await clientPromise;
      const db = client.db('ClientsDB');

      // Find the user by either email or username
      const user = await db.collection('Users').findOne({
        $or: [{ email: identifier }, { username: identifier }],
      });

      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      const token = jwt.sign(
        { email: user.email, role: user.role },
        process.env.JWT_SECRET!,
        {
          expiresIn: '1h',
        }
      );

      res.setHeader('Set-Cookie', `auth-token=${token}; HttpOnly; Path=/; Max-Age=3600`);
      res.status(200).json({ token, user });
    } catch (error) {
      console.error('Error signing in:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
