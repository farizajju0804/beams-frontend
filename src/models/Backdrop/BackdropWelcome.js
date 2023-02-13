import React from "react";

export const BackdropWelcome = ({ handleClose, children }) => {
	return (
		<div className="backdropwelcome" onClick={handleClose}>
			{children}
		</div>
	);
};
