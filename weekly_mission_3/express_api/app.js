const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

app.get('/v1/explorers', (req,res) => {
  console.log('Api Explorer requests'+ new Date());
  const explorer1 = {id: 1, name: "oepr"};
  const explorer2 = {id: 2, name: "oepr2"};
  const explorer3 = {id: 3, name: "oepr3"};
  const explorer4 = {id: 4, name: "oepr4"};
  const explorers = [explorer1, explorer2, explorer3, explorer4];
  res.status(200).json(explorers);
});

app.get('/v1/explorers/:id', (req,res) => {
  console.log('Api Explorer requests'+ new Date());
  const explorer = {id: 1, name: "oepr"};
  res.status(200).json(explorer);
});

app.post('/v1/explorers', (req,res) => {
  console.log('Api Explorer POST requests'+ new Date());
  const requestBody = req.body;
  res.status(201).json({message: "Created"});
});

app.put('/v1/explorers/:id', (req,res) => {
  console.log('Api Explorer PUT requests'+ new Date());
  const requestBody = req.body;
  res.status(200).json({message: "Updated"});
});

app.put('/v1/explorers/:id', (req,res) => {
  console.log('Api Explorer DELETE requests'+ new Date());
  const requestBody = req.body;
  res.status(200).json({message: "Deleted"});
});

// Con esto inicializamos esta app
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})