const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const path = require('path');
require('dotenv').config();

const app = express();

// Cloudinary Config (Variables Render se aayenge)
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'jio_videos',
    resource_type: 'video',
  },
});

const upload = multer({ storage: storage });

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  try {
    const result = await cloudinary.api.resources({ resource_type: 'video' });
    res.render('index', { videos: result.resources });
  } catch (err) {
    res.send("Video load nahi ho rahi");
  }
});

app.post('/upload', upload.single('video'), (req, res) => {
  res.redirect('/');
});

app.listen(process.env.PORT || 3000, () => console.log('Server Start!'));
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
