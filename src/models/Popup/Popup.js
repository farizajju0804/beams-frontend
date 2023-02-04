import React from "react";
import { Backdrop } from "../Backdrop/Backdrop";
import popupdoyouknow from "../../assets/Popupyouknow.png";
import noteicon from "../../assets/shareicon.png";
import shareicon from "../../assets/share1icon.png";
import hearticon from "../../assets/hearticon.png";
import { useAuthContext } from "../../context/AuthContext";

import { AiOutlineCloseCircle } from "react-icons/ai";

export const Popup = ({ handleClose, title, content, id, openNotes, type }) => {
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
						<img src={popupdoyouknow} alt="" />
						<span>{content}</span>
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
								style={{ marginBottom: "40px", cursor: "pointer" }}
								onClick={() => {
									handleClose();
									openNotes({ title, id, type });
								}}
							/>
							<img
								src={shareicon}
								alt=""
								height={50}
								width={50}
								style={{ marginBottom: "40px", cursor: "pointer" }}
								onClick={() => {
									addfav({
										Name: title,
										Desc: content,
										idofbeam: `${id}`,
										typeofbeam: "minibeam"
									});
								}}
							/>
							<img
								src={hearticon}
								alt=""
								height={50}
								width={50}
								style={{ marginBottom: "40px", cursor: "pointer", zIndex: 50 }}
							/>
						</div>
					</div>
				</div>
			</div>
		</Backdrop>
	);
};
