import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Navbar = () => {
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
				<div>
					<button>Create Account</button>
				</div>
			</div>
		);
};

export default Navbar;
