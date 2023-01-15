import React, { useState } from "react";
import "./Resetpass.css";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import loginimg from "../../assets/loginimg.png";

export const Resetpass = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [emailborder, setEmailborder] = useState(false);

	const sendmail = () => {
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
					{/* <label htmlFor="email">Enter Your Email Address</label> */}
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
				<button
					className="loginsignbtn"
					onClick={() => {
						sendmail();
					}}
				>
					Get Reset Instruction
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
