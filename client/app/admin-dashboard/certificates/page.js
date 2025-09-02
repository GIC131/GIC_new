'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { QRCodeCanvas as QRCode } from 'qrcode.react';

// Component for displaying each candidate with their files and QR code
const CandidateCard = ({ candidate, onUpdate }) => {
    const [files, setFiles] = useState([]);
    const [tags, setTags] = useState([]);
    const [isUploading, setIsUploading] = useState(false);

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

        setIsUploading(true);
        const formData = new FormData();
        files.forEach(file => formData.append('documents', file));
        formData.append('tags', tags.join(','));

        try {
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL || 'https://getinteviewconfidence.com'}/api/candidates/${candidate._id}/upload`, formData);
            alert('Documents uploaded successfully!');
            setFiles([]);
            setTags([]);
            onUpdate(); // Refresh the list
        } catch (error) {
            console.error('File upload failed:', error);
            alert('File upload failed. Please try again.');
        } finally {
            setIsUploading(false);
        }
    };

    const handleDelete = async () => {
        if (confirm(`Are you sure you want to delete ${candidate.name} and all their files?`)) {
            try {
                await axios.delete(`${process.env.NEXT_PUBLIC_API_URL || 'https://getinteviewconfidence.com'}/api/candidates/${candidate._id}`);
                alert('Candidate deleted successfully.');
                onUpdate();
            } catch (error) {
                console.error('Delete failed:', error);
                alert('Failed to delete candidate.');
            }
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Candidate Info & Files */}
                <div className="flex-grow">
                    <div className="mb-4">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                            {candidate.name} 
                            <span className="ml-2 px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                                {candidate.role}
                            </span>
                        </h3>
                        <p className="text-gray-600 mb-2">{candidate.email}</p>
                        <p className="text-sm text-gray-500">Added: {new Date(candidate.createdAt).toLocaleDateString()}</p>
                    </div>

                    {/* Current Files */}
                    {candidate.documents && candidate.documents.length > 0 && (
                        <div className="mb-4">
                            <h4 className="font-semibold text-gray-700 mb-2">Current Files:</h4>
                            <ul className="space-y-1">
                                {candidate.documents.map(doc => (
                                    <li key={doc._id} className="text-sm text-gray-600 flex items-center gap-2">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        {doc.fileName} {doc.tag && `(${doc.tag})`}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Upload New Files Form */}
                    <form onSubmit={handleUpload} className="space-y-3">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Upload Additional Files
                            </label>
                            <input 
                                type="file" 
                                onChange={handleFileChange} 
                                multiple 
                                className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                            />
                        </div>
                        
                        {files.length > 0 && (
                            <div className="space-y-2">
                                {files.map((file, index) => (
                                    <input 
                                        key={index} 
                                        type="text" 
                                        placeholder={`Description for ${file.name}`} 
                                        value={tags[index]} 
                                        onChange={(e) => handleTagChange(index, e.target.value)} 
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                ))}
                            </div>
                        )}
                        
                        {files.length > 0 && (
                            <button 
                                type="submit" 
                                disabled={isUploading}
                                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isUploading ? 'Uploading...' : 'Upload Files'}
                            </button>
                        )}
                    </form>

                    <button 
                        onClick={handleDelete} 
                        className="mt-4 text-red-600 hover:text-red-800 text-sm font-medium"
                    >
                        Delete Candidate
                    </button>
                </div>

                {/* QR Code Section */}
                <div className="flex-shrink-0">
                    <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                        <QRCode 
                            value={`${window.location.origin}/candidate-docs/${candidate.secure_key}`} 
                            size={120} 
                            level="M"
                        />
                        <p className="text-sm text-gray-600 mt-2 font-medium">Scan to View Files</p>
                        <p className="text-xs text-gray-500 mt-1">QR Code for {candidate.name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Main page component
const CertificateManagerPage = () => {
    const [candidates, setCandidates] = useState([]);
    const [formData, setFormData] = useState({ name: '', email: '', role: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://getinteviewconfidence.com';

    const fetchCandidates = async () => {
        try {
            const res = await axios.get(`${API_URL}/api/candidates`);
            setCandidates(res.data);
        } catch (error) {
            console.error("Failed to fetch candidates:", error);
            setMessage('Failed to load candidates. Please refresh the page.');
        }
    };

    useEffect(() => { 
        fetchCandidates(); 
    }, []);

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.name || !formData.email || !formData.role) {
            setMessage('Please fill in all fields.');
            return;
        }

        setIsSubmitting(true);
        setMessage('');

        try {
            const response = await axios.post(`${API_URL}/api/candidates`, formData);
            
            // Clear form
            setFormData({ name: '', email: '', role: '' });
            
            // Add new candidate to the list
            setCandidates(prev => [response.data, ...prev]);
            
            setMessage('Candidate added successfully!');
            
            // Clear message after 3 seconds
            setTimeout(() => setMessage(''), 3000);
            
        } catch (error) {
            console.error("Failed to add candidate:", error);
            setMessage(error.response?.data?.msg || 'Failed to add candidate. Email may already be in use.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Candidate Certificate Manager
                    </h1>
                    <p className="text-gray-600">
                        Add candidates and manage their certificates. Each candidate gets a unique QR code for file access.
                    </p>
                </div>

                {/* Add New Candidate Form */}
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New Candidate</h2>
                    
                    {message && (
                        <div className={`mb-4 p-3 rounded-md ${
                            message.includes('successfully') 
                                ? 'bg-green-50 text-green-800 border border-green-200' 
                                : 'bg-red-50 text-red-800 border border-red-200'
                        }`}>
                            {message}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="grid md:grid-cols-4 gap-4 items-end">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Full Name *
                            </label>
                            <input 
                                id="name"
                                name="name" 
                                type="text"
                                value={formData.name} 
                                onChange={handleFormChange} 
                                placeholder="Enter full name" 
                                required 
                                autocomplete="name"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address *
                            </label>
                            <input 
                                id="email"
                                name="email" 
                                type="email" 
                                value={formData.email} 
                                onChange={handleFormChange} 
                                placeholder="Enter email address" 
                                required 
                                autocomplete="email"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                                Role/Position *
                            </label>
                            <select 
                                id="role"
                                name="role" 
                                value={formData.role} 
                                onChange={handleFormChange} 
                                required 
                                autocomplete="organization-title"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select Role</option>
                                <option value="Developer">Developer</option>
                                <option value="Intern">Intern</option>
                                <option value="Designer">Designer</option>
                                <option value="Manager">Manager</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        
                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            {isSubmitting ? 'Adding...' : 'Add Candidate'}
                        </button>
                    </form>
                </div>

                {/* Existing Candidates */}
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                        Manage Existing Candidates ({candidates.length})
                    </h2>
                    
                    {candidates.length === 0 ? (
                        <div className="text-center py-8">
                            <p className="text-gray-500">No candidates found. Add your first candidate above to get started.</p>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {candidates.map(candidate => (
                                <CandidateCard 
                                    key={candidate._id} 
                                    candidate={candidate} 
                                    onUpdate={fetchCandidates} 
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CertificateManagerPage;