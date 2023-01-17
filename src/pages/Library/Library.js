import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { AiFillHeart } from "react-icons/ai";
import { MdEditNote } from "react-icons/md";
import { BsPenFill } from "react-icons/bs";
import { Hightlightitem } from "../../models/Hightlistitem/Hightlightitem";
import "./Library.css";

export const Library = () => {
	return (
		<div className="LibraryPage">
			<div className="libraryoption">
				<div className="libraryopitem">
					<IoIosCheckmarkCircle className="lbopic" size={20} />
					<span>Completed</span>
				</div>
				<div className="libraryopitem">
					<AiFillHeart className="lbopic" size={20} />
					<span>Favourites</span>
				</div>
				<div className="libraryopitem">
					<MdEditNote className="lbopic" size={20} />
					<span>Notes </span>
				</div>
				<div className="libraryopitem">
					<BsPenFill className="lbopic" color="#435CFF" size={20} />
					<span style={{ color: "#435CFF" }}>Highlights</span>
				</div>
				<div className="libraryopitem">
					<span style={{ color: "black" }}>Sort By</span>
					<select name="" id="">
						<option value="">Title</option>
						<option value="">xyz</option>
						<option value="">abc</option>
					</select>
				</div>
			</div>
			<div className="filteroption">
				<select name="" id="">
					<option value="">Micro Beams</option>
					<option value="">xyz</option>
					<option value="">abc</option>
				</select>
				<select name="" id="">
					<option value="">View</option>
					<option value="">xyz</option>
					<option value="">abc</option>
				</select>
			</div>
			<Hightlightitem></Hightlightitem>
			<Hightlightitem></Hightlightitem>
		</div>
	);
};
