import React from "react";
import "./Login.css";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEyeVisible } from "react-icons/ai";

export const Login = () => {
	return (
		<div className="loginpage">
			<div className="logincont">
				<h2>Login</h2>
				<div className="loginitem">
					<label htmlFor="email">Enter Your Email Address</label>
					<input type="text" id="email" placeholder="Email Address" />
				</div>
				<div className="loginitem">
					<label htmlFor="email">Enter Your Secure Password</label>
					<input type="text" id="email" placeholder="Password"></input>
					<AiFillEyeInvisible className="eyeicons" />
				</div>
				<div className="loginoptions">
					<div className="loginremember">
						<input type="checkbox" id="logincheck" />
						<label htmlFor="logincheck">Remember Me</label>
					</div>
					<span>Forgot Password ?</span>
				</div>
				<button className="loginsignbtn">Sign In</button>
				<p>No account? Sign Up</p>
				<div></div>
			</div>
		</div>
	);
};
