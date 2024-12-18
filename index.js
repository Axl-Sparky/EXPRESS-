const cors = require('cors');
const express = require('express');
//const path = require('path');

//const { fileURLToPath } = require('url');
//const xnxxdl = require('./ax/xnxxdl.js');
//const __filename = fileURLToPath(import.meta.url)
//const __dirname = path.dirname(__filename)
const app = express()
app.set('json spaces', 2)

app.get('/', (req, res) => {
  res.json({
    creator: 'Unknown One'
  })})
  
//app.use('/xnx', xnxxdl) // ninak vende name /xnx mattiya madhi

app.listen(8080, () => {
  console.log('running')
})
