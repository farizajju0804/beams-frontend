import React from "react";
import libcompleted from "../../assets/libcompleted.png";
import libfav from "../../assets/libfav.png";
import libnotes from "../../assets/libnotes.png";
import libhighlight from "../../assets/libhighlights.png";
import { FavouritesCard } from "../../models/FavouritesCard/FavouritesCard";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import nofav from "../../assets/nofav.png";
import { Toaster } from "react-hot-toast";

import "./Library.css";

export const Favourites = () => {
	const navigate = useNavigate();
	const { favourites } = useAuthContext();

	return (
		<div className="LibraryPage">
			<Toaster />
			<div className="libraryoption">
				{/* <div
					className="libraryopitem"
					onClick={() => {
						navigate("/completed");
					}}
				>
					<img src={libcompleted} className="lbopic" />
					<span>Completed</span>
				</div> */}
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
				<select name="" id="">
					<option value="">Micro Beams</option>
					<option value="">Mini Beams</option>
					<option value="">Max Beams</option>
				</select>
				<select name="" id="">
					<option value="">Grid</option>
					<option value="">List</option>
				</select>
				<div className="libraryopitem">
					<span style={{ color: "black" }}>Sort By</span>
					<select name="" id="">
						<option value="">Title</option>
						<option value="">A-Z</option>
						<option value="">Latest</option>
					</select>
				</div>
			</div>
			{favourites.length != 0 ? (
				<div className="highlightdata fwrap">
					{favourites.map((e) => {
						return (
							<FavouritesCard
								completed={false}
								key={e.idofbeam}
								title={e.Name}
								typeofbeam={e.typeofbeam}
								Desc={e.Desc}
								idofbeam={e.idofbeam}
							></FavouritesCard>
						);
					})}
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
		</div>
	);
};
