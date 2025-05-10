import mongoose from "mongoose";
const DoctorSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, require: true, unique: true },
		password: { type: String, require: true },
		image: { type: String, require: true },
		speciality: { type: String, require: true },
		degree: { type: String, required: true },
		experience: { type: String, required: true },
		about: {
			type: String,
			required: true,
		},
		available: { type: Boolean, required: true },
		fees: { type: Number, required: true },
		address: { type: Object, required: true },
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
