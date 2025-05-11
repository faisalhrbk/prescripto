//Core Modules

// External Modules
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Local Modules
import adminRouter from "./routers/adminRouter.js";
import connectDB from "./config/mongodb.js";

// App Config
const app = express();
const PORT = process.env.PORT || 3001;
dotenv.config();

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
