import React, { useState,useContext } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./NotesCard.css";
import { MdDeleteForever } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { DeleteionAlert } from "../DeletionAlert/DeleteionAlert";
import { useNavigate } from "react-router-dom";
export const NotesCard = ({ date, NoteContent, noteitemid, beamid,BeamName,name }) => {
	const [openpopup, setOpenpopup] = useState(false);
	const { delfullnote } = useContext(AuthContext);
	const [deletionpopup, setDeletionpopup] = useState(false);
	const navigate=useNavigate()
	
	return (
		<div className="favouritesnewcardpage" >
			{deletionpopup && (
				<DeleteionAlert
					delfullnote={() => {
						delfullnote(noteitemid);
					}}
					handleClose={() => {  
						setDeletionpopup(false);
					}}
				/>
			)}
			{/* <input type="checkbox" /> */}
			<div
				className="favnewinnercont"
				onClick={() => {
					setOpenpopup(false);
				}}
			>

				<div className="note-content">
				<p className="beamname" onClick={()=>navigate(`/articleread/${beamid}`)}>{BeamName}</p>
				<p>{NoteContent}</p>
				</div>
				
				<div className="favnewinnercontdat">
					<span>{date}</span>

					<BsThreeDotsVertical
						className="notescard3dots"
						onClick={(event) => {
							if (event.target !== event.currentTarget) {
								return;
							}
							event.stopPropagation();
							setOpenpopup(!openpopup);
						}}
					/>
					{openpopup && (
						<div className="notescardoptions">
							{/* <div className="notescardoptionsinner">
								<AiFillEdit color="#435CFF" size={20} />
								<span>Edit</span>
							</div> */}
							<div
								className="notescardoptionsinner"
								onClick={() => {
									setDeletionpopup(true);
								}}
							>
								<MdDeleteForever color="red" size={20} />
								<span>Delete</span>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
