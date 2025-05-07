import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
	return (
		<div>
			<div className="text-center text-2xl pt-10 text-gray-500">
				<p>
					CONTACT <span className="font-semibold text-gray-700">US</span>
				</p>
			</div>
			<div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
				<div>
					<img
						className="w-full md:max-w-[360px]"
						src={assets.contact_image}
						alt=""
					/>
				</div>
				<div className="flex flex-col justify-center gap-6 items-start">
					<p className="font-semibold tex-lg text-gray-600">OUR OFFICE</p>
					<p className="text-gray-500">
						20983 New jursey <br /> suite, 230, Los Angeles USA
					</p>
					<p className="text-gray-500">
						Tel: (23) 2380-232 <br /> Email: faisalhrbk@outlook.com
					</p>
					<p className="font-semibold text-lg text-gray-600">
						Carrers at PRESCRIPTO
					</p>
					<p className="text-gray-500">
						Learn more about our teams and job openings.
					</p>
					<button className="border border=black px-8 py-4 text-sm hover:bg-blue-600 hover:text-white transition-all duration-500 cursor-pointer">Explore Jobs</button>
				</div>
			</div>
		</div>
	);
};

export default Contact;
