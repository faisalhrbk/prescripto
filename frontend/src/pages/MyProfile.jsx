import React, { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
	const [userData, setUserData] = useState({
		name: "Face H.",
		image: assets.profile_pic,
		email: "faisalhrbk@outlook.com",
		phone: "+92 123 45678",
		address: {
			lin1: "north street",
			line2: "los angeles Calfornia Usa",
		},
		gender: "Male",
		dob: "1990-2-12",
	});
	const [isEdit, setIsEdit] = useState(false);
	return (
		<div>
			<img src={userData.image} alt="" />
			{isEdit ? (
				<input
					type="text"
					value={userData.name}
					onChange={(e) =>
						setUserData((prev) => ({ ...prev, name: e.target.value }))
					}
				/>
			) : (
				<p>{userData.name}</p>
			)}
			<hr />
			<div>
				<p>CONTACT INFORMATION</p>
				<div>
					<p>Email Id:</p>
					<p>{userData.email}</p>
					<p>Phone: </p>
					{isEdit ? (
						<input
							type="text"
							value={userData.phone}
							onChange={(e) =>
								setUserData((prev) => ({ ...prev, phone: e.target.value }))
							}
						/>
					) : (
						<p>{userData.phone}</p>
					)}
					<p>Address:</p>
					{isEdit ? (
						<p>
							<input
								onChange={(e) =>
									setUserData((prev) => ({
										...prev,
										address: { ...prev.address, line1: e.target.value },
									}))
								}
								type="text"
							/>
							<br />
							<input
								type="text"
								onChange={(e) =>
									setUserData((prev) => ({
										...prev,
										address: { ...prev.address, line2: e.target.value },
									}))
								} value={userData.line2}
							/>
						</p>
					) : (
						<p>
							{userData.address.lin1}
							<br />
							{userData.address.line2}
						</p>
					)}
				</div>
			</div>
      
		</div>
	);
};

export default MyProfile;
