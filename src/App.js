import { useEffect } from "react";
import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Navbar } from "./models/navbar/Navbar";
import newsletterstylish from "./assets/newsletterstylish.png";
import data from "./data/landingdata.json";
import sec6card1 from "./assets/sec6card1.png";
import sec6card2 from "./assets/sec6card2.png";
import sec6card3 from "./assets/sec6card3.png";
import { Footer } from "./models/footer/Footer";
import horiscroll1 from "./assets/horiscroll1.png";
import horiscroll2 from "./assets/horiscroll2.png";
import horiscroll3 from "./assets/horiscroll3.png";
import q1video from "./assets/Question1.mp4";
import q2video from "./assets/Question2.mp4";
import { useNavigate } from "react-router-dom";
import q3video from "./assets/Question3.mp4";
import AOS from "aos";
import "aos/dist/aos.css";
import { useHorizontalScroll } from "./Horizontalscroll";
import { GotoTop } from "./models/GotoTop/GotoTop";
import { useAuthContext } from "./context/AuthContext";
import { NewsletterPopUp } from "./models/NewsletterPopUp/NewsletterPopUp";
import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Toaster } from "react-hot-toast";

function App() {
	const [scroller, setScroller] = useState(0);

	const navigate = useNavigate();
	const scrollRef = useHorizontalScroll();
	const [newsletterpopup, setNewsletterpopup] = useState(false);
	const [newletter, setNewletter] = useState("");

	useEffect(() => {
		AOS.init({
			duration: 900,
			once: true,
			offset: 20
		});
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			if (scroller == 200) {
				setScroller(0);
			} else {
				setScroller(scroller + 100);
			}
		}, 6000);

		return () => clearInterval(interval);
	}, [scroller]);
	const { user, addnewsletter } = useAuthContext();

	return (
		<div className="App">
			<Toaster />
			<Navbar></Navbar>
			<GotoTop></GotoTop>
			{newsletterpopup && (
				<NewsletterPopUp
					handleClose={() => {
						setNewsletterpopup(false);
					}}
				/>
			)}
			<div className="landingpage">
				<section className="one">
					<div className="bgvideo">
						<video
							src={
								"https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/videoBgL.mp4?alt=media&token=4990273c-a809-4b6d-adf2-512419c031e3"
							}
							autoPlay
							loop
							playsInline={true}
							muted
						></video>
						<div className="bgvideomask"></div>
						<div className="sec1data">
							<h2 data-aos="zoom-in">
								{data.landingpage.herotext}{" "}
								<h2> {data.landingpage.herotext2}</h2>
							</h2>
							<span>
								The leading guide to technology trends and innovations.{" "}
							</span>
							<button
								onClick={() => {
									user ? navigate("/beams") : navigate("/login");
								}}
							>
								{data.landingpage.button}
							</button>
						</div>
					</div>
				</section>
				<section className="insertsection">
					<div>
						<i
							style={
								{
									// display: "flex",
									// alignItems: "center",
									// justifyContent: "center"
								}
							}
							className="sec2bannertitle"
						>
							<span style={{ color: "#F7CD61", fontWeight: "600" }}>beam:</span>{" "}
							ray of light; shine brightly
						</i>
						<span>
							Our flagship product, <i style={{ color: "#F7CB61" }}>Beams</i>{" "}
							will empower you to stay ahead of the curve. Gain invaluable
							insights and foresights into the leading technology trends and
							innovations.
						</span>
					</div>
				</section>
				<section className="thethreeqs">
					<h2>
						The{" "}
						<span
							style={{
								backgroundColor: "#F7CD61",
								color: "black",
								padding: "10px",
								borderRadius: "10px"
							}}
						>
							Three
						</span>{" "}
						Questions
					</h2>
					<div className="the3qsitem">
						<div className="the3qsitemdata">
							<span>1. &nbsp;</span>
							<p>
								WOULD YOU LIKE TO KEEP PACE WITH THE{" "}
								<span
									style={{
										backgroundColor: "#F7CD61",
										color: "black",
										padding: "10px",
										borderRadius: "10px"
									}}
								>
									LATEST
								</span>{" "}
								TECHNOLOGY{" "}
								<span
									style={{
										backgroundColor: "#F7CD61",
										color: "black",
										padding: "10px",
										borderRadius: "10px"
									}}
								>
									TRENDS?
								</span>{" "}
							</p>
						</div>
						<div className="the3qsbox">
							<video src={q1video} autoPlay loop playsInline={true} muted />
							<p>
								Beams are powerful, relevant, and timely content gems that
								enable people to keep pace with the latest global technology
								trends and innovations.
							</p>
							<p>
								They are tailor-made for busy leaders, visionaries, and future
								focused individuals.
							</p>
						</div>
					</div>
					<div className="the3qsitem">
						<div className="the3qsitemdata">
							<span>2.&nbsp;</span>
							<p>
								WOULD YOU LIKE TO{" "}
								<span
									style={{
										backgroundColor: "#F7CD61",
										color: "black",
										padding: "10px",
										borderRadius: "10px"
									}}
								>
									EXCEL
								</span>{" "}
								TODAY, TOMORROW, AND{" "}
								<span
									style={{
										backgroundColor: "#F7CD61",
										color: "black",
										padding: "10px",
										borderRadius: "10px"
									}}
								>
									FOREVER?
								</span>{" "}
								SHORT ON TIME?
							</p>
						</div>
						<div className="the3qsbox">
							<video src={q2video} autoPlay loop playsInline={true} muted />
							<p>
								Unlock the power of the future with Beams - expertly curated
								content nuggets ​with​ actionable insights and powerful
								foresights​ ​required ​to succeed​ in an uncertain future.
							</p>
							<p>
								Stay updated in less than a minute a day​. B​eams are your
								ultimate resource to excel today, tomorrow, and in future.
							</p>
						</div>
					</div>
					<div className="the3qsitem">
						<div className="the3qsitemdata">
							<span>3.&nbsp;</span>
							<p>
								WOULD YOU LIKE TO BE ABLE TO{" "}
								<span
									style={{
										backgroundColor: "#F7CD61",
										color: "black",
										padding: "10px",
										borderRadius: "10px"
									}}
								>
									SKILLFULLY DEAL
								</span>{" "}
								WITH THE UNCERTAINITY IN THE FUTURE?{" "}
							</p>
						</div>
						<div className="the3qsbox">
							<video src={q3video} autoPlay loop playsInline={true} muted />
							<p>
								Beams will keep you current and future ready in minutes a day.
								Leverage them to stay relevant, make better decisions, and
								identify new business opportunities.
							</p>
							<p>
								Don't ever get left behind. Ace your game no matter where you
								are - one trend at a time!
							</p>
						</div>
					</div>
				</section>
				<section className="three landingsection">
					<div className="sec2label" data-aos="fade-right">
						<span>{data.landingpage.sec3title}</span>
					</div>
					<div className="alcenter">
						<div className="sec3innerdiv">
							<span data-aos="fade-right">{data.landingpage.sec3content}</span>
							<span data-aos="fade-right">{data.landingpage.sec3content1}</span>
							<button
								data-aos="fade-up"
								onClick={() => {
									user ? navigate("/beams") : navigate("/login");
								}}
							>
								{data.landingpage.sec3btncontent}
							</button>
						</div>
					</div>
				</section>
				<section className="four landingsection">
					<div className="sec2label">
						<span>{data.landingpage.sec4title}</span>
					</div>
					<div className="landingslider">
						<div className="sec4spltitle vertic">
							<div className="sec4splbg"></div>
							<h1 className="sec4innertitle">
								<span>How will we enhance</span>
								<br />
								<span>your Future?</span>
							</h1>
						</div>
						<div className="silderfunctions" style={{ right: `${scroller}vw` }}>
							<div className="landinnerslider">
								<BsChevronLeft
									size={30}
									onClick={() => {
										setScroller(200);
									}}
									style={{ cursor: "pointer", margin: "15px" }}
								/>
								<div className="firstslider">
									<img src={horiscroll1} alt="" />
									<p>A new trending topic everyday</p>
								</div>
								<BsChevronRight
									size={30}
									onClick={() => {
										setScroller(scroller + 100);
									}}
									style={{ cursor: "pointer", margin: "15px" }}
								/>
							</div>
							<div className="landinnerslider">
								<BsChevronLeft
									size={30}
									onClick={() => {
										setScroller(scroller - 100);
									}}
									style={{ cursor: "pointer", margin: "15px" }}
								/>
								<div className="firstslider">
									<img src={horiscroll2} alt="" />
									<p>Quickly understand bite sized content</p>
								</div>
								<BsChevronRight
									size={30}
									onClick={() => {
										setScroller(scroller + 100);
									}}
									style={{ cursor: "pointer", margin: "15px" }}
								/>
							</div>
							<div className="landinnerslider">
								<BsChevronLeft
									size={30}
									onClick={() => {
										setScroller(scroller - 100);
									}}
									style={{ cursor: "pointer", margin: "15px" }}
								/>
								<div className="firstslider">
									<img src={horiscroll3} alt="" />
									<p>One of a kind knowledge portal</p>
								</div>
								<BsChevronRight
									size={30}
									onClick={() => {
										setScroller(0);
									}}
									style={{ cursor: "pointer", margin: "15px" }}
								/>
							</div>
						</div>
					</div>
				</section>
				<section className="six landingsection">
					<div className="sec2label">
						<span>{data.landingpage.sec6title}</span>
					</div>
					<div className="sec4datadiv">
						<div className="sec4spltitle vertic" style={{ minWidth: "325px" }}>
							<div className="sec4splbg"></div>
							<h1 className="sec4innertitle">
								<span>How will</span>
								<br />
								<span>you benefit?</span>
							</h1>
						</div>
						<div className="sec4cardsdiv">
							<div className="sec4carddiv" data-aos="fade-up">
								<div className="sec4cardimgcont">
									<img src={sec6card1} alt="" />
								</div>
								<span>{data.landingpage.sec6card1}</span>
							</div>
							<div className="sec4carddiv" data-aos="fade-up">
								<div className="sec4cardimgcont">
									<img src={sec6card2} alt="" />
								</div>
								<span>{data.landingpage.sec6card2}</span>
							</div>
							<div className="sec4carddiv" data-aos="fade-up">
								<div className="sec4cardimgcont">
									<img src={sec6card3} alt="" />
								</div>
								<span>
									Increase your chances <br /> of success
								</span>
							</div>
						</div>
					</div>
				</section>
				<section className="seven landingsection">
					<div className="newletter">
						<div className="outnews1">
							<img
								src={newsletterstylish}
								alt=""
								className="newsletterstylish"
							/>
							<div className="newsoutbod"></div>
							<div className="outnewsinner">
								<div className="outnewsleft">
									<h3 data-aos="fade-up"> Newsletter</h3>
									<p data-aos="fade-up">
										<span>You deserve access to premium content.</span> <br />{" "}
										Join 1000+ people who want to stay future-ready.
									</p>
								</div>
								<div className="outinner2">
									<div className="subsnow">
										<input
											type="text"
											placeholder="Enter your email address"
											onChange={(e) => {
												setNewletter(e.target.value);
											}}
										/>
										<div
											className="subsbtnnews"
											onClick={() => {
												addnewsletter(newletter, setNewsletterpopup);

												// setNewsletterpopup(true);
											}}
										>
											<span>Subscribe</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<Footer />
				</section>
			</div>
		</div>
	);
}

export default App;
