import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./NotesCard.css";
import { MdDeleteForever } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";

export const NotesCard = () => {
	const [openpopup, setOpenpopup] = useState(false);

	return (
		<div className="favouritesnewcardpage">
			<input type="checkbox" />
			<div
				className="favnewinnercont"
				onClick={() => {
					setOpenpopup(false);
				}}
			>
				<p>
					This is how a Note on innBrieff looks like! Lorem, ipsum dolor sit
					amet consectetur adipisicing elit. Aspernatur quidem harum magni
					excepturi, quisquam, nisi ea, soluta distinctio placeat quis
					dignissimos maxime ratione possimus voluptatum facilis alias. Nobis,
					magnam atque.{" "}
				</p>
				<div className="favnewinnercontdat">
					<span>1 Aug, 2023</span>

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
								<MdDeleteForever color="red" size={20} />
								<span>Edit</span>
							</div>
							<div className="notescardoptionsinner">
								<AiFillEdit color="#435CFF" size={20} />
								<span>Delete</span>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
