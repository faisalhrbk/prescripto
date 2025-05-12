import React, { useState } from "react";

const Login = () => {
	const [state, setState] = useState("Admin");

	return (
		<form className="min-h-[80vh] flex items-center">
			<div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96  rounded-xl text-[#5E5E5E] text-sm shadow-2xl ">
				<p className="text-2xl font-semibold m-auto">
					<span className="text-blue-500">{state} </span>Login
				</p>

				<div className="w-full">

					<p>Email</p>
					<input
						className="border border-gray-400  rounded w-full p-2 mt-1  focus:outline-none focus:ring-1  focus:ring-blue-300"
						type="email"
						required
						name="email"
					/>
				</div>
				<div className="w-full">
					<p>Password</p>
					<input
						className="border border-gray-400  rounded w-full p-2 mt-1  focus:outline-none focus:ring-1  focus:ring-blue-300"
						type="password"
						required
						name="password"
					/>
				</div>
				<button className="bg-blue-500 text-white w-full py-2 rounded-md text-base">
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

export default Login;
