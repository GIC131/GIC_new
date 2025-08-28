// server/server.js

const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();


connectDB();

const port = process.env.PORT || 5000;


const corsOptions = {
  origin: 'http://localhost:3000', 
  optionsSuccessStatus: 200 
};
app.use(cors(corsOptions));
app.use(express.json());


app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/gallery', require('./routes/galleryRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/questions', require('./routes/questionRoutes')); // Correctly grouped with other routes


app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

app.get('/', (req, res) => {
  res.send('Backend server is fully configured and running!');
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});