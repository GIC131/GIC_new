// server/routes/galleryRoutes.js

const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { getImages, uploadImage } = require('../controllers/galleryController');
const { protect, adminProtect } = require('../middleware/authMiddleware');

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 50000000 }, // <-- Increased limit to 50MB
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).single('galleryImage');

// Updated function to check for images OR videos
function checkFileType(file, cb) {
  // Allowed file types
  const filetypes = /jpeg|jpg|png|gif|mp4|mov|avi/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: File type not supported!');
  }
}

router.get('/', getImages);

router.post('/upload', protect, adminProtect, (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return res.status(400).json({ msg: err });
        }
        uploadImage(req, res);
    });
});

module.exports = router;