import React from "react";
import { Backdrop } from "../Backdrop/Backdrop";
import popupdoyouknow from "../../assets/Popupyouknow.png";
import noteicon from "../../assets/shareicon.png";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const Popup = ({ handleClose, text }) => {
	return (
		<Backdrop handleClose={handleClose}>
			<div
				className="popup"
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<div className="popupcloser">
					<AiOutlineCloseCircle
						size={25}
						style={{ cursor: "pointer" }}
						onClick={() => {
							handleClose();
						}}
					></AiOutlineCloseCircle>
				</div>
				<div className="popupdata">
					<h2>Massive Job Disruption</h2>
					<div className="popdatainner">
						<img src={popupdoyouknow} alt="" />
						<span>By 2030, Over 2 Billion Jobs Will Disappear</span>
						<div>
							<img src={noteicon} alt="" />
						</div>
					</div>
				</div>
			</div>
		</Backdrop>
	);
};
