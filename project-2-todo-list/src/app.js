const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

app.use(express.json());

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
