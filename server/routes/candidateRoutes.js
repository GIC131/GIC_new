// server/routes/candidateRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { getAllCandidates, getCandidateByKey, addCandidate, uploadDocument, deleteCandidate } = require('../controllers/candidateController');
const { protect, adminProtect } = require('../middleware/authMiddleware');

// Multer setup for documents
const storage = multer.diskStorage({
    destination: './uploads/documents/',
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const upload = multer({ storage }).single('document');

// Admin Routes
router.route('/').get(protect, adminProtect, getAllCandidates);
router.route('/').post(protect, adminProtect, addCandidate);
router.route('/:id').delete(protect, adminProtect, deleteCandidate);
router.route('/:id/upload').post(protect, adminProtect, upload, uploadDocument);

// Public Route for QR Code
router.get('/view/:key', getCandidateByKey);

module.exports = router;