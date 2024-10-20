import cors from 'cors'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import xnxxdl from './ax/xnxxdl.js'

const app = express()
app.set('json spaces', 2)

app.get('/', (req, res) => {
  res.json({
    creator: 'Ameen Int'
  })})
  
app.use('/xnx', xnxxdl) // ninak vende name /xnx mattiya madhi

app.listen(8080, () => {
  console.log('api by ameen. running on 8080')
})
