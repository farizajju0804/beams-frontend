import React, { useState } from "react";
import "../Login/Login.css";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import {
	HiOutlineInformationCircle,
	HiCheckCircle,
	HiXCircle
} from "react-icons/hi";
import applelogo from "../../assets/Apple.png";
import facebooklogo from "../../assets/facebook.png";
import googlelogo from "../../assets/Google.png";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import loginimg from "../../assets/loginimg.png";

export const Signup = () => {
	const [ispassvis, setIspassvis] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [emailborder, setEmailborder] = useState(false);
	const [passwordborder, setPasswordborder] = useState(false);
	const [passlen, setpasslen] = useState(false);
	const [passnum, setPassnum] = useState(false);
	const [passupper, setPassupper] = useState(false);
	const [passlower, setPasslower] = useState(false);

	const navigate = useNavigate();

	const Signup = () => {
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
	};

	const checkpass = (e) => {
		setPassword(e.target.value);
		var error = false;
		var pass = e.target.value.toString();
		if (pass.length < 8) {
			setpasslen(false);
			error = true;
		} else {
			setpasslen(true);
		}

		if (!/\d/.test(pass)) {
			setPassnum(false);
			error = true;
		} else {
			setPassnum(true);
		}

		if (pass === pass.toUpperCase) {
			setPasslower(false);
			error = true;
		} else {
			setPasslower(true);
		}

		if (pass === pass.toLowerCase()) {
			setPassupper(false);
			error = true;
		} else {
			setPassupper(true);
		}

		console.log(passlen, passlower, passnum, passupper);

		if (!error) {
			setPasswordborder(false);
		} else {
			setPasswordborder(true);
		}
	};

	return (
		<div className="loginpage">
			<div>
				<Toaster />
			</div>
			<div className="logincont">
				<h2>Sign Up</h2>
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
					<label htmlFor="password">Enter Your Secure Password</label>
					<input
						className={
							passwordborder ? "inputborderred logininput" : "logininput"
						}
						// className="logininput"
						value={password}
						type={ispassvis ? "text" : "password"}
						id="password"
						placeholder="Password"
						onChange={(e) => {
							checkpass(e);
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
					{passwordborder && (
						<div
							className="passerr"
							style={{ display: "flex", alignItems: "center" }}
						>
							<HiOutlineInformationCircle color="red" />
							<span>The password does not meet the requirements</span>
						</div>
					)}
					<div className="passcloud">
						<div className="passcloudinner">
							{passlen ? (
								<div className="passclouditem">
									<HiCheckCircle color="#435CFF" />
									<span style={{ marginLeft: "2px", color: "#425CFF" }}>
										8 Characters
									</span>
								</div>
							) : (
								<div className="passclouditem">
									<HiXCircle color="#FF2626" />
									<span style={{ marginLeft: "2px", color: "#FF2626" }}>
										8 Characters
									</span>
								</div>
							)}

							{passupper ? (
								<div className="passclouditem">
									<HiCheckCircle color="#435CFF" />
									<span style={{ marginLeft: "2px", color: "#425CFF" }}>
										1 Uppercase
									</span>
								</div>
							) : (
								<div className="passclouditem">
									<HiXCircle color="#FF2626" />
									<span style={{ marginLeft: "2px", color: "#FF2626" }}>
										1 Uppercase
									</span>
								</div>
							)}
						</div>
						<div className="passcloudinner">
							{passnum ? (
								<div className="passclouditem">
									<HiCheckCircle color="#435CFF" />
									<span style={{ marginLeft: "2px", color: "#425CFF" }}>
										1 Number
									</span>
								</div>
							) : (
								<div className="passclouditem">
									<HiXCircle color="#FF2626" />
									<span style={{ marginLeft: "2px", color: "#FF2626" }}>
										1 Number
									</span>
								</div>
							)}
							{passlower ? (
								<div className="passclouditem">
									<HiCheckCircle color="#435CFF" />
									<span style={{ marginLeft: "2px", color: "#425CFF" }}>
										1 Lowercase
									</span>
								</div>
							) : (
								<div className="passclouditem">
									<HiXCircle color="#FF2626" />
									<span style={{ marginLeft: "2px", color: "#FF2626" }}>
										1 Lowercase
									</span>
								</div>
							)}
						</div>
					</div>
				</div>
				<div className="loginoptions">
					<div className="signupremember">
						<input type="checkbox" id="logincheck" defaultChecked />
						<label htmlFor="logincheck">
							By creating an account you agree to our Terms and Privacy Policy
						</label>
					</div>
				</div>
				<button
					className="loginsignbtn"
					onClick={() => {
						Signup();
					}}
				>
					Sign In
				</button>
				<p className="noaccout">
					No account?{" "}
					<strong
						style={{ cursor: "pointer" }}
						onClick={() => {
							navigate("/login");
						}}
					>
						Sign In
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
