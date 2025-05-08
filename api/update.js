import fs from 'fs';
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
    return res.status(200).json({ message: 'Activity updated' });
  }
  res.status(405).json({ message: 'Method not allowed' });
}
