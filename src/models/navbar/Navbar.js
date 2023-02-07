import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineXMark } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
	const [sidenav, setSidenav] = useState(false);

	const navigate = useNavigate();

	return (
		<nav className="navbar">
			<img
				src={logo}
				alt=""
				onClick={() => {
					navigate("/");
				}}
				style={{ cursor: "pointer" }}
			/>
			<div
				className="opmock"
				onClick={() => {
					setSidenav(!sidenav);
				}}
			>
				<GiHamburgerMenu color="white" size={20} />
			</div>
			<div className={sidenav ? "sidenav" : "sidenav disnone"}>
				<div
					className="opmocksidenav"
					onClick={() => {
						setSidenav(!sidenav);
					}}
				>
					<HiOutlineXMark color="white" size={20} />
				</div>
				<div className="sidenavlinks">
					<span
						onClick={() => {
							navigate("/products");
						}}
					>
						Product
					</span>

					<span
						onClick={() => {
							navigate("/aboutus");
						}}
					>
						About Us
					</span>
					<span
						onClick={() => {
							navigate("/contact");
						}}
					>
						Contact Us
					</span>
					<span
						className="spanpadding"
						onClick={() => {
							setSidenav(false);
							navigate("/login");
						}}
					>
						Login
					</span>
					<span
						onClick={() => {
							setSidenav(false);
							navigate("/signup");
						}}
						className="spanborder"
					>
						Sign Up
					</span>
				</div>
			</div>
		</nav>
	);
};
