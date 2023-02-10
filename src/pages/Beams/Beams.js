import React, { useState, useEffect } from "react";
import "./Beams.css";
import { Minibeamscard } from "../../models/Minibeamcard/Minibeamscard";
import { Maxbeamscard } from "../../models/Maxbeamscard/Maxbeamscard";
import { Popup } from "../../models/Popup/Popup";
import heroimg from "../../assets/beamsheroimg.png";
import { AiOutlineSearch, AiFillCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { BeatLoader } from "react-spinners";
import { API } from "../../constants";
import { Popupnotes } from "../../models/Popupnotes/Popupnotes";
import ShareModel from "../../models/ShareModel/ShareModel";

export const Beams = () => {
	const [modelopen, setModelopen] = useState(false);
	const [microbeams, setMicrobeams] = useState([]);
	const [microbeamsload, setMicrobeamsload] = useState(false);
	const [maxbeams, setMaxbeams] = useState([]);
	const [maxbeamsload, setMaxbeamsload] = useState([]);
	const [popuptitle, setPopuptitle] = useState("");
	const [popupcontent, setPopupcontent] = useState("");
	const [notesPopup, setNotesPopup] = useState(false);
	const [notepopupdata, setNotepopupdata] = useState({});
	const [suggestion, setSuggestion] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [opensuggestionBox, setOpensuggestionBox] = useState(false);
	const [forceclose, setforceclose] = useState(false);
	const [searchOptionType, setSearchOptionType] = useState(0);
	const [popupid, setPopupid] = useState(0);
	const [popuptype, setPopuptype] = useState("");

	const closenotePopup = () => setNotesPopup(false);
	const opennotePopup = (data) => {
		setNotepopupdata(data);
		setNotesPopup(true);
	};

	const close = () => setModelopen(false);
	const open = (title, content, id, type) => {
		setPopupcontent(content);
		setPopuptitle(title);
		setModelopen(true);
		setPopupid(id);
		setPopuptype(type);
	};
	const navigate = useNavigate();
	const { token, user } = useAuthContext();

	const fetchdata = async () => {
		setMicrobeamsload(true);
		const data = await fetch(`${API}/microbeams`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
			.then((res) => res.json())
			.then((e) => {
				if (e.error) {
				} else {
					setMicrobeams(e.data);
					setMicrobeamsload(false);
				}
			});
	};

	const fetchdata2 = async () => {
		setMaxbeamsload(true);
		const data = await fetch(`${API}/minibeams`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
			.then((res) => res.json())
			.then((e) => {
				if (e.error) {
				} else {
					setMaxbeams(e.data);
					setMaxbeamsload(false);
				}
			});
	};

	useEffect(() => {
		setSuggestion([]);
		fetchdata();
		fetchdata2();
	}, [user]);

	return (
		<div className="beamspage">
			{notesPopup && (
				<Popupnotes
					data={notepopupdata}
					handleClose={closenotePopup}
				></Popupnotes>
			)}
			{modelopen && (
				<Popup
					content={popupcontent}
					title={popuptitle}
					handleClose={close}
					id={popupid}
					openNotes={opennotePopup}
					type={popuptype}
				></Popup>
			)}

			{/* <ShareModel /> */}

			<section className="trendingbeamshero">
				<img src={heroimg} alt="" className="heroimgbeam" />
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
					With Beams
				</h1>
			</section>
			<div className="innernav">
				<span>
					<span style={{ color: "#435CFF" }}>Home</span> &nbsp; &gt; &nbsp;{" "}
					<span>Beams</span>
				</span>
				<div className="searchbar">
					<input
						type="text"
						placeholder="Search"
						value={searchTerm}
						onChange={(e) => {
							setforceclose(true);
							setSearchTerm(e.target.value);
						}}
						onFocus={() => {
							setforceclose(true);
							setOpensuggestionBox(true);
						}}
					/>
					{searchTerm === "" && !forceclose ? (
						<AiOutlineSearch className="searchicon" />
					) : (
						<AiFillCloseCircle
							className="searchicon"
							color="black"
							onClick={() => {
								setSearchTerm("");
								setforceclose(false);
							}}
						/>
					)}
					{(searchTerm != "" || opensuggestionBox) && forceclose && (
						<div className="suggestionlist">
							{microbeams
								.filter((item) => {
									const searchterm = searchTerm.toLowerCase();
									const title = item.attributes.Title.toLowerCase();

									return title.includes(searchterm);
								})
								.map((item) => {
									return (
										<p
											onClick={(e) => {
												e.stopPropagation();
												setSearchTerm(item.attributes.Title);
												setforceclose(false);
												setOpensuggestionBox(false);
											}}
										>
											{item.attributes.Title}
										</p>
									);
								})}
						</div>
					)}
				</div>
			</div>
			{searchTerm === "" ? (
				<div>
					<section className="minibeams">
						<div className="sec2label">
							<span>Micro Beams</span>
						</div>
						<div className="minicardcont">
							{microbeams.length !== 0 ? (
								<div className="minicardssection">
									{microbeams.map((micro) => {
										return (
											<Minibeamscard
												title={micro.attributes.Title}
												content={micro.attributes.Content}
												id={micro.id}
												open={open}
												openNotes={opennotePopup}
											/>
										);
									})}
								</div>
							) : (
								<BeatLoader />
							)}
						</div>
						<span
							onClick={() => {
								navigate("/minibeams");
							}}
						>
							View More
						</span>
					</section>
					<section className="minibeams" style={{ marginTop: "140px" }}>
						<div className="sec2label">
							<span>Max Beams</span>
						</div>
						<div className="minicardcont">
							{maxbeams.length !== 0 ? (
								<div className="minicardssection">
									{maxbeams.map((micro) => {
										return (
											<Maxbeamscard
												Title={micro.attributes.Title}
												Desc={micro.attributes.shortDesc}
												id={micro.id}
												open={open}
												openNotes={opennotePopup}
											/>
										);
									})}
								</div>
							) : (
								<BeatLoader />
							)}
						</div>
						<span
							onClick={() => {
								navigate("/maxbeams");
							}}
						>
							View More
						</span>
					</section>
				</div>
			) : (
				<div className="searchPage">
					<span className="searchPageheading">Search Results</span>
					<div className="searchPageoptions">
						<div className="searchpageleftoptions">
							<span
								onClick={() => {
									setSearchOptionType(0);
								}}
								style={{ backgroundColor: "#E3E3E3" }}
							>
								All
							</span>
							<span
								onClick={() => {
									setSearchOptionType(1);
								}}
								style={{ backgroundColor: "#F7CD61" }}
							>
								Micro Beams
							</span>
							<span
								onClick={() => {
									setSearchOptionType(2);
								}}
								style={{ backgroundColor: "#E3E3E3" }}
							>
								Mini Beams
							</span>
						</div>
					</div>

					<div className="minicardcont">
						{maxbeams.length !== 0 ? (
							<div className="minicardssection">
								{searchOptionType === 0 &&
									microbeams
										.filter((item) => {
											const searchterm = searchTerm.toLowerCase();
											const title = item.attributes.Title.toLowerCase();

											return title.includes(searchterm);
										})
										.map((micro) => {
											return (
												<Minibeamscard
													title={micro.attributes.Title}
													content={micro.attributes.Content}
													id={micro.id}
													open={open}
													openNotes={opennotePopup}
												/>
											);
										})}
								{searchOptionType === 0 &&
									maxbeams
										.filter((item) => {
											const searchterm = searchTerm.toLowerCase();
											const title = item.attributes.Title.toLowerCase();

											return title.includes(searchterm);
										})
										.map((micro) => {
											return (
												<Maxbeamscard
													Title={micro.attributes.Title}
													Desc={micro.attributes.shortDesc}
													id={micro.id}
													open={open}
												/>
											);
										})}
								{searchOptionType === 1 &&
									microbeams
										.filter((item) => {
											const searchterm = searchTerm.toLowerCase();
											const title = item.attributes.Title.toLowerCase();

											return title.includes(searchterm);
										})
										.map((micro) => {
											return (
												<Minibeamscard
													title={micro.attributes.Title}
													content={micro.attributes.Content}
													id={micro.id}
													open={open}
													openNotes={opennotePopup}
												/>
											);
										})}
								{searchOptionType === 2 &&
									maxbeams
										.filter((item) => {
											const searchterm = searchTerm.toLowerCase();
											const title = item.attributes.Title.toLowerCase();

											return title.includes(searchterm);
										})
										.map((micro) => {
											return (
												<Maxbeamscard
													Title={micro.attributes.Title}
													Desc={micro.attributes.shortDesc}
													id={micro.id}
													open={open}
												/>
											);
										})}
							</div>
						) : (
							<BeatLoader />
						)}
					</div>
				</div>
			)}
		</div>
	);
};
