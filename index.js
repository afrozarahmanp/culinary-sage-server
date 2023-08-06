const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.port || 3000;

const data = require('./Data/data.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Culinary sage server is runnig')
})

app.get('/data', (req, res) =>{
res.send(data)
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})