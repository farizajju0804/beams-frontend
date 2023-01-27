import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./NotesCard.css";
import { MdDeleteForever } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { useAuthContext } from "../../context/AuthContext";

export const NotesCard = ({ date, NoteContent, noteitemid, beamid }) => {
	const [openpopup, setOpenpopup] = useState(false);
	const { delinnernote } = useAuthContext();

	return (
		<div className="favouritesnewcardpage">
			<input type="checkbox" />
			<div
				className="favnewinnercont"
				onClick={() => {
					setOpenpopup(false);
				}}
			>
				<p>{NoteContent}</p>
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
							<div className="notescardoptionsinner">
								<AiFillEdit color="#435CFF" size={20} />
								<span>Edit</span>
							</div>
							<div
								className="notescardoptionsinner"
								onClick={() => {
									delinnernote(`${beamid}`, noteitemid);
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
