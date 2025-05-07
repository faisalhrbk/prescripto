import React, { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
	const [userData, setUserData] = useState({
		name: "Face H.",
		image: assets.profile_pic,
		email: "faisalhrbk@outlook.com",
		phone: "+92 123 45678",
		address: {
			line1: "north street",
			line2: "los angeles Calfornia Usa",
		},
		gender: "Male",
		dob: "1990-02-12",
	});
	const [isEdit, setIsEdit] = useState(false);
	return (
		<div className="max-w-lg flex flex-col fap-2 text-sm">
			<img className="w-36 rounded " src={userData.image} alt="" />
			{isEdit ? (
				<input
					className="bg-gray-200 text-3xl font-medium max-w-60 mt-4"
					type="text"
					value={userData.name}
					onChange={(e) =>
						setUserData((prev) => ({ ...prev, name: e.target.value }))
					}
				/>
			) : (
				<p className="font-medium text-3xl text-neutral-800 mt-4">
					{userData.name}
				</p>
			)}
			<hr className="bg-zinc-400 h-[1px] border-none" />
			<div>
				<p className="text-neutral-500 underline mt-3">CONTACT INFORMATION</p>

				<div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
					<p className="font-medium">Email Id:</p>
					<p className="text-blue-500">{userData.email}</p>
					<p className="font-medium">Phone: </p>
					{isEdit ? (
						<input
							className="bg-gray-200 max-w-52 hover:bg-gray-100 p-1"
							type="text"
							value={userData.phone}
							onChange={(e) =>
								setUserData((prev) => ({ ...prev, phone: e.target.value }))
							}
						/>
					) : (
						<p className="text-blue-400">{userData.phone}</p>
					)}
					<p className="font-medium">Address:</p>
					{isEdit ? (
						<p>
							<input
								className="bg-gray-200  hover:bg-gray-100 p-1"
								onChange={(e) =>
									setUserData((prev) => ({
										...prev,
										address: { ...prev.address, line1: e.target.value },
									}))
								}
								type="text"
								value={userData.address.line1}
							/>
							<br />
							<input
								className="bg-gray-200  hover:bg-gray-100 p-1"
								type="text"
								onChange={(e) =>
									setUserData((prev) => ({
										...prev,
										address: { ...prev.address, line2: e.target.value },
									}))
								}
								value={userData.address.line2}
							/>
						</p>
					) : (
						<p className="text-gray-500">
							{userData.address.line1}
							<br />
							{userData.address.line2}
						</p>
					)}
				</div>
			</div>
			<div>
				<p className="text-neutral-500 underline mt-3">BASIC INFORMATION</p>
				<div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
					<p className="font-medium">Gender:</p>
					{isEdit ? (
						<select
							className="bg-gray-200  hover:bg-gray-100 p-1"
							onChange={(e) =>
								setUserData((prev) => ({ ...prev, gender: e.target.value }))
							}
							value={userData.gender}
						>
							<option value="male">Male</option>
							<option value="female">Female</option>
							<option value="other">Other</option>
						</select>
					) : (
						<p>{userData.gender}</p>
					)}
					<p className="font-medium">Birthday:</p>
					{isEdit ? (
						<input
							className="bg-gray-200  hover:bg-gray-100 p-1"
							type="date"
							onChange={(e) =>
								setUserData((prev) => ({ ...prev, dob: e.target.value }))
							}
							value={userData.dob}
						/>
					) : (
						<p>{userData.dob}</p>
					)}
				</div>
			</div>
			<div className="mt-10">
				{isEdit ? (
					<button
						className="border border-green-600 px-8 py-2 rounded-full hover:bg-green-600 hover:text-white transition-all ease-in-out duration-600 cursor-pointer"
						onClick={() => setIsEdit(false)}
					>
						Save Information
					</button>
				) : (
					<button
						className="border border-blue-600 px-8 py-2 rounded-full  hover:bg-blue-800 hover:text-white transition-all  duration-600 cursor-pointer ease-in-out "
						onClick={() => setIsEdit(true)}
					>
						Edit
					</button>
				)}
			</div>
		</div>
	);
};

export default MyProfile;
