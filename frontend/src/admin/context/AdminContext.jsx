import { createContext, useState } from "react";
export const AdminContext = createContext();

const AdminContextProvider = (props) => {
	const backendUrl = import.meta.env.VITE_BACKEND_URL;
	const [adminToken, setAdminToken] = useState(
		localStorage.getItem("adminToken") || ""
	);
	const value = {
		adminToken,
		setAdminToken,
		backendUrl,
	};
	return (
		<AdminContext.Provider value={value}>
			{props.children}
		</AdminContext.Provider>
	);
};

export default AdminContextProvider;
