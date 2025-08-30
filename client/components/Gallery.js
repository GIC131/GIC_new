// client/components/Gallery.js
'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';

const Gallery = ({ category, title, description }) => {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMedia = async () => {
      if (!category) return;
      setLoading(true);
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/gallery?category=${category}`);
        setMedia(response.data);
      } catch (err) {
        setError(`Failed to load ${category} gallery.`);
        console.error(`Failed to load ${category} gallery`, err);
      } finally {
        setLoading(false);
      }
    };
    fetchMedia();
  }, [category]);

  const backendUrl = process.env.NEXT_PUBLIC_API_URL;
  const isVideo = (url) => /\.(mp4|mov|avi)$/.test(url);

  return (
    <section id={category.toLowerCase()} className="bg-primary py-20 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-light-text">{title}</h2>
          <p className="mt-4 text-lg text-dark-text">{description}</p>
        </div>

        <div className="mt-16">
          {loading && <p className="text-center text-accent">Loading Gallery...</p>}
          {error && <p className="text-center text-red-400">{error}</p>}
          {!loading && media.length === 0 && (
            <p className="text-center text-dark-text">The gallery is currently empty.</p>
          )}

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {media.map((item) => (
              // The 'group' class on this parent div enables the hover effect on its children
              <div key={item._id} className="relative aspect-square rounded-lg overflow-hidden group bg-secondary">
                {isVideo(item.imageUrl) ? (
                  <video controls className="w-full h-full object-cover">
                    <source src={`${backendUrl}${item.imageUrl}`} type={`video/${item.imageUrl.split('.').pop()}`} />
                  </video>
                ) : (
<Image
    src={`${backendUrl}${item.imageUrl}`}
    alt={item.title || 'Gallery Media'}
    fill
    className="object-cover group-hover:scale-110 transition-transform duration-300"
    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw" // <-- ADD THIS LINE
    loading="lazy"
/>
                )}
                 {/* This overlay is hidden by default ('opacity-0') and appears on hover ('group-hover:opacity-100') */}
                 <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <p className="text-white text-center font-semibold">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;