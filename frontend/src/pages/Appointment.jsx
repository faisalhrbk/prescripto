import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const Appointment = () => {
	const { docId } = useParams();
	const { doctors, currencySymbol } = useContext(AppContext);
	const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
	const [docInfo, setDocInfo] = useState(null);
	const [docSlots, setDocSlots] = useState([]);
	const [slotIndex, setSlotIndex] = useState(0);
	const [slotTime, setSlotTime] = useState("");

	const fetchDocInfo = () => {
		const doc = doctors.find((doc) => doc._id === docId);
		setDocInfo(doc || null);
	};

	const getAvailableSlots = () => {
		const slots = [];
		const today = new Date();
		for (let i = 0; i < 7; i++) {
			const date = new Date(today);
			date.setDate(today.getDate() + i);
			const endTime = new Date(date);
			endTime.setHours(21, 0, 0, 0);

			let startHour = 10;
			let startMinute = 0;
			if (i === 0) {
				startHour = today.getHours() > 10 ? today.getHours() + 1 : 10;
				startMinute = today.getMinutes() > 30 ? 30 : 0;
			}

			const timeSlots = [];
			const current = new Date(date);
			current.setHours(startHour, startMinute, 0, 0);
			while (current < endTime) {
				timeSlots.push({
					datetime: new Date(current),
					time: current.toLocaleTimeString([], {
						hour: "2-digit",
						minute: "2-digit",
					}),
				});
				current.setMinutes(current.getMinutes() + 30);
			}
			slots.push(timeSlots);
		}
		setDocSlots(slots);
	};

	useEffect(() => {
		fetchDocInfo();
	}, [doctors, docId]);

	useEffect(() => {
		if (docInfo) getAvailableSlots();
	}, [docInfo]);

	if (!docInfo) return <p>Loading doctor info...</p>;

	return (
		<div>
			{/* Doctor Info */}
			<div className="flex flex-col sm:flex-row gap-4">
				<img
					className="bg-blue-600 w-full sm:max-w-72 rounded-lg"
					src={docInfo.image}
					alt={docInfo.name}
				/>
				<div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 mx-2 sm:mx-0 mt-[-80px] sm:mt-0 bg-white">
					<p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
						{docInfo.name}
						<img className="w-5" src={assets.verified_icon} alt="Verified" />
					</p>
					<div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
						<p>
							{docInfo.degree} - {docInfo.speciality}
						</p>
						<button className="py-0.5 px-2 text-xs border rounded-full">
							{docInfo.experience}
						</button>
					</div>
					<div>
						<p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
							About <img src={assets.info_icon} alt="Info" />
						</p>
						<p className="text-sm text-gray-500 max-w-[700px] mt-1">
							{docInfo.about}
						</p>
					</div>
					<p className="text-gray-500 font-medium mt-4">
						Appointment fee:{" "}
						<span className="text-gray-600">
							{currencySymbol}
							{docInfo.fees}
						</span>
					</p>
				</div>
			</div>

			{/* Booking Slots */}
			<div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
				<p>Booking Slots</p>
				<div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
					{docSlots.map((slots, index) => (
						<div
							key={slots[0]?.datetime.toISOString()}
							onClick={() => setSlotIndex(index)}
							className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
								slotIndex === index
									? "bg-blue-600 text-white"
									: "border border-gray-200"
							}`}
						>
							<p>{slots[0] && daysOfWeek[slots[0].datetime.getDay()]}</p>
							<p>{slots[0] && slots[0].datetime.getDate()}</p>
						</div>
					))}
				</div>
				<div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
					{docSlots[slotIndex]?.map((slot) => (
						<p
							key={slot.datetime.toISOString()}
							onClick={() => setSlotTime(slot.time)}
							className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
								slot.time === slotTime
									? "bg-blue-600 text-white"
									: "text-gray-400 border border-gray-300"
							}`}
						>
							{slot.time.toLowerCase()}
						</p>
					))}
				</div>
				<button className="bg-blue-600 text-white text-sm font-light px-14 py-3 rounded-full my-6">
					Book an Appointment
				</button>
			</div>
		</div>
	);
};

export default Appointment;
