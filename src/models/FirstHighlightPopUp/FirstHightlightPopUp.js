import React from "react";
import { BackdropWelcome } from "../Backdrop/BackdropWelcome";
import highlightimg from "../../assets/firsthiglight.png";
import { AiFillCloseCircle } from "react-icons/ai";

import { useAuthContext } from "../../context/AuthContext";

export const FirstHighlightPopUp = ({ handleClose }) => {
	const { updateHighlightfirst } = useAuthContext();

	return (
		<BackdropWelcome handleClose={handleClose}>
			<div className="welcomepopup">
				<div
					className="sharemodelcloser"
					onClick={() => {
						handleClose();
						updateHighlightfirst();
						window.location.reload(false);
					}}
				>
					<AiFillCloseCircle />
				</div>
				<img src={highlightimg} alt="" />
				<h3>You just made your first mark on the future!</h3>
				<p>
					Keep highlighting the important ideas, you never know what will spark
					the next big innovation
				</p>
				<button
					className="welcomebtn"
					onClick={() => {
						handleClose();
						updateHighlightfirst();
						window.location.reload(false);
					}}
				>
					Continue
				</button>
			</div>
		</BackdropWelcome>
	);
};
