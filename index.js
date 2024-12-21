const cors = require('cors');
const express = require('express');
const app = express()
app.set('json spaces', 2)

app.get('/sfys', (req, res) => {

const query = req.query.query;  // This is the query parameter

  res.json({
    creator: 'Unknown One'
    track : query 
  })})


  

  
  

app.listen(8080, () => {
  console.log('running')
})
