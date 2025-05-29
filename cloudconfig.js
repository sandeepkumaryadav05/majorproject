const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// Corrected the typo from "couldinary" to "cloudinary"
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'wonderlust_DEV', // The name of the folder in Cloudinary
    allowed_formats: ['jpg', 'png', 'jpeg'], // Allowed file types
    public_id: (req, file) => 'computed-filename-using-request', // Optional custom filename
  },
});

module.exports = {
  cloudinary,
  storage,
};