import React from "react";
import { Backdrop } from "../Backdrop/Backdrop";
import "./Popupabtus.css";

export const Popupabtus = ({ handleClose, text }) => {
	return (
		<Backdrop handleClose={handleClose}>
			<div
				className="abtuspopup"
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<div className="abtuspopupdata">
					<p>
						Malvika Bawri is the Co-Founder and President of Think India. She is
						the Founder of Diduce Technologies, a software startup focused on
						search. She is the Co-Founder of Quantta Analytics, a Big Data and
						Artificial Intelligence driven platform that creates efficiencies in
						human interactions.
					</p>
					<p>
						She was the Chief Strategy Officer of Calcom Cement, the largest
						private-sector enterprise in North-East India. She is the Founder of
						‘Ideopedia’, an organization that disseminates cutting-edge
						information and ideas to over five thousand of India’s ‘top
						influencers’. Ideopedia’s readers, India’s top-brass, are leading
						policy makers and thought leaders. The top 5000 influencers in
						India, including Top members of the Judiciary and the Legislature,
						Leading Scientists, Distinguished Academicians, CEO’s, and others,
						comprise the Ideopedia Circle.
					</p>
					<p>
						She was the Founder of Saroj Antiques, a global antiquarian company.
						She was the Co-Founder of Cijen, an analytics and software company
						based out of California. She has been granted a patent by the USPTO
						and has several patents pending. She was the Founder of Thaella, a
						high-fashion accessories company that infused fashion with art. She
						started her first company designing fashion apparel at the age of
						sixteen. Her other interests include writing, image consulting,
						mentoring, art, yoga, and hiking. She holds an MBA from Pepperdine
						University, USA.
					</p>
				</div>
			</div>
		</Backdrop>
	);
};
