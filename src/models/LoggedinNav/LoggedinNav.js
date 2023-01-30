import React, { useState } from "react";
import "./LoggedinNav.css";
import { BsChevronDown } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { IoLibrarySharp } from "react-icons/io5";

export const LoggedinNav = () => {
	const [dropdown, setDropdown] = useState(false);
	const navigate = useNavigate();

	return (
		<div className="loggedinnav">
			<h1
				style={{ color: "#435CFF" }}
				onClick={() => {
					navigate("/beams");
				}}
			>
				Innbrieff.
			</h1>
			<div className="bandacont">
				<span>Beams</span>
				<div
					className="navaccoutholder"
					onClick={() => {
						setDropdown(!dropdown);
					}}
				>
					<img
						src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000"
						alt=""
					/>
					<span>Jeremy </span>
					<BsChevronDown />
					<div
						className={
							dropdown
								? "accountdropdown accountdropdowndisplay"
								: "accountdropdown"
						}
					>
						<div className="accountdropdownitems">
							<CgProfile size={20} />
							<span>My Profile</span>
						</div>
						<div
							className="accountdropdownitems"
							onClick={() => {
								navigate("/hightlights");
							}}
						>
							<IoLibrarySharp />
							<span>My Library</span>
						</div>
						<div
							className="accountdropdownitems"
							onClick={() => {
								navigate("/");
							}}
						>
							<FiLogOut />
							<span>Log Out</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
