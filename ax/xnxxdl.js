const { xnxxDownloader } = require('../func/xnxx.js');
const express = require('express');
var router = express.Router()

router.get('/', async (req, res) => {
  var query = req.query.url
  if (!query) return res.json({ creator: 'Myr', status: false, msg: 'url is required' })
  var xdownload = await xnxxDownloader(query)
  res.json(xdownload)
})

export default router
