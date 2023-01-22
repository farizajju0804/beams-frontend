import React from "react";
import "./Minibeamscard.css";
import { MdZoomOutMap } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { SlNote } from "react-icons/sl";
import { AiOutlineShareAlt, AiFillHeart } from "react-icons/ai";
import { useState } from "react";

export const Minibeamscard = ({ open }) => {
	const [dropdown, setDropdown] = useState(false);

	return (
		<div className="minibeamscardcont">
			<div className="minibeamsinner">
				<h3>Massive Job Disruption</h3>
				<p>By 2030, Over 2 Billion Jobs Will Disappear.</p>
				<button onClick={open}>View Now</button>
			</div>
			<div className="minicontrols">
				<MdZoomOutMap
					size={22}
					style={{ marginRight: "10px", cursor: "pointer" }}
					onClick={open}
				/>
				<BiDotsVerticalRounded
					size={24}
					style={{ cursor: "pointer", zIndex: 50 }}
					className="threedotbtn"
					onClick={() => {
						setDropdown(!dropdown);
					}}
				/>
			</div>
			<div className={dropdown ? "opdp opdpdisplay" : "opdp"}>
				<div className="opdpitems">
					<SlNote
						size={20}
						style={{ marginRight: "10px", cursor: "pointer" }}
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
				<div className="opdpitems">
					<AiFillHeart
						size={20}
						style={{ marginRight: "10px", cursor: "pointer" }}
					/>
					<span>Add to Favourites</span>
				</div>
			</div>
		</div>
	);
};
