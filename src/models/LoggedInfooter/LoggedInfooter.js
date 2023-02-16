import React from "react";
import {
	AiFillFacebook,
	AiFillInstagram,
	AiFillLinkedin,
	AiFillTwitterSquare
} from "react-icons/ai";
import loggedinfooterlogo from "../../assets/loggedinfooterlogo.png";
import "./LogggedInFooter.css";

export const LoggedInfooter = () => {
	return (
		<div className="loggedinnanv">
			<img src={loggedinfooterlogo} alt="" />
			<p>
				{" "}
				<span>Terms Of Service</span> | <span>Privacy Policy</span> |{" "}
				<span> © 2023 InnBrieff All rights reserved.</span>{" "}
			</p>
			<div className="loggedinsocial">
				<AiFillFacebook />
				<AiFillInstagram />
				<AiFillLinkedin />
				<AiFillTwitterSquare />
			</div>
		</div>
	);
};
