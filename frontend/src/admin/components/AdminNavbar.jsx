import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AdminContext } from "../context/AdminContext";

const AdminNavbar = () => {
	const { adminToken } = useContext(AdminContext);
	return (
		<div>
			<div>
				<img src={assets.admin_logo} alt="" />
				<p>{adminToken ? "Admin" : "Doctor"}</p>
			</div>
		</div>
	);
};

export default AdminNavbar;
