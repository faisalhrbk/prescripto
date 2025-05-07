import React from "react";
import { assets } from "../assets/assets";

const About = () => {
	return (
		<div>
			<div className="text-center text-2xl pt-2 text-gray-500">
				<p>
					ABOUT <span className="text-gray-700 font-medium">US</span>
				</p>
			</div>
			<div className="my-10 flex flex-col md:flex-row gap-12">
				<img
					className="w-full md:max-w-[360px]"
					src={assets.about_image}
					alt=""
				/>

				<div className="my-10 flex flex-col justify-center  gap-6 md:w-2/4 text-sm text-gray-600">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Accusantium vel, mollitia neque voluptatibus iste at! Suscipit
						repellat voluptate sunt deleniti! Lorem ipsum dolor sit amet,
						consectetur adipisicing.
					</p>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae enim
						error iste nemo quos nesciunt accusantium id voluptatem, a, commodi
						itaque odit totam aperiam unde? Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Est, culpa Lorem ipsum dolor sit amet
						consectetur.
					</p>
					<b className="text-gray-800">Our Values</b>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi quis
						quibusdam tempora eius nostrum. Esse repellat quam aut?
					</p>
				</div>
			</div>
			<div>
				<p className="text-xl my-4">
					WHY <span className=" text-gray-700 font-semibold">CHOOSE US</span>
				</p>
			</div>
			<div className="flex flex-col md:flex-row mb-20">
				<div className="border px-10 md:px-16 sm:py15 flex flex-col gap-5 text-[15px] hover:bg-blue-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
					<b>Efficiency:</b>{" "}
					<p>
						Streamlined appointement scheduling that fits into your busy
						lifestyle
					</p>
				</div>
				<div className="border px-10 md:px-16 sm:py15 flex flex-col gap-5 text-[15px] hover:bg-blue-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
					<b>Convenience:</b>{" "}
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
				</div>
				<div className="border px-10 md:px-16 sm:py15 flex flex-col gap-5 text-[15px] hover:bg-blue-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
					<b>Personalization:</b>{" "}
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
				</div>
			</div>
		</div>
	);
};

export default About;
