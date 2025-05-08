import mongoose from "mongoose";

const connectDB = async () => {
	try {
		await mongoose.connect(
			process.env.MONGODB_URI || "mongodb://localhost:27017/prescripto"
		);
		console.log("connected to mongoDB");
	} catch (error) {
		console.error("Connection error:", error);
		process.exit(1);
	}
};

export default connectDB;
