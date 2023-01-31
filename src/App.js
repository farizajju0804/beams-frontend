import { useEffect } from "react";
import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Navbar } from "./models/navbar/Navbar";
import landingvideo from "./assets/videoBg.mp4";
import data from "./data/landingdata.json";
import HorizontalScroll from "react-scroll-horizontal";
import sec6card1 from "./assets/sec6card1.png";
import sec6card2 from "./assets/sec6card2.png";
import sec6card3 from "./assets/sec6card3.png";
import { Footer } from "./models/footer/Footer";
import threeqs1img from "./assets/3qs1img.png";
import threeqs2img from "./assets/3qs2img.png";
import threeqs3img from "./assets/3qs3img.png";
import horiscroll1 from "./assets/horiscroll1.png";
import horiscroll2 from "./assets/horiscroll2.png";
import horiscroll3 from "./assets/horiscroll3.png";
import q1video from "./assets/Question1.mp4";
import q2video from "./assets/Question2.mp4";
import q3video from "./assets/Question3.mp4";
import AOS from "aos";
import "aos/dist/aos.css";
import { useHorizontalScroll } from "./Horizontalscroll";

function App() {
	const scrollRef = useHorizontalScroll();

	useEffect(() => {
		AOS.init({
			duration: 900,
			once: true,
			offset: 20
		});
	}, []);

	return (
		<div className="App">
			<div className="landingpage">
				<section className="one">
					<Navbar></Navbar>
					<div className="bgvideo">
						<video
							
							src={landingvideo}
							autoPlay
							loop
							playsInline={true}
							muted
						></video>
						<div className="sec1data">
							<h2 data-aos="zoom-in">
								{data.landingpage.herotext} <br /> {data.landingpage.herotext2}
							</h2>
							<span data-aos="fade-up">{data.landingpage.subhero}</span>
							<span data-aos="fade-up">{data.landingpage.subhero2}</span>
							<button>{data.landingpage.button}</button>
						</div>
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
								WANT TO{" "}
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
							<video src={q1video} autoPlay loop playsInline={true} muted />
							<p>
								Meet Beams, meticulously distilled content nuggets, packed with
								powerful and actionable knowledge. Count on them to be your
								ultimate resource enabling you to excel and stay ahead of the
								curve.
							</p>
						</div>
					</div>
					<div className="the3qsitem">
						<div className="the3qsitemdata">
							<span>2.&nbsp;</span>
							<p>
								WANT TO STAY INFORMED ABOUT THE{" "}
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
							<video src={q2video} autoPlay loop playsInline={true} muted />
							<p>
								​Relevant, timely, and versatile content gems on the latest
								technology trends and innovations. Consume them in less than 6
								minutes a day. They are tailor-made for busy leaders,
								visionaries and future-focused individuals who need to stay
								informed.
							</p>
						</div>
					</div>
					<div className="the3qsitem">
						<div className="the3qsitemdata">
							<span>3.&nbsp;</span>
							<p>
								WANT TO{" "}
								<span
									style={{
										backgroundColor: "#F7CD61",
										color: "black",
										padding: "10px",
										borderRadius: "10px"
									}}
								>
									STAY REVELANT
								</span>{" "}
								<br /> IN THE FUTURE?{" "}
							</p>
						</div>
						<div className="the3qsbox">
							<video src={q3video} autoPlay loop playsInline={true} muted />
							<p>
								Beams will keep you current and future ready in minutes a day.
								Leverage them to stay relevant, make better decisions, identify
								new business opportunities. Don't ever get left behind. Ace your
								game no matter where you are - one trend at a time!
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
							<button data-aos="fade-up">
								{data.landingpage.sec3btncontent}
							</button>
						</div>
					</div>
				</section>
				<section className="four landingsection">
					<div className="sec2label">
						<span>{data.landingpage.sec4title}</span>
					</div>
					<div ref={scrollRef} className="horiscroller">
						{/* <HorizontalScroll reverseScroll={true}> */}
						<div className="sec4spltitle">
							<div className="sec4splbg"></div>
							<h1 className="sec4innertitle">
								{data.landingpage.sec4innertitle}
							</h1>
						</div>
						<div className="featurehoricard">
							<img src={horiscroll1} alt="" />
							<span>A new trending topic everyday</span>
						</div>
						<div
							className="featurehoricard"
							style={{ backgroundColor: "#F7CD61", color: "black" }}
						>
							<img src={horiscroll2} alt="" />
							<span>Quickly understand bite sized content</span>
						</div>
						<div
							className="featurehoricard"
							style={{ backgroundColor: "#435CFF" }}
						>
							<img src={horiscroll3} alt="" />
							<span>One of a kind knowledge portal</span>
						</div>
						{/* </HorizontalScroll> */}
					</div>
				</section>
				<section className="six landingsection">
					<div className="sec2label">
						<span>{data.landingpage.sec6title}</span>
					</div>
					<div className="sec4datadiv">
						<div className="sec4spltitle" data-aos="zoom-in-up">
							<div className="sec4splbg"></div>
							<h1 className="sec4innertitle">
								{data.landingpage.sec6innertitle}
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
								<span>{data.landingpage.sec6card3}</span>
							</div>
						</div>
					</div>
				</section>
				<section className="seven landingsection">
					<div className="newletter">
						<div className="outnews1">
							<div className="newsoutbod"></div>
							<div className="outnewsinner">
								<div className="outnewsleft">
									<h3 data-aos="fade-up"> Newsletter</h3>
									<p data-aos="fade-up">
										Everybody deserves to know about unique global trends.
									</p>
								</div>
								<div className="outinner2">
									<div className="subsnow">
										<input type="text" placeholder="Enter your email address" />
										<div className="subsbtnnews">
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
