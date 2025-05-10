import Doctor from "../models/Doctor.js";
import  cloudinary  from "../config/cloudinary.js";
import bcrypt from "bcrypt";
import  fs  from "fs";

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

		const uploadImage = await cloudinary.uploader.upload(
			imageFile.path,
			{ resource_type: "image" },
			{
				folder: "doctors",
			}
		);
		fs.unlinkSync(imageFile.path);
		console.log(parsedAddress);
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
			address: JSON.parse(address),
			image: uploadImage.secure_url,
			date: Date.now(),
		});

		await doctor.save();
		res.status(201).json({ success: true, message: "Doctor added", doctor });
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: `internal server error ${err}` });
	}
};
