const cors = require('cors');
const express = require('express');
const app = express()
//const { getAxl }= ('../functions.js');


const axios = require('axios')


const gethAxl = async function(url, options) {
  try {
    options ? options : {};
    const res = await axios({
      method: "GET",
      url: url,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
      },
      ...options,
    });
    return res.data;
  } catch (err) {
    return err;
  }
}

app.set('json spaces', 2)

app.get('/sfys', (req, res) => {


const api = ("https://ameen-api.vercel.app/sfys?query=")
 
  
const query = req.query.query;  // This is the query parameter
const url = (api + query)

  const response =  gethAxl(url)
 // const resi = response.data
  //const resdata 
  
  res.json({
    creator: 'Unknown One',
    track : query,
    data : response.data
  })})


  

  
  

app.listen(8080, () => {
  console.log('running')
})
