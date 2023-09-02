import React, { useState,useContext } from "react";
import { toast } from "react-hot-toast";
import { useAuthContext } from "../../context/AuthContext";
import { Backdrop } from "../Backdrop/Backdrop";
import "./Popupnotes.css";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export const Popupnotes = ({ handleClose, data }) => {
	const [notedata, setNotedata] = useState("");
	const { addnotes } = useContext(AuthContext);
	const navigate=useNavigate()
	useEffect(()=>{
		console.log(data)
	})
	const getDate = () => {
		var today = new Date();
		var dd = String(today.getDate()).padStart(2, "0");
		var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
		var yyyy = today.getFullYear();
		today = dd + "/" + mm + "/" + yyyy;
		return today;
	};

	return (
		<Backdrop handleClose={handleClose}>
			<div
				className="popupnotes"
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<div className="Notepopheader">
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
					<span style={{ color: "#f96f2e" }} onClick={()=>navigate("/notes")}>View Notes</span>
					<div className="popupcannsave">
						<span
							onClick={handleClose}
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

								addnotes(data.title, `${data.id}`, {
									content: notedata,
									date: getDate()
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
