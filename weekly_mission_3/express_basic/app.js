const express = require('express');

const app = express();

const port = 3000;
app.get('/', (req,res) => {
  res.send('Hello World');
});

app.get('/launchx', (req, res) => {
  res.send('B L');
})

app.get('/ex', (req, res) => {
  const explorer = {name: "Explorer", msg:"Hello"};
  res.send(explorer);
})

app.get('/exp/:explorerName', (req, res) => {
  res.send(req.params);
})

app.listen(port, () =>{
  console.log('App listen'+ port);
} )