import cors from 'cors'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()

app.get('/', function (req, res) {

  app.use('/xnxxdl', xnxxdl)
})

app.listen(3000)
