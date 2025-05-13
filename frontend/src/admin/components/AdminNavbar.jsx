import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AdminContext } from "../context/AdminContext";

const AdminNavbar = () => {
	const { adminToken } = useContext(AdminContext);
	return (
		<div className="flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white">
			<div className="flex items-center gap-4 ">
				<img className="w-36 cursor-pointer sm:w-40" src={assets.admin_logo} alt="" />
				<p className="border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-500">{adminToken ? "Admin" : "Doctor"}</p>
			</div>
			<button className="bg-blue-500 text-white text-sm px-10 py-2 rounded-full">Logout</button>
		</div>
	);
};

export default AdminNavbar;
