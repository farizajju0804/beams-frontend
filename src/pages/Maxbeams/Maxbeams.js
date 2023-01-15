import React from "react";
import { Maxbeamscard } from "../../models/Maxbeamscard/Maxbeamscard";

export const Maxbeams = () => {
	return (
		<div>
			<section className="minibeams">
				<div className="sec2label">
					<span>Max Beams</span>
				</div>
				<div className="minicardssection" style={{ marginBottom: "140px" }}>
					<Maxbeamscard />
					<Maxbeamscard />
					<Maxbeamscard />
					<Maxbeamscard />
					<Maxbeamscard />
					<Maxbeamscard />
				</div>
			</section>
		</div>
	);
};
