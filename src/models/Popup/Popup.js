import React from "react";
import { Backdrop } from "../Backdrop/Backdrop";
// import popupdoyouknow from "../../assets/Popupyouknow2.png";
import noteicon from "../../assets/shareicon.png";
import shareicon from "../../assets/share1icon.png";
import hearticon from "../../assets/hearticon.png";
import { useAuthContext } from "../../context/AuthContext";

import { AiOutlineCloseCircle } from "react-icons/ai";

export const Popup = ({
	handleClose,
	title,
	content,
	id,
	openNotes,
	type,
	openshare
}) => {
	const { addfav } = useAuthContext();

	return (
		<Backdrop handleClose={handleClose}>
			<div
				className="popup"
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<div className="popupdata">
					<h2>{title}</h2>
					<div className="popdatainner">
						{/* <img src={popupdoyouknow} alt="" /> */}
						<span>{content}</span>
						<div className="popupicons">
							<img
								src={noteicon}
								alt=""
								height={50}
								width={50}
								onClick={() => {
									handleClose();
									openNotes({ title, id, type });
								}}
							/>
							<img
								src={hearticon}
								alt=""
								height={50}
								width={50}
								onClick={() => {
									handleClose();
									openshare(id + type);
								}}
							/>
							<img
								src={shareicon}
								alt=""
								height={50}
								width={50}
								onClick={() => {
									addfav({
										Name: title,
										Desc: content,
										idofbeam: `${id}`,
										typeofbeam: "Microbeam"
									});
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</Backdrop>
	);
};
