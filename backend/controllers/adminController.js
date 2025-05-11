import Doctor from "../models/Doctor.js";
import cloudinary from "../config/cloudinary.js";
import bcrypt from "bcrypt";
import fs from "fs/promises"; // Use promises for async file operations

export const addDoctorController = async (req, res) => {
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

		// Hash password
		const hashedPassword = await bcrypt.hash(password, 10);

		// Upload image to Cloudinary
		uploadImage = await cloudinary.uploader.upload(req.file.path, {
			folder: "doctors",
		});

		// Create and save doctor
		const doctor = new Doctor({
			name,
			email,
			password: hashedPassword,
			speciality,
			degree,
			experience,
			about,
			fees,
			available,
			address: JSON.parse(address), // Assumes router validated address
			image: uploadImage.secure_url,
			date: Date.now(),
		});

		const savedDoctor = await doctor.save();

		// Delete local file
		await fs.unlink(req.file.path);

		// Return response without sensitive fields
		res.status(201).json({
			success: true,
			message: "Doctor added",
			doctor: {
				_id: savedDoctor._id,
				name: savedDoctor.name,
				email: savedDoctor.email,
				speciality: savedDoctor.speciality,
				degree: savedDoctor.degree,
				experience: savedDoctor.experience,
				about: savedDoctor.about,
				fees: savedDoctor.fees,
				available: savedDoctor.available,
				address: savedDoctor.address,
				image: savedDoctor.image,
				date: savedDoctor.date,
			},
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
