import React, { useState } from "react";
import { Maxbeamscard } from "../../models/Maxbeamscard/Maxbeamscard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import microbeambgheroimg from "../../assets/microbeamheroimg.png";
import { AiOutlineSearch } from "react-icons/ai";

export const Maxbeams = () => {
	const [scrollercontrol, setscrollercontrol] = useState(0);

	return (
		<div>
			<section className="minibeamspage">
				<section className="trendingbeamshero">
					<img src={microbeambgheroimg} alt="" className="heroimgbeam" />
					<h1>
						Excel In{" "}
						<span
							style={{
								backgroundColor: "#F7CD61",
								color: "black",
								padding: "10px",
								borderRadius: "10px"
							}}
						>
							The Future
						</span>{" "}
						With Micro Beams
					</h1>
				</section>
				<div className="innernav">
					<span>
						<span style={{ color: "#435CFF" }}>Home</span> &nbsp; &gt; &nbsp;{" "}
						<span style={{ color: "#435CFF" }}>Beams</span> &nbsp; &gt; &nbsp;{" "}
						<span>Micro Beams</span>
					</span>
					<div className="searchbar">
						<input type="text" placeholder="Search" />
						<AiOutlineSearch className="searchicon" />
					</div>
				</div>
				<section className="minibeams">
					<div className="sec2label">
						<span>Launch Of The Week</span>
					</div>
					<div className="minicardcont">
						<div className="minicardssection" style={{ marginBottom: "140px" }}>
							<Maxbeamscard />
							<Maxbeamscard />
						</div>
					</div>
				</section>
				<section className="minibeams" style={{ marginTop: "0px" }}>
					<div className="sec2label">
						<span>Trending</span>
					</div>
					<div className="minicardcontscroller">
						<FaChevronLeft
							size={26}
							onClick={() => {
								if (scrollercontrol != 0)
									setscrollercontrol(scrollercontrol - 560);
							}}
						/>
						<div className="minicardssectionscroller">
							<div
								className="minicardssectionscroller1"
								style={{ position: "relative", right: `${scrollercontrol}px` }}
							>
								<Maxbeamscard noshadow={true} />
								<Maxbeamscard noshadow={true} />
								<Maxbeamscard noshadow={true} />
							</div>
						</div>
						<FaChevronRight
							size={26}
							onClick={() => {
								// if (scrollercontrol != 0)
								setscrollercontrol(scrollercontrol + 560);
							}}
						/>
					</div>
					<div className="minicardsnaver"></div>
				</section>
			</section>
		</div>
	);
};
