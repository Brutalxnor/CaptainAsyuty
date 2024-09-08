// // pages/api/auth/signup.ts

// import { NextApiRequest, NextApiResponse } from 'next';
// import clientPromise from '@/lib/mongodb';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { email, password } = req.body;

//     try {
//       const client = await clientPromise;
//       const db = client.db('ClientsDB');

//       const existingUser = await db.collection('Users').findOne({ email });

//       if (existingUser) {
//         return res.status(409).json({ message: 'User already exists' });
//       }

//       const hashedPassword = await bcrypt.hash(password, 10);

//       const newUser = {
//         email,
//         password: hashedPassword,
//         role: 'user', // Default role
//       };

//       await db.collection('Users').insertOne(newUser);

//       const token = jwt.sign({ email: newUser.email, role: newUser.role }, process.env.JWT_SECRET!, {
//         expiresIn: '1h',
//       });

//       res.setHeader('Set-Cookie', `auth-token=${token}; HttpOnly; Path=/; Max-Age=3600`);
//       res.status(201).json({ token, user: newUser });
//     } catch (error) {
//       console.error('Error signing up:', error);
//       res.status(500).json({ message: 'Internal server error' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }




// //pages.api/signup.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import clientPromise from '@/lib/mongodb';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { username, email, password } = req.body;

//     try {
//       const client = await clientPromise;
//       const db = client.db('ClientsDB');

//       // Check if user exists by either email or username
//       const existingUser = await db.collection('Users').findOne({
//         $or: [{ email }, { username }],
//       });

//       if (existingUser) {
//         return res.status(409).json({ message: 'User with this email or username already exists' });
//       }

//       const hashedPassword = await bcrypt.hash(password, 10);

//       const newUser = {
//         username,
//         email,
//         password: hashedPassword,
//         role: 'user', // Default role
//       };

//       await db.collection('Users').insertOne(newUser);

//       const token = jwt.sign(
//         { email: newUser.email, role: newUser.role },
//         process.env.JWT_SECRET!,
//         {
//           expiresIn: '1h',
//         }
//       );

//       res.setHeader('Set-Cookie', `auth-token=${token}; HttpOnly; Path=/; Max-Age=3600`);
//       res.status(201).json({ token, user: newUser });
//     } catch (error) {
//       console.error('Error signing up:', error);
//       res.status(500).json({ message: 'Internal server error' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }
























///////////////workin



// // //pages.api/signup.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import clientPromise from '@/lib/mongodb';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { username, email, password } = req.body;

//     try {
//       const client = await clientPromise;
//       const db = client.db('ClientsDB');

//       // Check if user exists by either email or username
//       const existingUser = await db.collection('Users').findOne({
//         $or: [{ email }, { username }],
//       });

//       if (existingUser) {
//         return res.status(409).json({ message: 'User with this email or username already exists' });
//       }

//       const hashedPassword = await bcrypt.hash(password, 10);

//       const newUser = {
//         username,
//         email,
//         password: hashedPassword,
//         role: 'user', // Default role
//       };

//       // Insert into Users collection
//       await db.collection('Users').insertOne(newUser);

//       // Insert into Clients collection
//       const existingClient = await db.collection('Clients').findOne({ email });

//       if (!existingClient) {
//         await db.collection('Clients').insertOne({
//           email,
//           fullName: username, // Assuming fullName is the username
//           hasPaid: false, // Default value, adjust as needed
//           exerciseType: null, // Default value, adjust as needed
//           exercises: [], // Default value, adjust as needed
//           date: new Date().toISOString().split('T')[0], // Default to current date
//         });
//       }

//       const token = jwt.sign(
//         { email: newUser.email, role: newUser.role },
//         process.env.JWT_SECRET!,
//         {
//           expiresIn: '1h',
//         }
//       );

//       res.setHeader('Set-Cookie', `auth-token=${token}; HttpOnly; Path=/; Max-Age=3600`);
//       res.status(201).json({ token, user: newUser });
//     } catch (error) {
//       console.error('Error signing up:', error);
//       res.status(500).json({ message: 'Internal server error' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }





//api/signup.ts
<<<<<<< HEAD

=======
>>>>>>> c7cdd42 (Final V1)
import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, email, password, referralCode } = req.body; // Accept referralCode

    try {
      const client = await clientPromise;
      const db = client.db('ClientsDB');

      // Check if user exists by either email or username
      const existingUser = await db.collection('Users').findOne({
        $or: [{ email }, { username }],
      });

      if (existingUser) {
        return res.status(409).json({ message: 'User with this email or username already exists' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = {
        username,
        email,
        password: hashedPassword,
        role: 'user', // Default role
      };

      // Insert into Users collection
      await db.collection('Users').insertOne(newUser);

      // Insert into Clients collection
      const existingClient = await db.collection('Clients').findOne({ email });

      if (!existingClient) {
        await db.collection('Clients').insertOne({
          email,
          fullName: username, // Assuming fullName is the username
          hasPaid: false, // Default value, adjust as needed
          exerciseType: null, // Default value, adjust as needed
          exercises: [], // Default value, adjust as needed
          date: new Date().toISOString().split('T')[0], // Default to current date
        });
      }

      // Handle Referral Code
      if (referralCode) {
        // Find the referrer
        const referrer = await db.collection('Users').findOne({ email: referralCode });

        if (referrer) {
          // Update the referrer's points
          await db.collection('Users').updateOne(
            { email: referralCode },
            { $inc: { points: 1 } } // Increment points by 1
          );

          // Log the referral in a separate collection (optional)
          await db.collection('Referrals').insertOne({
            referrerEmail: referralCode,
            referredEmail: email,
            date: new Date().toISOString(),
          });
        }
      }

      const token = jwt.sign(
        { email: newUser.email, role: newUser.role },
        process.env.JWT_SECRET!,
        { expiresIn: '1h' }
      );
      
      res.setHeader('Set-Cookie', `auth-token=${token}; HttpOnly; Path=/; Max-Age=3600`);
      

      res.setHeader('Set-Cookie', `auth-token=${token}; HttpOnly; Path=/; Max-Age=3600`);
      res.status(201).json({ token, user: newUser });
    } catch (error) {
      console.error('Error signing up:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
