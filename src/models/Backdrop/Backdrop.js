import React from "react";

export const Backdrop = ({ handleClose, children }) => {
	return (
		<div className="backdrop" onClick={handleClose}>
			{children}
		</div>
	);
};
