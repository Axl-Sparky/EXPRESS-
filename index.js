const cors = require('cors');
const express = require('express');
const app = express()
app.set('json spaces', 2)

app.get('/sfys', (req, res) => {


const api = ("https://ameen-api.vercel.app/sfys?query=")
 
  
const query = req.query.query;  // This is the query parameter
const url = (api + query)

  const response = await fetch(url)
  const res = response.json();
  const resdata = res.data
  
  res.json({
    creator: 'Unknown One',
    track : query,
    data : resdata
  })})


  

  
  

app.listen(8080, () => {
  console.log('running')
})
