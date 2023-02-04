import React, { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { useAuthContext } from "../../context/AuthContext";

export const HighlightComponent = ({ title, highlightdata, id, type }) => {
	const [showMore, setShowMore] = useState(false);
	const [openpopup, setopenpopup] = useState(false);
	const { delhighlight } = useAuthContext();
	return (
		<div
			className="highlightcomponent"
			onClick={() => {
				setopenpopup(false);
			}}
		>
			<div className="highlightcomponentinner">
				<span>{title}</span>
				<div className="highlightcomponentinner2">
					<p>
						{highlightdata.length > 300 ? (
							showMore ? (
								<span>
									{" "}
									{highlightdata}{" "}
									<strong
										onClick={() => {
											setShowMore(false);
										}}
									>
										Read Less
									</strong>
								</span>
							) : (
								<span>
									{" "}
									{highlightdata.slice(0, 300)}{" "}
									<strong
										onClick={() => {
											setShowMore(true);
										}}
									>
										Read More
									</strong>
								</span>
							)
						) : (
							highlightdata
						)}
					</p>
					<BiDotsVerticalRounded
						size={22}
						style={{ marginLeft: "20px", cursor: "pointer" }}
						onClick={(e) => {
							e.stopPropagation();
							setopenpopup(true);
						}}
					/>
					{openpopup && (
						<div className="highlightscardoptions">
							<div
								className="highlightscardoptionsinner"
								onClick={() => {
									delhighlight(id);
								}}
							>
								<MdDeleteForever color="red" size={20} />
								<span>Delete</span>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
