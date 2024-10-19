const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello Guys!\nwhym?')
})

app.listen(3000)
