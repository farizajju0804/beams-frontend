import React from "react";
import { Backdrop } from "../Backdrop/Backdrop";
import popupdoyouknow from "../../assets/Popupyouknow.png";
import noteicon from "../../assets/shareicon.png";
import shareicon from "../../assets/share1icon.png";
import hearticon from "../../assets/hearticon.png";

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
				<div className="popupdata">
					<h2>Massive Job Disruption</h2>
					<div className="popdatainner">
						<img src={popupdoyouknow} alt="" />
						<span>By 2030, Over 2 Billion Jobs Will Disappear</span>
						<div
							style={{
								display: "flex",
								flexDirection: "column"
							}}
						>
							<img
								src={noteicon}
								alt=""
								height={50}
								width={50}
								style={{ marginBottom: "40px" }}
							/>
							<img
								src={shareicon}
								alt=""
								height={50}
								width={50}
								style={{ marginBottom: "40px" }}
							/>
							<img
								src={hearticon}
								alt=""
								height={50}
								width={50}
								style={{ marginBottom: "40px" }}
							/>
						</div>
					</div>
				</div>
			</div>
		</Backdrop>
	);
};
