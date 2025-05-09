// api/test.js
module.exports = async (req, res) => {
  return {
    status: 'ok',
    message: 'API is working',
    timestamp: new Date().toISOString()
  };
};
