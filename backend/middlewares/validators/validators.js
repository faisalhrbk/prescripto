// THIS FILE IS FOR ALL VALIDATIONS
import { check, validationResult } from "express-validator";

// 1: AddDoctorValidator
export const addDoctorValidator = [
	check("name")
		.notEmpty()
		.withMessage("Name required")
		.bail()
		.isLength({ min: 3 })
		.withMessage("Name must be 3+ chars")
		.trim()
		.escape(),
	check("email")
		.notEmpty()
		.withMessage("Email required")
		.bail()
		.isEmail()
		.withMessage("Invalid email")
		.normalizeEmail(),
	check("password")
		.notEmpty()
		.withMessage("Password required")
		.bail()
		.isLength({ min: 6 })
		.withMessage("Password must be 6+ chars"),
	check("speciality")
		.notEmpty()
		.withMessage("Speciality required")
		.bail()
		.isLength({ min: 3 })
		.withMessage("Speciality must be 3+ chars")
		.trim()
		.escape(),
	check("degree")
		.notEmpty()
		.withMessage("Degree required")
		.bail()
		.isLength({ min: 2 })
		.withMessage("Degree must be 2+ chars")
		.trim()
		.escape(),
	check("experience")
		.notEmpty()
		.withMessage("Experience required")
		.isFloat({ min: 0 })
		.withMessage("Experience must be positive")
		.toFloat(),
	check("about")
		.notEmpty()
		.withMessage("About required")
		.bail()
		.isLength({ min: 10 })
		.withMessage("About must be 10+ chars")
		.trim()
		.escape(),
	check("fees")
		.notEmpty()
		.withMessage("Fees required")
		.bail()
		.isFloat({ min: 0 })
		.withMessage("Fees must be positive")
		.toFloat(),
	check("address")
		.exists({ checkFalsy: true })
		.withMessage("Address required")
		.isObject()
		.withMessage("Address must be an object"),
	check("address.line1")
		.isString()
		.withMessage("Address line 1 must be a string")
		.trim()
		.isLength({ min: 5 })
		.withMessage("Address line 1 must be at least 5 characters long"),
	check("address.line2")
		.isString()
		.withMessage("Address line 2 must be a string")
		.trim()
		.isLength({ min: 1 })
		.withMessage("Address line 2 must be at least 1 character long"),
	check("available")
		.notEmpty()
		.withMessage("Available required")
		.bail()
		.isBoolean()
		.withMessage("Must be a boolean")
		.toBoolean(),
	check("imageFile").custom((value, { req }) => {
		if (!req.file) throw new Error("Image required");
		if (!["image/jpeg", "image/png", "image/gif"].includes(req.file.mimetype))
			throw new Error("Only JPEG, PNG, GIF allowed");
		return true;
	}),
];

// 2 loginAdminValidator
export const loginAdminValidator = [
	check("email")
		.notEmpty()
		.withMessage("Email is required")
		.bail()
		.isEmail()
		.withMessage("Please enter a valid email address")
		.normalizeEmail(),
	check("password")
		.notEmpty()
		.withMessage("Password is required")
		.bail()
		.isLength({ min: 6 })
		.withMessage("Password must be at least 6 characters long"),
];

export const validate = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty())
		return res.status(400).json({ errors: errors.array() });
	next();
};
