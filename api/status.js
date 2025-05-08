let botStatus = {
  status: 'offline',
  activity: 'Not connected',
  type: 0,
  url: null,
  timestamp: new Date().toISOString()
};

// This is a hack to share the same status object between files
try {
  const updateModule = require('./update');
  botStatus = updateModule.botStatus || botStatus;
} catch (e) {
  console.error('Could not import update module:', e);
}

module.exports = (req, res) => {
  res.setHeader('Cache-Control', 'no-cache');
  res.json(botStatus);
};
