// server/controllers/galleryController.js
const Image = require('../models/imageModel');
const fs = require('fs');
const path = require('path');

// UPDATED to filter by category
const getImages = async (req, res) => {
  try {
    const filter = {};
    if (req.query.category) {
      filter.category = req.query.category;
    }
    const images = await Image.find(filter).sort({ createdAt: -1 });
    res.json(images);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// UPDATED to include category
const uploadImage = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ msg: 'Please upload a file' });
  }
  // Get category from the form data
  const { title, category } = req.body;
  if (!category) {
    return res.status(400).json({ msg: 'Please select a category' });
  }

  try {
    const newImage = new Image({
      imageUrl: `/uploads/${req.file.filename}`,
      uploadedBy: req.user.id,
      title: title || 'Gallery Media',
      category: category,
    });

    const savedImage = await newImage.save();
    res.status(201).json(savedImage);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const deleteMedia = async (req, res) => {
  // This function remains the same
  try {
    const media = await Image.findById(req.params.id);
    if (!media) {
      return res.status(404).json({ msg: 'Media not found' });
    }
    const filePath = path.join(__dirname, '..', media.imageUrl);
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error('Failed to delete file from server:', err);
      }
    });
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