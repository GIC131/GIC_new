// client/app/admin-dashboard/candidates/page.js
'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
// Corrected import statement
import { QRCodeCanvas as QRCode } from 'qrcode.react';

const CandidateManagementPage = () => {
    const [candidates, setCandidates] = useState([]);
    const [formData, setFormData] = useState({ name: '', email: '', role: '' });
    const [newFiles, setNewFiles] = useState([]);
    const [newFileTags, setNewFileTags] = useState([]);
    
    const fetchCandidates = async () => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/candidates`);
            setCandidates(res.data);
        } catch (error) {
            console.error("Failed to fetch candidates:", error);
        }
    };

    useEffect(() => { fetchCandidates(); }, []);

    const handleFormChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    
    const handleAddCandidate = async (e) => {
        e.preventDefault();
        try {
            const createRes = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/candidates`, formData);

            if (newFiles.length > 0 && createRes?.data?._id) {
                const uploadForm = new FormData();
                newFiles.forEach((file) => uploadForm.append('documents', file));
                uploadForm.append('tags', newFileTags.join(','));
                await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/candidates/${createRes.data._id}/upload`, uploadForm);
            }

            setFormData({ name: '', email: '', role: '' });
            setNewFiles([]);
            setNewFileTags([]);
            fetchCandidates();
        } catch (error) {
            console.error("Failed to add candidate:", error);
            alert("Failed to add candidate. The email may already be in use.");
        }
    };

    const handleNewFilesChange = (e) => {
        const files = Array.from(e.target.files || []);
        setNewFiles(files);
        setNewFileTags(new Array(files.length).fill(''));
    };

    const handleNewTagChange = (idx, value) => {
        const copy = [...newFileTags];
        copy[idx] = value;
        setNewFileTags(copy);
    };

    const handleFileUpload = async (e, candidateId) => {
        const file = e.target.files[0];
        if (!file) return;
        const uploadFormData = new FormData();
        uploadFormData.append('documents', file);
        uploadFormData.append('tags', '');
        try {
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/candidates/${candidateId}/upload`, uploadFormData);
            fetchCandidates();
        } catch (error) {
            console.error("File upload failed:", error);
            alert("File upload failed. Please try again.");
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6 text-light-text">Candidate Management</h1>
            {/* Add Candidate Form */}
            <div className="bg-secondary p-6 rounded-lg mb-8">
                <h2 className="text-xl font-bold text-accent mb-4">Add New Candidate</h2>
                <form onSubmit={handleAddCandidate} className="grid md:grid-cols-4 gap-4 items-start">
                    <input name="name" value={formData.name} onChange={handleFormChange} placeholder="Candidate Name" required className="bg-primary p-2 rounded-md border border-slate-600 focus:outline-none focus:ring-2 focus:ring-accent"/>
                    <input name="email" type="email" value={formData.email} onChange={handleFormChange} placeholder="Candidate Email" required className="bg-primary p-2 rounded-md border border-slate-600 focus:outline-none focus:ring-2 focus:ring-accent"/>
                    <input name="role" value={formData.role} onChange={handleFormChange} placeholder="Role (e.g., Intern)" required className="bg-primary p-2 rounded-md border border-slate-600 focus:outline-none focus:ring-2 focus:ring-accent"/>
                    <div className="md:col-span-4 space-y-2">
                        <label className="block text-sm text-dark-text">Upload Documents (optional)</label>
                        <input type="file" multiple onChange={handleNewFilesChange} className="text-sm text-dark-text file:mr-2 file:py-1 file:px-2 file:rounded-full file:border-0" />
                        {newFiles.length > 0 && (
                            <div className="grid md:grid-cols-2 gap-2">
                                {newFiles.map((file, idx) => (
                                    <input key={idx} type="text" placeholder={`Tagline for ${file.name}`} value={newFileTags[idx]} onChange={(e) => handleNewTagChange(idx, e.target.value)} required className="bg-primary p-2 rounded-md border border-slate-600" />
                                ))}
                            </div>
                        )}
                        <button type="submit" className="bg-accent text-primary font-bold rounded-md py-2 px-4 transition-colors hover:bg-sky-400">Add Candidate{newFiles.length > 0 ? ' & Upload Docs' : ''}</button>
                    </div>
                </form>
            </div>

            {/* Candidates List */}
            <div className="space-y-4">
                {candidates.map(candidate => (
                    <div key={candidate._id} className="bg-secondary p-4 rounded-lg flex justify-between items-start">
                       <div>
                            <h3 className="font-bold text-light-text text-lg">{candidate.name} ({candidate.role})</h3>
                            <p className="text-sm text-dark-text">{candidate.email}</p>
                            <ul className="text-xs list-disc list-inside mt-2 text-dark-text">
                                {candidate.documents.map(doc => <li key={doc._id}>{doc.fileName}</li>)}
                            </ul>
                            <label className="text-xs mt-4 block text-accent cursor-pointer hover:underline">
                                Add Document
                                <input type="file" onChange={(e) => handleFileUpload(e, candidate._id)} className="hidden"/>
                            </label>
                       </div>
                       <div className="text-center bg-white p-2 rounded-md">
                           <QRCode value={`${window.location.origin}/candidate-docs/${candidate.secure_key}`} size={100} />
                           <p className="text-xs mt-1 text-gray-600 font-medium">Scan to View Documents</p>
                       </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default CandidateManagementPage;