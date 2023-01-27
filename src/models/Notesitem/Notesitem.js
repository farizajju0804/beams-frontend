import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { ImBin } from "react-icons/im";
import { NotesCard } from "../NotesCard/NotesCard";
import { useAuthContext } from "../../context/AuthContext";

export const Notesitem = ({ open, title, beamid, beamtype, noteitem }) => {
	const [closearrow, setClosearrow] = useState(!open ? false : true);
	const { delfullnote } = useAuthContext();
	const [forceupdate, setForceupdate] = useState(0);

	return (
		<div className="hightlightitem">
			<div className="hightlightitemheading">
				<span
					style={{ cursor: "pointer", color: "blue" }}
					onClick={() => {
						setClosearrow(!closearrow);
					}}
				>
					{title}
				</span>
				<div className="hightlightitemoptions">
					<input type="checkbox" className="highlightitemicon" />
					<ImBin
						className="highlightitemicon"
						color="red"
						onClick={() => {
							delfullnote(`${beamid}`);
						}}
					/>
					{closearrow ? (
						<IoIosArrowUp
							className="highlightitemicon"
							onClick={() => {
								setClosearrow(!closearrow);
							}}
						/>
					) : (
						<IoIosArrowDown
							className="highlightitemicon"
							onClick={() => {
								setClosearrow(!closearrow);
							}}
						/>
					)}
				</div>
			</div>
			{closearrow && (
				<div className="highlightdata fwrap">
					{noteitem.map((item) => {
						return (
							<NotesCard
								date={item.Date}
								NoteContent={item.NoteContent}
								noteitemid={item.id}
								beamid={beamid}
							></NotesCard>
						);
					})}
					{/* <NotesCard></NotesCard>
					<NotesCard></NotesCard>
					<NotesCard></NotesCard> */}
				</div>
			)}
		</div>
	);
};
