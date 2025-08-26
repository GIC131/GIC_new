// client/components/Gallery.js
'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';

const Gallery = () => {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/gallery`);
        setMedia(response.data);
      } catch (err) {
        setError('Failed to load media. The gallery is currently empty or the server is unavailable.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchMedia();
  }, []);

  const backendUrl = 'http://localhost:5000';

  const isVideo = (url) => {
    return /\.(mp4|mov|avi)$/.test(url);
  };

  return (
    <section id="gallery" className="bg-secondary py-20 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-light-text">
            Our Success Stories in Pictures & Video
          </h2>
          <p className="mt-4 text-lg text-dark-text">
            A glimpse into our workshops, events, and the vibrant community we've built.
          </p>
        </div>

        <div className="mt-16">
          {loading && <p className="text-center text-accent">Loading Gallery...</p>}
          {error && <p className="text-center text-red-400">{error}</p>}

          {!loading && !error && media.length === 0 && (
            <p className="text-center text-dark-text">The gallery is currently empty. Check back soon!</p>
          )}

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {media.map((item) => (
              <div key={item._id} className="relative aspect-square rounded-lg overflow-hidden group bg-primary">
                {isVideo(item.imageUrl) ? (
                  <video controls className="w-full h-full object-cover">
                    <source src={`${backendUrl}${item.imageUrl}`} type={`video/${item.imageUrl.split('.').pop()}`} />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image
                    src={`${backendUrl}${item.imageUrl}`}
                    alt={item.title || 'Gallery Media'}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy" 
                  />
                )}
                 <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-center p-2">{item.title}</p>
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