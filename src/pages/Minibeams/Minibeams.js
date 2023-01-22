import React, { useState } from "react";
import { Minibeamscard } from "../../models/Minibeamcard/Minibeamscard";
import microbeambgheroimg from "../../assets/microbeamheroimg.png";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Popup } from "../../models/Popup/Popup";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const Minibeams = () => {
	const [modelopen, setModelopen] = useState(false);
	const close = () => setModelopen(false);
	const open = () => setModelopen(true);
	const [scrollercontrol, setscrollercontrol] = useState(0);
	const navigate = useNavigate();

	return (
		<div>
			{modelopen && <Popup handleClose={close}></Popup>}
			<section className="minibeamspage">
				<section className="trendingbeamshero">
					<img src={microbeambgheroimg} alt="" className="heroimgbeam" />
					<h1>
						Explore{" "}
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
						<input type="text" placeholder="search" />
						<AiOutlineSearch className="searchicon" />
					</div>
				</div>
				<section className="minibeams">
					<div className="sec2label">
						<span>Launch Of The Week</span>
					</div>
					<div className="minicardcont">
						<div className="minicardssection" style={{ marginBottom: "140px" }}>
							<Minibeamscard open={open} />
							<Minibeamscard open={open} />
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
								<Minibeamscard open={open} />
								<Minibeamscard open={open} />
								<Minibeamscard open={open} />
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
