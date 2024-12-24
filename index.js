const axios = require('axios');
const express = require('express');
const app = express()
const fg = require('api-dylux')
const yts = require('yt-search')





app.set('json spaces', 2)

app.get('/sfys', (req, res) => {
const query = req.query.query
const q = ("starboy")
const search = yts(q)
const data = search.videos[0];
const yturl = data.url


let down =  fg.yta(yturl)
let downloadUrl = down.dl_url
  
  res.json({
    creator: 'Unknown One',
    track : query,
    url : downloadUrl
  })})

  

app.listen(8080, () => {
  console.log('running')
})
