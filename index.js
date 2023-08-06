const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.port || 3000;

const recipes = require('./Data/data.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Culinary sage server is runnig')
})

app.get('/recipes', (req, res) =>{
res.send(recipes);
})

app.get('/recipes/:id', (req, res) =>{
  const id = req.params.id;
  const selectedFoods = recipes.find(recipe =>recipe.id == id);
res.send(selectedFoods);
  })
app.get('/chefdetails/:id', (req, res) =>{
  const id = req.params.id;
  const selectedChef = recipes.find(recipe =>recipe.id == id);
res.send(selectedChef);
  })


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})