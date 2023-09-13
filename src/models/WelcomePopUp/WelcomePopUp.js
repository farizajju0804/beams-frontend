import React from "react";
import { BackdropWelcome } from "../Backdrop/BackdropWelcome";
import welcomeimg from "../../assets/welcomeimg.png";
import { AiFillCloseCircle } from "react-icons/ai";
import "./WelcomePopUp.css";
import { useAuthContext } from "../../context/AuthContext";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";
export const WelcomePopUp = ({ handleClose }) => {
	const { updateFirstUser } = useContext(AuthContext);

	return (
		<BackdropWelcome handleClose={handleClose}>
			<div className="welcomepopup">
				<div
					className="sharemodelcloser"
					onClick={() => {
						handleClose();
						updateFirstUser();
						
					}}
				>
					<AiFillCloseCircle />
				</div>
				<img src={welcomeimg} alt="" />
				<h3>Welcome To Innbrieff</h3>
				<p>
					Quickly and easily stay informed about the future with our bite-sized
					insights
				</p>
				<button
					className="welcomebtn"
					onClick={() => {
						handleClose();
						updateFirstUser();
					}}
				>
					Let's get started
				</button>
			</div>
		</BackdropWelcome>
	);
};