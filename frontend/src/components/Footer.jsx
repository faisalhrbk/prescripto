import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
	return (
		<div>
			<div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
				{/* left  */}
				<div>
					<img className="mb-5 w-40" src={assets.logo} alt="" />
					<p className="w-full md:w:2/3 text-gray-600 leading-6">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit quo
						nulla, facilis, maiores dolorem iste quas pariatur asperiores
						expedita, cumque quisquam eligendi velit. Repudiandae, reiciendis
						expedita! Quas, nemo? Fuga corrupti atque qui nobis nisi similique
						ipsam officiis modi aliquam! Velit, unde qui? Quia necessitatibus
					</p>
				</div>
				{/* center */}
				<div>
					<p className="text-xl font-medium mb-5">Company</p>
					<ul className="flex  flex-col gap-2 text-gray-600">
						<li>Home</li>
						<li>About Us</li>
						<li>Contact Us</li>
						<li>Privacy Policy</li>
					</ul>
				</div>
				{/* right */}
				<div>
					<p className="text-xl font-medium mb-5">GET IN TOUCH</p>
					<ul className="flex  flex-col gap-2 text-gray-600">
						<li>+92-1234-5678</li>
						<li>faisalhrbk@gmail.com</li>
					</ul>
				</div>
			</div>
			{/* copyright text  */}
			<div>
				<hr />
				<p className="py-5 text-sm text-center">Copyright 2026 @PRESCRPIPTO - All Rights Reserved</p>
			</div>
		</div>
	);
};

export default Footer;
