import React from "react";
import { Backdrop } from "../Backdrop/Backdrop";
import { AiFillCloseCircle } from "react-icons/ai";
import "./PopUpShowMore.css";

export const PopUpShowMore = ({ handleClose, data }) => {
	return (
		<Backdrop handleClose={handleClose}>
			<div
				className="PopUpShowMore"
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<div className="titlereadmorepopnotes">
					<span className="readmorenotestitle">{data.BeamName}</span>
					<span className="datesss">{data.date}</span>
				</div>
				<p>{data.NoteContent}</p>
				<div className="closer" onClick={handleClose}>
					<AiFillCloseCircle size={22} />
				</div>
			</div>
		</Backdrop>
	);
};
