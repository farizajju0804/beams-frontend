import React from "react";
import newletterpopupimg from "../../assets/newsletterpopupimg.png";
import { BackdropWelcome } from "../Backdrop/BackdropWelcome";
import "./NewsletterPopUp.css";
import { AiFillCloseCircle } from "react-icons/ai";

export const NewsletterPopUp = ({ handleClose }) => {
	return (
		<BackdropWelcome handleClose={handleClose}>
			<div className="newsletterpopupcont">
				<div
					className="sharemodelcloser"
					onClick={() => {
						handleClose();
					}}
				>
					<AiFillCloseCircle />
				</div>
				<img src={newletterpopupimg} alt="" />
				<h3>You're now on the cutting edge!</h3>
				<p>Get ready for a flood of futuristic ideas in your inbox!</p>
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
