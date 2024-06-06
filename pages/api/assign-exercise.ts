// // pages/api/assign-exercise.ts
// import { NextApiRequest, NextApiResponse } from 'next';

// const assignedExercises: { email: any; exercises: any[]; }[] = []; // This should be replaced with a database or persistent storage

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { email, exercise } = req.body;
//     const client = assignedExercises.find((client) => client.email === email);

//     if (client) {
//       client.exercises.push(exercise);
//     } else {
//       assignedExercises.push({ email, exercises: [exercise] });
//     }

//     res.status(200).json({ message: 'Exercise assigned successfully' });
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }


// import { NextApiRequest, NextApiResponse } from 'next';
// import dbConnect from '@/utils/dbConnect';
// import Client from '@/models/Client';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   await dbConnect();

//   if (req.method === 'POST') {
//     const { email, exercise } = req.body;

//     if (!email || !exercise) {
//       console.log('Missing email or exercise in request body');
//       return res.status(400).json({ error: 'Email and exercise are required' });
//     }

//     try {
//       console.log(`Looking for client with email: ${email}`);
//       const client = await Client.findOne({ email });
      
//       if (!client) {
//         console.log(`Client with email ${email} not found`);
//         return res.status(404).json({ error: 'Client not found' });
//       }

//       console.log(`Client found: ${client}`);
//       client.exercises.push(exercise);
//       await client.save();

//       console.log('Exercise assigned successfully');
//       res.status(200).json({ message: 'Exercise assigned successfully' });
//     } catch (error) {
//       console.error('Error assigning exercise:', error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   } else {
//     res.status(405).json({ error: 'Method not allowed' });
//   }
// }


// // pages/api/assign-exercise.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import dbConnect from '@/utils/dbConnect';
// import Client from '@/models/Client';
// import { withAuth } from '@clerk/nextjs/api';
// import { getAuth } from '@clerk/nextjs/server';

// export default withAuth(async (req: NextApiRequest, res: NextApiResponse) => {
//   await dbConnect();

//   const { userId } = getAuth(req);
//   const email = req.body.email;

//   if (!userId) {
//     return res.status(401).json({ error: 'Unauthorized' });
//   }

//   if (req.method === 'POST') {
//     const { exercise } = req.body;

//     if (!exercise) {
//       return res.status(400).json({ error: 'Exercise is required' });
//     }

//     try {
//       const client = await Client.findOne({ email });

//       if (!client) {
//         return res.status(404).json({ error: 'Client not found' });
//       }

//       client.exercises.push(exercise);
//       await client.save();

//       res.status(200).json({ message: 'Exercise assigned successfully' });
//     } catch (error) {
//       console.error('Error assigning exercise:', error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   } else {
//     res.status(405).json({ error: 'Method not allowed' });
//   }
// });



// // pages/api/assign-exercise.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import dbConnect from '@/utils/dbConnect';
// import Client from '@/models/Client';
// import { auth, currentUser } from "@clerk/nextjs/server";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   await dbConnect();

//   // Get the userId from auth() -- if null, the user is not signed in
//   const { userId } = auth();

//   if (!userId) {
//     return res.status(401).json({ error: 'Unauthorized' });
//   }

//   // Get the Backend API User object when you need access to the user's information
//   const user = await currentUser();
//   const email = user?.emailAddresses[0]?.emailAddress;  // Get the primary email

//   if (!email) {
//     return res.status(400).json({ error: 'Unable to retrieve user email' });
//   }

//   if (req.method === 'POST') {
//     const { exercise } = req.body;

//     if (!exercise) {
//       return res.status(400).json({ error: 'Exercise is required' });
//     }

//     try {
//       const client = await Client.findOne({ email });

//       if (!client) {
//         return res.status(404).json({ error: 'Client not found' });
//       }

//       client.exercises.push(exercise);
//       await client.save();

//       res.status(200).json({ message: 'Exercise assigned successfully' });
//     } catch (error) {
//       console.error('Error assigning exercise:', error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   } else {
//     res.status(405).json({ error: 'Method not allowed' });
//   }
// }
// pages/api/assign-exercise.ts
// pages/api/assign-exercise.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import dbConnect from '@/utils/dbConnect';
// import Client from '@/models/Client';
// import { auth, getAuth } from '@clerk/nextjs/server';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   await dbConnect();

//   // const { userId } = getAuth(req);
//   const { userId } = auth();

//   if (!userId) {
//     return res.status(401).json({ error: 'Unauthorized' });
//   }

//   try {
//     // Fetch the user details from Clerk using the userId
//     const user = await fetch(`https://api.clerk.dev/v1/users/${userId}`, {
//       headers: {
//         Authorization: `Bearer ${process.env.CLERK_API_KEY}`,
//       },
//     }).then((res) => res.json());

//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     const email = user.email_addresses.find((email: any) => email.id === user.primary_email_address_id)?.email_address;

//     if (!email) {
//       return res.status(400).json({ error: 'Unable to retrieve user email' });
//     }

//     if (req.method === 'POST') {
//       const { exercise } = req.body;

//       if (!exercise) {
//         return res.status(400).json({ error: 'Exercise is required' });
//       }

//       try {
//         const client = await Client.findOne({ email });

//         if (!client) {
//           return res.status(404).json({ error: 'Client not found' });
//         }

//         client.exercises.push(exercise);
//         await client.save();

//         res.status(200).json({ message: 'Exercise assigned successfully', client, exercise });
//       } catch (error) {
//         console.error('Error assigning exercise:', error);
//         res.status(500).json({ error: 'Internal server error' });
//       }
//     } else {
//       res.status(405).json({ error: 'Method not allowed' });
//     }
//   } catch (error) {
//     console.error('Error fetching user:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// }


//_!_ ERROR




// import { NextApiRequest, NextApiResponse } from 'next';
// import dbConnect from '@/utils/dbConnect';
// import Client from '@/models/Client';
// import { clerkClient, getAuth } from '@clerk/nextjs/server';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   await dbConnect();

//   const { userId } = getAuth(req);

//   if (!userId) {
//     return res.status(401).json({ error: 'Unauthorized' });
//   }

//   try {
//     // Fetch the user details from Clerk using the userId
//     const clerkUser = await clerkClient.users.getUser(userId);

//     if (!clerkUser) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     const email = clerkUser.emailAddresses[0]?.emailAddress;

//     if (!email) {
//       return res.status(400).json({ error: 'Unable to retrieve user email' });
//     }

//     if (req.method === 'POST') {
//       const { exercise } = req.body;

//       if (!exercise) {
//         return res.status(400).json({ error: 'Exercise is required' });
//       }

//       try {
//         const client = await Client.findOne({ email });
//         if (!client) {
//           return res.status(404).json({ error: 'Client not found' });
//         }

//         client.exercises.push(exercise);
//         await client.save();

//         res.status(200).json({ message: 'Exercise assigned successfully' });
//       } catch (error) {
//         console.error('Error assigning exercise:', error);
//         res.status(500).json({ error: 'Internal server error' });
//       }
//     } else {
//       res.status(405).json({ error: 'Method not allowed' });
//     }
//   } catch (error) {
//     console.error('Error fetching user:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// }















// import { NextApiRequest, NextApiResponse } from 'next';
// import { MongoClient } from 'mongodb';

// const uri = process.env.MONGODB_URI;
// if (!uri) {
// throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
// }

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
// if (req.method !== 'POST') {
//     return res.status(405).end();
// }

// const { clientEmail, exercise } = req.body;

// let client: MongoClient | null = null;

// try {
//     client = new MongoClient(uri);
//     await client.connect();
//     const db = client.db();
//     await db.collection('clients').updateOne(
//     { email: clientEmail },
//     { $push: { exercises: exercise } }
//     );
//     res.status(200).json({ message: 'Exercise assigned successfully' });
// } catch (error: any) {
//     res.status(500).json({ message: 'Error assigning exercise', error: error.message });
// } finally {
//     if (client) {
//     await client.close();
//     }
// }
// };

// export default handler;





import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/utils/dbConnect';
import Client from '@/models/Client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { clientEmail, exercise } = req.body;

  try {
    const client = await Client.findOneAndUpdate(
      { email: clientEmail },
      { $push: { exercises: exercise } },
      { new: true }
    );

    if (!client) {
      return res.status(404).json({ message: 'Client not found' });
    }

    res.status(200).json({ message: 'Exercise assigned successfully' });
  } catch (error: any) {
    res.status(500).json({ message: 'Error assigning exercise', error: error.message });
  }
}
