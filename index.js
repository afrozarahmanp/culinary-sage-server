const express = require('express')
const app = express()
const port = process.env.port || 3000;

const recipes = require('./Data/data.json')

app.get('/', (req, res) => {
  res.send('Culinary sage server is runnig')
})

app.get('/recipes', (req, res) =>{
res.send(recipes)
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})