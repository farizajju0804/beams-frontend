import React, { useState } from "react";
import "./Maxbeamscard.css";
import maxbeammock from "../../assets/maxbeammock.png";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { BiDotsVerticalRounded } from "react-icons/bi";
import {
	AiOutlineShareAlt,
	AiFillHeart,
	AiOutlineCloseCircle
} from "react-icons/ai";
import { SlNote } from "react-icons/sl";

export const Maxbeamscard = ({ id, Title, Desc, openNotes, openshare }) => {
	const navigate = useNavigate();
	const [dropdown, setDropdown] = useState(false);
	const { addfav } = useAuthContext();
	const type = "Minibeam";

	return (
		<div className="maxbeamcardcontnew">
			<div className="maxcardimgnew">
				<img src={maxbeammock} alt="" />
			</div>
			<div className="maxbeamdata">
				<h3>{Title}</h3>
				<p>{Desc}</p>
				<button
					onClick={() => {
						navigate("/maxbeampage/" + id);
					}}
				>
					Learn More
				</button>
			</div>
			<div className="minicontrols">
				<BiDotsVerticalRounded
					color="black"
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
						openNotes({ title: Title, id, type });
					}}
				>
					<SlNote
						size={20}
						style={{ marginRight: "10px", cursor: "pointer" }}
						color={"blue"}
					/>
					<span>Notes</span>
				</div>
				<div
					className="opdpitems"
					onClick={() => {
						openshare();
					}}
				>
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
							Name: Title,
							Desc: Desc,
							idofbeam: `${id}`,
							typeofbeam: "Minibeam"
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
