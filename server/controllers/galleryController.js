// server/controllers/galleryController.js

const Image = require('../models/imageModel');

// @desc    Get all images
// @route   GET /api/gallery
const getImages = async (req, res) => {
  try {
    // Find all images and sort by the newest first
    const images = await Image.find().sort({ createdAt: -1 });
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
      // The path to the image will be constructed on the frontend
      // We store the filename which multer provides
      imageUrl: `/uploads/${req.file.filename}`,
      uploadedBy: req.user.id,
      // You could add title/description from req.body if needed
      title: req.body.title || 'Gallery Image'
    });

    const savedImage = await newImage.save();
    res.status(201).json(savedImage);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports = {
  getImages,
  uploadImage,
};