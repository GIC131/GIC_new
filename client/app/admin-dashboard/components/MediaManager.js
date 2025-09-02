// client/app/admin-dashboard/components/MediaManager.js
'use client';
import ImageUpload from "@/components/ImageUpload";
import { useState, useEffect } from 'react';
import axios from 'axios';
// NOTE: We no longer import the Next.js Image component
import { useAuth } from '@/context/AuthContext';

const MediaManager = ({ category }) => {
    const { isAuthenticated } = useAuth();
    const [media, setMedia] = useState([]);
    const [loading, setLoading] = useState(true);
    const backendUrl = process.env.NEXT_PUBLIC_API_URL;

    const fetchMedia = async () => { /* ... */ };
    useEffect(() => { if (isAuthenticated) fetchMedia() }, [isAuthenticated, category]);
    const handleDelete = async (id) => { /* ... */ };
    const isVideo = (url) => /\.(mp4|mov|avi)$/.test(url);

    return (
        <div>
            <h1 className="text-3xl font-bold text-light-text mb-6">{category} Gallery Management</h1>
            <div className="mb-12"><ImageUpload onUploadSuccess={fetchMedia} /></div>
            <div className="border-t border-slate-700 pt-8">
                <h2 className="text-2xl font-bold text-accent mb-6">Uploaded Media</h2>
                {loading ? <p>Loading media...</p> : (
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {media.map(item => (
                            <div key={item._id} className="relative aspect-square rounded-lg group bg-primary">
                                {isVideo(item.imageUrl) ? (<video className="w-full h-full object-cover" controls><source src={`${backendUrl}${item.imageUrl}`} /></video>) 
                                : (
                                    // --- THIS IS THE CHANGED PART ---
                                    <img src={`${backendUrl}${item.imageUrl}`} alt={item.title || 'Gallery Media'} className="w-full h-full object-cover" loading="lazy" />
                                )}
                                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center p-2">
                                    <p className="text-white text-xs text-center mb-2 truncate">{item.title}</p>
                                    <button onClick={() => handleDelete(item._id)} className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded">Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {!loading && media.length === 0 && <p>No media has been uploaded to this gallery yet.</p>}
            </div>
        </div>
    );
}
export default MediaManager;