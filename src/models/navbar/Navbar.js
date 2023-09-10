import React, { useState,useContext } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineXMark } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Cookies, useCookies } from "react-cookie";
export const Navbar = () => {
	const [sidenav, setSidenav] = useState(false);
	const [cookies,setCookie]=useCookies(["loggedIn"])

	const navigate = useNavigate();
	const {auth,setAuth}=useContext(AuthContext)
	return (
		<nav className="navbar">
			<img className="logo"
				src="Assets/images/logo.webp"
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
							setSidenav(false);

							navigate("/aboutus");
						}}
					>
						About Us
					</span>
					<span
						onClick={() => {
							setSidenav(false);

							navigate("/contact");
						}}
					>
						Contact Us
					</span>
					<span
						className="spanpadding"
						onClick={() => {
							setSidenav(false);
							if(cookies.loggedIn){
								navigate(`/beams`)
							}
							else{
								navigate("/login");
							}
						}}
					>
						{cookies.loggedIn?"My Account":"Log In"}
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