import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineArrowRight } from "react-icons/ai";
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
					<AiOutlineArrowRight color="white" size={20} />
				</div>
				<div className="sidenavlinks">
					<span>Product</span>
					<span>Testimonials</span>
					<span>About Us</span>
					<span>Contact Us</span>
					<span
						className="spanpadding"
						onClick={() => {
							navigate("/login");
						}}
					>
						Login
					</span>
					<span>Sign Up</span>
				</div>
			</div>
		</nav>
	);
};
