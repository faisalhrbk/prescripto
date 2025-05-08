import Doctor from '../models/Doctor.js';
import  cloudinary  from "../config/cloudinary.js";
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
		
	} catch (err) {}
};
