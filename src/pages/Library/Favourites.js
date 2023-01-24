import React from "react";
import libcompleted from "../../assets/libcompleted.png";
import libfav from "../../assets/libfav.png";
import libnotes from "../../assets/libnotes.png";
import libhighlight from "../../assets/libhighlights.png";
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
					<img src={libcompleted} className="lbopic" />
					<span>Completed</span>
				</div>
				<div
					className="libraryopitem"
					onClick={() => {
						navigate("/favourites");
					}}
				>
					<img src={libfav} className="lbopic" />
					<span style={{ color: "#435CFF" }}>Favourites</span>
				</div>
				<div
					className="libraryopitem"
					onClick={() => {
						navigate("/notes");
					}}
				>
					<img src={libnotes} className="lbopic" />
					<span>Notes </span>
				</div>
				<div
					className="libraryopitem"
					onClick={() => {
						navigate("/hightlights");
					}}
				>
					<img src={libhighlight} className="lbopic" />
					<span>Highlights</span>
				</div>
			</div>
			<div className="opandfildivider"></div>
			<div className="filteroption">
				<select name="" id="">
					<option value="">Micro Beams</option>
					<option value="">Mini Beams</option>
					<option value="">Max Beams</option>
				</select>
				<select name="" id="">
					<option value="">Grid</option>
					<option value="">List</option>
				</select>
				<div className="libraryopitem">
					<span style={{ color: "black" }}>Sort By</span>
					<select name="" id="">
						<option value="">Title</option>
						<option value="">A-Z</option>
						<option value="">Latest</option>
					</select>
				</div>
			</div>
			<div className="highlightdata fwrap">
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
