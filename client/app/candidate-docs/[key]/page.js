// client/app/candidate-docs/[key]/page.js
'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';

const CandidateDocsPage = () => {
    const [candidate, setCandidate] = useState(null);
    const [loading, setLoading] = useState(true);
    const { key } = useParams(); // Get the secure key from the URL

    useEffect(() => {
        if (!key) return;
        const fetchCandidateData = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/candidates/view/${key}`);
                setCandidate(res.data);
            } catch (error) {
                console.error("Not found", error);
            } finally {
                setLoading(false);
            }
        };
        fetchCandidateData();
    }, [key]);

    if (loading) return <div className="min-h-screen flex justify-center items-center"><p>Loading...</p></div>;
    if (!candidate) return <div className="min-h-screen flex justify-center items-center"><p>Invalid or expired link.</p></div>;

    return (
        <div className="min-h-screen bg-primary py-20">
            <div className="container mx-auto px-6 max-w-2xl">
                <h1 className="text-3xl font-bold text-center mb-2">Documents for {candidate.name}</h1>
                <p className="text-center text-dark-text mb-8">{candidate.role} at GetInterviewConfidence</p>
                <div className="space-y-4">
                    {candidate.documents.map(doc => (
                        <a key={doc._id} href={`${process.env.NEXT_PUBLIC_API_URL}${doc.filePath}`} target="_blank" rel="noopener noreferrer" 
                           className="bg-secondary p-4 rounded-lg flex justify-between items-center hover:bg-slate-700 transition-colors">
                            <span>{doc.fileName}</span>
                            <span className="font-bold text-accent">View/Download</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default CandidateDocsPage;