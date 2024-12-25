const express = require('express');
const app = express();
const db = require('./src/database/knex');


db.raw('SELECT 1+1 AS result')
  .then(() => {
    console.log('Database connected');
  })
  .catch(err => {
    console.error('Database connection failed:', err);
  });

app.use(express.json()); 

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});