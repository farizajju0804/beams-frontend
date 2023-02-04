import React, { useState } from "react";
import { ImLocation } from "react-icons/im";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import "./Contact.css";

export const Contact = () => {
	const [mapselector, setMapselector] = useState("1");

	return (
		<div className="contactuspage">
			<div className="contactleft">
				<div className="contactleftinner">
					<h1>Get in Touch</h1>
					{/* <p>Fill up the form our team will get back to you within 24 Hours</p> */}
					<div className="contactlsec1">
						<div className="contactlsec1inner ">
							{/* <label For="contactname">First Name</label> */}
							<input
								type="text"
								id="contactname"
								placeholder="Enter your Full Name"
							/>
						</div>
						{/* <div className="contactlsec1inner marginleft20">
							<label For="contactlastname">Last Name</label>
							<input
								type="text"
								id="contactlastname"
								placeholder="Enter your last lame "
							/>
						</div> */}
					</div>
					<div className="contactlsec2">
						{/* <label For="contactemail">Email Address</label> */}
						<input
							type="text"
							id="contactemail"
							placeholder="Enter your email address"
						/>
					</div>
					<div className="contactlsec3">
						{/* <label For="contactlastname">Message</label> */}
						<textarea
							type="text"
							id="contactlastname"
							placeholder="Don't be shy, drop us a line. Who knows, it might just be the next big idea."
						/>
					</div>
					<button className="contactusmsgbtn">Send Message</button>
					<div className="contactlsec4">
						<div className="contactlsec4inner">
							<AiOutlinePhone className="contacticon" color="white" size={65} />
							<div className="contactlsec4innerdata">
								<span className="contactlsec4innerdata2">+91 987654321</span>
							</div>
						</div>
						<div className="contactlsec4inner">
							<AiOutlineMail className="contacticon" color="white" size={65} />
							<div className="contactlsec4innerdata">
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
							<option value="2">San Fransisco,USA</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	);
};
