// server/routes/candidateRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { getAllCandidates, getCandidateByKey, addCandidate, uploadDocument, deleteCandidate } = require('../controllers/candidateController');
const { protect, adminProtect } = require('../middleware/authMiddleware');

const storage = multer.diskStorage({
    destination: './uploads/documents/',
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const upload = multer({ storage }).array('documents', 5);

// --- Admin-Only Routes ---
router.route('/').post(protect, adminProtect, addCandidate);
router.route('/:id').delete(protect, adminProtect, deleteCandidate);
router.route('/:id/upload').post(protect, adminProtect, upload, uploadDocument);

// --- Public Routes ---
router.get('/view/:key', getCandidateByKey);
// UPDATED: This route is now public so the verification page can display the QR codes
router.route('/').get(getAllCandidates);


module.exports = router;