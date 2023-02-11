import React, { useState, useEffect } from "react";
import "./Aboutus.css";
import sidescrollimg1 from "../../assets/side1.png";
import sidescrollimg2 from "../../assets/side2.png";
import sidescrollimg3 from "../../assets/side3.png";
import sidescrollimg4 from "../../assets/side4.png";
import abtuslandimg from "../../assets/aboutuslandimg.png";
import abtusman from "../../assets/abtusman.png";
import abtusrocket from "../../assets/abtusrocket.png";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { BsChevronDoubleRight } from "react-icons/bs";
import { BsChevronDoubleLeft, BsChevronDoubleDown } from "react-icons/bs";
import { Popupabtus } from "../../models/Popupabtus/Popupabtus";
import aboutsliderbg4 from "../../assets/aboutsliderbg4.png";
import { GotoTop } from "../../models/GotoTop/GotoTop";

export const Aboutus = () => {
	const [scroller, setScroller] = useState(0);
	const [modelopen, setModelopen] = useState(false);
	const close = () => setModelopen(false);
	const open = () => setModelopen(true);

	useEffect(() => {
		const interval = setInterval(() => {
			if (scroller == 300) {
				setScroller(0);
			} else {
				setScroller(scroller + 100);
			}
		}, 6000);

		return () => clearInterval(interval);
	}, [scroller]);

	return (
		<div className="aboutuspage">
			<GotoTop></GotoTop>
			{modelopen && <Popupabtus handleClose={close}></Popupabtus>}
			<section className="abtus1">
				<img src={abtuslandimg} alt="" />
				<h1>Welcome to Innbrieff</h1>
				<BsChevronDoubleDown
					size={30}
					color={"blue"}
					style={{ marginTop: "20px" }}
				/>
			</section>
			<section className="abtus2">
				<div className="sec2label" style={{ backgroundColor: "#191641" }}>
					<span>Meet the future</span>
				</div>
				<div className="abtsec2inner">
					<div className="abtsec2pdiv">
						<p>
							<strong>
								{" "}
								Futurists predict the changes that will occur in the next 10
								years will be greater than all the changes in the last 100
								years.
							</strong>
						</p>
						<p>
							We equip people with potent knowledge so they are ready to thrive
							even in an uncertain future. Whether you're an entrepreneur, an
							engineer or someone who is curious about the future, innBrieff is
							the perfect place for you to get inspired, stay updated and ease
							your way into the future.
						</p>
						<p>
							Join us on this amazing journey as we uncover the latest
							developments in technology and dive into their potential to change
							the world.
						</p>
					</div>
				</div>
			</section>
			<section className="abtussec3">
				<div className="abtussec3 scrolldiv" style={{ right: `${scroller}vw` }}>
					<div className="abtussec31 bgabtus1">
						<div className="scrollerarrow">
							<FaChevronCircleRight
								className="arrowicon"
								// size={52}
								style={{ justifySelf: "flex-end", cursor: "pointer" }}
								onClick={() => {
									setScroller(scroller + 100);
								}}
							/>
						</div>
						<div
							className="sec2label"
							style={{
								color: "white",
								fontWeight: 600
							}}
						>
							<span>Our Story</span>
						</div>
						<div className="abtussec3inner">
							<img src={sidescrollimg1} alt="" />
							<p>
								It was 2022. The world was trickling back to a new normal. In
								2020-21, I read 50 books a year, newspapers, magazines and
								blogs. I even read the fine print on milk cartons, just kidding.
							</p>
						</div>
					</div>
					<div className="abtussec31 bgabtus2">
						<div
							className="scrollerarrow"
							style={{ justifyContent: "space-between" }}
						>
							<FaChevronCircleLeft
								className="arrowicon"
								// size={52}
								color="black"
								onClick={() => {
									setScroller(0);
								}}
								style={{ cursor: "pointer" }}
							/>
							<FaChevronCircleRight
								className="arrowicon"
								// size={52}
								color="black"
								onClick={() => {
									setScroller(scroller + 100);
								}}
								style={{ cursor: "pointer" }}
							/>
						</div>
						<div
							className="sec2label"
							style={{
								color: "white",
								fontWeight: 600
							}}
						>
							<span>Our Story </span>
						</div>
						<div className="abtussec3inner">
							{" "}
							<img src={sidescrollimg2} alt="" />
							<p>
								I explored new subjects, kept up with the latest innovations,
								and revived my love for history. This was an unprecedented
								luxury since I never had so much free time.
							</p>
						</div>
					</div>
					<div className="abtussec31 bgabtus3">
						<div
							className="scrollerarrow"
							style={{ justifyContent: "space-between" }}
						>
							<FaChevronCircleLeft
								className="arrowicon blackicon"
								// size={52}
								// style={{ color: "black" }}
								// color="white"
								onClick={() => {
									setScroller(100);
								}}
								style={{ cursor: "pointer" }}
							/>
							<FaChevronCircleRight
								className="arrowicon blackicon"
								// style={{ justifySelf: "flex-end" }}
								onClick={() => {
									setScroller(scroller + 100);
								}}
								style={{ cursor: "pointer" }}
							/>
						</div>
						<div
							className="sec2label"
							style={{
								color: "white",
								fontWeight: 600
							}}
						>
							<span>Our Story </span>
						</div>
						<div className="abtussec3inner blackcolor">
							<img src={sidescrollimg3} alt="" />
							<p style={{ color: "white" }}>
								It was 2022. My mental canvas had greatly broadened and
								sharpened in the last two years. I had new and innovative ideas
								and insights into new topics, However since my schedule was
								chock-a-block I couldn't indulge hours into staying updated.
							</p>
							<p style={{ color: "white" }}>
								I wondered how Bill Gates, Warren Buffet and a few others could
								spend over three hours reading, everyday. I realized there has
								to be an easier solution.
							</p>
						</div>
					</div>
					<div className="abtussec31 bgabtus4">
						<div
							className="scrollerarrow"
							style={{ justifyContent: "flex-start" }}
						>
							<FaChevronCircleLeft
								className="arrowicon"
								// size={52}
								onClick={() => {
									setScroller(scroller - 100);
								}}
								style={{ cursor: "pointer" }}
							/>
						</div>
						<div
							className="sec2label"
							style={{
								color: "white",
								fontWeight: 600
							}}
						>
							<span>Our Story</span>
						</div>
						<div className="abtussec3inner">
							{" "}
							<img src={sidescrollimg4} alt="" />
							<p>
								I spoke to my mother that evening and asked her if she could
								think of a potent and easy way for people to stay updated.
								Thoughts, and ideas kept rolling off her tongue until...she
								described what she thought the ideal solution should look like.
							</p>
							<p>
								Within seconds we both realized we were onto something.
								InnBrieff was born in those few seconds when Mom and I were
								bonding and brainstorming.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="abtmission">
				<div
					className="sec2label"
					style={{
						fontWeight: "600"
					}}
				>
					<span>Mission</span>
				</div>
				<div className="abtmissioninner">
					<img src={abtusrocket} alt="" className="abtusrocket" />
					<div className="abtmissioncircle">
						<h1>
							To unveil the future, <br /> One trend at a time.
						</h1>
					</div>
				</div>
			</section>
			<section className="abtvission">
				<div
					className="sec2label"
					style={{
						backgroundColor: "white",
						color: "#191641",
						fontWeight: "600"
					}}
				>
					<span>Vision</span>
				</div>
				<div className="abtvissioninner">
					<img src={abtusman} alt="" className="abtusman" />
					<div className="abtvissioncircle">
						<p>
							To be the leading source of the latest trends, insights and
							thought-provoking foresights on technology.
						</p>
						{/* <p>
							To create a technology platform that fosters a community of
							like-minded people who are passionate about leveraging technology
							to create a brighter future.
						</p> */}
					</div>
				</div>
			</section>
			<section className="abtus5">
				<div className="sec2label" style={{ backgroundColor: "#191641" }}>
					<span>Our Team</span>
				</div>
				<div className="abtsec5inner">
					<div className="abtsec5pdiv">
						<p>
							We're a group of innovators, futurists and early adopters. We are
							passionate about creating a brighter future and catalyzing others
							to do the same.
						</p>
					</div>
				</div>
			</section>
			<section className="abtus4">
				<div className="abtus4info">
					<h1>Malvika Bawri</h1>
					<h3>FOUNDER</h3>
					<div className="abtusdivider"></div>
					<p>
						Malvika Bawri is the Co-Founder and President of Think India. She is
						the Founder of Diduce Technologies, a software <br /> startup
						focused on search. She is the Co-Founder of Quantta Analytics.{" "}
						<span
							style={{ fontWeight: "600", cursor: "pointer" }}
							onClick={open}
						>
							Read More
						</span>
					</p>
				</div>
			</section>
		</div>
	);
};
