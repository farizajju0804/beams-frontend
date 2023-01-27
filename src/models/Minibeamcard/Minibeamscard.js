import React, { useEffect } from "react";
import "./Minibeamscard.css";
import { MdZoomOutMap } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { SlNote } from "react-icons/sl";
import {
	AiOutlineShareAlt,
	AiFillHeart,
	AiOutlineCloseCircle
} from "react-icons/ai";
import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { Toaster } from "react-hot-toast";

export const Minibeamscard = ({ open, title, content, id, openNotes }) => {
	const [dropdown, setDropdown] = useState(false);
	const { addfav } = useAuthContext();
	const type = "Minibeam";

	return (
		<div
			className="minibeamscardcont"
			onClick={() => {
				setDropdown(false);
			}}
		>
			<Toaster></Toaster>
			<div className="minibeamsinner">
				<h3>{title}</h3>
				<p>{content}</p>
				<button
					onClick={() => {
						open(title, content);
					}}
				>
					View Now
				</button>
			</div>
			<div className="minicontrols">
				<MdZoomOutMap
					size={22}
					style={{ marginRight: "10px", cursor: "pointer" }}
					onClick={() => {
						open(title, content);
					}}
				/>
				<BiDotsVerticalRounded
					size={24}
					style={{ cursor: "pointer", zIndex: 50 }}
					className="threedotbtn"
					onClick={(e) => {
						e.stopPropagation();
						setDropdown(!dropdown);
					}}
				/>
			</div>
			<div className={dropdown ? "opdp opdpdisplay" : "opdp"}>
				<AiOutlineCloseCircle
					color="black"
					className="closeminicard"
					size={20}
					onClick={() => {
						setDropdown(false);
					}}
				/>
				<div
					className="opdpitems"
					onClick={() => {
						openNotes({ title, id, type });
					}}
				>
					<SlNote
						size={20}
						style={{ marginRight: "10px", cursor: "pointer" }}
						color={"blue"}
					/>
					<span>Notes</span>
				</div>
				<div className="opdpitems">
					<AiOutlineShareAlt
						size={20}
						style={{ marginRight: "10px", cursor: "pointer" }}
					/>
					<span>Share</span>
				</div>
				<div
					className="opdpitems"
					onClick={() => {
						addfav({
							Name: title,
							Desc: content,
							idofbeam: `${id}`,
							typeofbeam: "minibeam"
						});
					}}
				>
					<AiFillHeart
						size={20}
						style={{ marginRight: "10px", cursor: "pointer" }}
						color={"red"}
					/>
					<span>Add to Favourites</span>
				</div>
			</div>
		</div>
	);
};
