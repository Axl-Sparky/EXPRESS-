import xnxxDownloader from '../func/xnxx.js'
import express from 'express'

var router = express.Router()

router.get('/', async (req, res) => {
  var query = req.query.url
  if (!query) return res.json({ creator: 'AmeenInt', status: false, msg: 'url is required' })
  var xdownload = await xnxxDownloader(query)
  res.json(xdownload)
})

export default router
