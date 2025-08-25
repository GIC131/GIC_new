// server/models/imageModel.js

const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: 'Gallery Image'
  },
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // This creates a reference to the User model
    required: true,
  },
}, {
  timestamps: true,
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;