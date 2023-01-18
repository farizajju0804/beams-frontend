import React from "react";
import "./Products.css";
import data from "../../data/landingdata.json";
import landingsec2img from "../../assets/landingsec2img.svg";
import productssec3img from "../../assets/productssec3img.png";

export const Products = () => {
	return (
		<div className="productspage">
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
				<img src={productssec3img} alt="" />
				<h2>“The Future started Yesterday and we are already late”</h2>
			</section>
		</div>
	);
};
