// server/routes/galleryRoutes.js

const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { getImages, uploadImage, deleteMedia } = require('../controllers/galleryController');
const { protect, adminProtect } = require('../middleware/authMiddleware');

// --- Multer Storage Configuration ---
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

// --- Multer Upload Middleware ---
const upload = multer({
  storage: storage,
  limits: { fileSize: 50000000 }, // 50MB limit for video files
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).single('galleryImage'); // 'galleryImage' is the field name from the form

// Helper function to check for images OR videos
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

// --- API Routes ---

// @route  GET /api/gallery
// @desc   Get all gallery media
// @access Public
router.get('/', getImages);

// @route  POST /api/gallery/upload
// @desc   Upload new media
// @access Private/Admin
router.post('/upload', protect, adminProtect, (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return res.status(400).json({ msg: err });
        }
        // The controller logic is called after multer processes the file
        uploadImage(req, res);
    });
});

// @route  DELETE /api/gallery/:id
// @desc   Delete a media item
// @access Private/Admin
router.delete('/:id', protect, adminProtect, deleteMedia);

module.exports = router;