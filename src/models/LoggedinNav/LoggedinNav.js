import React, { useState } from "react";
import "./LoggedinNav.css";
import { BsChevronDown } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import acc1 from "../../assets/acc1.png";
import acc2 from "../../assets/acc2.png";
import acc3 from "../../assets/acc3.png";

export const LoggedinNav = () => {
	const { user } = useAuthContext();
	console.log(user);
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
				<span
					onClick={() => {
						navigate("/beams");
					}}
				>
					Beams
				</span>
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
					<span>
						{user ? (user.name === null ? user.username : user.name) : ""}
					</span>
					<BsChevronDown />
					<div
						className={
							dropdown
								? "accountdropdown accountdropdowndisplay"
								: "accountdropdown"
						}
					>
						<div
							className="accountdropdownitems"
							onClick={() => {
								navigate("/profile");
							}}
						>
							{/* <CgProfile size={20} /> */}
							<img src={acc1} alt="" />
							<span>My Profile</span>
						</div>
						<div
							className="accountdropdownitems"
							onClick={() => {
								navigate("/hightlights");
							}}
						>
							{/* <IoLibrarySharp /> */}
							<img src={acc2} alt="" />

							<span>My Library</span>
						</div>
						<div
							className="accountdropdownitems"
							onClick={() => {
								navigate("/");
							}}
						>
							{/* <FiLogOut /> */}
							<img src={acc3} alt="" />
							<span>Log Out</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
