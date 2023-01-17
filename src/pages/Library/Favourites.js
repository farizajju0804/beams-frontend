import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { AiFillHeart } from "react-icons/ai";
import { MdEditNote } from "react-icons/md";
import { BsPenFill } from "react-icons/bs";
import { FavouritesCard } from "../../models/FavouritesCard/FavouritesCard";
import { useNavigate } from "react-router-dom";
import "./Library.css";

export const Favourites = () => {
	const navigate = useNavigate();

	return (
		<div className="LibraryPage">
			<div className="libraryoption">
				<div
					className="libraryopitem"
					onClick={() => {
						navigate("/completed");
					}}
				>
					<IoIosCheckmarkCircle className="lbopic" size={20} />
					<span>Completed</span>
				</div>
				<div
					className="libraryopitem"
					onClick={() => {
						navigate("/favourites");
					}}
				>
					<AiFillHeart className="lbopic" size={20} color="#435CFF" />
					<span style={{ color: "#435CFF" }}>Favourites</span>
				</div>
				<div
					className="libraryopitem"
					onClick={() => {
						navigate("/notes");
					}}
				>
					<MdEditNote className="lbopic" size={20} />
					<span>Notes </span>
				</div>
				<div
					className="libraryopitem"
					onClick={() => {
						navigate("/hightlights");
					}}
				>
					<BsPenFill className="lbopic" />
					<span>Highlights</span>
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
			</div>
			<div className="highlightdata">
				<FavouritesCard completed={false}></FavouritesCard>
				<FavouritesCard completed={false}></FavouritesCard>
				<FavouritesCard completed={false}></FavouritesCard>
				<FavouritesCard completed={false}></FavouritesCard>
				<FavouritesCard completed={false}></FavouritesCard>
				<FavouritesCard completed={false}></FavouritesCard>
			</div>
		</div>
	);
};
