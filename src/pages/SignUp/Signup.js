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
import { API } from "../../constants";
import { useAuthContext } from "../../context/AuthContext";
import ClipLoader from "react-spinners/ClipLoader";

export const Signup = () => {
	const [ispassvis, setIspassvis] = useState(false);
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [nameborder, setNameborder] = useState(false);
	const [emailborder, setEmailborder] = useState(false);
	const [passwordborder, setPasswordborder] = useState(false);
	const [passlen, setpasslen] = useState(false);
	const [passnum, setPassnum] = useState(false);
	const [passupper, setPassupper] = useState(false);
	const [passlower, setPasslower] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();

	const { setUser } = useAuthContext();

	const signUpcall = async () => {
		setIsLoading(true);
		try {
			const response = await fetch(`${API}/auth/local/register`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					name: name,
					username: email,
					email: email,
					password: password
				})
			});

			const data = await response.json();
			if (data?.error) {
				throw data?.error;
			} else {
				setUser(data.user);
				navigate(`/emailverification/${data.user.email}`, { replace: true });
			}
		} catch (error) {
			toast.error(error?.message ?? "Something went wrong!");
		} finally {
			setIsLoading(false);
		}
	};

	const Signup = () => {
		if (!name) {
			// setErrors("Required");
			setNameborder(true);
			toast.error("Name Required");

			return;
		} else if (name) {
			// setErrors("Required");
			setNameborder(false);
		} else if (!email) {
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

		if (passwordborder) {
			toast.error("Check Password");
			return;
		}

		signUpcall();
	};

	const checkpass = (e) => {
		setPassword(e.target.value);
		var error = false;
		var pass = e.target.value.toString();
		if (pass === "") {
			setpasslen(false);
			setPassnum(false);
			setPasslower(false);
			setPassupper(false);
			error = true;
			return;
		}
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

		if (pass === pass.toUpperCase()) {
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

		if (!error) {
			setPasswordborder(false);
		} else {
			setPasswordborder(true);
		}
	};

	return (
		<div className="loginpage">
			<div>
				<Toaster
					containerStyle={{
						position: "absolute",
						top: "90px"
					}}
				/>
			</div>
			<div className="logincont">
				<h2>Sign Up</h2>
				<div className="loginitem">
					{/* <label htmlFor="email">Enter Your Email Address</label> */}
					<input
						className={nameborder ? "inputborderred logininput" : "logininput"}
						type="text"
						id="name"
						placeholder="Enter Your Name"
						onChange={(e) => {
							setName(e.target.value);
						}}
						value={name}
					/>
				</div>
				<div className="loginitem">
					{/* <label htmlFor="email">Enter Your Email Address</label> */}
					<input
						className={emailborder ? "inputborderred logininput" : "logininput"}
						type="text"
						id="email"
						placeholder="Enter Your Email Address"
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						value={email}
					/>
				</div>
				<div className="loginitem">
					{/* <label htmlFor="password">Enter Your Secure Password</label> */}
					<input
						className={
							passwordborder
								? "inputborderred logininput passwordsignupinput"
								: "logininput passwordsignupinput"
						}
						// className="logininput"
						value={password}
						type={ispassvis ? "text" : "password"}
						id="password"
						placeholder="Enter a Secure Password"
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
							color={"#435CFF"}
						/>
					)}
					{passwordborder && (
						<div
							className="passerr"
							style={{ display: "flex", alignItems: "center" }}
						>
							<HiOutlineInformationCircle color="red" size={20} />
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
							You agree to our{" "}
							<a
								href=""
								onClick={() => {
									navigate("/termsandcondition");
								}}
							>
								Terms of Service
							</a>{" "}
							and{" "}
							<a
								href=""
								onClick={() => {
									navigate("/privacypolicy");
								}}
							>
								Privacy Policy
							</a>
						</label>
					</div>
				</div>
				<button
					className="loginsignbtn"
					onClick={() => {
						Signup();
					}}
				>
					{isLoading ? (
						<ClipLoader color="white" size={23}></ClipLoader>
					) : (
						"Sign Up"
					)}
				</button>
				<p className="noaccout">
					Have an account?{" "}
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
					<a href={`${API}/connect/google`}>
						<img src={googlelogo} alt="" />
					</a>

					<img src={facebooklogo} alt="" />
					<img src={applelogo} alt="" />
				</div>
			</div>
			<img src={loginimg} alt="" className="loginimgpos" />
		</div>
	);
};
