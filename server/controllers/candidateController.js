// server/controllers/candidateController.js
const Candidate = require('../models/candidateModel');
const path = require('path');

// Get all candidates (for admin)
exports.getAllCandidates = async (req, res) => {
    try {
        const candidates = await Candidate.find({}).sort({ createdAt: -1 });
        res.json(candidates);
    } catch (err) { res.status(500).send('Server Error'); }
};

// Get a single candidate's data via secure key (for the public QR page)
exports.getCandidateByKey = async (req, res) => {
    try {
        const candidate = await Candidate.findOne({ secure_key: req.params.key });
        if (!candidate) return res.status(404).json({ msg: 'Candidate not found' });
        res.json(candidate);
    } catch (err) { res.status(500).send('Server Error'); }
};

// Add a new candidate (admin)
exports.addCandidate = async (req, res) => {
    const { name, email, role } = req.body;
    try {
        const newCandidate = new Candidate({ name, email, role });
        await newCandidate.save();
        res.status(201).json(newCandidate);
    } catch (err) { res.status(400).json({ msg: 'Error creating candidate. Email may already exist.' }); }
};

// Upload a document for a candidate (admin)
exports.uploadDocument = async (req, res) => {
    try {
        const candidate = await Candidate.findById(req.params.id);
        if (!candidate) return res.status(404).json({ msg: 'Candidate not found' });

        if (!req.file) return res.status(400).json({ msg: 'Please upload a file' });

        const newDocument = {
            fileName: req.file.originalname,
            filePath: `/uploads/documents/${req.file.filename}`
        };

        candidate.documents.push(newDocument);
        await candidate.save();
        res.json(candidate);
    } catch (err) { res.status(500).send('Server Error'); }
};

// Delete a candidate (admin)
exports.deleteCandidate = async (req, res) => {
    // (Similar logic to deleteMedia can be implemented here for file cleanup)
    try {
         await Candidate.findByIdAndDelete(req.params.id);
         res.json({ msg: 'Candidate deleted' });
    } catch(err) { res.status(500).send('Server Error'); }
};