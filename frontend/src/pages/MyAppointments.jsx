import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MyAppointments = () => {
	const { doctors } = useContext(AppContext);
	console.log(doctors);
	return (
		<div>
			<p className="pb-3 mt-12 font-medium text-zinc-700 border-bottom ">
				My Appointments
			</p>
			<div>
				{doctors.slice(0, 2).map((item, index) => (
					<div
						key={index}
						className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b"
					>
						<div>
							<img className="w-32 bg-indigo-50 " src={item.image} alt="" />
						</div>
						<div>
							<p>{item.name}</p>
							<p>{item.speciality}</p>
							<p>Address:</p>
							<p>{item.address.line1}</p>
							<p>{item.address.line2}</p>
							<p>
								<span>Date & Time</span> 25, July, 2024 | 08:30 PM
							</p>
						</div>
						
						<div className="flex flex-col gap-2 justify-end sm:ml-auto">
							<button className="text-sm text-stone-500 text-center sm-min-w-48 py-2 border hover:bg-blue-500 hover:text-white transition-all duration-300  cursor-pointer">
								Pay Online
							</button>
							<button className="text-sm px-3 text-stone-500 text-center sm-min-w-48 py-2 border  hover:bg-red-500 hover:text-white transition-all duration-300  cursor-pointer">
								Cancel appointment
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default MyAppointments;
