import express from "express";
import { addDoctor, loginAdmin } from "../controllers/adminController.js";
import multerUpload from "../middlewares/multer.js";
import {
	addDoctorValidator,
	loginAdminValidator,
	validate,
} from "../middlewares/validators/validators.js";
import authAdmin from "../middlewares/authAdmin.js";

const adminRouter = express.Router();

adminRouter.post(
	"/add-doctor", authAdmin,
	multerUpload.single("image"),
	addDoctorValidator,
	validate,
	addDoctor
);

adminRouter.post("/login", loginAdminValidator, validate, loginAdmin);

export default adminRouter;
