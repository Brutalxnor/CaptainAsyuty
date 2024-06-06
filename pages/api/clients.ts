// import { getClients, addClient } from '@/lib/storage';
// import { NextApiRequest, NextApiResponse } from 'next';

// let clients = [
//   {
//     email: 'client@example.com',
//     data: {
//       weight: '70',
//       height: '175',
//       age: '25',
//       fatWeight: '10',
//       muscleWeight: '60',
//       musclePercentage: '30',
//       fatPercentage: '20',
//       waistMeasurement: '80',
//       rightArmMeasurement: '30',
//       leftArmMeasurement: '30',
//       rightLegMeasurement: '50',
//       leftLegMeasurement: '50',
//       frontImage: null,
//       backImage: null,
//       rightSideImage: null,
//       leftSideImage: null,
//       sugarCravings: 'None',
//       previousInjuries: 'None',
//       diabetes: 'None',
//       bloodPressure: 'Normal',
//       onlineTrainingExperience: '1 year',
//       trainingAge: '1 year',
//       workoutSets: '3 sets',
//     },
//   },
// ];
// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method === 'POST') {
//       const newClient = req.body;
//       clients.push(newClient);
//       res.status(201).json(newClient);
//     } else if (req.method === 'GET') {
//       res.status(200).json(clients);
//     } else {
//       res.setHeader('Allow', ['GET', 'POST']);
//       res.status(405).end(`Method ${req.method} Not Allowed`);
//     }
//   }


// pages/api/clients.ts
// pages/api/clients.ts






// import { NextApiRequest, NextApiResponse } from 'next';
// import { v4 as uuidv4 } from 'uuid';

// let clients: any[] = [];

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const clientData = req.body;
//     clientData.id = uuidv4(); // Assign a unique ID to each client
//     clients.push(clientData);
//     res.status(200).json({ message: 'Client data saved successfully' });
//   } else if (req.method === 'GET') {
//     res.status(200).json(clients);
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }



// pages/api/clients.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import dbConnect from '@/utils/dbConnect';
// import Client from '@/models/Client';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   await dbConnect();

//   if (req.method === 'POST') {
//     try {
//       const clientData = req.body;
//       const client = new Client(clientData);
//       await client.save();
//       res.status(200).json({ message: 'Client data saved successfully' });
//     } catch (error) {
//       res.status(400).json({ message: 'Error saving client data', error });
//     }
//   } else if (req.method === 'GET') {
//     try {
//       const clients = await Client.find({});
//       res.status(200).json(clients);
//     } catch (error) {
//       res.status(400).json({ message: 'Error fetching clients', error });
//     }
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }



// pages/api/clients.ts
// pages/api/clients.ts
// pages/api/clients.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import dbConnect from '@/utils/dbConnect';
// import Client from '@/models/Client';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   await dbConnect();

//   if (req.method === 'POST') {
//     try {
//       console.log('Received data:', req.body); // Log incoming data for debugging
//       const client = await Client.create(req.body);
//       res.status(201).json(client);
//     } catch (error: any) {
//       console.error('Error creating client:', error); // Log error for debugging
//       res.status(400).json({ success: false, message: error.message });
//     }
//   } else if (req.method === 'GET') {
//     try {
//       const clients = await Client.find({});
//       res.status(200).json(clients);
//     } catch (error: any) {
//       console.error('Error fetching clients:', error); // Log error for debugging
//       res.status(400).json({ success: false, message: error.message });
//     }
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }


// pages/api/client-info.ts
// pages/api/client-info.ts
// pages/api/client-info.ts




// import { NextApiRequest, NextApiResponse } from 'next';
// import dbConnect from '@/utils/dbConnect';
// import Client from '@/models/Client';
// import { ClientData } from '@/interfaces/ClientData';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { email } = req.query;

//   await dbConnect();

//   try {
//     const client = await Client.findOne({ email }).lean();
//     if (!client) {
//       return res.status(404).json({ message: 'Client not found' });
//     }
//     const clientData: ClientData = {
//       email: client.email,
//       fullName: client.fullName,
//       exercises: client.exercises || [],
//       data: {
//         fullName: '',
//         weight: '',
//         height: '',
//         age: '',
//         fatWeight: '',
//         muscleWeight: '',
//         musclePercentage: '',
//         fatPercentage: '',
//         waistMeasurement: '',
//         rightArmMeasurement: '',
//         leftArmMeasurement: '',
//         rightLegMeasurement: '',
//         leftLegMeasurement: '',
//         frontImage: null,
//         backImage: null,
//         rightSideImage: null,
//         leftSideImage: null,
//         sugarCravings: '',
//         previousInjuries: '',
//         diabetes: '',
//         bloodPressure: '',
//         onlineTrainingExperience: '',
//         trainingAge: '',
//         workoutSets: ''
//       }
//     };
//     res.status(200).json(clientData);
//   } catch (error: any) {
//     res.status(500).json({ message: error.message });
//   }
// }



// import { NextApiRequest, NextApiResponse } from 'next';
// import dbConnect from '@/utils/dbConnect';
// import Client from '@/models/Client';

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   await dbConnect();

//   try {
//     if (req.method === 'GET') {
//       const clients = await Client.find({}).lean();
//       res.status(200).json(clients);
//     } else {
//       res.status(405).json({ message: 'Method not allowed' });
//     }
//   } catch (error: any) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export default handler;





// // pages/api/client-info.ts

// import { NextApiRequest, NextApiResponse } from 'next';
// import dbConnect from '@/utils/dbConnect';
// import Client from '@/models/Client';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   await dbConnect();

//   const email = req.query.email as string; // Ensure email is a string

//   if (!email) {
//     return res.status(400).json({ error: 'Email query parameter is required' });
//   }

//   try {
//     const client = await Client.findOne({ email });
//     if (!client) {
//       return res.status(404).json({ error: 'Client not found' });
//     }
//     res.status(200).json(client);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// }

// pages/api/auth/clients.ts
// pages/api/auth/clients.ts

// pages/api/auth/clients.ts

// import { NextApiRequest, NextApiResponse } from 'next';
// import dbConnect from '@/utils/dbConnect';
// import Client from '@/models/Client';
// import { getSession } from 'next-auth/react';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   await dbConnect();

//   const session = await getSession({ req });

//   if (!session || !session.user) {
//     return res.status(401).json({ error: 'Unauthorized' });
//   }

//   const email = session.user.email;
  
//   if (!email) {
//     return res.status(400).json({ error: 'Email is required' });
//   }

//   try {
//     const client = await Client.findOne({ email }).lean();
//     if (!client) {
//       return res.status(404).json({ message: 'Client not found' });
//     }

//     const clientData = {
//       email: client.email,
//       fullName: client.fullName,
//       exercises: client.exercises || [],
//     };

//     res.status(200).json(clientData);
//   } catch (error: any) {
//     res.status(500).json({ message: error.message });
//   }
// }





// api/auth/clients.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import dbConnect from '@/utils/dbConnect';
// import Client from '@/models/Client';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   await dbConnect();

//   const { email } = req.query;

//   if (!email || typeof email !== 'string') {
//     return res.status(400).json({ error: 'Email is required' });
//   }

//   try {
//     const client = await Client.findOne({ email });
//     if (!client) {
//       return res.status(404).json({ error: 'Client not found' });
//     }
//     res.status(200).json(client);
//   } catch (error) {
//     res.status(500).json({ error: 'Server error' });
//   }
// }



// pages/api/clients.ts

// import { NextApiRequest, NextApiResponse } from 'next';
// import dbConnect from '@/utils/dbConnect';
// import Client from '@/models/Client';

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   await dbConnect();

//   if (req.method !== 'GET') {
//     return res.status(405).json({ error: 'Method not allowed' });
//   }

//   try {
//     const clients = await Client.find({});
//     if (!clients) {
//       return res.status(404).json({ error: 'Clients not found' });
//     }

//     return res.status(200).json(clients);
//   } catch (error) {
//     return res.status(500).json({ error: 'Server error' });
//   }
// };

// export default handler;



// // pages/api/clients.ts

// import { NextApiRequest, NextApiResponse } from 'next';
// import dbConnect from '@/utils/dbConnect';
// import Client from '@/models/Client';

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   await dbConnect();

//   if (req.method !== 'GET') {
//     return res.status(405).json({ error: 'Method not allowed' });
//   }

//   try {
//     const clients = await Client.find({});
//     if (!clients) {
//       return res.status(404).json({ error: 'Clients not found' });
//     }

//     return res.status(200).json(clients);
//   } catch (error) {
//     return res.status(500).json({ error: 'Server error' });
//   }
// };

// export default handler;



// pages/api/clients.ts

// import { NextApiRequest, NextApiResponse } from 'next';
// import dbConnect from '@/utils/dbConnect';
// import Client from '@/models/Client';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   await dbConnect();

//   if (req.method !== 'GET') {
//     return res.status(405).json({ error: 'Method not allowed' });
//   }

//   try {
//     const clients = await Client.find({});
//     if (!clients) {
//       return res.status(404).json({ error: 'Clients not found' });
//     }
//     return res.status(200).json(clients);
//   } catch (error) {
//     return res.status(500).json({ error: 'Server error' });
//   }
// }





// import { NextApiRequest, NextApiResponse } from 'next';
// import { MongoClient } from 'mongodb';

// const uri = process.env.MONGODB_URI!;

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   if (req.method !== 'GET') {
//     return res.status(405).end();
//   }
//   let client: MongoClient | null = null;

//   try {
//     client = new MongoClient(uri);
//     await client.connect();
//     const db = client.db();
//     const clients = await db.collection('clients').find().toArray();
//     res.status(200).json(clients);
//   } catch (error: any) {
//     res.status(500).json({ message: 'Failed to load clients', error: error.message });
//   } finally {
//     if (client) {
//       await client.close();
//     }
//   }
// };

// export default handler;


// import { NextApiRequest, NextApiResponse } from 'next';
// import { MongoClient } from 'mongodb';

// const uri = process.env.MONGODB_URI;
// if (!uri) {
//   throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
// }

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   if (req.method !== 'GET') {
//     return res.status(405).end();
//   }

//   let client: MongoClient | null = null;

//   try {
//     client = new MongoClient(uri);
//     await client.connect();
//     const db = client.db();
//     const clients = await db.collection('clients').find().toArray();
//     res.status(200).json(clients);
//   } catch (error: any) {
//     res.status(500).json({ message: 'Failed to load clients', error: error.message });
//   } finally {
//     if (client) {
//       await client.close();
//     }
//   }
// };

// export default handler;







////////////////////////////////////////////////////// working




// import { NextApiRequest, NextApiResponse } from 'next';
// import dbConnect from '@/utils/dbConnect';
// import Client from '@/models/Client';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   await dbConnect();

//   if (req.method !== 'GET') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   try {
//     const clients = await Client.find({});
//     res.status(200).json(clients);
//   } catch (error: any) {
//     res.status(500).json({ message: 'Failed to load clients', error: error.message });
//   }
// }



//////////////////////////////////////////////////////    working

import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/utils/dbConnect';
import Client from '@/models/Client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method === 'GET') {
    const { email } = req.query;

    try {
      const client = await Client.findOne({ email });
      if (!client) {
        return res.status(404).json({ error: 'Client not found' });
      }
      res.status(200).json(client);
    } catch (error: any) {
      res.status(500).json({ error: 'Internal server error', message: error.message });
    }
  } else if (req.method === 'POST') {
    const { email, fullName } = req.body;

    try {
      const client = new Client({ email, fullName });
      await client.save();
      res.status(201).json(client);
    } catch (error: any) {
      res.status(500).json({ error: 'Internal server error', message: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}















// import { NextApiRequest, NextApiResponse } from 'next';
// import dbConnect from '@/utils/dbConnect';
// import Client from '@/models/Client';
// import { auth } from '@clerk/nextjs/server';
// import { getUserList } from '@clerk/nextjs/server';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   await dbConnect();

//   if (req.method !== 'GET') {
//     return res.status(405).json({ error: 'Method not allowed' });
//   }

//   try {
//     const users = await getUserList();
//     return res.status(200).json(users);
//   } catch (error) {
//     return res.status(500).json({ error: 'Server error' });
//   }
// };















// // pages/api/clients.ts
// // pages/api/clients.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import { auth } from '@clerk/nextjs/server';
// import { User } from '@clerk/clerk-sdk-node'; // Correct import for User
// import dbConnect from '@/utils/dbConnect';

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   await dbConnect();

//   const { userId } = auth(req);
//   if (!userId) {
//     return res.status(401).json({ error: 'Unauthorized' });
//   }

//   if (req.method !== 'GET') {
//     return res.status(405).json({ error: 'Method not allowed' });
//   }

//   try {
//     const userList = await User.list();
//     return res.status(200).json(userList);
//   } catch (error) {
//     return res.status(500).json({ error: 'Server error' });
//   }
// };

// export default handler;

















// pages/api/clients.ts
// import { auth } from '@clerk/nextjs/server';
// import { getAuth } from '@clerk/nextjs/api';
// import { getUserList } from '@clerk/nextjs/server';

// const handler = async (req, res) => {
//   const { userId } = getAuth(req);

//   if (!userId) {
//     return res.status(401).json({ error: 'Unauthorized' });
//   }

//   if (req.method !== 'GET') {
//     return res.status(405).json({ error: 'Method not allowed' });
//   }

//   try {
//     const users = await getUserList();
//     return res.status(200).json(users);
//   } catch (error) {
//     return res.status(500).json({ error: 'Server error' });
//   }
// };

// export default handler;
