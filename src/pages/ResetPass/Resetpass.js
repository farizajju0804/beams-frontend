import React, { useState } from "react";
import "./Resetpass.css";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import loginimg from "../../assets/loginimg.png";
import { API } from "../../constants";
import ClipLoader from "react-spinners/ClipLoader";

export const Resetpass = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [emailborder, setEmailborder] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const sendresetlink = async () => {
		setIsLoading(true);
		try {
			const response = await fetch(`${API}/auth/forgot-password`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					email: email
				})
			});

			const data = await response.json();
			if (data?.error) {
				throw data?.error;
			} else if (data.ok === true) {
				setIsLoading(false);
				toast.success("Mail has been Sent");
			}
		} catch (error) {
			toast.error(error?.message ?? "Something went wrong!");
		}
	};

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

		sendresetlink();
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
				<h2>Forgot Password</h2>
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
					{isLoading ? (
						<ClipLoader color="white" size={23}></ClipLoader>
					) : (
						"Send Reset Link"
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
