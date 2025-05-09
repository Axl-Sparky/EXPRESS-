export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const response = await fetch('http://172.232.103.8:11044/admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': req.headers.authorization
        },
        body: JSON.stringify(req.body)
      });
      const data = await response.json();
      res.status(response.status).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to connect to bot' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
