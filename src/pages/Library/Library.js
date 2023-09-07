import React, { useState, useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";
import libcompleted from "../../assets/libcompleted.png";
import libfav from "../../assets/libfav.png";
import libnotes from "../../assets/libnotes.png";
import libhighlight from "../../assets/libhighlights.png";
import { HighlightComponent } from "../../models/Hightlistitem/HighlightComponent";
import { useAuthContext } from "../../context/AuthContext";
import { Toaster } from "react-hot-toast";
import nohighlights from "../../assets/nohighlights.png";
import { FiChevronDown } from "react-icons/fi";
import Pagination from "@mui/material/Pagination";
import { AuthContext } from "../../AuthProvider/AuthProvider";
export const Library = () => {
	const navigate = useNavigate();
	const { hightlights, delhighlight, changehighs, hightlightpersist } =
		useContext(AuthContext);

	const [currentPage, setCurrentPage] = useState(1);
	const [postsperpage, setPostsperpage] = useState(6);

	const [sortop, setSortop] = useState(2);

	const [title, setTitle] = useState("");

	// console.log(hightlightpersist);

	useEffect(() => {
		// console.log("high:",hightlights)
		// console.log(sortop, title);
	}, [sortop, title]);

	const indexoflast = currentPage * postsperpage;
	const indexoffirst = indexoflast - postsperpage;
	// changehighs(hightlights.slice(indexoffirst, indexoflast));

	return (
		<div className="LibraryPage">
			<Toaster />
			<div className="libraryoption">
				<div
					className="libraryopitem"
					onClick={() => {
						navigate("/favourites");
					}}
				>
					<img src={libfav} className="lbopic" />
					<span>Favourites</span>
				</div>
				<div
					className="libraryopitem"
					onClick={() => {
						navigate("/notes");
					}}
				>
					<img src={libnotes} className="lbopic" />
					<span>Notes </span>
				</div>
				<div
					className="libraryopitem"
					onClick={() => {
						navigate("/hightlights");
					}}
				>
					<img src={libhighlight} className="lbopic" />
					<span style={{ color: "#435CFF" }}>Highlights</span>
				</div>
			</div>
			<div className="opandfildivider"></div>
			{/* <div className="filteroption">
				<div className="libraryopitem">
					{" "}
					<select
						name=""
						id=""
						style={{ paddingRight: "40px" }}
						onChange={(e) => {
							if (e.target.value == "All Beam") {
								changehighs(hightlightpersist);
							} else {
								const sorter = hightlightpersist.filter((h) => {
									return h.BeamType == e.target.value;
								});

								changehighs(sorter);
							}
						}}
					>
						<option disabled defaultValue={""}>
							Title
						</option>
						<option value="All Beam">All Beams</option>
						<option value="Microbeam">Micro Beams</option>
						<option value="Minibeam">Mini Beams</option>
					</select>
					<FiChevronDown className="arrowselectposition" />
				</div>

				<div className="libraryopitem">
					<span style={{ color: "black" }}>Sort By</span>
					<select
						name=""
						id=""
						onChange={(e) => {
							setSortop(e.target.value);
						}}
						style={{ paddingRight: "40px" }}
					>
						<option defaultValue={2} value={2}>
							Latest
						</option>
						<option value={1}>A-Z</option>
						<option value={0}>Z-A</option>
					</select>
					<FiChevronDown className="arrowselectposition" />
				</div>
			</div> */}
			{hightlights.length != 0 ? (
				<div>
					{sortop == 2 && (
						<div className="highlightdata">
							{hightlights
								.map((hightlight) => {
									return (
										<HighlightComponent
											title={hightlight.BeamName}
											highlightdata={hightlight.HighlightedText}
											id={hightlight.id}
											type={hightlight.BeamType}
										/>
									);
								})
								.slice(indexoffirst, indexoflast)}
						</div>
					)}
					{sortop == 0 && (
						<div className="highlightdata">
							{hightlights
								.sort((a, b) => {
									const nameA = a.BeamName.toUpperCase(); // ignore upper and lowercase
									const nameB = b.BeamName.toUpperCase(); // ignore upper and lowercase
									if (nameA > nameB) {
										return -1;
									}
									if (nameA < nameB) {
										return 1;
									}

									return 0;
								})
								.map((hightlight) => {
									return (
										<HighlightComponent
											title={hightlight.BeamName}
											highlightdata={hightlight.HighlightedText}
											id={hightlight.id}
											type={hightlight.BeamType}
										/>
									);
								})
								.slice(indexoffirst, indexoflast)}
						</div>
					)}
					{sortop == 1 && (
						<div className="highlightdata">
							{hightlights
								.sort((a, b) => {
									const nameA = a.BeamName.toUpperCase(); // ignore upper and lowercase
									const nameB = b.BeamName.toUpperCase(); // ignore upper and lowercase
									if (nameA < nameB) {
										return -1;
									}
									if (nameA > nameB) {
										return 1;
									}

									return 0;
								})
								.map((hightlight) => {
									return (
										<HighlightComponent
											title={hightlight.BeamName}
											highlightdata={hightlight.HighlightedText}
											id={hightlight.id}
											type={hightlight.BeamType}
										/>
									);
								})
								.slice(indexoffirst, indexoflast)}
						</div>
					)}
				</div>
			) : (
				<div
					style={{
						width: "100%",
						justifyContent: "center",
						alignItems: "center",
						display: "flex",
						flexDirection: "column",
						marginTop: "50px"
					}}
					className="nodatadiv"
				>
					<img src={nohighlights} alt="" />
					<h2 style={{ marginTop: "30px", fontSize: "30px" }}>
						You haven't added any highlights yet.
					</h2>
				</div>
			)}
			<div className="pagination">
				<Pagination
					shape="rounded"
					count={Math.ceil(hightlights.length / postsperpage)}
					onChange={(e, page) => {
						setCurrentPage(page);
					}}
					showFirstButton
					showLastButton
				/>
			</div>
		</div>
	);
};
