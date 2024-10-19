const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('A web For Testing ❤️✅️')
})

app.listen(3000)
