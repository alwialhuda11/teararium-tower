// pages/api/tea.ts
import { NextApiRequest, NextApiResponse } from 'next';

interface Tea {
  name: string;
}

const getTeaRankings = (): Tea[] => [
  { name: 'Green Tea' },
  { name: 'Black Tea' },
  { name: 'Oolong Tea' },
  // Add more tea data as needed
];

const handler = (req: NextApiRequest, res: NextApiResponse<Tea[]>) => {
  res.status(200).json(getTeaRankings());
};

export default handler;
