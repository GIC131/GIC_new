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

// --- CORRECTED CORS CONFIGURATION FOR LIVE SITE ---
const allowedOrigins = [
  'https://getinteviewconfidence.com',
  'https://www.getinteviewconfidence.com'
];

const corsOptions = {
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
};

app.use(cors(corsOptions));
// ----------------------------------------------------

app.use(express.json());

// --- Define Routes ---
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/gallery', require('./routes/galleryRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/questions', require('./routes/questionRoutes')); 
app.use('/api/candidates', require('./routes/candidateRoutes'));

// --- Serve Static Files ---
app.use('/uploads/documents', express.static(path.join(__dirname, '/uploads/documents')));
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

// Basic route
app.get('/', (req, res) => {
  res.send('Backend server is fully configured and running!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});