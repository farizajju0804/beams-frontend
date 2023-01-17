import React from "react";
import "./Aboutus.css";
import abtussec2img from "../../assets/aboutussec2img.png";
import aboutussec3img from "../../assets/abtussec3img.png";

export const Aboutus = () => {
	return (
		<div className="aboutuspage">
			<section className="abtus1">
				<div className="abt1bg">
					<div className="abtush1">
						<span>About Us</span>
					</div>
					<h1>Welcome to Innbrieff</h1>
				</div>
			</section>
			<section className="abtus2">
				<div className="abtus2inner1">
					<span>
						We're a community of innovators, futurists and early adopters who
						are passionate about shaping the future.{" "}
					</span>
					<div className="abtusdivider"></div>
				</div>
				<div className="abtus2inner2">
					<img src={abtussec2img} alt="" />
					<div>
						<p>
							{" "}
							We feature cutting-edge and thought-provoking trends about
							technology, science, and beyond; presented in bite-sized nuggets.
						</p>

						<p>
							Whether you're an entrepreneur, a researcher or just someone who
							is curious about the future, innBrieff is the perfect place to
							explore and get inspired.
						</p>
						<p>
							Join us on this amazing journey as we uncover the latest
							developments in technology and their potential to change the
							world.
						</p>
					</div>
				</div>
			</section>
			<section className="abtus3">
				<div className="sec2label">
					<span>Vision</span>
				</div>
				<div className="abtus3data">
					<ul>
						<li>
							To be the leading source for the latest concise, insightful and
							thought-provoking ideas about technology, science and society
						</li>
						<li>
							To foster a community of like-minded individuals who are
							passionate about technology and its potential to change the world
						</li>
						<li>
							To create a brighter future for all by working together and
							exploring the latest technology ideas.
						</li>
						<li>
							To provide a platform for exploring and discussing the latest
							technology ideas and their potential impact on the world
						</li>
					</ul>
					<img src={aboutussec3img} alt="" />
				</div>
			</section>
			<section className="abtus4">
				<div
					className="sec2label"
					style={{ backgroundColor: "white", color: "black" }}
				>
					<span>Our Team</span>
				</div>
				<div className="abtus4info">
					<h1>Malavika Bawri</h1>
					<h3>FOUNDER</h3>
					<div className="abtusdivider"></div>
				</div>
			</section>
		</div>
	);
};
