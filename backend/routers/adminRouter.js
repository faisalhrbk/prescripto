import express from "express";
import { addDoctorController } from "../controllers/adminController.js";
import multerUpload from "../middlewares/multer.js";
import {
	addDoctorValidator,
	validate,
} from "../middlewares/validators/validators.js";

const adminRouter = express.Router();
adminRouter.post(
	"/add-doctor",
	multerUpload.single("image"),
	addDoctorValidator,
	validate,
	addDoctorController
);

export default adminRouter;
