import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const getGifFiles = (folderPath: string) => {
  return fs.readdirSync(folderPath).filter(file => file.endsWith('.gif'));
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const gifFolders = ['Back', 'Biceps', 'Chest', 'Leg', 'Shoulder', 'Triceps', 'All'];
    const gifs: Record<string, string[]> = {};

    gifFolders.forEach(folder => {
      const folderPath = path.join(process.cwd(), 'public', 'gifs', folder);
      gifs[folder] = getGifFiles(folderPath);
    });

    gifs['All'] = gifFolders.flatMap(folder => gifs[folder]);

    res.status(200).json(gifs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to read GIF files' });
  }
};
