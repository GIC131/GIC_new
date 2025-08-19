const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
// Restrict CORS to production domains (and localhost for development)
const allowedOrigins = [
  'https://getinteviewconfidence.com',
  'https://www.getinteviewconfidence.com',
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  'http://127.0.2.2:3000'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // allow server-to-server/curl
    if (allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error('Not allowed by CORS'));
  }
}));
app.use(express.json());
app.use(express.static('public'));

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    // Generate unique filename with timestamp
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 50 * 1024 * 1024, // 50MB limit
  },
  fileFilter: function (req, file, cb) {
    // Allow images and videos
    if (file.mimetype.startsWith('image/') || file.mimetype.startsWith('video/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image and video files are allowed!'), false);
    }
  }
});

// Store gallery data
let galleryData = [];

// Load existing gallery data from file
const galleryDataPath = path.join(__dirname, 'gallery-data.json');
try {
  if (fs.existsSync(galleryDataPath)) {
    const data = fs.readFileSync(galleryDataPath, 'utf8');
    galleryData = JSON.parse(data);
  }
} catch (error) {
  console.error('Error loading gallery data:', error);
}

// Save gallery data to file
const saveGalleryData = () => {
  try {
    fs.writeFileSync(galleryDataPath, JSON.stringify(galleryData, null, 2));
  } catch (error) {
    console.error('Error saving gallery data:', error);
  }
};

// Routes

// Get all gallery items
app.get('/api/gallery', (req, res) => {
  res.json(galleryData);
});

// Upload files
app.post('/api/upload', upload.array('files', 20), (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'No files uploaded' });
    }

    const uploadedFiles = req.files.map(file => {
      const fileData = {
        id: Date.now() + Math.random(),
        filename: file.filename,
        originalName: file.originalname,
        path: `/uploads/${file.filename}`,
        type: file.mimetype.startsWith('image/') ? 'image' : 'video',
        size: file.size,
        date: new Date().toISOString()
      };
      
      galleryData.push(fileData);
      return fileData;
    });

    saveGalleryData();
    console.log(`Uploaded ${uploadedFiles.length} files. Total gallery items: ${galleryData.length}`);
    
    res.json({
      message: `${uploadedFiles.length} files uploaded successfully`,
      files: uploadedFiles
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Upload failed' });
  }
});

// Error handling for multer
app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    console.error('Multer error:', error);
    if (error.code === 'LIMIT_FILE_COUNT') {
      return res.status(400).json({ error: 'Too many files. Maximum 20 files allowed.' });
    }
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ error: 'File too large. Maximum 50MB per file.' });
    }
    if (error.code === 'LIMIT_UNEXPECTED_FILE') {
      return res.status(400).json({ error: 'Unexpected field name. Please try again.' });
    }
    return res.status(400).json({ error: 'File upload error: ' + error.message });
  }
  next(error);
});

// Sync existing files (add files that exist in uploads but not in gallery data)
app.post('/api/sync', (req, res) => {
  try {
    const files = fs.readdirSync(uploadsDir);
    let syncedCount = 0;
    
    files.forEach(filename => {
      const existingFile = galleryData.find(item => item.filename === filename);
      if (!existingFile) {
        const filePath = path.join(uploadsDir, filename);
        const stats = fs.statSync(filePath);
        const ext = path.extname(filename).toLowerCase();
        const isImage = ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext);
        const isVideo = ['.mp4', '.avi', '.mov', '.webm'].includes(ext);
        
        if (isImage || isVideo) {
          const fileData = {
            id: Date.now() + Math.random(),
            filename: filename,
            originalName: filename,
            path: `/uploads/${filename}`,
            type: isImage ? 'image' : 'video',
            size: stats.size,
            date: stats.birthtime.toISOString()
          };
          
          galleryData.push(fileData);
          syncedCount++;
        }
      }
    });
    
    if (syncedCount > 0) {
      saveGalleryData();
    }
    
    res.json({
      message: `Synced ${syncedCount} files. Total gallery items: ${galleryData.length}`,
      syncedCount,
      totalCount: galleryData.length
    });
  } catch (error) {
    console.error('Sync error:', error);
    res.status(500).json({ error: 'Sync failed' });
  }
});

// Delete file
app.delete('/api/gallery/:id', (req, res) => {
  try {
    const { id } = req.params;
    const fileIndex = galleryData.findIndex(item => item.id.toString() === id);
    
    if (fileIndex === -1) {
      return res.status(404).json({ error: 'File not found' });
    }

    const file = galleryData[fileIndex];
    
    // Delete physical file
    const filePath = path.join(__dirname, 'uploads', file.filename);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
    
    // Remove from gallery data
    galleryData.splice(fileIndex, 1);
    saveGalleryData();
    
    res.json({ message: 'File deleted successfully' });
  } catch (error) {
    console.error('Delete error:', error);
    res.status(500).json({ error: 'Delete failed' });
  }
});

// Clear all files
app.delete('/api/gallery', (req, res) => {
  try {
    // Delete all physical files
    galleryData.forEach(file => {
      const filePath = path.join(__dirname, 'uploads', file.filename);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    });
    
    // Clear gallery data
    galleryData = [];
    saveGalleryData();
    
    res.json({ message: 'Gallery cleared successfully' });
  } catch (error) {
    console.error('Clear error:', error);
    res.status(500).json({ error: 'Clear failed' });
  }
});

// Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Test upload endpoint
app.get('/api/test-upload', (req, res) => {
  res.json({ 
    message: 'Upload endpoint is ready',
    maxFiles: 20,
    maxFileSize: '50MB',
    supportedTypes: ['image/*', 'video/*']
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Uploads directory: ${uploadsDir}`);
  console.log(`Gallery data file: ${galleryDataPath}`);
});
