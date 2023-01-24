import React from "react";

export const HighlightComponent = () => {
	return (
		<div className="highlightcomponent">
			<input type="checkbox" />
			<div className="highlightcomponentinner">
				<p style={{ marginRight: "20px", maxWidth: "400px" }}>
					This is how a Highlight on innBrieff looks like!
				</p>
				<span style={{ width: "100px" }}>1 Aug, 2023</span>
			</div>
		</div>
	);
};
