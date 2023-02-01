import React, { useState } from "react";
import libfav from "../../assets/libfav.png";
import libnotes from "../../assets/libnotes.png";
import libhighlight from "../../assets/libhighlights.png";
import { NotesCard } from "../../models/NotesCard/NotesCard";
import { useNavigate } from "react-router-dom";
import "./Library.css";
import { useAuthContext } from "../../context/AuthContext";
import { Toaster } from "react-hot-toast";
import { PopUpShowMore } from "../../models/PopupShowMore/PopupShowMore";
import libcompleted from "../../assets/libcompleted.png";

export const Notes = () => {
	const closenotePopup = () => setNotesPopup(false);
	const opennotePopup = (data) => {
		setNotepopupdata(data);
		setNotesPopup(true);
	};

	const [notesPopup, setNotesPopup] = useState(false);
	const [notepopupdata, setNotepopupdata] = useState({});

	const navigate = useNavigate();
	const { notes } = useAuthContext();
	console.log(notes);

	return (
		<div className="LibraryPage">
			<Toaster />
			{notesPopup && (
				<PopUpShowMore
					data={notepopupdata}
					handleClose={closenotePopup}
				></PopUpShowMore>
			)}
			<div className="libraryoption">
				<div
					className="libraryopitem"
					onClick={() => {
						navigate("/completed");
					}}
				>
					<img src={libcompleted} className="lbopic" />
					<span>Completed</span>
				</div>
				<div
					className="libraryopitem"
					onClick={() => {
						navigate("/favourites");
					}}
				>
					<img src={libfav} className="lbopic" />
					<span>Favourites</span>
				</div>
				<div
					className="libraryopitem"
					onClick={() => {
						navigate("/notes");
					}}
				>
					<img src={libnotes} className="lbopic" />
					<span style={{ color: "#435CFF" }}>Notes </span>
				</div>
				<div
					className="libraryopitem"
					onClick={() => {
						navigate("/hightlights");
					}}
				>
					<img src={libhighlight} className="lbopic" />
					<span>Highlights</span>
				</div>
			</div>
			<div className="opandfildivider"></div>
			<div className="filteroption">
				<select name="" id="">
					<option value="">Micro Beams</option>
					<option value="">Mini Beams</option>
					<option value="">Max Beams</option>
				</select>
				<select name="" id="">
					<option value="">Grid</option>
					<option value="">List</option>
				</select>
				<div className="libraryopitem">
					<span style={{ color: "black" }}>Sort By</span>
					<select name="" id="">
						<option value="">Title</option>
						<option value="">A-Z</option>
						<option value="">Latest</option>
					</select>
				</div>
			</div>
			<div className="highlightdata fwrap">
				{notes.map((item) => {
					return (
						<NotesCard
							date={item.Date}
							NoteContent={item.NoteContent}
							noteitemid={item.id}
							beamid={item.beamid}
							BeamName={item.BeamName}
							readmore={opennotePopup}
						></NotesCard>
					);
				})}
			</div>
		</div>
	);
};
