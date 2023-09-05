import React from "react";
import { Toaster, toast } from "react-hot-toast";
import Emailconfirmimg from "../../assets/emailconfirmimg.png";
import { API } from "../../constants";
import { useParams } from "react-router-dom";

import "./Emailverification.css";

export const Emailverification = () => {
	const { email } = useParams();

	const resendVerification = async () => {
		try {
			const response = await fetch(`${API}/auth/send-email-confirmation`, {
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
			} else if (data.sent === true) {
				toast.success("Mail has been Re-sent");
			}
		} catch (error) {
			toast.error(error?.message ?? "Something went wrong!");
		}
	};

	return (
		<div className="loginpage">
			<div>
				<Toaster
				/>
			</div>
			<div className="logincont">
				<div className="emailverificationdiv">
					<h2>Verification email sent successfully!</h2>
					<img src={Emailconfirmimg} alt="" />
					<span>Check your Inbox and click on the verification link.</span>
					<div className="didntrecdiv">
						<p>Didn’t receive the Email? </p>
						<p>
							Check your Spam Folder or click on{" "}
							<span
								style={{ color: "blue", cursor: "pointer" }}
								onClick={() => {
									resendVerification();
								}}
							>
								Resend Email.
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
