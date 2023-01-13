import React, { useState } from "react";
import "./Login.css";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import applelogo from "../../assets/Apple.png";
import facebooklogo from "../../assets/facebook.png";
import googlelogo from "../../assets/Google.png";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import loginimg from "../../assets/loginimg.png";

export const Login = () => {
	const [ispassvis, setIspassvis] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	// const [errors, setErrors] = useState("");
	const [emailborder, setEmailborder] = useState(false);
	const [passwordborder, setPasswordborder] = useState(false);

	const navigate = useNavigate();

	const signIn = () => {
		if (!email) {
			// setErrors("Required");
			setEmailborder(true);
			toast.error("Email Required");

			return;
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
			// setErrors("Invalid email address");
			setEmailborder(true);
			toast.error("Invalid email address");
			return;
		}

		if (!password) {
			setPasswordborder(true);
			toast.error("Check Password");
			return;
		}
	};

	return (
		<div className="loginpage">
			<div>
				<Toaster />
			</div>
			<div className="logincont">
				<h2>Login</h2>
				<div className="loginitem">
					<label htmlFor="email">Enter Your Email Address</label>
					<input
						className={emailborder ? "inputborderred logininput" : "logininput"}
						type="text"
						id="email"
						placeholder="Email Address"
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						value={email}
					/>
				</div>
				<div className="loginitem">
					<label htmlFor="email">Enter Your Secure Password</label>
					<input
						className={
							passwordborder ? "inputborderred logininput" : "logininput"
						}
						// className="logininput"
						value={password}
						type={ispassvis ? "text" : "password"}
						id="email"
						placeholder="Password"
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					></input>
					{ispassvis ? (
						<AiFillEyeInvisible
							className="eyeicons"
							size={22}
							onClick={() => {
								setIspassvis(!ispassvis);
							}}
						/>
					) : (
						<AiFillEye
							className="eyeicons"
							size={22}
							onClick={() => {
								setIspassvis(!ispassvis);
							}}
						/>
					)}
				</div>
				<div className="loginoptions">
					<div className="loginremember">
						<input type="checkbox" id="logincheck" defaultChecked />
						<label htmlFor="logincheck">Remember Me</label>
					</div>
					<span
						onClick={() => {
							navigate("/resetpassword");
						}}
					>
						Forgot Password ?
					</span>
				</div>
				<button
					className="loginsignbtn"
					onClick={() => {
						signIn();
					}}
				>
					Sign In
				</button>
				<p className="noaccout">
					No account?{" "}
					<strong
						style={{ cursor: "pointer" }}
						onClick={() => {
							navigate("/signup");
						}}
					>
						Sign Up
					</strong>{" "}
				</p>
				<div className="oauths">
					<img src={googlelogo} alt="" />
					<img src={facebooklogo} alt="" />
					<img src={applelogo} alt="" />
				</div>
			</div>
			<img src={loginimg} alt="" className="loginimgpos" />
		</div>
	);
};
