export default async function handler(req, res) {
  try {
    const botResponse = await fetch('http://172.232.103.8:11044/status');
    if (!botResponse.ok) throw new Error('Bot responded with error');
    
    const data = await botResponse.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ 
      status: 'error',
      message: 'Failed to fetch bot status',
      details: error.message 
    });
  }
}
