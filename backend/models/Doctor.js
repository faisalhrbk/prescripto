import mongoose from "mongoose";
const DoctorSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		image: { type: String, required: true },
		speciality: { type: String, required: true },
		degree: { type: String, required: true },
		experience: { type: String, required: true },
		about: {
			type: String,
			required: true,
		},
		available: { type: Boolean, required: true },
		fees: { type: Number, required: true },
		address: { type: Object, },
		date: {
			type: Date,
			default: Date.now,
		},
		slots_booked: {
			type: Object,
			default: {},
		},
	},
	{ minimize: false, timestamps: true }
);
export default mongoose.models.doctor || mongoose.model("doctor", DoctorSchema);
