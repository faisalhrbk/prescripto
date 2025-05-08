//Core Modules

// External Modules
import express from "express";
import cors from "cors";
import "dotenv/config";

// Local Modules

// App Config

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares

app.use(express.json());
app.use(cors());

// Api EndPoints

app.get("/", (req, res, next) => {
	res.send("hello world");
});

app.listen(PORT, () => {
	console.log(`server running at http://localhost:${PORT}`);
});
