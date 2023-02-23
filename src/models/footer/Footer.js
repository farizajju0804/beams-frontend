import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { BsPinterest } from "react-icons/bs";

export const Footer = () => {
	const navigate = useNavigate();

	return (
		<div className="footer">
			<div className="fdivder"></div>
			<div className="footeritems">
				<div className="footabout">
					<img src={logo} alt="" />
					<p>
						InnBrieff is the leading guide to technology trends and
						innovations that will shape our future.Packed actionable insights and deep
						foresights, its the North Star for people who want to stay ahead of
						the curve.
					</p>
					<div className="fabouticonsdiv">
						<AiFillFacebook
							size={30}
							onClick={() => {}}
							href="https://www.instagram.com/innbrieff"
						/>
						<a href="https://www.instagram.com/innbrieff">
							<AiFillInstagram size={30} color="black" />
						</a>
						<a href="https://www.pinterest.com/innbrieff">
							<BsPinterest size={30} color="black" />
						</a>

						<AiFillLinkedin size={30} />
					</div>
				</div>

				<div className="footitem">
					<h3>Company</h3>
					<p
						onClick={() => {
							navigate("/aboutus");
						}}
					>
						About us
					</p>
					<p
						onClick={() => {
							navigate("/products");
						}}
					>
						Product
					</p>
				</div>
				<div className="footitem">
					<h3>Support</h3>
					{/* <p>FAQ</p> */}
					<p
						onClick={() => {
							navigate("/privacypolicy");
						}}
					>
						Privacy Policy
					</p>
					<p
						onClick={() => {
							navigate("/termsandcondition");
						}}
					>
						Terms of Service
					</p>
				</div>
				<div className="footitem">
					<h3>Contact</h3>
					<p onClick={() => (window.location = "mailto:info@innbrieff.com")}>
						info@innbrieff.com
					</p>
				</div>
			</div>
			{/* <div className="fdivder"></div> */}
			<p>© 2023 Innbrieff. All Rights Reserved.</p>
		</div>
	);
};
