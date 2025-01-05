const express = require('express');
const app = express();
const taskRoutes = require('./routes/taskRoutes');

app.use(express.json()); // Middleware untuk membaca JSON
app.use('/tasks', taskRoutes);

app.listen(3000, () => console.log('Server is running on http://localhost:3000'));
