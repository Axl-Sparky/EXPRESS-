const { json, send } = require('micro');
const rateLimit = require('micro-ratelimit');

// Simple in-memory store (replace with database if needed)
let botStatus = {
  status: 'offline',
  activity: 'Not connected',
  type: 0,
  url: null,
  timestamp: new Date().toISOString()
};

// Apply rate limiting (10 requests per minute per IP)
const limit = rateLimit({
  window: 60000,
  limit: 10,
  headers: true
});

module.exports = limit(async (req, res) => {
  try {
    if (req.method === 'POST') {
      const data = await json(req);
      
      // Basic validation
      if (!data.activity || typeof data.type === 'undefined') {
        return send(res, 400, { error: 'Invalid status data' });
      }
      
      botStatus = {
        botName: data.botName || 'Unknown Bot',
        status: data.status || 'online',
        activity: data.activity,
        type: data.type,
        url: data.url || null,
        timestamp: data.timestamp || new Date().toISOString()
      };
      
      return { success: true, updated: botStatus };
    } else if (req.method === 'GET') {
      // Allow GET requests for testing
      return botStatus;
    } else {
      return send(res, 405, { error: 'Method not allowed' });
    }
  } catch (err) {
    console.error('API Error:', err);
    return send(res, 500, { 
      error: 'Server error',
      details: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
});
