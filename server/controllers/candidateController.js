// server/controllers/candidateController.js
const Candidate = require('../models/candidateModel');

// UPDATED: Now only gets candidates that are NOT deleted
exports.getAllCandidates = async (req, res) => {
    try {
        const candidates = await Candidate.find({ isDeleted: false }).sort({ createdAt: -1 });
        res.json(candidates);
    } catch (err) { res.status(500).send('Server Error'); }
};

exports.getCandidateByKey = async (req, res) => {
    try {
        // Also ensure the public can't see deleted records
        const candidate = await Candidate.findOne({ secure_key: req.params.key, isDeleted: false });
        if (!candidate) return res.status(404).json({ msg: 'Certificate not found or has been revoked' });
        res.json(candidate);
    } catch (err) { res.status(500).send('Server Error'); }
};

exports.addCandidate = async (req, res) => {
    // This function remains the same
    const { name, email, role } = req.body;
    try {
        const newCandidate = new Candidate({ name, email, role });
        await newCandidate.save();
        res.status(201).json(newCandidate);
    } catch (err) { res.status(400).json({ msg: 'Error creating candidate. Email may already exist.' }); }
};

exports.uploadDocument = async (req, res) => {
    // This function remains the same
    try {
        const candidate = await Candidate.findById(req.params.id);
        if (!candidate) return res.status(404).json({ msg: 'Candidate not found' });

        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ msg: 'Please upload at least one file' });
        }

        const tags = req.body.tags ? req.body.tags.split(',') : [];

        req.files.forEach((file, index) => {
            candidate.documents.push({
                fileName: tags[index] || file.originalname,
                filePath: `/uploads/documents/${file.filename}`
            });
        });

        await candidate.save();
        res.json(candidate);
    } catch (err) { 
        console.error(err.message);
        res.status(500).send('Server Error'); 
    }
};

// UPDATED: Now performs a "soft delete" instead of a permanent one
exports.deleteCandidate = async (req, res) => {
    try {
        const candidate = await Candidate.findByIdAndUpdate(
            req.params.id, 
            { isDeleted: true }, 
            { new: true }
        );
        if (!candidate) return res.status(404).json({ msg: 'Candidate not found' });
        res.json({ msg: 'Candidate deleted successfully' });
    } catch(err) { 
        console.error(err.message);
        res.status(500).send('Server Error'); 
    }
};