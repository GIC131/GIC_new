// client/components/ImageUpload.js
'use client';

import { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage('Please select a file to upload.');
      return;
    }
    setLoading(true);
    setMessage('');

    const formData = new FormData();
    formData.append('galleryImage', file);
    formData.append('title', title);

    try {
      // The auth token is automatically sent thanks to our AuthContext setup
      await axios.post('http://localhost:5000/api/gallery/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage('Image uploaded successfully!');
      setFile(null);
      setTitle('');
      e.target.reset(); // Reset the form fields
    } catch (err) {
      setMessage('Upload failed. Please try again.');
      console.error(err);
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="bg-secondary p-8 rounded-lg border border-slate-700 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-light-text mb-6">Upload New Gallery Image</h2>
      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-dark-text mb-2">Image Title (Optional)</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-primary border border-slate-600 rounded-md py-2 px-3 text-light-text focus:outline-none focus:ring-accent focus:border-accent"
            placeholder="e.g., Career Workshop 2025"
          />
        </div>
        <div>
          <label htmlFor="file" className="block text-sm font-medium text-dark-text mb-2">Image File</label>
          <input
            type="file"
            id="file"
            onChange={onFileChange}
            required
            accept="image/*,video/*"
            className="w-full text-sm text-dark-text file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-accent file:text-primary hover:file:bg-sky-400"
          />
        </div>
        <div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-accent text-primary font-bold py-3 px-4 rounded-lg hover:bg-sky-400 transition-colors duration-300 disabled:bg-slate-500 disabled:cursor-not-allowed"
          >
            {loading ? 'Uploading...' : 'Upload Image'}
          </button>
        </div>
      </form>
      {message && <p className={`mt-4 text-center text-sm ${message.includes('successfully') ? 'text-green-400' : 'text-red-400'}`}>{message}</p>}
    </div>
  );
};

export default ImageUpload;