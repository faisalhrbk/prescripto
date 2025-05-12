//Core Modules

// External Modules/Packages
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
app.use(cors({ origin: "http://localhost:5173" }));

// Api EndPoints
app.get("/", (_, res) => res.send("server is running"));
app.use("/api/admin", adminRouter);

app.listen(PORT, () => {
	connectDB();
	console.log(`server running at http://localhost:${PORT}`);
});
