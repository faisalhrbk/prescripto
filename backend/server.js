//Core Modules

// External Modules
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routers/adminRouter.js";

// Local Modules

// App Config
dotenv.config({});
const app = express();
const PORT = process.env.PORT || 3001;
connectCloudinary();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Api EndPoints
app.use("/api/admin", adminRouter);
app.get("/", (req, res) => {
	res.send("hello world");
});
app.listen(PORT, () => {
	connectDB();
	console.log(`server running at http://localhost:${PORT}`);
});
