const cors = require('cors');
const express = require('express');
const app = express()
app.set('json spaces', 2)

app.get('/', (req, res) => {
  res.json({
    creator: 'Unknown One'
  })})
  

app.listen(8080, () => {
  console.log('running')
})
