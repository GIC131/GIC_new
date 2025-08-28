// server/middleware/authMiddleware.js

const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    
    console.log('Secret being used for verification:', process.env.JWT_SECRET); // <-- DEBUGGING LINE
    try {
      
      token = req.headers.authorization.split(' ')[1];

      
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      
      req.user = await User.findById(decoded.user.id).select('-password');
      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ msg: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ msg: 'Not authorized, no token' });
  }
};


const adminProtect = (req, res, next) => {
    if (req.user && (req.user.role === 'Admin' || req.user.role === 'Super Admin')) {
        next();
    } else {
        res.status(403).json({ msg: 'Not authorized as an Admin or Super Admin' });
    }
};

module.exports = { protect, adminProtect };