import React, { useState } from "react";
import libcompleted from "../../assets/libcompleted.png";
import libfav from "../../assets/libfav.png";
import libnotes from "../../assets/libnotes.png";
import libhighlight from "../../assets/libhighlights.png";
import { FavouritesCard } from "../../models/FavouritesCard/FavouritesCard";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import nofav from "../../assets/nofav.png";
import { FiChevronDown } from "react-icons/fi";
import Pagination from "@mui/material/Pagination";
import { Toaster } from "react-hot-toast";
import "./Library.css";
import Favouritescard2 from "../../models/Favouritescard2/Favouritescard2";

export const Favourites = () => {
	const navigate = useNavigate();
	const { favourites, favpersist, changefav } = useAuthContext();
	const [currentPage, setCurrentPage] = useState(1);
	const [postsperpage, setPostsperpage] = useState(6);
	const indexoflast = currentPage * postsperpage;
	const indexoffirst = indexoflast - postsperpage;
	const [sortop, setSortop] = useState(2);

	console.log(favourites);

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
					<span style={{ color: "#435CFF" }}>Favourites</span>
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
					<span>Highlights</span>
				</div>
			</div>
			<div className="opandfildivider"></div>
			<div className="filteroption">
				<div className="libraryopitem">
					{" "}
					<select
						name=""
						id=""
						style={{ paddingRight: "40px" }}
						onChange={(e) => {
							if (e.target.value == "All Beam") {
								changefav(favpersist);
							} else {
								const sorter = favpersist.filter((h) => {
									return h.typeofbeam == e.target.value;
								});

								changefav(sorter);
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
							// console.log(e.target.value);
							setSortop(e.target.value);
						}}
						style={{ paddingRight: "40px" }}
					>
						<option defaultValue={2} value={2}>
							Latest
						</option>
						<option value={0}>A-Z</option>
						<option value={1}>Z-A</option>
					</select>
					<FiChevronDown className="arrowselectposition" />
				</div>
			</div>
			{favourites.length != 0 ? (
				<div className="gridwrapper">
					{sortop == 2 && (
						<div className="highlightdata fwrap">
							{favourites
								.map((e) => {
									if (e.typeofbeam === "Minibeam") {
										return (
											<FavouritesCard
												completed={false}
												id={e.id}
												title={e.Name}
												typeofbeam={e.typeofbeam}
												Desc={e.Desc}
												idofbeam={e.idofbeam}
											></FavouritesCard>
										);
									} else {
										return (
											<Favouritescard2
												completed={false}
												id={e.id}
												title={e.Name}
												typeofbeam={e.typeofbeam}
												Desc={e.Desc}
												idofbeam={e.idofbeam}
											></Favouritescard2>
										);
									}
								})
								.slice(indexoffirst, indexoflast)}
						</div>
					)}
					{sortop == 1 && (
						<div className="highlightdata fwrap">
							{favourites
								.sort((a, b) => {
									const nameA = a.Name.toUpperCase(); // ignore upper and lowercase
									const nameB = b.Name.toUpperCase(); // ignore upper and lowercase
									if (nameA > nameB) {
										return -1;
									}
									if (nameA < nameB) {
										return 1;
									}

									return 0;
								})
								.map((e) => {
									return (
										<div>
											<FavouritesCard
												completed={false}
												id={e.id}
												title={e.Name}
												typeofbeam={e.typeofbeam}
												Desc={e.Desc}
												idofbeam={e.idofbeam}
											></FavouritesCard>
										</div>
									);
								})
								.slice(indexoffirst, indexoflast)}
						</div>
					)}
					{sortop == 0 && (
						<div className="highlightdata fwrap">
							{favourites
								.sort((a, b) => {
									const nameA = a.Name.toUpperCase(); // ignore upper and lowercase
									const nameB = b.Name.toUpperCase(); // ignore upper and lowercase
									if (nameA < nameB) {
										return -1;
									}
									if (nameA > nameB) {
										return 1;
									}

									return 0;
								})
								.map((e) => {
									return (
										<div>
											<FavouritesCard
												completed={false}
												id={e.id}
												title={e.Name}
												typeofbeam={e.typeofbeam}
												Desc={e.Desc}
												idofbeam={e.idofbeam}
											></FavouritesCard>
										</div>
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
					<img src={nofav} alt="" />
					<h2 style={{ marginTop: "30px", fontSize: "30px" }}>
						You haven't added any Microbeams to your favorites yet.
					</h2>
					<p style={{ marginTop: "20px" }}>
						Your favorites folder is lonely. Be nice to it.
					</p>
				</div>
			)}
			<div className="pagination">
				<Pagination
					shape="rounded"
					count={Math.ceil(favourites.length / postsperpage)}
					onChange={(e, page) => {
						setCurrentPage(page);
					}}
				/>
			</div>
		</div>
	);
};
