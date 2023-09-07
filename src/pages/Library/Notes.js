import React, { useState,useContext,useEffect } from "react";
import libfav from "../../assets/libfav.png";
import libnotes from "../../assets/libnotes.png";
import libhighlight from "../../assets/libhighlights.png";
import { NotesCard } from "../../models/NotesCard/NotesCard";
import { useNavigate } from "react-router-dom";
import "./Library.css";
import { useAuthContext } from "../../context/AuthContext";
import { Toaster } from "react-hot-toast";
import { PopUpShowMore } from "../../models/PopupShowMore/PopupShowMore";
import nohighlights from "../../assets/nohighlights.png";
import { FiChevronDown } from "react-icons/fi";
import Pagination from "@mui/material/Pagination";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { API } from "../../constants";
export const Notes = () => {
	const [noteData,setNoteData]=useState([])
	
	const closenotePopup = () => setNotesPopup(false);
	const opennotePopup = (data) => {
		setNotepopupdata(data);
		setNotesPopup(true);
	};

	const [notesPopup, setNotesPopup] = useState(false);
	const [sortop, setSortop] = useState(2);
	const [notepopupdata, setNotepopupdata] = useState({});

	const navigate = useNavigate();
	const { notes, changeNotes, notesPersist,user } = useContext(AuthContext);

	const [currentPage, setCurrentPage] = useState(1);
	const [postsperpage, setPostsperpage] = useState(6);
	const indexoflast = currentPage * postsperpage;
	const indexoffirst = indexoflast - postsperpage;
	useEffect(()=>{
		if(user){
		fetch(`${API}/users/${user.id}?populate=*`).then((res) => res.json())
        .then((data)=>{
				// setNoteData(data.Notes)
				changeNotes(data.Notes)
				console.log(data.Notes)
		  })
		}
	},[user])
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
					<span style={{ color: "#f96f2e" }}>Notes </span>
				</div>
				{/* <div
					className="libraryopitem"
					onClick={() => {
						navigate("/hightlights");
					}}
				>
					<img src={libhighlight} className="lbopic" />
					<span>Highlights</span>
				</div> */}
			</div>
			<div className="opandfildivider"></div>
			{/* <div className="filteroption">
				<div className="libraryopitem">
					{" "}
					<select
						
						name=""
						id=""
						style={{ paddingRight: "40px" }}
						onChange={(e) => {
							if (e.target.value == "All Beam") {
								console.log(notesPersist);
								changeNotes(notesPersist);
							} else {
								const sorter = notesPersist.filter((h) => {
									return h.Beamtype == e.target.value;
								});

								changeNotes(sorter);
							}
						}}
					>
						<option disabled defaultValue={""}>
							Title
						</option>
						<option value="All Beam">All Beams</option>
						<option value="Microbeam">Micro Beams</option>
						<option value="Minibeam">Mini Beams</option>
					</select>
					<FiChevronDown className="arrowselectposition" />
				</div>

				<div className="libraryopitem">
					<span style={{ color: "black" }}>Sort By</span>
					<select
						name=""
						id=""
						onChange={(e) => {
							
							setSortop(e.target.value);
						}}
						style={{ paddingRight: "40px" }}
					>
						<option defaultValue={2} value={2}>
							Latest
						</option>
						<option value={0}>A-Z</option>
						<option value={1}>Z-A</option>
					</select>
					<FiChevronDown className="arrowselectposition" />
				</div>
			</div> */}
			{notes.length ? (
				<div>
					<div className="gridwrapper">
						<div className="highlightdata fwrap">
							
					
						{/* {sortop == 1 && (
							<div className="highlightdata fwrap">
								{noteData
									.sort((a, b) => {
										const nameA = a.BeamName.toUpperCase(); // ignore upper and lowercase
										const nameB = b.BeamName.toUpperCase(); // ignore upper and lowercase
										if (nameA > nameB) {
											return -1;
										}
										if (nameA < nameB) {
											return 1;
										}

										return 0;
									})
									.map((item) => {
										console.log(item)
										return (
											<NotesCard
												date={item.Date}
												NoteContent={item.NoteContent}
												noteitemid={item.id}
												beamid={item.Beamid}
												BeamName={item.BeamName}
												readmore={opennotePopup}
											></NotesCard>
										);
									})
									.slice(indexoffirst, indexoflast)}
							</div>
						)} */}
						{/* {sortop == 0 && (
							<div className="highlightdata fwrap">
								{noteData
									.sort((a, b) => {
										const nameA = a.BeamName.toUpperCase(); // ignore upper and lowercase
										const nameB = b.BeamName.toUpperCase(); // ignore upper and lowercase
										if (nameA < nameB) {
											return -1;
										}
										if (nameA > nameB) {
											return 1;
										}

										return 0;
									})
									.map((item) => {
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
									})
									.slice(indexoffirst, indexoflast)}
							</div>
						)} */}
						{/* {sortop == 2 && (
							<div className="highlightdata fwrap">
								{noteData
									.map((item) => {
										return (
											<NotesCard
											    
												date={item.Date}
												NoteContent={item.NoteContent}
												noteitemid={item.id}
												beamid={item.Beamid}
												BeamName={item.BeamName}
												readmore={opennotePopup}
											></NotesCard>
										);
									})
									.slice(indexoffirst, indexoflast)}
							</div>
						)} */}
						{
							notes.map((item) => {
								return (
									<NotesCard
										date={item.Date}
										NoteContent={item.NoteContent}
										noteitemid={item.id}
										beamid={item.Beamid}
										BeamName={item.BeamName}
										readmore={opennotePopup}
									></NotesCard>
								);
							})
						}
							</div>
					</div>
				</div>
			) : (
				<div
					style={{
						width: "100%",
						justifyContent: "center",
						alignItems: "center",
						display: "flex",
						flexDirection: "column",
						marginTop: "50px"
					}}
					className="nodatadiv"
				>
					<img src={nohighlights} alt="" />
					<h2 style={{ marginTop: "30px", fontSize: "30px" }}>
					Your notes are on a coffee break! ☕️
					</h2>
					<p style={{ marginTop: "20px" }}>
					They'll be back, and when they return, they'll bring you a dose of inspiration! 🌟
					</p>
				</div>
			)}
			<div className="pagination">
				<Pagination
					shape="rounded"
					count={Math.ceil(notes.length / postsperpage)}
					onChange={(e, page) => {
						setCurrentPage(page);
					}}
				/>
			</div>
		</div>
	);
};
