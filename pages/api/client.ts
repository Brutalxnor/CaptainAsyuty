







// import { NextApiRequest, NextApiResponse } from 'next';
// import clientPromise from '@/lib/mongodb';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'GET' && req.method !== 'POST') {
//     res.status(405).json({ message: 'Method not allowed' });
//     return;
//   }

//   const email = req.method === 'POST' ? req.body.email : req.query.email;

//   try {
//     const client = await clientPromise;
//     const db = client.db('ClientsDB');

//     if (req.method === 'GET') {
//       const clientData = await db.collection('Clients').findOne({ email });
//       const exercisesData = await db.collection('Exercises').findOne({ email });

//       if (!clientData) {
//         res.status(404).json({ message: 'Client not found' });
//         return;
//       }

//       const combinedData = {
//         ...clientData,
//         exerciseType: exercisesData?.exerciseType || '',
//         exercises: exercisesData?.exercises || [],
//         date: exercisesData?.date || '', // Include the assigned date
//       };

//       res.status(200).json(combinedData);
//     } else if (req.method === 'POST') {
//       const clientData = await db.collection('Clients').findOne({ email });

//       if (!clientData) {
//         res.status(404).json({ message: 'Client not found' });
//         return;
//       }

//       const previousValues = {
//         previousFullName: clientData.previousFullName || clientData.fullName,
//         previousWeight: clientData.previousWeight || clientData.weight,
//         previousHeight: clientData.previousHeight || clientData.height,
//         previousAge: clientData.previousAge || clientData.age,
//         previousFatWeight: clientData.previousFatWeight || clientData.fatWeight,
//         previousMuscleWeight: clientData.previousMuscleWeight || clientData.muscleWeight,
//         previousMusclePercentage: clientData.previousMusclePercentage || clientData.musclePercentage,
//         previousFatPercentage: clientData.previousFatPercentage || clientData.fatPercentage,
//         previousWaistMeasurement: clientData.previousWaistMeasurement || clientData.waistMeasurement,
//         previousRightArmMeasurement: clientData.previousRightArmMeasurement || clientData.rightArmMeasurement,
//         previousLeftArmMeasurement: clientData.previousLeftArmMeasurement || clientData.leftArmMeasurement,
//         previousRightLegMeasurement: clientData.previousRightLegMeasurement || clientData.rightLegMeasurement,
//         previousLeftLegMeasurement: clientData.previousLeftLegMeasurement || clientData.leftLegMeasurement,
//         previousSugarCravings: clientData.previousSugarCravings || clientData.sugarCravings,
//         previousInjuries: clientData.previousInjuries || clientData.injuries,
//         previousDiabetes: clientData.previousDiabetes || clientData.diabetes,
//         previousBloodPressure: clientData.previousBloodPressure || clientData.bloodPressure,
//         previousOnlineTrainingExperience: clientData.previousOnlineTrainingExperience || clientData.onlineTrainingExperience,
//         previousTrainingAge: clientData.previousTrainingAge || clientData.trainingAge,
//       };

//       const updatedClientData = {
//         ...clientData,
//         ...previousValues,
//         ...req.body, // New data from the request body
//       };

//       await db.collection('Clients').updateOne({ email }, { $set: updatedClientData });

//       res.status(200).json({ message: 'Client data updated successfully' });
//     }
//   } catch (error: any) {
//     console.error('Error fetching client data:', error.message);
//     res.status(500).json({ message: 'Error fetching client data', error: error.message });
//   }
// }







// import { NextApiRequest, NextApiResponse } from 'next';
// import clientPromise from '@/lib/mongodb';
// import formidable, { File as FormidableFile } from 'formidable';
// import { ObjectId } from 'mongodb';
// import fs from 'fs';

// interface FileWithMetadata extends FormidableFile {
//   filepath: string;
//   originalFilename?: string;
//   mimetype?: string;
// }

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   console.log(`Received ${req.method} request at /api/client`);

//   if (req.method !== 'GET' && req.method !== 'POST') {
//     res.status(405).json({ message: 'Method not allowed' });
//     return;
//   }

//   let email: string | string[] | undefined;

//   try {
//     const client = await clientPromise;
//     const db = client.db('ClientsDB');

//     if (req.method === 'GET') {
//       email = req.query?.email;

//       if (!email || Array.isArray(email)) {
//         console.error('No valid email provided in the GET request');
//         res.status(400).json({ message: 'Email is required' });
//         return;
//       }

//       const clientData = await db.collection('Clients').findOne({ email });
//       const exercisesData = await db.collection('Exercises').findOne({ email });

//       if (!clientData) {
//         res.status(404).json({ message: 'Client not found' });
//         return;
//       }

//       const combinedData = {
//         ...clientData,
//         exerciseType: exercisesData?.exerciseType || '',
//         exercises: exercisesData?.exercises || [],
//         date: exercisesData?.date || '',
//       };

//       res.status(200).json(combinedData);
//     } else if (req.method === 'POST') {
//       const form = new formidable.IncomingForm();

//       form.parse(req, async (err, fields, files) => {
//         if (err) {
//           console.error('Error parsing form:', err);
//           res.status(500).json({ message: 'Error parsing form', error: err.message });
//           return;
//         }

//         email = fields.email as string;

//         if (!email) {
//           console.error('No email provided in the POST request');
//           res.status(400).json({ message: 'Email is required' });
//           return;
//         }

//         try {
//           const clientData = await db.collection('Clients').findOne({ email });

//           if (!clientData) {
//             res.status(404).json({ message: 'Client not found' });
//             return;
//           }

//           const image = files.image as FileWithMetadata;

//           if (image) {
//             try {
//               const fileData = fs.readFileSync(image.filepath);
//               const imageId = new ObjectId();
//               await db.collection('Images').insertOne({
//                 _id: imageId,
//                 filename: image.originalFilename || 'unknown',
//                 contentType: image.mimetype || 'application/octet-stream',
//                 data: fileData,
//               });
//               fields.imageId = imageId.toString();
//             } catch (imageError) {
//               console.error('Error processing image:', imageError);
//               res.status(500).json({ message: 'Error processing image', error: String(imageError) });
//               return;
//             }
//           }

//           const previousValues = {
//             previousFullName: clientData.previousFullName || clientData.fullName,
//             previousWeight: clientData.previousWeight || clientData.weight,
//             previousHeight: clientData.previousHeight || clientData.height,
//             previousAge: clientData.previousAge || clientData.age,
//             previousFatWeight: clientData.previousFatWeight || clientData.fatWeight,
//             previousMuscleWeight: clientData.previousMuscleWeight || clientData.muscleWeight,
//             previousMusclePercentage: clientData.previousMusclePercentage || clientData.musclePercentage,
//             previousFatPercentage: clientData.previousFatPercentage || clientData.fatPercentage,
//             previousWaistMeasurement: clientData.previousWaistMeasurement || clientData.waistMeasurement,
//             previousRightArmMeasurement: clientData.previousRightArmMeasurement || clientData.rightArmMeasurement,
//             previousLeftArmMeasurement: clientData.previousLeftArmMeasurement || clientData.leftArmMeasurement,
//             previousRightLegMeasurement: clientData.previousRightLegMeasurement || clientData.rightLegMeasurement,
//             previousLeftLegMeasurement: clientData.previousLeftLegMeasurement || clientData.leftLegMeasurement,
//             previousSugarCravings: clientData.previousSugarCravings || clientData.sugarCravings,
//             previousInjuries: clientData.previousInjuries || clientData.injuries,
//             previousDiabetes: clientData.previousDiabetes || clientData.diabetes,
//             previousBloodPressure: clientData.previousBloodPressure || clientData.bloodPressure,
//             previousOnlineTrainingExperience: clientData.previousOnlineTrainingExperience || clientData.onlineTrainingExperience,
//             previousTrainingAge: clientData.previousTrainingAge || clientData.trainingAge,
//           };

//           const updatedClientData = {
//             ...clientData,
//             ...previousValues,
//             ...fields,
//           };

//           await db.collection('Clients').updateOne({ email }, { $set: updatedClientData });

//           res.status(200).json({ message: 'Client data updated successfully' });
//         } catch (error: any) {
//           console.error('Error updating client data:', error.message);
//           res.status(500).json({ message: 'Error updating client data', error: error.message });
//         }
//       });
//     }
//   } catch (error: any) {
//     console.error('Error handling request:', error.message);
//     res.status(500).json({ message: 'Error handling request', error: error.message });
//   }
// }






///notworking

// import { NextApiRequest, NextApiResponse } from 'next';
// import { v2 as cloudinary } from 'cloudinary';
// import multer from 'multer';
// import clientPromise from '@/lib/mongodb';
// import { ObjectId } from 'mongodb';

// // Configure Cloudinary
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// // Configure multer for file handling (image upload)
// const storage = multer.memoryStorage();
// const upload = multer({ storage });

// // Disable Next.js default body parser
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// // Custom MulterRequest interface
// interface MulterRequest extends NextApiRequest {
//   file: Express.Multer.File;
//   body: {
//     email: string;
//   };
// }

// // Helper function to convert buffer to stream
// const bufferToStream = (buffer: Buffer) => {
//   const stream = new (require('stream')).PassThrough();
//   stream.end(buffer);
//   return stream;
// };

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     upload.single('image')(req as any, res as any, async (err: any) => {
//       if (err) {
//         console.error('Error with multer:', err);
//         return res.status(500).json({ message: 'Multer upload failed', error: err.message });
//       }

//       const email = (req as MulterRequest).body.email;

//       if (!email) {
//         console.error('No email provided in the request');
//         return res.status(400).json({ message: 'Email is required' });
//       }

//       try {
//         const client = await clientPromise;
//         const db = client.db('ClientsDB');
//         const clientData = await db.collection('Clients').findOne({ email });

//         if (!clientData) {
//           console.error('Client not found for email:', email);
//           return res.status(404).json({ message: 'Client not found' });
//         }

//         let imageUrl = clientData.image?.url;

//         if ((req as MulterRequest).file) {
//           const fileBuffer = (req as MulterRequest).file.buffer;

//           const uploadResult = await new Promise<{ url: string; public_id: string } | undefined>((resolve, reject) => {
//             const uploadStream = cloudinary.uploader.upload_stream(
//               { resource_type: 'image' },
//               (error, result) => {
//                 if (error) {
//                   reject(error);
//                 } else {
//                   resolve(result as { url: string; public_id: string });
//                 }
//               }
//             );

//             const bufferStream = bufferToStream(fileBuffer);
//             bufferStream.pipe(uploadStream);
//           });

//           if (uploadResult) {
//             imageUrl = uploadResult.url;
//             await db.collection('Clients').updateOne(
//               { email },
//               {
//                 $set: {
//                   image: {
//                     url: uploadResult.url,
//                     public_id: uploadResult.public_id,
//                   },
//                 },
//               }
//             );
//           } else {
//             return res.status(500).json({ message: 'Cloudinary upload failed' });
//           }
//         }

//         const previousValues = {
//           previousFullName: clientData.previousFullName || clientData.fullName,
//           previousWeight: clientData.previousWeight || clientData.weight,
//           previousHeight: clientData.previousHeight || clientData.height,
//           previousAge: clientData.previousAge || clientData.age,
//           previousFatWeight: clientData.previousFatWeight || clientData.fatWeight,
//           previousMuscleWeight: clientData.previousMuscleWeight || clientData.muscleWeight,
//           previousMusclePercentage: clientData.previousMusclePercentage || clientData.musclePercentage,
//           previousFatPercentage: clientData.previousFatPercentage || clientData.fatPercentage,
//           previousWaistMeasurement: clientData.previousWaistMeasurement || clientData.waistMeasurement,
//           previousRightArmMeasurement: clientData.previousRightArmMeasurement || clientData.rightArmMeasurement,
//           previousLeftArmMeasurement: clientData.previousLeftArmMeasurement || clientData.leftArmMeasurement,
//           previousRightLegMeasurement: clientData.previousRightLegMeasurement || clientData.rightLegMeasurement,
//           previousLeftLegMeasurement: clientData.previousLeftLegMeasurement || clientData.leftLegMeasurement,
//           previousSugarCravings: clientData.previousSugarCravings || clientData.sugarCravings,
//           previousInjuries: clientData.previousInjuries || clientData.injuries,
//           previousDiabetes: clientData.previousDiabetes || clientData.diabetes,
//           previousBloodPressure: clientData.previousBloodPressure || clientData.bloodPressure,
//           previousOnlineTrainingExperience: clientData.previousOnlineTrainingExperience || clientData.onlineTrainingExperience,
//           previousTrainingAge: clientData.previousTrainingAge || clientData.trainingAge,
//         };

//         // Update client data with new and previous values
//         const updatedClientData = {
//           ...clientData,
//           ...previousValues,
//           ...req.body,
//           image: { url: imageUrl }, // Update the image URL
//         };

//         await db.collection('Clients').updateOne({ email }, { $set: updatedClientData });

//         console.log('Client data updated successfully for email:', email);
//         res.status(200).json({ message: 'Client data updated successfully' });
//       } catch (error: any) {
//         console.error('Error updating client data:', error.message);
//         res.status(500).json({ message: 'Error updating client data', error: error.message });
//       }
//     });
//   } else {
//     res.status(405).json({ message: `Method ${req.method} not allowed` });
//   }
// }













///// workin


// import { NextApiRequest, NextApiResponse } from 'next';
// import clientPromise from '@/lib/mongodb';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { email, ...rest } = req.body;

//     if (!email) {
//       console.error('No email provided in the request');
//       return res.status(400).json({ message: 'Email is required' });
//     }

//     try {
//       const client = await clientPromise;
//       const db = client.db('ClientsDB');
//       const clientData = await db.collection('Clients').findOne({ email });

//       if (!clientData) {
//         console.error('Client not found for email:', email);
//         return res.status(404).json({ message: 'Client not found' });
//       }

//       // Prepare previous values to maintain history
//       const previousValues = {
//         previousFullName: clientData.previousFullName || clientData.fullName,
//         previousWeight: clientData.previousWeight || clientData.weight,
//         previousHeight: clientData.previousHeight || clientData.height,
//         previousAge: clientData.previousAge || clientData.age,
//         previousFatWeight: clientData.previousFatWeight || clientData.fatWeight,
//         previousMuscleWeight: clientData.previousMuscleWeight || clientData.muscleWeight,
//         previousMusclePercentage: clientData.previousMusclePercentage || clientData.musclePercentage,
//         previousFatPercentage: clientData.previousFatPercentage || clientData.fatPercentage,
//         previousWaistMeasurement: clientData.previousWaistMeasurement || clientData.waistMeasurement,
//         previousRightArmMeasurement: clientData.previousRightArmMeasurement || clientData.rightArmMeasurement,
//         previousLeftArmMeasurement: clientData.previousLeftArmMeasurement || clientData.leftArmMeasurement,
//         previousRightLegMeasurement: clientData.previousRightLegMeasurement || clientData.rightLegMeasurement,
//         previousLeftLegMeasurement: clientData.previousLeftLegMeasurement || clientData.leftLegMeasurement,
//         previousSugarCravings: clientData.previousSugarCravings || clientData.sugarCravings,
//         previousInjuries: clientData.previousInjuries || clientData.injuries,
//         previousDiabetes: clientData.previousDiabetes || clientData.diabetes,
//         previousBloodPressure: clientData.previousBloodPressure || clientData.bloodPressure,
//         previousOnlineTrainingExperience: clientData.previousOnlineTrainingExperience || clientData.onlineTrainingExperience,
//         previousTrainingAge: clientData.previousTrainingAge || clientData.trainingAge,
//       };

//       // Update client data with new and previous values
//       const updatedClientData = {
//         ...clientData,
//         ...previousValues,
//         ...rest,
//       };

//       await db.collection('Clients').updateOne({ email }, { $set: updatedClientData });

//       console.log('Client data updated successfully for email:', email);
//       res.status(200).json({ message: 'Client data updated successfully' });
//     } catch (error: any) {
//       console.error('Error updating client data:', error.message);
//       res.status(500).json({ message: 'Error updating client data', error: error.message });
//     }
//   } else {
//     res.status(405).json({ message: `Method ${req.method} not allowed` });
//   }
// }







// import { NextApiRequest, NextApiResponse } from 'next';
// import clientPromise from '@/lib/mongodb';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { method } = req;

//   if (method === 'POST') {
//     const { email, ...newData } = req.body;

//     if (!email) {
//       console.error('No email provided in the request');
//       return res.status(400).json({ message: 'Email is required' });
//     }

//     try {
//       const client = await clientPromise;
//       const db = client.db('ClientsDB');
//       const clientData = await db.collection('Clients').findOne({ email });

//       if (!clientData) {
//         console.error('Client not found for email:', email);
//         return res.status(404).json({ message: 'Client not found' });
//       }

//       // Capture previous data
//       const previousValues = {
//         previousFullName: clientData.fullName || '',
//         previousWeight: clientData.weight || '',
//         previousHeight: clientData.height || '',
//         previousAge: clientData.age || '',
//         previousFatWeight: clientData.fatWeight || '',
//         previousMuscleWeight: clientData.muscleWeight || '',
//         previousMusclePercentage: clientData.musclePercentage || '',
//         previousFatPercentage: clientData.fatPercentage || '',
//         previousWaistMeasurement: clientData.waistMeasurement || '',
//         previousRightArmMeasurement: clientData.rightArmMeasurement || '',
//         previousLeftArmMeasurement: clientData.leftArmMeasurement || '',
//         previousRightLegMeasurement: clientData.rightLegMeasurement || '',
//         previousLeftLegMeasurement: clientData.leftLegMeasurement || '',
//         previousSugarCravings: clientData.sugarCravings || '',
//         previousInjuries: clientData.previousInjuries || '',
//         previousDiabetes: clientData.diabetes || '',
//         previousBloodPressure: clientData.bloodPressure || '',
//         previousOnlineTrainingExperience: clientData.onlineTrainingExperience || '',
//         previousTrainingAge: clientData.trainingAge || '',
//       };

//       // Update client data with new and previous values
//       const updatedClientData = {
//         ...previousValues,
//         ...newData,
//       };

//       await db.collection('Clients').updateOne({ email }, { $set: updatedClientData });

//       console.log('Client data updated successfully for email:', email);
//       res.status(200).json({ message: 'Client data updated successfully' });
//     } catch (error: any) {
//       console.error('Error updating client data:', error.message);
//       res.status(500).json({ message: 'Error updating client data', error: error.message });
//     }
//   } else if (method === 'GET') {
//     const { email } = req.query;

//     if (!email) {
//       console.error('No email provided in the request');
//       return res.status(400).json({ message: 'Email is required' });
//     }

//     try {
//       const client = await clientPromise;
//       const db = client.db('ClientsDB');
//       const clientData = await db.collection('Clients').findOne({ email: email.toString() });

//       if (!clientData) {
//         console.error('Client not found for email:', email);
//         return res.status(404).json({ message: 'Client not found' });
//       }

//       res.status(200).json(clientData);
//     } catch (error: any) {
//       console.error('Error fetching client data:', error.message);
//       res.status(500).json({ message: 'Error fetching client data', error: error.message });
//     }
//   } else {
//     res.status(405).json({ message: `Method ${method} not allowed` });
//   }
// }












// import { NextApiRequest, NextApiResponse } from 'next';
// import clientPromise from '@/lib/mongodb';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { method } = req;

//   if (method === 'POST') {
//     const { email, ...newData } = req.body;

//     if (!email) {
//       console.error('No email provided in the request');
//       return res.status(400).json({ message: 'Email is required' });
//     }

//     try {
//       const client = await clientPromise;
//       const db = client.db('ClientsDB');
//       const clientData = await db.collection('Clients').findOne({ email });

//       if (!clientData) {
//         console.error('Client not found for email:', email);
//         return res.status(404).json({ message: 'Client not found' });
//       }

//       // Capture previous data
//       const previousValues = {
//         previousFullName: clientData.fullName || '',
//         previousWeight: clientData.weight || '',
//         previousHeight: clientData.height || '',
//         previousAge: clientData.age || '',
//         previousFatWeight: clientData.fatWeight || '',
//         previousMuscleWeight: clientData.muscleWeight || '',
//         previousMusclePercentage: clientData.musclePercentage || '',
//         previousFatPercentage: clientData.fatPercentage || '',
//         previousWaistMeasurement: clientData.waistMeasurement || '',
//         previousRightArmMeasurement: clientData.rightArmMeasurement || '',
//         previousLeftArmMeasurement: clientData.leftArmMeasurement || '',
//         previousRightLegMeasurement: clientData.rightLegMeasurement || '',
//         previousLeftLegMeasurement: clientData.leftLegMeasurement || '',
//         previousSugarCravings: clientData.sugarCravings || '',
//         previousInjuries: clientData.previousInjuries || '',
//         previousDiabetes: clientData.diabetes || '',
//         previousBloodPressure: clientData.bloodPressure || '',
//         previousOnlineTrainingExperience: clientData.onlineTrainingExperience || '',
//         previousTrainingAge: clientData.trainingAge || '',
//       };

//       // Update client data with new and previous values
//       const updatedClientData = {
//         ...previousValues,
//         ...newData,
//       };

//       await db.collection('Clients').updateOne({ email }, { $set: updatedClientData });

//       console.log('Client data updated successfully for email:', email);
//       res.status(200).json({ message: 'Client data updated successfully' });
//     } catch (error: any) {
//       console.error('Error updating client data:', error.message);
//       res.status(500).json({ message: 'Error updating client data', error: error.message });
//     }
//   } else if (method === 'GET') {
//     const { email } = req.query;

//     if (!email) {
//       console.error('No email provided in the request');
//       return res.status(400).json({ message: 'Email is required' });
//     }

//     try {
//       const client = await clientPromise;
//       const db = client.db('ClientsDB');
      
//       // Fetch client data
//       const clientData = await db.collection('Clients').findOne({ email: email.toString() });

//       if (!clientData) {
//         console.error('Client not found for email:', email);
//         return res.status(404).json({ message: 'Client not found' });
//       }

//       // Fetch exercises for the client
//       const exercisesData = await db.collection('Exercises').find({ email: email.toString() }).toArray();
      
//       // Include exercises in the client data response
//       clientData.exercises = exercisesData.length ? exercisesData[0].exercises : [];

//       res.status(200).json(clientData);
//     } catch (error: any) {
//       console.error('Error fetching client data:', error.message);
//       res.status(500).json({ message: 'Error fetching client data', error: error.message });
//     }
//   } else {
//     res.status(405).json({ message: `Method ${method} not allowed` });
//   }
// }












// // /pages/api/client.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import clientPromise from '@/lib/mongodb';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { method } = req;

//   if (method === 'POST') {
//     // Create new client data
//     const { email, ...newData } = req.body;

//     if (!email) {
//       console.error('No email provided in the request');
//       return res.status(400).json({ message: 'Email is required' });
//     }

//     try {
//       const client = await clientPromise;
//       const db = client.db('ClientsDB');

//       // Check if client already exists
//       const existingClient = await db.collection('Clients').findOne({ email });

//       if (existingClient) {
//         console.error('Client already exists for email:', email);
//         return res.status(400).json({ message: 'Client already exists' });
//       }

//       // Create new client data
//       const newClientData = {
//         email,
//         ...newData,
//       };

//       await db.collection('Clients').insertOne(newClientData);

//       console.log('New client data created successfully for email:', email);
//       res.status(201).json({ message: 'Client data created successfully' });
//     } catch (error: any) {
//       console.error('Error creating client data:', error.message);
//       res.status(500).json({ message: 'Error creating client data', error: error.message });
//     }
//   } else if (method === 'PUT') {
//     // Update existing client data
//     const { email, ...newData } = req.body;

//     if (!email) {
//       console.error('No email provided in the request');
//       return res.status(400).json({ message: 'Email is required' });
//     }

//     try {
//       const client = await clientPromise;
//       const db = client.db('ClientsDB');
//       const clientData = await db.collection('Clients').findOne({ email });

//       if (!clientData) {
//         console.error('Client not found for email:', email);
//         return res.status(404).json({ message: 'Client not found' });
//       }

//       // Capture previous data
//       const previousValues = {
//         previousFullName: clientData.fullName || '',
//         previousWeight: clientData.weight || '',
//         previousHeight: clientData.height || '',
//         previousAge: clientData.age || '',
//         previousFatWeight: clientData.fatWeight || '',
//         previousMuscleWeight: clientData.muscleWeight || '',
//         previousMusclePercentage: clientData.musclePercentage || '',
//         previousFatPercentage: clientData.fatPercentage || '',
//         previousWaistMeasurement: clientData.waistMeasurement || '',
//         previousRightArmMeasurement: clientData.rightArmMeasurement || '',
//         previousLeftArmMeasurement: clientData.leftArmMeasurement || '',
//         previousRightLegMeasurement: clientData.rightLegMeasurement || '',
//         previousLeftLegMeasurement: clientData.leftLegMeasurement || '',
//         previousSugarCravings: clientData.sugarCravings || '',
//         previousInjuries: clientData.previousInjuries || '',
//         previousDiabetes: clientData.diabetes || '',
//         previousBloodPressure: clientData.bloodPressure || '',
//         previousOnlineTrainingExperience: clientData.onlineTrainingExperience || '',
//         previousTrainingAge: clientData.trainingAge || '',
//       };

//       // Update client data with new and previous values
//       const updatedClientData = {
//         ...clientData,
//         ...previousValues,
//         ...newData,
//       };

//       await db.collection('Clients').updateOne({ email }, { $set: updatedClientData });

//       console.log('Client data updated successfully for email:', email);
//       res.status(200).json({ message: 'Client data updated successfully' });
//     } catch (error: any) {
//       console.error('Error updating client data:', error.message);
//       res.status(500).json({ message: 'Error updating client data', error: error.message });
//     }
//   } else if (method === 'GET') {
//     const { email } = req.query;

//     if (!email) {
//       console.error('No email provided in the request');
//       return res.status(400).json({ message: 'Email is required' });
//     }

//     try {
//       const client = await clientPromise;
//       const db = client.db('ClientsDB');

//       // Fetch client data
//       const clientData = await db.collection('Clients').findOne({ email: email.toString() });

//       if (!clientData) {
//         console.error('Client not found for email:', email);
//         return res.status(404).json({ message: 'Client not found' });
//       }

//       // Fetch exercises for the client
//       const exercisesData = await db.collection('Exercises').find({ email: email.toString() }).toArray();

//       // Include exercises in the client data response
//       clientData.exercises = exercisesData.length ? exercisesData[0].exercises : [];

//       res.status(200).json(clientData);
//     } catch (error: any) {
//       console.error('Error fetching client data:', error.message);
//       res.status(500).json({ message: 'Error fetching client data', error: error.message });
//     }
//   } else {
//     res.status(405).json({ message: `Method ${method} not allowed` });
//   }
// }






import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  // if (method === 'POST') {
  //   // Create new client data
  //   const { email, ...newData } = req.body;

  //   if (!email) {
  //     return res.status(400).json({ message: 'Email is required' });
  //   }

  //   try {
  //     const client = await clientPromise;
  //     const db = client.db('ClientsDB');

  //     // Check if client already exists
  //     const existingClient = await db.collection('Clients').findOne({ email });

  //     if (existingClient) {
  //       return res.status(409).json({ message: 'Client already exists' });
  //     }

  //     // Create new client data
  //     const newClientData = {
  //       email,
  //       ...newData,
  //     };

  //     await db.collection('Clients').insertOne(newClientData);

  //     return res.status(201).json({ message: 'Client data created successfully' });
  //   } catch (error: any) {
  //     return res.status(500).json({ message: 'Error creating client data', error: error.message });
  //   }
  // } 

  if (method === 'POST') {
    const { email, ...newData } = req.body;
  
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }
  
    try {
      const client = await clientPromise;
      const db = client.db('ClientsDB');
  
      // Check if client already exists
      const existingClient = await db.collection('Clients').findOne({ email });
  
      if (existingClient) {
        // Instead of throwing an error, update the existing client
        await db.collection('Clients').updateOne({ email }, { $set: newData });
        return res.status(200).json({ message: 'Client data updated successfully' });
      }
  
      // If no client exists, create a new one
      await db.collection('Clients').insertOne({ email, ...newData });
      return res.status(201).json({ message: 'Client created successfully' });
    } catch (error: any) {
      return res.status(500).json({ message: 'Error creating/updating client data', error: error.message });
    }
  }
  


  else if (method === 'PUT') {
    // Update existing client data
    const { email, ...newData } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    try {
      const client = await clientPromise;
      const db = client.db('ClientsDB');
      const clientData = await db.collection('Clients').findOne({ email });

      if (!clientData) {
        return res.status(404).json({ message: 'Client not found' });
      }

      // Capture previous data
      const previousValues = {
        previousFullName: clientData.fullName || '',
        previousWeight: clientData.weight || '',
        previousHeight: clientData.height || '',
        previousAge: clientData.age || '',
        previousFatWeight: clientData.fatWeight || '',
        previousMuscleWeight: clientData.muscleWeight || '',
        previousMusclePercentage: clientData.musclePercentage || '',
        previousFatPercentage: clientData.fatPercentage || '',
        previousWaistMeasurement: clientData.waistMeasurement || '',
        previousRightArmMeasurement: clientData.rightArmMeasurement || '',
        previousLeftArmMeasurement: clientData.leftArmMeasurement || '',
        previousRightLegMeasurement: clientData.rightLegMeasurement || '',
        previousLeftLegMeasurement: clientData.leftLegMeasurement || '',
        previousSugarCravings: clientData.sugarCravings || '',
        previousInjuries: clientData.previousInjuries || '',
        previousDiabetes: clientData.diabetes || '',
        previousBloodPressure: clientData.bloodPressure || '',
        previousOnlineTrainingExperience: clientData.onlineTrainingExperience || '',
        previousTrainingAge: clientData.trainingAge || '',
      };

      // Update client data with new and previous values
      const updatedClientData = {
        ...clientData,
        ...previousValues,
        ...newData,
      };

      await db.collection('Clients').updateOne({ email }, { $set: updatedClientData });

      return res.status(200).json({ message: 'Client data updated successfully' });
    } catch (error: any) {
      return res.status(500).json({ message: 'Error updating client data', error: error.message });
    }
  } 

  else if (method === 'GET') {
    const { email } = req.query;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    try {
      const client = await clientPromise;
      const db = client.db('ClientsDB');

      // Fetch client data
      const clientData = await db.collection('Clients').findOne({ email: email.toString() });

      if (!clientData) {
        return res.status(404).json({ message: 'Client not found' });
      }
      if (!clientData.images) {
        clientData.images = { front: null, back: null }; // Ensure 'images' field exists
      }
      

      // Fetch exercises for the client
      const exercisesData = await db.collection('Exercises').find({ email: email.toString() }).toArray();

      // Include exercises in the client data response
      clientData.exercises = exercisesData.length ? exercisesData[0].exercises : [];

      return res.status(200).json(clientData);
    } catch (error: any) {
      return res.status(500).json({ message: 'Error fetching client data', error: error.message });
    }
  } 

  else {
    return res.status(405).json({ message: `Method ${method} not allowed` });
  }
}
