const cloudinary = require('cloudinary').v2;
const Multer = require("multer");
require("dotenv").config();
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function handleUpload(file, folder, options) {
    options = {...options, folder };
    const res = await cloudinary.uploader.upload(file, options);
    return res;
  }

const storage = new Multer.memoryStorage();
const upload = Multer({
  storage,
});


module.exports = {
    handleUpload,
    upload,
}