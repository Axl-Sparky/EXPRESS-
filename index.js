const express = require('express')
const app = express()
var hi = 'okey bye'
app.get('/', function (req, res) {
  res.send(hi)
})

app.listen(3000)
