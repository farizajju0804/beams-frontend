import React, { useState } from "react";
import "./Resetpass.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import loginimg from "../../assets/loginimg.png";
import { API } from "../../constants";
import ClipLoader from "react-spinners/ClipLoader";
import {
	HiOutlineInformationCircle,
	HiCheckCircle,
	HiXCircle
} from "react-icons/hi";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

export const Resetpass2 = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const code = searchParams.get("code");
	const navigate = useNavigate();
	const [confirmpass, setConfirmpass] = useState("");
	const [emailborder, setEmailborder] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [password, setPassword] = useState("");
	const [passwordborder, setPasswordborder] = useState(false);
	const [passlen, setpasslen] = useState(false);
	const [passnum, setPassnum] = useState(false);
	const [passupper, setPassupper] = useState(false);
	const [passlower, setPasslower] = useState(false);
	const [ispassvis, setIspassvis] = useState(false);

	const sendresetlink = async () => {
		if (passwordborder) {
			toast.error("Check Password");
			return;
		}

		if (password != confirmpass) {
			toast.error("Passwords Does not Match");
			setEmailborder(true);
			return;
		}

		setIsLoading(true);
		try {
			const response = await fetch(`${API}/auth/reset-password`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					password: password,
					passwordConfirmation: confirmpass,
					code: code
				})
			});

			const data = await response.json();
			if (data?.error) {
				throw data?.error;
			} else {
				navigate("/resetsuccessful");
			}
		} catch (error) {
			toast.error(error?.message ?? "Something went wrong!");
		}
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
				<h2>Reset Password</h2>

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
				<div className="loginitem">
					{/* <label htmlFor="email">Enter Your Email Address</label> */}
					<input
						className={emailborder ? "inputborderred logininput" : "logininput"}
						type="password"
						placeholder="Confirm Password"
						onChange={(e) => {
							setConfirmpass(e.target.value);
						}}
						value={confirmpass}
					/>
				</div>
				<button
					className="loginsignbtn"
					onClick={() => {
						sendresetlink();
					}}
				>
					{isLoading ? (
						<ClipLoader color="white" size={23}></ClipLoader>
					) : (
						"Change Password"
					)}
				</button>
				<p className="noaccout">
					Go back to{" "}
					<strong
						style={{ cursor: "pointer" }}
						onClick={() => {
							navigate("/login");
						}}
					>
						Login
					</strong>{" "}
				</p>
			</div>
			<img src={loginimg} alt="" className="loginimgpos" />
		</div>
	);
};
