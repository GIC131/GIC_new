// client/components/Gallery.js
'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Gallery = ({ category, title, description }) => {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMedia = async () => {
      if (!category) return;
      setLoading(true);
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/gallery?category=${category}`);
        setMedia(response.data);
      } catch (err) {
        console.error(`Failed to load ${category} gallery`, err);
      } finally {
        setLoading(false);
      }
    };
    fetchMedia();
  }, [category]);

  const isVideo = (url) => /\.(mp4|mov|avi)$/.test(url);

  return (
    <section id={category.toLowerCase()} className="bg-secondary py-20 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-light-text">{title}</h2>
          <p className="mt-4 text-lg text-dark-text">{description}</p>
        </div>
        <div className="mt-16">
          {loading && <p className="text-center text-accent">Loading Gallery...</p>}
          {!loading && media.length === 0 && (
            <p className="text-center text-dark-text">The gallery is currently empty.</p>
          )}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {media.map((item) => (
              <div key={item._id} className="relative aspect-square rounded-lg overflow-hidden group bg-primary">
                {isVideo(item.imageUrl) ? (
                  <video controls className="w-full h-full object-cover">
                    <source src={`${process.env.NEXT_PUBLIC_API_URL}${item.imageUrl}`} type={`video/${item.imageUrl.split('.').pop()}`} />
                  </video>
                ) : (
                  // --- THIS IS THE CHANGED PART ---
                  <img src={`${process.env.NEXT_PUBLIC_API_URL}${item.imageUrl}`} alt={item.title || 'Gallery Image'} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" loading="lazy" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Gallery;