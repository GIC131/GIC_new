// client/components/ImageUpload.js
'use client';
import { useState } from 'react';
import axios from 'axios';

const ImageUpload = ({ onUploadSuccess }) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(''); // <-- ADD category state
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!file || !category) {
      setMessage('Please select a file and a category.');
      return;
    }
    setLoading(true);
    setMessage('');

    const formData = new FormData();
    formData.append('galleryImage', file);
    formData.append('title', title);
    formData.append('category', category); // <-- ADD category to form data

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/gallery/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage('Media uploaded successfully!');
      setFile(null);
      setTitle('');
      setCategory('');
      e.target.reset();
      if (onUploadSuccess) {
        onUploadSuccess();
      }
    } catch (err) {
      setMessage(err.response?.data?.msg || 'Upload failed. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-secondary p-8 rounded-lg border border-slate-700 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-light-text mb-6">Upload New Media</h2>
      <form onSubmit={onSubmit} className="space-y-6">
        {/* ADD THIS CATEGORY DROPDOWN */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-dark-text mb-2">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="w-full bg-primary border border-slate-600 rounded-md py-2 px-3 text-light-text focus:outline-none focus:ring-accent focus:border-accent"
          >
            <option value="">-- Select a Gallery --</option>
            <option value="Event">Event Gallery</option>
            <option value="Career">Career's Gallery</option>
          </select>
        </div>

        <div>
          <label htmlFor="title" className="block text-sm font-medium text-dark-text mb-2">Title (Optional)</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full bg-primary border border-slate-600 rounded-md py-2 px-3 text-light-text" />
        </div>
        <div>
          <label htmlFor="file" className="block text-sm font-medium text-dark-text mb-2">Image or Video File</label>
          <input type="file" id="file" onChange={onFileChange} required accept="image/*,video/*" className="w-full text-sm text-dark-text file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0" />
        </div>
        <div>
          <button type="submit" disabled={loading} className="w-full bg-accent text-primary font-bold py-3 px-4 rounded-lg">
            {loading ? 'Uploading...' : 'Upload Media'}
          </button>
        </div>
      </form>
      {message && <p className={`mt-4 text-center text-sm ${message.includes('successfully') ? 'text-green-400' : 'text-red-400'}`}>{message}</p>}
    </div>
  );
};
export default ImageUpload;