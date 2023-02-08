import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./NotesCard.css";
import { MdDeleteForever } from "react-icons/md";
import { AiOutlineShareAlt } from "react-icons/ai";
import { useAuthContext } from "../../context/AuthContext";

export const NotesCard = ({
	date,
	NoteContent,
	noteitemid,
	beamid,
	readmore,
	BeamName
}) => {
	const [openpopup, setOpenpopup] = useState(false);
	const { delfullnote } = useAuthContext();

	return (
		<div className="favouritesnewcardpage">
			<div
				className="favnewinnercont"
				onClick={() => {
					setOpenpopup(false);
				}}
			>
				<h3 style={{ marginBottom: "20px" }}>{BeamName.toUpperCase()}</h3>
				{NoteContent.length <= 95 ? (
					<p>{NoteContent}</p>
				) : (
					<p>
						{NoteContent.slice(0, 95)}
						<strong
							style={{ cursor: "pointer" }}
							onClick={() => {
								readmore({ date, NoteContent, BeamName });
							}}
						>
							Read More
						</strong>
					</p>
				)}

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
								<AiOutlineShareAlt color="#435CFF" size={20} />
								<span>Share</span>
							</div>
							<div
								className="notescardoptionsinner"
								onClick={() => {
									delfullnote(noteitemid);
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
