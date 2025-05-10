import Doctor from "../models/Doctor.js";
import { cloudinary } from "../config/cloudinary.js";
import bcrypt from "bcrypt";

//All validations are set in  router don't need to check here just save the data in Database

export const addDoctorController = async (req, res) => {
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
console.log({
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
});

		const imageFile = req.file;
		if (await Doctor.findOne({ email }))
			return res
				.status(400)
				.json({ errors: [{ msg: "Email exists", param: "email" }] });
		const hashedPassword = await bcrypt.hash(password, 10);
		const result = await cloudinary.uploader.upload(imageFile.path, {
			folder: "doctors",
		});

		let parsedAddress;
		try {
			parsedAddress = JSON.parse(address); // Convert string to object
		} catch (err) {
			return res.status(400).json({
				errors: [{ msg: "Invalid address format", param: "address" }],
			});
		}
		console.log(parsedAddress)
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
			address: parsedAddress,
			image: result.secure_url,
		});

		await doctor.save();
		res.status(201).json({ success: true, message: "Doctor added", doctor });
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: `internal server error ${err}` });
	}
};
