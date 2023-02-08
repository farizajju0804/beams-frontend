import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuthContext } from "../../context/AuthContext";
import { Backdrop } from "../Backdrop/Backdrop";
import "./Popupnotes.css";

export const Popupnotes = ({ handleClose, data }) => {
	const [notedata, setNotedata] = useState("");
	const date = new Date();
	const { addnotes } = useAuthContext();

	const getDate = () => {
		var today = new Date();
		var dd = String(today.getDate()).padStart(2, "0");
		var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
		var yyyy = today.getFullYear();
		today = dd + "/" + mm + "/" + yyyy;
		return today;
	};

	function formatDate(date) {
		const monthNames = [
		  "Jan", "Feb", "Mar",
		  "Apr", "May", "Jun", "Jul",
		  "Aug", "Sep", "Oct",
		  "Nov", "Dec"
		];
		
		const day = String(date.getDate()).padStart(2, '0');
		const monthIndex = date.getMonth();
		const year = date.getFullYear();
	  
		return `${day}/${monthNames[monthIndex]}/${year}`;
	  }

	return (
		<Backdrop handleClose={handleClose}>
			<div
				className="popupnotes"
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<div className="Notepopheader">
					<span>{data.type}</span>
					<h2>{data.title}</h2>
					<p className="notespopupdate">{getDate()}</p>
				</div>
				<textarea
					class="notes"
					placeholder="Type Here.........."
					onChange={(e) => {
						setNotedata(e.target.value);
					}}
				></textarea>
				<i>Don't let your thoughts disappear, save your note now</i>
				<div className="notepopcntrl">
					<span style={{ color: "#435CFF" }}>View Notes</span>
					<div className="popupcannsave">
						<span
							onClick={() => {
								handleClose();
							}}
						>
							Cancel
						</span>
						<span
							className="notespopupsavebtn"
							onClick={() => {
								if (notedata.length === 0) {
									toast.error("Add text to note");
									return;
								}

								addnotes(data.title, `${data.id}`, data.type, {
									content: notedata,
									date: formatDate(date)
								});
								handleClose();
							}}
						>
							Save
						</span>
					</div>
				</div>
			</div>
		</Backdrop>
	);
};
