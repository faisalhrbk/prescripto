import React, { useContext, useState } from "react";
import { AdminContext } from "../context/AdminContext";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const AdminLogin = () => {
	const [state, setState] = useState("Admin");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { setAdminToken } = useContext(AdminContext);

	const onSubmitHandler = async (event) => {
		event.preventDefault();
		try {
			if (state === "Admin") {
				const { data } = await axios.post(
					"http://localhost:3000/api/admin/login",
					{ email, password }
				);
				console.log("Response data:", data); // Debug success
				localStorage.setItem("adminToken", data.token);
				setAdminToken(data.token);
				toast.success(data.message || "Login Successful");
			} else {
				// Doctor login logic
			}
		} catch (err) {
			console.log("Error:", err.response?.data); // Debug error
			toast.error(err.response?.data?.message || "Login failed");
		}
	};

	return (
		<form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
			<div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 rounded-xl text-[#5E5E5E] text-sm shadow-2xl">
				<p className="text-2xl font-semibold m-auto">
					<span className="text-blue-500">{state} </span>Login
				</p>
				<div className="w-full">
					<p>Email</p>
					<input
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						className="border border-gray-400 rounded w-full p-2 mt-1 focus:outline-none focus:ring-1 focus:ring-blue-300"
						type="email"
						required
						name="email"
					/>
				</div>
				<div className="w-full">
					<p>Password</p>
					<input
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						className="border border-gray-400 rounded w-full p-2 mt-1 focus:outline-none focus:ring-1 focus:ring-blue-300"
						type="password"
						required
						name="password"
					/>
				</div>
				<button
					type="submit"
					className="cursor-pointer bg-blue-500 text-white w-full py-2 rounded-md text-base"
				>
					Login
				</button>
				{state === "Admin" ? (
					<p>
						Doctor Login?{" "}
						<span
							className="text-blue-500 underline cursor-pointer"
							onClick={() => setState("Doctor")}
						>
							Click here
						</span>
					</p>
				) : (
					<p>
						Admin Login?{" "}
						<span
							className="text-blue-500 underline cursor-pointer"
							onClick={() => setState("Admin")}
						>
							Click here
						</span>
					</p>
				)}
			</div>
		</form>
	);
};

export default AdminLogin;
