import React from "react";

export const HighlightsPopup = () => {
	return (
		<Backdrop handleClose={handleClose}>
			<div
				className="Highlightspopup"
				onClick={(e) => {
					e.stopPropagation();
				}}
			></div>
		</Backdrop>
	);
};
