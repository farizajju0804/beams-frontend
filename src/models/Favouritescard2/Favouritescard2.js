import React, { useState } from "react";
import maxbeammock from "../../assets/maxbeammock.png";
import { useNavigate } from "react-router-dom";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { SlNote } from "react-icons/sl";
import {
	AiOutlineCloseCircle,
	AiOutlineShareAlt,
	AiFillHeart
} from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useAuthContext } from "../../context/AuthContext";
import { Toaster } from "react-hot-toast";
import { MdZoomOutMap } from "react-icons/md";

function Favouritescard2({ completed, id, title, Desc, typeofbeam, idofbeam }) {
	const navigate = useNavigate();

	console.log(id);
	const [dropdown, setDropdown] = useState(false);
	const { delfav } = useAuthContext();
	const [displayPopUp, setDisplayPopUp] = useState(false);

	return (
		<div
			className="minibeamscardcontfav"
			onClick={() => {
				setDropdown(false);
				// setDisplayPopUp(false);
			}}
		>
			<Toaster></Toaster>
			<div className="minibeamsinnerfav" id={`minibeamscard${id}`}>
				<h3
					style={{ cursor: "pointer", marginBottom: "25px" }}
					onClick={() => {
						if (typeofbeam === "Minibeam") {
							navigate("/maxbeampage/" + idofbeam);
						} else {
							navigate("/beams#" + idofbeam + typeofbeam);
						}
					}}
				>
					{title}
				</h3>
				<p>{Desc}</p>
				<button
					onClick={() => {
						if (typeofbeam === "Minibeam") {
							navigate("/maxbeampage/" + idofbeam);
						} else {
							navigate("/beams#" + idofbeam + typeofbeam);
						}
					}}
				>
					Read Again
				</button>
			</div>
			<div className="minicontrols">
				{/* <MdZoomOutMap
					size={22}
					style={{ marginRight: "10px", cursor: "pointer" }}
					onClick={() => {
						open(title, Desc, id, typeofbeam);
					}}
				/> */}
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
			<div className={dropdown ? "opdp opdpdisplay favcarddrop" : "opdp"}>
				<AiOutlineCloseCircle
					color="red"
					className="closeminicard"
					size={20}
					onClick={() => {
						setDropdown(false);
					}}
				/>

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
						delfav({
							Name: title,
							Desc: Desc,
							idofbeam: `${idofbeam}`,
							typeofbeam: typeofbeam,
							id: id
						});
					}}
				>
					<RiDeleteBin5Fill
						size={25}
						style={{ marginRight: "10px", cursor: "pointer" }}
						color={"red"}
					/>
					<span>Remove from Favourites</span>
				</div>
			</div>
		</div>
	);
}

export default Favouritescard2;
