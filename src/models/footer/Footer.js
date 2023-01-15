import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

export const Footer = () => {
	return (
		<div className="footer">
			<div className="fdivder"></div>
			<div className="footeritems">
				<div className="footabout">
					<img src={logo} alt="" />
					<p>
						Lorem ipsum dolor sit amet consectetur. Mauris nam vitae enim
						turpis. Arcu purus ullamcorper vitae mauris consectetur duis
						faucibus non.
					</p>
					<div className="fabouticonsdiv">
						<AiFillFacebook size={30} />
						<AiFillTwitterCircle size={30} />
						<AiFillYoutube size={30} />
						<AiFillLinkedin size={30} />
					</div>
				</div>
				<div className="footitem">
					<h3>What we Do</h3>
					<p>Product</p>
				</div>
				<div className="footitem">
					<h3>Company</h3>
					<p>About us</p>
				</div>
				<div className="footitem">
					<h3>Support</h3>
					<p>FAQ</p>
					<p>Privacy Policy</p>
					<p>Terms of Service</p>
				</div>
				<div className="footitem">
					<h3>Contact</h3>
					<p>info@innbrieff.com</p>
				</div>
			</div>
			<div className="fdivder"></div>
			<p>© 2023 Innbrieff. All Rights Reserved.</p>
		</div>
	);
};
