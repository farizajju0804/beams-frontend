import React from "react";
import { Minibeamscard } from "../../models/Minibeamcard/Minibeamscard";

export const Minibeams = () => {
	return (
		<div>
			<section className="minibeams">
				<div className="sec2label">
					<span>Mini Beams</span>
				</div>
				<div className="minicardssection" style={{ marginBottom: "140px" }}>
					<Minibeamscard />
					<Minibeamscard />
					<Minibeamscard />
					<Minibeamscard />
					<Minibeamscard />
					<Minibeamscard />
					<Minibeamscard />
					<Minibeamscard />
					<Minibeamscard />
					<Minibeamscard />
					<Minibeamscard />
					<Minibeamscard />
				</div>
			</section>
		</div>
	);
};
