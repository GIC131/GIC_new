// server/server.js

const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

// Connect to Database
connectDB();

const port = process.env.PORT || 5000;

// Middleware
const corsOptions = {
  origin: 'http://localhost:3000', // Allow only your frontend to connect
  optionsSuccessStatus: 200 
};
app.use(cors(corsOptions));
app.use(express.json());

// --- Define Routes ---
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/gallery', require('./routes/galleryRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/questions', require('./routes/questionRoutes')); // Correctly grouped with other routes

// --- Serve Static Files (Uploaded Images) ---
// This tells Node.js that if a request comes in for '/uploads', it should serve files from the 'uploads' directory.
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

// Basic route to check if the server is running
app.get('/', (req, res) => {
  res.send('Backend server is fully configured and running!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});