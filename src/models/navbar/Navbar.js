import React, { useState,useContext } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineXMark } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Cookies, useCookies } from "react-cookie";
import { FcHome } from "react-icons/fc";
import acc1 from "../../assets/acc1.png";
import acc2 from "../../assets/acc2.png";
import acc3 from "../../assets/acc3.png";
import { removeToken } from "../../helpers";
export const Navbar = () => {
	const [sidenav, setSidenav] = useState(false);
	const cookies=new Cookies();
	const navigate = useNavigate();
	const {auth,setAuth,setUserData,setisLoggedIn}=useContext(AuthContext)
	return (
		<nav className="navbar">
			<img className="logo"
				src="https://www.beams.world/Assets/images/logo1.webp"
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
				{!cookies.get("loggedIn")?
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
				:
				<div className="sidenavlinks">
                
                <div
                  className="accountdropdownitems"
                  onClick={() => {
					setSidenav(false);
                    navigate("/beams");
                  }}
                >
                  <FcHome />
                  <span>My Home</span>
                </div>
                <div className="accountdropdownitems" onClick={() =>{ 
					setSidenav(false);
					navigate(`/profile`)}}>
                  <img src={acc1} alt="" />
                  <span>My Profile</span>
                </div>
                <div
                  className="accountdropdownitems"
                  onClick={() => {
					setSidenav(false);
                    navigate("/favourites");
                  }}
                >
                  <img src={acc2} alt="" />
                  <span>My Library</span>
                </div>
                {/* <div
                  className="accountdropdownitems"
                  onClick={() => {
					setSidenav(false);
                    sessionStorage.removeItem("uid");
                    cookies.remove("loggedIn");
                    removeToken();
                    setUserData(null);
                    setisLoggedIn(false);
                    navigate("/");
                  }}
                >
                  <img src={acc3} alt="" />
                  <span>Log Out</span>
                </div> */}
				<span style={{cursor:"pointer",marginTop:"10px"}} className="sidelink"
						onClick={() => {
							setSidenav(false);

							navigate("/aboutus");
						}}
					>
						About Us
					</span>
					<span style={{cursor:"pointer",margin:"10px 0"}} className="sidelink"
						onClick={() => {
							setSidenav(false);

							navigate("/contact");
						}}
					>
						Contact Us
					</span>
					<span
						className="spanborder"
						onClick={() => {
							setSidenav(false);
                    sessionStorage.removeItem("uid");
                    cookies.remove("loggedIn");
                    removeToken();
                    setUserData(null);
                    setisLoggedIn(false);
                    navigate("/");
						}}
					>
						{"Log Out"}
					</span>
              </div>
				}
			</div>
		</nav>
	);
};