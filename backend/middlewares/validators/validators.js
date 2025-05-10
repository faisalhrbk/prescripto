// THIS FILE IS FOR ALL VALIDATIONS
import { check, validationResult } from "express-validator";

// 1: AddDoctorValidator
export const addDoctorValidator = [
	check("name")
		.notEmpty().bail()
		.withMessage("Name required")
		.isLength({ min: 3 }).bail()
		.withMessage("Name must be 3+ chars")
		.trim(),
	check("email")
		.notEmpty().bail()
		.withMessage("Email required")
		.isEmail().bail()
		.withMessage("Invalid email")
		.normalizeEmail(),
	check("password")
		.notEmpty().bail()
		.withMessage("Password required")
		.isLength({ min: 6 }).bail()
		.withMessage("Password must be 6+ chars"),
	check("speciality")
		.notEmpty().bail()
		.withMessage("Speciality required")
		.isLength({ min: 3 }).bail()
		.withMessage("Speciality must be 3+ chars")
		.trim(),
	check("degree")
		.notEmpty().bail()
		.withMessage("Degree required")
		.isLength({ min: 2 }).bail()
		.withMessage("Degree must be 2+ chars")
		.trim(),
	check("experience")
		.notEmpty().bail()
		.withMessage("Experience required")
		.isFloat({ min: 0 }).bail()
		.withMessage("Experience must be positive")
		.toFloat(),
	check("about")
		.notEmpty().bail()
		.withMessage("About required")
		.isLength({ min: 10 }).bail()
		.withMessage("About must be 10+ chars")
		.trim(),
	check("fees")
		.notEmpty().bail()
		.withMessage("Fees required")
		.isFloat({ min: 0 }).bail()
		.withMessage("Fees must be positive")
		.toFloat(),
	check("address")
		.notEmpty().bail()
		.withMessage("Address required")
		.isLength({ min: 5 }).bail()
		.withMessage("Address must be 5+ chars")
		.trim(),
	check("imageFile")
		.custom((value, { req }) => {
			if (!req.file) throw new Error("Image required");
			if (!["image/jpeg", "image/png", "image/gif"].includes(req.file.mimetype))
				throw new Error("Only JPEG, PNG, GIF allowed");
			return true;
		}),
];

// 2 write 2nd validator here

export const validate = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty())
		return res.status(400).json({ errors: errors.array() });
	next();
};
