import jwt from "jsonwebtoken";
import env from "dotenv";
env.config();

// const token = req.headers.authorization?.split(" ")[1];

// Admin auth middleware
const authAdmin = async (req, res, next) => {
	try {
		const adminToken = req.headers.admintoken;
        // console.log(adminToken)
		if (!adminToken) {
			return res.status(401).json({
				success: false,
				message: "Not Authorized Login again",
			});
		}
		const decoded = jwt.verify(adminToken, process.env.JWT_SECRET);
		if (!decoded) {
			return res.json({
				success: false,
				message: "Not Authorized Login again",
			});
		}
		next();
	} catch (err) {
		console.error(err);
		res.json({ success: false, message: "internal server error" });
	}
};
export default authAdmin;
