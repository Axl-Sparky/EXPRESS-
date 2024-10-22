import cors from 'cors'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import xnxxdl from './ax/xnxxdl.js'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()
app.set('json spaces', 2)

app.get('/', (req, res) => {
  res.json({
    creator: 'Unknown One'
  })})
  
app.use('/xnx', xnxxdl) // ninak vende name /xnx mattiya madhi

app.listen(8080, () => {
  console.log('running')
})
