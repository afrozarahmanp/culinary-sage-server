const express = require('express')
const app = express()
const port = process.env.port || 3000;

app.get('/', (req, res) => {
  res.send('Culinary sage server is runnig')
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})