import React from "react";
import newletterpopupimg from "../../assets/newsletterpopupimg.png";
import { BackdropWelcome } from "../Backdrop/BackdropWelcome";
import "./ContactPopUp.css";
import { AiFillCloseCircle } from "react-icons/ai";
import contactpopup from "../../assets/contactpopup.png";

export const ContactPopUp = ({ handleClose }) => {
	return (
		<BackdropWelcome handleClose={handleClose}>
			<div className="contactpopup">
				<div
					className="sharemodelcloser"
					onClick={() => {
						handleClose();
					}}
				>
					<AiFillCloseCircle />
				</div>
				<img src={contactpopup} alt="" />
				<h3>Your thoughts are on their way to us!</h3>
				<p>Sit tight and grab a hot cuppa, we'll get back to you soon.</p>
				<button
					className="continuecomebtn"
					onClick={() => {
						handleClose();
					}}
				>
					Continue
				</button>
			</div>
		</BackdropWelcome>
	);
};
