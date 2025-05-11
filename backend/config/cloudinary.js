import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();


cloudinary.config({
	cloud_name: process.env.CLOUDINARY_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

console.log("Cloudinary configured with:", {
	cloud_name: cloudinary.config().cloud_name,
	api_key_exists: !!cloudinary.config().api_key,
	api_secret_exists: !!cloudinary.config().api_secret,
});

export default cloudinary;
