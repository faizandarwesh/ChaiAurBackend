import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_APP_SECRET,
});

const uploadFile = async (filePath) => {
  try {
    if (!filePath) return null;
    const response = await cloudinary.uploader.upload(filePath, {
      resource_type: "auto",
    });

    console.log("File uploaded",response.url)
    return response;

  } catch (error) {
    //Remove file from local while having issues to upload it on server
    fs.unlinkSync(filePath);
    return null;
  }
};

export {uploadFile}