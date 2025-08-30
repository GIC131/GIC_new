// client/app/verify-certificate/page.js
'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { QRCodeCanvas as QRCode } from 'qrcode.react';
import Link from 'next/link';

const VerifyCertificatePage = () => {
    const [candidates, setCandidates] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCandidates = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/candidates`);
                setCandidates(res.data);
            } catch (error) { console.error("Failed to fetch candidates"); } 
            finally { setLoading(false); }
        };
        fetchCandidates();
    }, []);

    return (
        <div className="min-h-screen bg-primary py-20">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4">Verify Certificate</h1>
                    <p className="text-dark-text">Scan the QR code assigned to you to view and download your official documents, such as offer letters and letters of recommendation.</p>
                </div>

                {loading ? <p className="text-center mt-12">Loading...</p> : (
                    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {candidates.map(candidate => (
                            <Link key={candidate._id} href={`/candidate-docs/${candidate.secure_key}`}>
                                <div className="bg-secondary p-4 rounded-lg text-center hover:bg-slate-700 transition-colors">
                                    <div className="bg-white p-2 rounded-md inline-block">
                                       <QRCode value={`${window.location.origin}/candidate-docs/${candidate.secure_key}`} size={128} />
                                    </div>
                                    <p className="font-bold mt-4">{candidate.name}</p>
                                    <p className="text-sm text-dark-text">{candidate.role}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default VerifyCertificatePage;