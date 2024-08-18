













// //api/upload-images.ts

// import { NextApiRequest, NextApiResponse } from 'next';
// import { v2 as cloudinary } from 'cloudinary';
// import multer from 'multer';
// import { Readable } from 'stream';

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
// }

// // Define the CloudinaryUploadResponse type
// interface CloudinaryUploadResponse {
//   url: string;
//   public_id: string;
//   // Add any other properties you expect in the response
// }

// // Main handler function
// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     upload.single('image')(req as any, res as any, async (err: any) => {
//       if (err) {
//         console.error('Error with multer:', err);
//         return res.status(500).json({ message: 'Multer upload failed', error: err.message });
//       }

//       const file = (req as MulterRequest).file;

//       if (!file) {
//         return res.status(400).json({ message: 'No file uploaded' });
//       }

//       const fileBuffer = file.buffer;

//       try {
//         const uploadResult = await new Promise<CloudinaryUploadResponse>((resolve, reject) => {
//           const uploadStream = cloudinary.uploader.upload_stream(
//             { resource_type: 'image' },
//             (error, result) => {
//               if (error) {
//                 reject(error);
//               } else {
//                 resolve(result as CloudinaryUploadResponse);
//               }
//             }
//           );

//           const stream = Readable.from(fileBuffer);
//           stream.pipe(uploadStream);
//         });

//         res.status(200).json({
//           url: uploadResult.url,
//           public_id: uploadResult.public_id,
//         });
//       } catch (error: any) {
//         console.error('Error uploading to Cloudinary:', error.message);
//         res.status(500).json({ message: 'Cloudinary upload failed', error: error.message });
//       }
//     });
//   } else {
//     res.status(405).json({ message: `Method ${req.method} not allowed` });
//   }
// }












// // api/upload-images.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import { v2 as cloudinary } from 'cloudinary';
// import multer from 'multer';
// import { Readable } from 'stream';

// // Configure Cloudinary
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// // Configure multer for file handling (image upload) with size limits
// const storage = multer.memoryStorage();
// const upload = multer({
//   storage,
//   limits: {
//     fileSize: 5 * 1024 * 1024, // 5 MB limit
//   },
// });

// // Disable Next.js default body parser
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// // Custom MulterRequest interface
// interface MulterRequest extends NextApiRequest {
//   file: Express.Multer.File;
// }

// // Main handler function
// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     upload.single('image')(req as any, res as any, async (err: any) => {
//       if (err) {
//         console.error('Error with multer:', err);
//         return res.status(500).json({ message: 'Multer upload failed', error: err.message });
//       }

//       const file = (req as MulterRequest).file;

//       if (!file) {
//         return res.status(400).json({ message: 'No file uploaded' });
//       }

//       const fileBuffer = file.buffer;

//       try {
//         const uploadResult = await new Promise<any>((resolve, reject) => {
//           const uploadStream = cloudinary.uploader.upload_stream(
//             { resource_type: 'image' },
//             (error, result) => {
//               if (error) {
//                 reject(error);
//               } else {
//                 resolve(result);
//               }
//             }
//           );

//           const stream = Readable.from(fileBuffer);
//           stream.pipe(uploadStream);
//         });

//         res.status(200).json({
//           url: uploadResult.url,
//           public_id: uploadResult.public_id,
//         });
//       } catch (error: any) {
//         console.error('Error uploading to Cloudinary:', error.message);
//         res.status(500).json({ message: 'Cloudinary upload failed', error: error.message });
//       }
//     });
//   } else {
//     res.status(405).json({ message: `Method ${req.method} not allowed` });
//   }
// }















// // api/upload-images.ts


// /////////////////////////working

// import { NextApiRequest, NextApiResponse } from 'next';
// import { v2 as cloudinary } from 'cloudinary';
// import multer from 'multer';
// import { Readable } from 'stream';

// // Configure Cloudinary
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// // Configure multer for file handling (image upload) with size limits
// const storage = multer.memoryStorage();
// const upload = multer({
//   storage,
//   limits: {
//     fileSize: 5 * 1024 * 1024, // 5 MB limit
//   },
// });

// // Disable Next.js default body parser
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// // Custom MulterRequest interface
// interface MulterRequest extends NextApiRequest {
//   file: Express.Multer.File;
// }

// // Main handler function
// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     upload.single('image')(req as any, res as any, async (err: any) => {
//       if (err) {
//         if (err instanceof multer.MulterError) {
//           // Handle Multer-specific errors
//           console.error('Multer error:', err.message);
//           return res.status(400).json({ message: 'Multer error', error: err.message });
//         } else {
//           // Handle other errors
//           console.error('Error with multer:', err);
//           return res.status(500).json({ message: 'Multer upload failed', error: err.message });
//         }
//       }

//       const file = (req as MulterRequest).file;

//       if (!file) {
//         console.error('No file was uploaded');
//         return res.status(400).json({ message: 'No file uploaded' });
//       }

//       console.log('File received:', file);

//       const fileBuffer = file.buffer;

//       try {
//         const uploadResult = await new Promise<any>((resolve, reject) => {
//           const uploadStream = cloudinary.uploader.upload_stream(
//             { resource_type: 'image' },
//             (error, result) => {
//               if (error) {
//                 reject(error);
//               } else {
//                 resolve(result);
//               }
//             }
//           );

//           const stream = Readable.from(fileBuffer);
//           stream.pipe(uploadStream);
//         });

//         if (!uploadResult || !uploadResult.url || !uploadResult.public_id) {
//           throw new Error('Invalid Cloudinary upload response');
//         }

//         res.status(200).json({
//           url: uploadResult.url,
//           public_id: uploadResult.public_id,
//         });
//       } catch (error: any) {
//         console.error('Error uploading to Cloudinary:', error.message);
//         res.status(500).json({ message: 'Cloudinary upload failed', error: error.message });
//       }
//     });
//   } else {
//     res.status(405).json({ message: `Method ${req.method} not allowed` });
//   }
// }









// api/upload-images.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import { Readable } from 'stream';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure multer for file handling (image upload) with size limits
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5 MB limit per file
  },
}).fields([
  { name: 'front', maxCount: 1 },
  { name: 'back', maxCount: 1 }
]);

// Disable Next.js default body parser
export const config = {
  api: {
    bodyParser: false,
  },
};

// Custom MulterRequest interface
interface MulterRequest extends NextApiRequest {
  files: {
    front?: Express.Multer.File[];
    back?: Express.Multer.File[];
  };
}

// Main handler function
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    upload(req as any, res as any, async (err: any) => {
      if (err) {
        if (err instanceof multer.MulterError) {
          // Handle Multer-specific errors
          console.error('Multer error:', err.message);
          return res.status(400).json({ message: 'Multer error', error: err.message });
        } else {
          // Handle other errors
          console.error('Error with multer:', err);
          return res.status(500).json({ message: 'Multer upload failed', error: err.message });
        }
      }

      const files = (req as MulterRequest).files;

      if (!files || (!files.front && !files.back)) {
        console.error('No files were uploaded');
        return res.status(400).json({ message: 'No files uploaded' });
      }

      console.log('Files received:', files);

      const uploadResults: Record<string, any> = {};

      try {
        if (files.front && files.front[0]) {
          uploadResults.front = await uploadToCloudinary(files.front[0].buffer);
        }

        if (files.back && files.back[0]) {
          uploadResults.back = await uploadToCloudinary(files.back[0].buffer);
        }

        res.status(200).json(uploadResults);
      } catch (error: any) {
        console.error('Error uploading to Cloudinary:', error.message);
        res.status(500).json({ message: 'Cloudinary upload failed', error: error.message });
      }
    });
  } else {
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}

async function uploadToCloudinary(fileBuffer: Buffer): Promise<any> {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { resource_type: 'image' },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );

    const stream = Readable.from(fileBuffer);
    stream.pipe(uploadStream);
  });
}
