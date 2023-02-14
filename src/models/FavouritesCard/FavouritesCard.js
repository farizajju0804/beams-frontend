import React, { useState } from "react";
import "./Maxbeamscard.css";
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

export const FavouritesCard = ({
	completed,
	id,
	title,
	Desc,
	typeofbeam,
	idofbeam
}) => {
	const navigate = useNavigate();

	console.log(id);

	// console.log(typeofbeam);

	const [dropdown, setDropdown] = useState(false);
	const { delfav } = useAuthContext();
	// console.log(id);

	return (
		<div
			className="maxbeamcardcont"
			onClick={() => {
				setDropdown(false);
			}}
		>
			<div className="maxcardimg">
				<img src={maxbeammock} alt="" />
			</div>
			<div className="maxbeamdata">
				<h3>{title}</h3>
				<div
					style={{
						width: "100%",
						height: "10px",
						display: "flex",
						alignItems: "center"
					}}
				>
					<p style={{ marginTop: "15px", marginBottom: "15px" }}>{Desc}</p>
				</div>
				<button
					onClick={() => {
						if (typeofbeam === "Minibeam") {
							navigate("/maxbeampage/" + idofbeam);
						} else {
							navigate("/minibeams");
						}
					}}
				>
					Read Again
				</button>
			</div>
			<BiDotsVerticalRounded
				className="favcard3dots"
				color="black"
				fontSize={22}
				onClick={(e) => {
					e.stopPropagation();
					setDropdown(!dropdown);
				}}
			></BiDotsVerticalRounded>
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
};
