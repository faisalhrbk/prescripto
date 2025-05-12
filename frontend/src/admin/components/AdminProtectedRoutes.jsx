import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AdminContext } from "../context/AdminContext";

const AdminProtectedRoutes = () => {
	const { adminToken } = useContext(AdminContext);
	return adminToken && adminToken !== "" ? (
		<Outlet />
	) : (
		<Navigate to="/admin/login" />
	);

};

export default AdminProtectedRoutes;

// 😭
