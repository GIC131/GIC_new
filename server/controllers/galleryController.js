// server/controllers/galleryController.js

const Image = require('../models/imageModel');
const fs = require('fs');
const path = require('path');


const getImages = async (req, res) => {
  try {
    const images = await Image.find({}).sort({ createdAt: -1 });
    res.json(images);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};


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


const deleteMedia = async (req, res) => {
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