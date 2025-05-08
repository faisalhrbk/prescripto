import Doctor from "../models/Doctor.js";
import cloudinary from "../config/cloudinary.js";
import bcrypt from 'bcrypt'

//All validations are set router don't need to check here just save the data in Database


export const addDoctor = async (req, res) => {
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
		} = req.body;
		const imageFile = req.file;
		if (await Doctor.findOne({ email }))
			return res
				.status(400)
				.json({ errors: [{ msg: "Email exists", param: "email" }] });
		const hashedPassword = await bcrypt.hash(password, 10);
		const result = await cloudinary.uploader.upload(imageFile.path, {
			folder: "doctors",
		});

		const doctor = new Doctor({
			name,
			email,
			password: hashedPassword,
			speciality,
			degree,
			experience,
			about,
			fees,
			address,
			image: result.secure_url,
		});
		await doctor.save();
		res.status(201).json({success: true, message: "Doctor added", doctor });
	} catch (err) {
		res.status(500).json({ message: "Internal Server error" });
	}
};
