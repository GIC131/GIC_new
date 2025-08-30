// client/app/admin-dashboard/certificates/page.js
'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { QRCodeCanvas as QRCode } from 'qrcode.react';

// This is the component for managing each individual candidate
const CandidateCard = ({ candidate, onUpdate }) => {
    const [files, setFiles] = useState([]);
    const [tags, setTags] = useState([]);

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        setFiles(selectedFiles);
        setTags(new Array(selectedFiles.length).fill(''));
    };

    const handleTagChange = (index, value) => {
        const newTags = [...tags];
        newTags[index] = value;
        setTags(newTags);
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        if (files.length === 0) return alert('Please select files to upload.');

        const formData = new FormData();
        files.forEach(file => formData.append('documents', file));
        formData.append('tags', tags.join(','));

        try {
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/candidates/${candidate._id}/upload`, formData);
            alert('Documents uploaded successfully!');
            setFiles([]);
            setTags([]);
            e.target.reset();
            onUpdate(); // Refresh the main candidate list
        } catch (error) {
            console.error('File upload failed:', error);
            alert('File upload failed.');
        }
    };

    const handleDelete = async () => {
        if (confirm(`Are you sure you want to delete all records for ${candidate.name}? This cannot be undone from the dashboard.`)) {
            try {
                await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/candidates/${candidate._id}`);
                alert('Candidate deleted successfully.');
                onUpdate(); // Refresh the main list
            } catch (error) {
                console.error('Delete failed:', error);
                alert('Failed to delete candidate.');
            }
        }
    };

    return (
        <div className="bg-primary p-4 rounded-lg flex flex-col md:flex-row justify-between items-start gap-4">
            <div className="flex-grow">
                <h3 className="font-bold text-light-text text-lg">{candidate.name} ({candidate.role})</h3>
                <p className="text-sm text-dark-text">{candidate.email}</p>
                <ul className="text-xs list-disc list-inside mt-2 text-dark-text">
                    {candidate.documents.map(doc => <li key={doc._id}>{doc.fileName}</li>)}
                </ul>
                
                <form onSubmit={handleUpload} className="mt-4 space-y-2">
                    <input type="file" onChange={handleFileChange} multiple className="text-xs text-dark-text file:mr-2 file:py-1 file:px-2 file:rounded-full file:border-0"/>
                    {files.length > 0 && files.map((file, index) => (
                        <input key={index} type="text" placeholder={`Tag for ${file.name}`} value={tags[index]} onChange={(e) => handleTagChange(index, e.target.value)} required className="w-full bg-secondary text-xs p-1 rounded border border-slate-600"/>
                    ))}
                    {files.length > 0 && <button type="submit" className="bg-accent text-primary text-xs font-bold py-1 px-3 rounded">Upload Docs</button>}
                </form>
                
                <button onClick={handleDelete} className="text-xs text-red-500 hover:text-red-400 font-semibold mt-4">
                    Delete Candidate
                </button>
            </div>
            <div className="text-center bg-white p-2 rounded-md flex-shrink-0">
                <QRCode value={`${window.location.origin}/candidate-docs/${candidate.secure_key}`} size={100} />
                <p className="text-xs mt-1 text-gray-600 font-medium">Scan to View</p>
            </div>
        </div>
    );
};


// This is the main page component
const CertificateManagerPage = () => {
    const [candidates, setCandidates] = useState([]);
    const [formData, setFormData] = useState({ name: '', email: '', role: '' });
    
    const fetchCandidates = async () => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/candidates`);
            setCandidates(res.data);
        } catch (error) {
            console.error("Failed to fetch candidates", error);
        }
    };

    useEffect(() => { fetchCandidates(); }, []);

    const handleFormChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    
    const handleAddCandidate = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/candidates`, formData);
            setFormData({ name: '', email: '', role: '' });
            fetchCandidates();
        } catch (error) {
            console.error("Failed to add candidate:", error);
            alert("Failed to add candidate. The email may already be in use.");
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6 text-light-text">Candidate Certificate Manager</h1>
            
            <div className="bg-secondary p-6 rounded-lg mb-8">
                <h2 className="text-xl font-bold text-accent mb-4">Add New Candidate</h2>
                <form onSubmit={handleAddCandidate} className="grid md:grid-cols-4 gap-4 items-center">
                    <input name="name" value={formData.name} onChange={handleFormChange} placeholder="Candidate Name" required className="bg-primary p-2 rounded-md border border-slate-600"/>
                    <input name="email" type="email" value={formData.email} onChange={handleFormChange} placeholder="Candidate Email" required className="bg-primary p-2 rounded-md border border-slate-600"/>
                    <input name="role" value={formData.role} onChange={handleFormChange} placeholder="Role (e.g., Intern)" required className="bg-primary p-2 rounded-md border border-slate-600"/>
                    <button type="submit" className="bg-accent text-primary font-bold rounded-md py-2">Add Candidate</button>
                </form>
            </div>

            <div className="bg-secondary p-6 rounded-lg">
                <h2 className="text-xl font-bold text-accent mb-4">Manage Existing Candidates</h2>
                <div className="space-y-4">
                    {candidates.map(candidate => (
                        <CandidateCard key={candidate._id} candidate={candidate} onUpdate={fetchCandidates} />
                    ))}
                    {candidates.length === 0 && <p className="text-dark-text">No candidates found. Add one above to get started.</p>}
                </div>
            </div>
        </div>
    );
};
export default CertificateManagerPage;