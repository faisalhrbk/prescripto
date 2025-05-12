import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AdminContext } from "../context/AdminContext";

const ProtectedRoutes = () => {
	const { adminToken } = useContext(AdminContext);
	return adminToken ? <Outlet /> : <Navigate to="/admin/login" />;
};

export default ProtectedRoutes;

// 😭
