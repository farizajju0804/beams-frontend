import { useEffect } from "react";
import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Navbar } from "./models/navbar/Navbar";
import landingvideo from "./assets/videoBg.mp4";
import data from "./data/landingdata.json";
import landingsec2img from "./assets/landingsec2img.svg";
import sec4card1 from "./assets/sec4card1.png";
import sec4card2 from "./assets/sec4card2.png";
import sec4card3 from "./assets/sec4card3.png";
import sec6card1 from "./assets/sec6card1.png";
import sec6card2 from "./assets/sec6card2.png";
import sec6card3 from "./assets/sec6card3.png";
import { Footer } from "./models/footer/Footer";
import testi from "./assets/testi.png";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
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
							<h2 data-aos="zoom-in">{data.landingpage.herotext}</h2>
							<span data-aos="fade-up">{data.landingpage.subhero}</span>
							<button data-aos="fade-up">{data.landingpage.button}</button>
						</div>
					</div>
				</section>
				<section className="two landingsection">
					<div className="sec2label" data-aos="fade-right">
						<span>{data.landingpage.sec2title}</span>
					</div>
					<div className="sec2data">
						<div
							style={{
								height: " 380px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center"
							}}
						>
							<img src={landingsec2img} alt="" className="object" />
						</div>

						<div className="sec2idiv">
							<h1 data-aos="fade-left">{data.landingpage.sec2quote}</h1>
							<div className="sec2contdiv">
								<h1 data-aos="fade-left">{data.landingpage.sec2contheader}</h1>
								<span data-aos="fade-left">
									{data.landingpage.sec2contdata}
								</span>
							</div>
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
					<div className="sec4datadiv">
						<div className="sec4spltitle">
							<div className="sec4splbg"></div>
							<h1 className="sec4innertitle">
								{data.landingpage.sec4innertitle}
							</h1>
						</div>
						<div className="sec4cardsdiv">
							<div className="sec4carddiv" data-aos="fade-up">
								<div className="sec4cardimgcont">
									<img src={sec4card1} alt="" />
								</div>
								<span>{data.landingpage.sec4card1}</span>
							</div>
							<div className="sec4carddiv" data-aos="fade-up">
								<div className="sec4cardimgcont">
									<img src={sec4card2} alt="" />
								</div>
								<span>{data.landingpage.sec4card2}</span>
							</div>
							<div className="sec4carddiv" data-aos="fade-up">
								<div className="sec4cardimgcont">
									<img src={sec4card3} alt="" />
								</div>
								<span>{data.landingpage.sec4card3}</span>
							</div>
						</div>
					</div>
				</section>
				{/* <section className="five landingsection">
					<div className="sec2label">
						<span>{data.landingpage.sec5title}</span>
					</div>
					<div className="carodiv">
						<Carousel
							showThumbs={false}
							autoPlay
							showArrows
							showStatus={false}
							dynamicHeight
							className="carosel"
							// width={"100%"}
						>
							<div className="caroitem">
								<img src={testi} alt="" className="caroimg" />
								<p>
									Lorem ipsum dolor sit amet consectetur. Turpis porta
									adipiscing non arcu ac nulla. Justo sit et felis parturient
									ut. Elit commodo nunc venenatis eu ultrices gravida
									adipiscing. Ut mauris at purus phasellus pellentesque id diam.
									Pellentesque quam dictum quisque sit sit. Lorem ipsum dolor
									sit amet consectetur. Turpis porta adipiscing non arcu ac
									nulla. Justo sit et felis parturient ut. Elit commodo nunc
									venenatis eu ultrices gravida adipiscing. Ut mauris at purus
									phasellus pellentesque id diam. Pellentesque quam dictum
									quisque sit sit. Lorem ipsum dolor sit amet consectetur.
									Turpis porta adipiscing non arcu ac nulla. Justo sit et felis
									parturient ut. Elit commodo nunc venenatis eu ultrices gravida
									adipiscing. Ut mauris at purus phasellus pellentesque id diam.
									Pellentesque quam dictum quisque sit sit.
								</p>
							</div>
							<div className="caroitem">
								<img src={testi} alt="" className="caroimg" />

								<p>
									Lorem ipsum dolor sit amet consectetur. Turpis porta
									adipiscing non arcu ac nulla. Justo sit et felis parturient
									ut. Elit commodo nunc venenatis eu ultrices gravida
									adipiscing. Ut mauris at purus phasellus pellentesque id diam.
									Pellentesque quam dictum quisque sit sit. Lorem ipsum dolor
									sit amet consectetur. Turpis porta adipiscing non arcu ac
									nulla. Justo sit et felis parturient ut. Elit commodo nunc
									venenatis eu ultrices gravida adipiscing. Ut mauris at purus
									phasellus pellentesque id diam. Pellentesque quam dictum
									quisque sit sit.Lorem ipsum dolor sit amet consectetur. Turpis
									porta adipiscing non arcu ac nulla. Justo sit et felis
									parturient ut. Elit commodo nunc venenatis eu ultrices gravida
									adipiscing. Ut mauris at purus phasellus pellentesque id diam.
									Pellentesque quam dictum quisque sit sit.
								</p>
							</div>
							<div className="caroitem">
								<img src={testi} alt="" className="caroimg" />
								<p>
									Lorem ipsum dolor sit amet consectetur. Turpis porta
									adipiscing non arcu ac nulla. Justo sit et felis parturient
									ut. Elit commodo nunc venenatis eu ultrices gravida
									adipiscing. Ut mauris at purus phasellus pellentesque id diam.
									Pellentesque quam dictum quisque sit sit. Lorem ipsum dolor
									sit amet consectetur. Turpis porta adipiscing non arcu ac
									nulla. Justo sit et felis parturient ut. Elit commodo nunc
									venenatis eu ultrices gravida adipiscing. Ut mauris at purus
									phasellus pellentesque id diam. Pellentesque quam dictum
									quisque sit sit.Lorem ipsum dolor sit amet consectetur. Turpis
									porta adipiscing non arcu ac nulla. Justo sit et felis
									parturient ut. Elit commodo nunc venenatis eu ultrices gravida
									adipiscing. Ut mauris at purus phasellus pellentesque id diam.
									Pellentesque quam dictum quisque sit sit.
								</p>
							</div>
						</Carousel>
					</div>
				</section> */}
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
