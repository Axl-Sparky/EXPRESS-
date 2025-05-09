export default async function handler(req, res) {
  try {
    const response = await fetch('http://your-bot-server-ip:7965/status');
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch bot status' });
  }
}
