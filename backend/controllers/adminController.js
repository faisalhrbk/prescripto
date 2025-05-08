import validator from "validator";
//Api fro adding doctor

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
		if (
			!name ||
			!email ||
			!password ||
			!speciality ||
			!degree ||
			!experience ||
			!about ||
			!fees ||
			!address ||
			!imageFile
		) {
			return res.json({ success: false, message: "missing details" });
		}

		// validating email format
	} catch (err) {}
};
