"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Plus, Upload, X, CheckCircle, AlertCircle, Video, Image } from "lucide-react";

export default function AddImages() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [media, setMedia] = useState([]);
  const [uploadedMedia, setUploadedMedia] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:5001";
  const router = useRouter();

  // Check if already authenticated on component mount
  useEffect(() => {
    const authStatus = localStorage.getItem('adminAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  // Load existing media from server
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch(`${serverUrl}/api/gallery`);
        if (response.ok) {
          const data = await response.json();
          setMedia(data);
        } else {
          console.error('Failed to fetch gallery data');
        }
      } catch (error) {
        console.error('Error fetching gallery:', error);
      }
    };

    fetchGallery();
  }, [serverUrl]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simple password check - you can change this password
    if (password === "admin123") {
      setIsAuthenticated(true);
      localStorage.setItem('adminAuthenticated', 'true');
      setIsLoading(false);
    } else {
      alert("Incorrect password!");
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('adminAuthenticated');
    router.push('/gallery');
  };

  const compressImage = (dataUrl, maxWidth = 800) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // Calculate new dimensions
        let { width, height } = img;
        if (width > maxWidth) {
          height = (height * maxWidth) / width;
          width = maxWidth;
        }
        
        canvas.width = width;
        canvas.height = height;
        
        // Draw and compress
        ctx.drawImage(img, 0, 0, width, height);
        const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.7);
        resolve(compressedDataUrl);
      };
      img.src = dataUrl;
    });
  };

  const handleMediaUpload = async (event) => {
    const files = Array.from(event.target.files);
    console.log('Files selected:', files.length);
    
    if (files.length === 0) return;
    
    if (files.length > 20) {
      alert('Maximum 20 files allowed at once. Please select fewer files.');
      event.target.value = '';
      return;
    }
    
    setIsUploading(true);
    
    const validFiles = files.filter(file => 
      file.type.startsWith('image/') || file.type.startsWith('video/')
    );
    console.log('Valid media files:', validFiles.length);

    if (validFiles.length === 0) {
      alert('Please select valid image or video files.');
      setIsUploading(false);
      event.target.value = '';
      return;
    }

    try {
      const formData = new FormData();
      validFiles.forEach((file, index) => {
        console.log(`Adding file ${index + 1}:`, file.name, file.type);
        formData.append('files', file);
      });

      console.log('FormData entries:');
      for (let [key, value] of formData.entries()) {
        console.log(key, value.name, value.type);
      }

      const response = await fetch(`${serverUrl}/api/upload`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Upload successful:', result);
        
        // Add uploaded files to preview
        setUploadedMedia(prev => [...prev, ...result.files]);
        alert(`${result.files.length} files uploaded successfully!`);
      } else {
        const error = await response.json();
        console.error('Upload failed:', error);
        alert(`Upload failed: ${error.error}`);
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Upload failed. Please try again.');
    } finally {
      setIsUploading(false);
      event.target.value = ''; // Reset input
    }
  };

  const saveMediaToGallery = async () => {
    try {
      // Refresh gallery data from server
      const response = await fetch(`${serverUrl}/api/gallery`);
      if (response.ok) {
        const serverData = await response.json();
        setMedia(serverData);
        setUploadedMedia([]);
        alert('Gallery updated successfully!');
      } else {
        alert('Failed to update gallery. Please try again.');
      }
    } catch (error) {
      console.error('Error updating gallery:', error);
      alert('Error updating gallery. Please try again.');
    }
  };

  const removeMedia = (mediaId) => {
    setUploadedMedia(prev => prev.filter(item => item.id !== mediaId));
  };

  const syncGallery = async () => {
    try {
      const response = await fetch(`${serverUrl}/api/sync`, {
        method: 'POST',
      });
      
      if (response.ok) {
        const result = await response.json();
        alert(result.message);
        // Refresh gallery data
        const galleryResponse = await fetch(`${serverUrl}/api/gallery`);
        if (galleryResponse.ok) {
          const data = await galleryResponse.json();
          setMedia(data);
        }
      } else {
        alert('Failed to sync gallery. Please try again.');
      }
    } catch (error) {
      console.error('Error syncing gallery:', error);
      alert('Error syncing gallery. Please try again.');
    }
  };

  const clearGallery = async () => {
    if (confirm('Are you sure you want to clear the entire gallery?')) {
      try {
        const response = await fetch(`${serverUrl}/api/gallery`, {
          method: 'DELETE',
        });
        
        if (response.ok) {
          setMedia([]);
          alert('Gallery cleared successfully!');
        } else {
          alert('Failed to clear gallery. Please try again.');
        }
      } catch (error) {
        console.error('Error clearing gallery:', error);
        alert('Error clearing gallery. Please try again.');
      }
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white dark:from-[#030712] dark:via-[#030712] dark:to-[#030712] text-gray-800 dark:text-gray-100">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh] px-4">
          <Card className="w-full max-w-md">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <Upload className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Admin Access
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Enter password to add images and videos to gallery
                </p>
              </div>
              
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Label htmlFor="password" className="text-sm font-medium">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter admin password"
                    required
                    className="mt-1"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={isLoading}
                >
                  {isLoading ? "Checking..." : "Login"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white dark:from-[#030712] dark:via-[#030712] dark:to-[#030712] text-gray-800 dark:text-gray-100">
      <Navbar />
      
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                Add Media to Gallery
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Upload multiple images and videos to your gallery
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <Button
                onClick={() => router.push('/gallery')}
                variant="outline"
                className="flex items-center gap-2"
              >
                View Gallery
              </Button>
              
              <Button
                onClick={syncGallery}
                variant="outline"
                className="flex items-center gap-2 text-green-600 hover:text-green-700"
              >
                Sync Files
              </Button>
              
              <Button
                onClick={clearGallery}
                variant="outline"
                className="flex items-center gap-2 text-red-600 hover:text-red-700"
              >
                Clear Gallery
              </Button>
              
              <Button
                onClick={handleLogout}
                variant="outline"
                className="flex items-center gap-2"
              >
                <X className="w-4 h-4" />
                Logout
              </Button>
            </div>
          </div>

          {/* Upload Section */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <Upload className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Upload Media
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Select multiple images and videos to upload to your gallery
                </p>
                
                <div className="space-y-4">
                  <label className="cursor-pointer block">
                    <input
                      type="file"
                      multiple
                      accept="image/*,video/*"
                      onChange={handleMediaUpload}
                      className="hidden"
                      disabled={isUploading}
                      id="media-upload"
                    />
                    <Button 
                      type="button"
                      className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2"
                      disabled={isUploading}
                      onClick={() => {
                        console.log('Button clicked');
                        document.getElementById('media-upload').click();
                      }}
                    >
                      <Plus className="w-4 h-4" />
                      {isUploading ? 'Processing...' : 'Select Media'}
                    </Button>
                  </label>
                  
                  <p className="text-sm text-gray-500">
                    Click the button above to select multiple images and videos
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Preview Section */}
          {uploadedMedia.length > 0 && (
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Preview ({uploadedMedia.length} files)
                  </h3>
                  <Button
                    onClick={saveMediaToGallery}
                    className="bg-green-600 hover:bg-green-700 flex items-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Add to Gallery
                  </Button>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {uploadedMedia.map((item) => (
                    <div key={item.id} className="relative group">
                      <div className="aspect-square rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                        {item.type === 'image' ? (
                          <img
                            src={item.src}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <video
                            src={item.src}
                            className="w-full h-full object-cover"
                            muted
                          />
                        )}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-200 flex items-center justify-center">
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => removeMedia(item.id)}
                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                        {item.type === 'video' && (
                          <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                            <Video className="w-3 h-3 inline mr-1" />
                            Video
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 truncate">
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Current Gallery Stats */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Current Gallery Status
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Your gallery currently contains <strong>{media.length}</strong> files.
                {uploadedMedia.length > 0 && (
                  <span className="ml-2">
                    After saving, you'll have <strong>{media.length + uploadedMedia.length}</strong> total files.
                  </span>
                )}
              </p>
              
              <div className="mt-4 space-y-2">
                <Button
                  onClick={async () => {
                    try {
                      const response = await fetch(`${serverUrl}/api/health`);
                      if (response.ok) {
                        const testResponse = await fetch(`${serverUrl}/api/test-upload`);
                        if (testResponse.ok) {
                          const testData = await testResponse.json();
                          alert(`Server is running and healthy!\n\nUpload Info:\n- Max Files: ${testData.maxFiles}\n- Max Size: ${testData.maxFileSize}\n- Supported: ${testData.supportedTypes.join(', ')}`);
                        } else {
                          alert('Server is running but upload endpoint has issues.');
                        }
                      } else {
                        alert('Server is not responding properly.');
                      }
                    } catch (error) {
                      alert('Cannot connect to server. Make sure the server is running on port 5001.');
                    }
                  }}
                  variant="outline"
                  size="sm"
                >
                  Check Server Status
                </Button>
                
                <div className="text-xs text-gray-500">
                  <p>Files are stored on the server</p>
                  <p>No browser storage limits</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
