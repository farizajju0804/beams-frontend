import React, { useState } from "react";
import { ImLocation } from "react-icons/im";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import "./Contact.css";
import { ContactPopUp } from "../../models/ContactPopUp/ContactPopUp";

export const Contact = () => {
	const [mapselector, setMapselector] = useState("1");
	const [contactcontent, setContactcontent] = useState("");
	const [contactpopstatus, setContactpopstatus] = useState(false);

	return (
		<div className="contactuspage">
			{contactpopstatus && (
				<ContactPopUp
					handleClose={() => {
						setContactpopstatus(false);
					}}
				/>
			)}
			<div className="contactleft">
				<div className="contactleftinner">
					<h1>Get in Touch</h1>
					<div className="contactlsec1">
						<div className="contactlsec1inner ">
							<input
								type="text"
								id="contactname"
								placeholder="Enter your Full Name"
							/>
						</div>
					</div>
					<div className="contactlsec2">
						<input
							type="text"
							id="contactemail"
							placeholder="Enter your email address"
						/>
					</div>
					<div className="contactlsec3">
						<textarea
							type="text"
							id="contactlastname"
							value={contactcontent}
							onChange={(e) => {
								if (contactcontent.length < 400)
									setContactcontent(e.target.value);
							}}
							placeholder="Don't be shy, drop us a line. Who knows, it might just be the next big idea."
						/>
						<span
							className={
								contactcontent.length == 400
									? "textlimiter textlimitererror"
									: "textlimiter"
							}
						>
							{contactcontent.length}/400
						</span>
					</div>
					<button
						className="contactusmsgbtn"
						onClick={() => {
							setContactpopstatus(true);
						}}
					>
						Send Message
					</button>
					<div className="contactlsec4">
						<div className="contactlsec4inner">
							<div
								className="contacticon"
								onClick={() => (window.location = "mailto:info@innbrieff.com")}
							>
								<AiOutlineMail color="white" size={30} />
							</div>
							<div
								className="contactlsec4innerdata"
								onClick={() => (window.location = "mailto:info@innbrieff.com")}
							>
								<span className="contactlsec4innerdata2">
									innbrieff@gmail.com
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="contactright">
				{mapselector === "0" && (
					<iframe
						width="100%"
						height="100%"
						id="gmap_canvas"
						src="https://maps.google.com/maps?q=Victoria%20Memorial,%20Kolkata&t=&z=13&ie=UTF8&iwloc=&output=embed"
						frameborder="0"
						marginheight="0"
						marginwidth="0"
						title="Kokalta Location"
					></iframe>
				)}

				{mapselector === "1" && (
					<iframe
						width="100%"
						height="100%"
						id="gmap_canvas"
						src="https://maps.google.com/maps?q=Red%20Carpet%20Wax%20Museum&t=&z=15&ie=UTF8&iwloc=&output=embed"
						frameborder="0"
						scrolling="no"
						marginheight="0"
						marginwidth="0"
						title="museum"
					></iframe>
				)}

				{mapselector === "2" && (
					<iframe
						width="100%"
						height="100%"
						id="gmap_canvas"
						src="https://maps.google.com/maps?q=Wok%20Wiz%20Chinatown%20Walking%20Tours&t=&z=15&ie=UTF8&iwloc=&output=embed"
						frameborder="0"
						scrolling="no"
						marginheight="0"
						marginwidth="0"
						title="USA"
					></iframe>
				)}

				<div className="mapselector">
					<label htmlFor="">Map Street</label>
					<div className="mapselectordrop">
						<ImLocation size={20} style={{ marginRight: "10px" }} />
						<select
							name=""
							id=""
							onChange={(e) => {
								setMapselector(e.target.value);
							}}
						>
							<option value="0">Kolkata,India</option>
							<option value="1">Mumbai,India</option>
							<option value="2">San Francisco,USA</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	);
};
