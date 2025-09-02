// client/app/admin-dashboard/certificates/page.js
'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { QRCodeCanvas as QRCode } from 'qrcode.react';

const CandidateCard = ({ candidate, onUpdate }) => {
    const [files, setFiles] = useState([]);
    const [tags, setTags] = useState([]);
    
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://getinteviewconfidence.com';

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
            await axios.post(`${API_URL}/api/candidates/${candidate._id}/upload`, formData);
            alert('Documents uploaded successfully!');
            e.target.reset();
            onUpdate();
        } catch (error) {
            alert('File upload failed.');
        }
    };

    const handleDelete = async () => {
        if (confirm(`Are you sure you want to delete ${candidate.name}?`)) {
            try {
                await axios.delete(`${API_URL}/api/candidates/${candidate._id}`);
                onUpdate();
            } catch (error) {
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
                        <input key={index} type="text" placeholder={`Tag for ${file.name}`} value={tags[index]} onChange={(e) => handleTagChange(index, e.target.value)} required autocomplete="off" className="w-full bg-secondary text-xs p-1 rounded border border-slate-600"/>
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

const CertificateManagerPage = () => {
    const [candidates, setCandidates] = useState([]);
    const [formData, setFormData] = useState({ name: '', email: '', role: '' });
    const [newFiles, setNewFiles] = useState([]);
    const [newFileTags, setNewFileTags] = useState([]);
    
    // Debug: Log the API URL
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://getinteviewconfidence.com';
    console.log('API URL:', API_URL);
    
    const fetchCandidates = async () => {
        try {
            const res = await axios.get(`${API_URL}/api/candidates`);
            setCandidates(res.data);
        } catch (error) {
            console.error('Failed to fetch candidates');
        }
    };
    useEffect(() => { fetchCandidates(); }, []);
    const handleFormChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleAddCandidate = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        console.log('Form submitted, preventing default behavior');
        
        try {
            console.log('Creating candidate with data:', formData);
            const createRes = await axios.post(`${API_URL}/api/candidates`, formData);
            console.log('Candidate created:', createRes.data);

            // If files selected, immediately upload them with taglines
            if (newFiles.length > 0 && createRes?.data?._id) {
                console.log('Uploading files:', newFiles.length);
                const uploadForm = new FormData();
                newFiles.forEach((file) => uploadForm.append('documents', file));
                uploadForm.append('tags', newFileTags.join(','));
                await axios.post(`${API_URL}/api/candidates/${createRes.data._id}/upload`, uploadForm);
                console.log('Files uploaded successfully');
            }

            setFormData({ name: '', email: '', role: '' });
            setNewFiles([]);
            setNewFileTags([]);
            
            // Reset the form
            const form = e.target;
            form.reset();
            
            // Optimistic UI: prepend the new candidate so QR shows immediately
            if (createRes?.data) {
                setCandidates((prev) => [{ ...createRes.data, documents: [] }, ...prev]);
            }
            // Background refresh
            fetchCandidates();
            
            alert('Candidate added successfully!');
        } catch (error) {
            console.error('Error adding candidate:', error);
            alert('Failed to add candidate. The email may already be in use.');
        }
    };

    const handleNewFilesChange = (e) => {
        const files = Array.from(e.target.files || []);
        setNewFiles(files);
        setNewFileTags(new Array(files.length).fill(''));
    };

    const handleNewTagChange = (index, value) => {
        const copy = [...newFileTags];
        copy[index] = value;
        setNewFileTags(copy);
    };

    return (
         <div>
            <h1 className="text-3xl font-bold mb-6 text-light-text">Candidate Certificate Manager</h1>
            <div className="bg-secondary p-6 rounded-lg mb-8">
                <h2 className="text-xl font-bold text-accent mb-4">Add New Candidate</h2>
                <form onSubmit={handleAddCandidate} className="grid md:grid-cols-4 gap-4 items-start" noValidate>
                    <input 
                        name="name" 
                        value={formData.name} 
                        onChange={handleFormChange} 
                        placeholder="Candidate Name" 
                        required 
                        autocomplete="name"
                        className="bg-primary p-2 rounded-md border border-slate-600 text-light-text"
                    />
                    <input 
                        name="email" 
                        type="email" 
                        value={formData.email} 
                        onChange={handleFormChange} 
                        placeholder="Candidate Email" 
                        required 
                        autocomplete="email"
                        className="bg-primary p-2 rounded-md border border-slate-600 text-light-text"
                    />
                    <input 
                        name="role" 
                        value={formData.role} 
                        onChange={handleFormChange} 
                        placeholder="Role (e.g., Intern)" 
                        required 
                        autocomplete="organization-title"
                        className="bg-primary p-2 rounded-md border border-slate-600 text-light-text"
                    />
                    <div className="md:col-span-4 space-y-2">
                        <label className="block text-sm text-dark-text">Upload Documents (optional)</label>
                        <input 
                            type="file" 
                            multiple 
                            onChange={handleNewFilesChange} 
                            className="text-sm text-dark-text file:mr-2 file:py-1 file:px-2 file:rounded-full file:border-0" 
                        />
                        {newFiles.length > 0 && (
                            <div className="grid md:grid-cols-2 gap-2">
                                {newFiles.map((file, idx) => (
                                    <input 
                                        key={idx} 
                                        type="text" 
                                        placeholder={`Tagline for ${file.name}`} 
                                        value={newFileTags[idx]} 
                                        onChange={(e) => handleNewTagChange(idx, e.target.value)} 
                                        required 
                                        autocomplete="off"
                                        className="bg-primary p-2 rounded-md border border-slate-600 text-light-text" 
                                    />
                                ))}
                            </div>
                        )}
                        <button 
                            type="submit" 
                            className="bg-accent text-primary font-bold rounded-md py-2 px-4 hover:bg-accent/90 transition-colors"
                            onClick={(e) => {
                                console.log('Button clicked, form should submit via onSubmit handler');
                            }}
                        >
                            Add Candidate{newFiles.length > 0 ? ' & Upload Docs' : ''}
                        </button>
                    </div>
                </form>
            </div>
            <div className="bg-secondary p-6 rounded-lg">
                <h2 className="text-xl font-bold text-accent mb-4">Manage Existing Candidates</h2>
                <div className="space-y-4">
                    {candidates.map(candidate => (
                        <CandidateCard key={candidate._id} candidate={candidate} onUpdate={fetchCandidates} />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default CertificateManagerPage;