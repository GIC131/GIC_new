// server/models/candidateModel.js
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid'); // To generate unique keys

const documentSchema = new mongoose.Schema({
    fileName: { type: String, required: true },
    filePath: { type: String, required: true },
    uploadedAt: { type: Date, default: Date.now }
});

const candidateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    role: { // e.g., "Intern", "Full-Time Hire"
        type: String,
        required: true,
    },
    secure_key: { // Unique key for the QR code URL
        type: String,
        default: uuidv4,
        unique: true,
    },
    documents: [documentSchema]
}, { timestamps: true });

const Candidate = mongoose.model('Candidate', candidateSchema);

module.exports = Candidate;