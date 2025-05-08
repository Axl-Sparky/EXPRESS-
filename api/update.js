// api/update.js

let latestStatus = null;

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    if (data) {
      latestStatus = {
        ...data,
        timestamp: Date.now(),
      };
      return res.status(200).json({ success: true });
    } else {
      return res.status(400).json({ error: 'No data received' });
    }
  }

  if (req.method === 'GET') {
    return res.status(200).json(latestStatus || {
      status: 'Offline',
      activity: 'No data yet',
      type: 'N/A',
      timestamp: null
    });
  }

  res.status(405).end(); // Method Not Allowed
}
