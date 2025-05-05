import React from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
	const navigate = useNavigate();
	return (
		<div className="flex items-center  justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
			<img className="w-44 cursor-pointer" src={assets.logo} alt="" />
			<ul className="hidden md:flex items-start gap-5 font-medium ">
				<NavLink to="/">
					<li className="py-1">HOME</li>
					<hr className="hidden border-none outline-none h-0.5 bg-blue-500m-auto" />
				</NavLink>
				<NavLink to="/doctors">
					<li className="py-1">All Doctors</li>
					<hr className="hidden border-none outline-none h-0.5 bg-blue-500 m-auto" />
				</NavLink>
				<NavLink to="/about">
					<li className="py-1">About</li>
					<hr className="hidden border-none outline-none h-0.5 bg-blue-500 m-auto" />
				</NavLink>
				<NavLink to="/contact">
					<li className="py-1">Contact</li>
					<hr className="hidden border-none outline-none h-0.5 bg-blue-500 m-auto" />
				</NavLink>
			</ul>
			<div className="flex items-center gap-4">
				<button
					onClick={() => navigate("/login")}
					className="bg-blue-500  text-white px-8 py-3 rounded-full font-light hidden md:block"
				>
					Create Account
				</button>
			</div>
		</div>
	);
};

export default Navbar;
