const { json } = require('micro');

let botStatus = {
  status: 'offline',
  activity: 'Not connected',
  type: 0,
  url: null,
  timestamp: new Date().toISOString()
};

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const data = await json(req);
      botStatus = {
        status: data.status || 'online',
        activity: data.activity || 'Unknown',
        type: data.type || 0,
        url: data.url || null,
        timestamp: data.timestamp || new Date().toISOString()
      };
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
