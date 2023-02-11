import React, { useState } from "react";
import "./GotoTop.css";
import { BsChevronUp } from "react-icons/bs";

export const GotoTop = () => {
	const [visible, setVisible] = useState(false);

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 900) {
			setVisible(true);
		} else if (scrolled <= 900) {
			setVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
			/* you can also use 'auto' behaviour
             in place of 'smooth' */
		});
	};

	window.addEventListener("scroll", toggleVisible);

	return (
		<div
			className={visible ? "gototopbtnshow gototopbtn" : "gototopbtn"}
			onClick={scrollToTop}
		>
			<BsChevronUp color="white" size={23} />
		</div>
	);
};
