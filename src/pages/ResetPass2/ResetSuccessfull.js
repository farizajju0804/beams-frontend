import React from "react";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const ResetSuccessfull = () => {
	const navigate = useNavigate();

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
				<div className="emailverificationdiv">
					<h2>Password reset successful!</h2>
					<img
						src={
							"https://media.tenor.com/0AVbKGY_MxMAAAAM/check-mark-verified.gif"
						}
						alt=""
						style={{
							width: "150px",
							marginBottom: "20px",
							marginTop: "20px"
						}}
					/>
					<div className="verificationbox">
						<p>You're back in the game 🎯</p>
						<p>Time to explore new frontiers with your new password. 😎</p>
					</div>
					<button
						className="loginsignbtn"
						onClick={() => {
							navigate("/login");
						}}
					>
						Go To Log In
					</button>
				</div>
			</div>
		</div>
	);
};
