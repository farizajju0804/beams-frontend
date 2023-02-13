import React from "react";
import { BackdropWelcome } from "../Backdrop/BackdropWelcome";
import welcomeimg from "../../assets/welcomeimg.png";
import { AiFillCloseCircle } from "react-icons/ai";
import "./DeletionAlert.css";
import { useAuthContext } from "../../context/AuthContext";

export const DeleteionAlert = ({ handleClose }) => {
	const { updateFirstUser } = useAuthContext();

	return (
		<BackdropWelcome handleClose={handleClose}>
			<div className="DeletionAlert">
				<div
					className="sharemodelcloser"
					onClick={() => {
						handleClose();
					}}
				>
					<AiFillCloseCircle />
				</div>

				<h3>Deletion Alert!</h3>
				<p>
					Once you delete this note you won't be able to retrieve it. Are you
					sure you want to delete it?
				</p>
				<div className="delalbtnscont">
					<span className="delalbtns delalcancel">Cancel</span>
					<span className="delalbtns delaldel">Delete</span>
				</div>
			</div>
		</BackdropWelcome>
	);
};
