import React from "react";
import "../../pages/Beams/Beams.css"
export const Backdrop = ({ handleClose, children }) => {
	return (
		<div className="backdrop" onClick={handleClose}>
			{children}
		</div>
	);
};
