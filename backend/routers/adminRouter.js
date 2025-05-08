import express from "express";
import { addDoctor } from "../controllers/adminController.js";
import upload from "../middlewares/multer.js";

import {
	addDoctorValidator,
	validate,
} from "../middlewares/validators/validators.js";

const adminRouter = express.Router();

adminRouter.post(
	"/add-doctor",
	upload.single("image"),
	addDoctorValidator,
	validate,
	addDoctor
);

export default adminRouter;
