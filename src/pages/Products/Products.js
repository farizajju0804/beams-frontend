import React from "react";
import "./Products.css";
import data from "../../data/landingdata.json";
import landingsec2img from "../../assets/landingsec2img.svg";
import popupdoyouknow from "../../assets/Popupyouknow.png";
import prodsec5img from "../../assets/prodsec5img.png";
import prodsec7img from "../../assets/prodsec7img.png";
import textiimagecont from "../../assets/testimockimg.png";
import { GotoTop } from "../../models/GotoTop/GotoTop";

export const Products = () => {
	return (
		<div className="productspage">
			<GotoTop></GotoTop>
			<section className="prodsec1">
				<h1>BEAMS</h1>
				<span>Illuminating the Future in a Flash!</span>
			</section>
			<section className="two landingsection">
				<div className="sec2label">
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
						<h1>{data.landingpage.sec2quote}</h1>
						<div className="sec2contdiv">
							<h1 style={{ color: "#F7CD61" }}>
								{data.landingpage.sec2contheader}
							</h1>
							<span>{data.landingpage.sec2contdata}</span>
						</div>
					</div>
				</div>
			</section>
			<section className="prodsec3">
				<h2 style={{ color: "white" }}>
					“The Future started yesterday and we are already late”
				</h2>
			</section>
			<section className="prodsec4">
				<img src={popupdoyouknow} alt="" className="prodsec4img" />
				<div className="sec2label">
					<span>Micro Beams</span>
				</div>
				<div className="prodsec4data">
					<h1>
						Small in size,
						<br /> Big on ideas.
					</h1>
					<div className="prodsec4liner"></div>
					<p>
						Micro Beams contain bite-sized and highly relevant content about the
						forces shaping the future. They are perfect for people who are short
						on time but want to keep pace with leading global trends. Stay
						updated and inspired in just a couple of minutes.
					</p>
					<p style={{ marginTop: "20px" }}>
						Imagine having a wealth of knowledge at your fingertips, ready to be
						explored whenever and wherever you are. Don't let a busy schedule
						keep you from staying ahead of the curve. Dive into the future with
						Microbeams and discover the endless possibilities that the future
						holds.
					</p>
					<button>Read Now</button>
				</div>
			</section>
			<section className="prodsec5">
				<img src={prodsec5img} alt="" className="prodsec5img" />
				<div className="sec2label">
					<span>Max Beams</span>
				</div>
				<div className="prodsec5data">
					<h1>
						Compact insights for
						<br /> Curious minds.
					</h1>
					<div className="prodsec5liner"></div>
					<p>
						Mini Beams are perfect for people who want a deeper understanding of
						Micro Beams. They are condensed, easy to understand and designed to
						be consumed in less than 5 minutes. Imagine having a front-row seat
						viewing the latest trends and advancements in technology and
						science.
					</p>
					<p style={{ marginTop: "20px" }}>
						They will take you on an amazing exploratory journey about the
						trends impact, business opportunity, and blue oceans. Collect a
						treasure trove of knowledge, ready to be explored whenever and
						wherever you are. Let Mini Beams guide you on your journey to unveil
						the future.
					</p>
					<button>Read Now</button>
				</div>
			</section>
			<section className="prodsec6">
				<div className="secprodlabel">
					<span>Why do you need beams ?</span>
				</div>
				<div className="jumpedletterimg">
					{" "}
					<img src={prodsec7img} alt="" />
				</div>
			</section>
			<section className="prodsec3 prodsec3bg2">
				<h2>“The Future started yesterday and we are already late”</h2>
			</section>
			<section className="prodsec7">
				<div className="sec2label">
					<span>Testimonials</span>
				</div>
				<div className="prodsec7inner">
					<h1>
						What Our <br /> Users Say
					</h1>
					<div className="testicard">
						<img src={textiimagecont} alt="" />
						<div className="testicardinner">
							<img
								src="https://www.pngall.com/wp-content/uploads/4/Quotation-Symbol-PNG.png"
								alt=""
							/>
							<p>
								Lorem ipsum dolor sit amet consectetur. Vulputate sem blandit
								cursus congue eu faucibus sem aliquam. Vulputate dui velit ut
								lorem.
							</p>
							<p>
								Non quis cursus quam varius orci ultrices odio quam
								varius.lorem. Non quis cursus quam varius orci ultrices odio
								quam varius.lorem. Non quis cursus quam varius orci ultrices
								odio quam varius.
							</p>
							<h6>Jeremy</h6>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
