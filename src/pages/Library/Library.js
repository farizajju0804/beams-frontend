import React from "react";
import { useNavigate } from "react-router-dom";
import libcompleted from "../../assets/libcompleted.png";
import libfav from "../../assets/libfav.png";
import libnotes from "../../assets/libnotes.png";
import libhighlight from "../../assets/libhighlights.png";
import { HighlightComponent } from "../../models/Hightlistitem/HighlightComponent";
import { useAuthContext } from "../../context/AuthContext";
import { Toaster } from "react-hot-toast";

export const Library = () => {
	const navigate = useNavigate();
	const { hightlights, delhighlight } = useAuthContext();

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
			<div className="highlightdata">
				{hightlights.map((hightlight) => {
					return (
						<HighlightComponent
							title={hightlight.BeamName}
							highlightdata={hightlight.HighlightedText}
							id={hightlight.id}
						/>
					);
				})}
			</div>
		</div>
	);
};
