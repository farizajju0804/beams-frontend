import React from "react";
import "./LoggedinNav.css";
import { AiOutlineSearch } from "react-icons/ai";

export const LoggedinNav = () => {
	return (
		<div className="loggedinnav">
			<h1 style={{ color: "#435CFF" }}>Innbrieff.</h1>
			<div className="searchbar">
				<input type="text" placeholder="Search" />
				<AiOutlineSearch className="searchicon" size={20}></AiOutlineSearch>
			</div>
			<span>Beams</span>
			<span>Library</span>
			<div className="navaccoutholder">
				<img
					src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000"
					alt=""
				/>
				<span>Jeremy</span>
			</div>
		</div>
	);
};
