// server/models/candidateModel.js
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const documentSchema = new mongoose.Schema({
    fileName: { type: String, required: true },
    filePath: { type: String, required: true },
    uploadedAt: { type: Date, default: Date.now }
});

const candidateSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    secure_key: { type: String, default: uuidv4, unique: true },
    documents: [documentSchema],
    // ADD THIS NEW FIELD
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const Candidate = mongoose.model('Candidate', candidateSchema);

module.exports = Candidate;