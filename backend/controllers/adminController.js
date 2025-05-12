import Doctor from "../models/Doctor.js";
import cloudinary from "../config/cloudinary.js";
import bcrypt from "bcrypt";
import fs from "fs/promises";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

//all validations are wrote in validator.js file here you can save data in DB only

export const addDoctor = async (req, res) => {
	let uploadImage;
	try {
		const {
			name,
			email,
			password,
			speciality,
			degree,
			experience,
			about,
			fees,
			address,
			available,
		} = req.body;
		// console.log({
		// 	name,
		// 	email,
		// 	password,
		// 	speciality,
		// 	degree,
		// 	experience,
		// 	about,
		// 	fees,
		// 	address,
		// 	available,
		// });

		// Hash password
		const hashedPassword = await bcrypt.hash(password, 10);

		// Upload image to Cloudinary
		uploadImage = await cloudinary.uploader.upload(req.file.path, {
			folder: "doctors",
		});

		// Create and save doctor
		const doctor = await new Doctor({
			name,
			email,
			password: hashedPassword,
			speciality,
			degree,
			experience,
			about,
			fees,
			available,
			address,
			image: uploadImage.secure_url,
			date: Date.now(),
		});
		doctor.save();
		// Delete local file
		await fs.unlink(req.file.path);

		res.status(201).json({
			success: true,
			message: "Doctor added",
		});
	} catch (err) {
		// Clean up Cloudinary image if upload succeeded but save failed
		if (uploadImage && uploadImage.public_id) {
			await cloudinary.uploader.destroy(uploadImage.public_id);
		}

		// Delete local file if it exists
		if (req.file && req.file.path) {
			try {
				await fs.unlink(req.file.path);
			} catch (unlinkErr) {
				console.error(`Failed to delete file: ${unlinkErr.message}`);
			}
		}

		// Handle MongoDB duplicate key error
		if (err.code === 11000) {
			return res
				.status(400)
				.json({ errors: [{ msg: "Email exists", param: "email" }] });
		}

		console.error("Error in addDoctorController:", {
			error: err.message,
			stack: err.stack,
		});
		res.status(500).json({ message: `Internal server error: ${err.message}` });
	}
};

// api for admin login
export const loginAdmin = async (req, res) => {
	const { email, password } = req.body;

	if (email !== process.env.ADMIN_EMAIL) {
		return res.status(401).json({
			success: false,
			message: "Invalid credentials",
		});
	}
	if (password !== process.env.ADMIN_PASSWORD) {
		return res.status(401).json({
			success: false,
			message: "Invalid credentials",
		});
	}
	const token = jwt.sign(
		{ email: process.env.ADMIN_EMAIL },
		process.env.JWT_SECRET
	);

	return res.status(200).json({
		token,
		success: true,
		message: "Login successful",
	});
};
