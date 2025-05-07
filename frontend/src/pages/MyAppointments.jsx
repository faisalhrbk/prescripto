import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MyAppointments = () => {
	const { doctors } = useContext(AppContext);
	console.log(doctors);
	return (
		<div>
			<p className="pb-3 mt-12 font-medium text-zinc-700 border-bottom ">
				My Appointments{" "}
			</p>
			<div>
				{doctors.slice(0, 2).map((item, index) => (
					<div key={index}>
						<div>
							<img src={item.image} alt="" />
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
						<div></div>
						<div>
							<button>Pay Online</button>
							<button>Cancel appointment</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default MyAppointments;
