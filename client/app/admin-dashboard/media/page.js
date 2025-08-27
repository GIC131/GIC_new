// client/app/admin-dashboard/media/page.js
'use client';

import ImageUpload from "@/components/ImageUpload";
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';

const MediaManagementPage = () => {
    const { isAuthenticated } = useAuth();
    const [media, setMedia] = useState([]);
    const [loading, setLoading] = useState(true);
    const backendUrl = process.env.NEXT_PUBLIC_API_URL;

    const fetchMedia = useCallback(async () => {
        setLoading(true);
        try {
            const res = await axios.get(`${backendUrl}/api/gallery`);
            setMedia(res.data);
        } catch (error) {
            console.error("Failed to fetch media", error);
        } finally {
            setLoading(false);
        }
    }, [backendUrl]);

    useEffect(() => {
        if (isAuthenticated) {
            fetchMedia();
        } else {
            setLoading(false); 
        }
    }, [isAuthenticated, fetchMedia]);

    const handleDelete = async (id) => {
        if (confirm('Are you sure you want to delete this media item permanently?')) {
            try {
                await axios.delete(`${backendUrl}/api/gallery/${id}`);
                fetchMedia();
            } catch (error) {
                console.error("Failed to delete media", error);
                alert('Deletion failed. Please try again.');
            }
        }
    };

    const isVideo = (url) => /\.(mp4|mov|avi)$/.test(url);

    return (
        <div>
            <h1 className="text-3xl font-bold text-light-text mb-6">Media Management</h1>
            
            <div className="mb-12">
                <ImageUpload onUploadSuccess={fetchMedia} />
            </div>

            <div className="border-t border-slate-700 pt-8">
                <h2 className="text-2xl font-bold text-accent mb-6">Uploaded Media</h2>
                {loading ? <p>Loading media...</p> : (
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {media.map(item => (
                            <div key={item._id} className="relative aspect-square rounded-lg overflow-hidden group bg-primary">
                                {isVideo(item.imageUrl) ? (
                                    <video className="w-full h-full object-cover" controls>
                                        <source src={`${backendUrl}${item.imageUrl}`} type={`video/${item.imageUrl.split('.').pop()}`} />
                                    </video>
                                ) : (
                                    <Image
                                        src={`${backendUrl}${item.imageUrl}`}
                                        alt={item.title || 'Gallery Media'}
                                        fill
                                        className="object-cover"
                                        sizes="20vw"
                                    />
                                )}
                                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-2">
                                    <p className="text-white text-xs text-center mb-2 truncate">{item.title || 'Untitled'}</p>
                                    <button 
                                        onClick={() => handleDelete(item._id)}
                                        className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded hover:bg-red-700 transition-colors">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {!loading && media.length === 0 && <p className="text-dark-text">No media has been uploaded yet.</p>}
            </div>
        </div>
    );
}

export default MediaManagementPage;