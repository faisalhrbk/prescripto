import { v2 as cloudinary } from "cloudinary";

// Hardcode your credentials directly in the config
cloudinary.config({
	cloud_name: "dbjj0og9z",
	api_key: "728996341426286",
	api_secret: "sZDZhwrUF0XXdrqe0mTr9tejI8Y",
});

console.log("Cloudinary configured with:", {
	cloud_name: cloudinary.config().cloud_name,
	api_key_exists: !!cloudinary.config().api_key,
	api_secret_exists: !!cloudinary.config().api_secret,
});

export default cloudinary;
