import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { ImBin } from "react-icons/im";
import { HighlightComponent } from "./HighlightComponent";

export const Hightlightitem = ({ open }) => {
	const [closearrow, setClosearrow] = useState(!open ? false : true);

	return (
		<div className="hightlightitem">
			<div className="hightlightitemheading">
				<span
					style={{ cursor: "pointer" }}
					onClick={(e) => {
						setClosearrow(!closearrow);
					}}
				>
					Massive Job Disruption
				</span>
				<div className="hightlightitemoptions">
					<input type="checkbox" className="highlightitemicon" />
					<ImBin className="highlightitemicon" color="red" />
					{closearrow ? (
						<IoIosArrowUp
							className="highlightitemicon"
							onClick={() => {
								setClosearrow(!closearrow);
							}}
						/>
					) : (
						<IoIosArrowDown
							className="highlightitemicon"
							onClick={() => {
								setClosearrow(!closearrow);
							}}
						/>
					)}
				</div>
			</div>
			{closearrow && (
				<div className="highlightdata">
					<HighlightComponent />
					<HighlightComponent />
					<HighlightComponent />
				</div>
			)}
		</div>
	);
};
