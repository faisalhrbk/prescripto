import React, { useState } from "react";
import { assets } from "../assets/assets.js";

const Login = () => {
	const [state, setState] = useState("Admin");

	return (
		<div>
			<form action="">
				<div>
					<p>
						<span>{state} Login</span>
					</p>
				</div>
			</form>
		</div>
	);
};

export default Login;
