# Gallery Feature

## Overview
The gallery page is a private, admin-only feature that allows you to upload, view, and manage images. It's protected by a password and only accessible to authenticated users.

## How to Access

1. Navigate to `/gallery` in your browser
2. Enter the admin password: `admin123` (you can change this in `hooks/useAuth.js`)
3. Once authenticated, you'll see the gallery interface

## Features

### Authentication
- Password-protected access
- Session persistence (stays logged in until logout)
- Secure logout functionality

### Image Management
- **Upload Images**: Click "Add Images" to upload multiple images at once
- **View Images**: Click on any image to view it in full size
- **Download Images**: Download any image from the gallery
- **Delete Images**: Remove images you no longer need
- **Responsive Grid**: Images are displayed in a responsive grid layout

### Data Storage
- Images are stored locally in the browser's localStorage
- No server-side storage required
- Images persist between browser sessions

## Customization

### Changing the Admin Password
Edit the `adminPassword` variable in `client/hooks/useAuth.js`:
```javascript
const adminPassword = 'your-new-password';
```

### Styling
The gallery uses Tailwind CSS classes and can be customized by modifying:
- `client/components/sections/GalleryGrid.jsx` - Main gallery layout
- `client/components/sections/AdminAuth.jsx` - Login form styling

## Security Notes
- This is a client-side authentication system suitable for basic access control
- For production use, consider implementing server-side authentication
- Images are stored in localStorage, which has size limitations
- Consider implementing image compression for better performance

## Navigation
When authenticated, a "Gallery" link will appear in the main navigation bar, making it easy to access the gallery from anywhere on the site.
