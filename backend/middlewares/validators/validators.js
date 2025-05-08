// THIS FILE IS FOR ALL VALIDATIONS
import { check, validationResult } from "express-validator";

// 1: AddDoctorValidator
export const addDoctorValidator = [
	check("name")
		.notEmpty()
		.withMessage("Name required")
		.isLength({ min: 3 })
		.withMessage("Name must be 3+ chars")
		.trim(),
	check("email")
		.notEmpty()
		.withMessage("Email required")
		.isEmail()
		.withMessage("Invalid email")
		.normalizeEmail(),
	check("password")
		.notEmpty()
		.withMessage("Password required")
		.isLength({ min: 6 })
		.withMessage("Password must be 6+ chars"),
	check("speciality")
		.notEmpty()
		.withMessage("Speciality required")
		.isLength({ min: 3 })
		.withMessage("Speciality must be 3+ chars")
		.trim(),
	check("degree")
		.notEmpty()
		.withMessage("Degree required")
		.isLength({ min: 2 })
		.withMessage("Degree must be 2+ chars")
		.trim(),
	check("experience")
		.notEmpty()
		.withMessage("Experience required")
		.isFloat({ min: 0 })
		.withMessage("Experience must be positive")
		.toFloat(),
	check("about")
		.notEmpty()
		.withMessage("About required")
		.isLength({ min: 10 })
		.withMessage("About must be 10+ chars")
		.trim(),
	check("fees")
		.notEmpty()
		.withMessage("Fees required")
		.isFloat({ min: 0 })
		.withMessage("Fees must be positive")
		.toFloat(),
	check("address")
		.notEmpty()
		.withMessage("Address required")
		.isLength({ min: 5 })
		.withMessage("Address must be 5+ chars")
		.trim(),
	check("imageFile").custom((value, { req }) => {
		if (!req.file) throw new Error("Image required");
		if (!["image/jpeg", "image/png", "image/gif"].includes(req.file.mimetype))
			throw new Error("Only JPEG, PNG, GIF allowed");
		return true;
	}),
];

export const validate = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty())
		return res.status(400).json({ errors: errors.array() });
	next();
};
