// server/controllers/galleryController.js

const Image = require('../models/imageModel');
const fs = require('fs');
const path = require('path');

// @desc    Get all images
// @route   GET /api/gallery
const getImages = async (req, res) => {
  try {
    const images = await Image.find({}).sort({ createdAt: -1 });
    res.json(images);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Upload a new image
// @route   POST /api/gallery/upload
const uploadImage = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ msg: 'Please upload a file' });
  }

  try {
    const newImage = new Image({
      imageUrl: `/uploads/${req.file.filename}`,
      uploadedBy: req.user.id,
      title: req.body.title || 'Gallery Image'
    });

    const savedImage = await newImage.save();
    res.status(201).json(savedImage);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Delete a media item
// @route   DELETE /api/gallery/:id
const deleteMedia = async (req, res) => {
  try {
    const media = await Image.findById(req.params.id);

    if (!media) {
      return res.status(404).json({ msg: 'Media not found' });
    }

    // Construct the file path relative to the project root
    const filePath = path.join(__dirname, '..', media.imageUrl);

    // Delete the file from the server's filesystem
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error('Failed to delete file from server:', err);
        // We can still proceed to delete from DB, but we log the error
      }
    });
    
    // Remove the record from the database
    await media.deleteOne();

    res.json({ msg: 'Media item removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};


module.exports = {
  getImages,
  uploadImage,
  deleteMedia,
};