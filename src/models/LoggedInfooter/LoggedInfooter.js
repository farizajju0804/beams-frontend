import React from "react";
import {
	AiFillFacebook,
	AiFillInstagram,
	AiFillLinkedin,
	AiFillTwitterSquare
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import loggedinfooterlogo from "../../assets/loggedinfooterlogo.png";
import "./LogggedInFooter.css";

export const LoggedInfooter = () => {
	const navigate = useNavigate();

	return (
		<div className="loggedinnanv">
			<img src={loggedinfooterlogo} alt="" />
			<p>
				{" "}
				<span
					style={{ cursor: "pointer" }}
					onClick={() => {
						navigate("/termsandcondition");
					}}
				>
					Terms Of Service
				</span>{" "}
				|{" "}
				<span
					style={{ cursor: "pointer" }}
					onClick={() => {
						navigate("/privacypolicy");
					}}
				>
					Privacy Policy
				</span>{" "}
				| <span> © 2023 InnBrieff All rights reserved.</span>{" "}
			</p>
			<div className="loggedinsocial">
				<AiFillFacebook className="loggedinfooticons" />
				<a href="https://www.instagram.com/innbrieff">
					<AiFillInstagram className="loggedinfooticons" color="black" />
				</a>

				<AiFillLinkedin className="loggedinfooticons" />
				<AiFillTwitterSquare className="loggedinfooticons" />
			</div>
		</div>
	);
};
