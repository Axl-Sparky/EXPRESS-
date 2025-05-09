// api/update.js
const { json, send } = require('micro');
const rateLimit = require('micro-ratelimit');

// Simple in-memory store
let botStatus = {
  status: 'offline',
  activity: 'Not connected',
  type: 0,
  url: null,
  timestamp: new Date().toISOString()
};

// Rate limiting (15 requests per minute)
const limit = rateLimit({
  window: 60000,
  limit: 15,
  headers: true
});

module.exports = limit(async (req, res) => {
  try {
    console.log('Incoming request:', req.method, req.url);
    
    if (req.method === 'POST') {
      const data = await json(req);
      console.log('Received data:', JSON.stringify(data, null, 2));
      
      // Basic validation
      if (!data || typeof data !== 'object') {
        return send(res, 400, { error: 'Invalid request body' });
      }

      // Update status
      botStatus = {
        botName: data.botName || 'Unknown Bot',
        status: data.status || 'online',
        activity: data.activity || 'Unknown',
        type: data.type || 0,
        url: data.url || null,
        timestamp: data.timestamp || new Date().toISOString()
      };
      
      console.log('Updated status:', botStatus);
      return { success: true, status: botStatus };
    }
    else if (req.method === 'GET') {
      // Allow GET requests for testing
      return botStatus;
    }
    else {
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
