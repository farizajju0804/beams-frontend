import React from "react";
import { Backdrop } from "../Backdrop/Backdrop";
import {
	EmailShareButton,
	FacebookShareButton,
	TwitterShareButton,
	WhatsappShareButton,
	EmailIcon,
	FacebookIcon,
	TwitterIcon,
	WhatsappIcon
} from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { BsClipboardCheck } from "react-icons/bs";
import "./Sharemodel.css";
import { toast } from "react-hot-toast";
import { AiFillCloseCircle } from "react-icons/ai";

const ShareModel = ({ handleClose, url, desc, title }) => {
	return (
		<Backdrop handleClose={handleClose}>
			<div className="sharecontainer">
				<div className="sharemodelcloser">
					<AiFillCloseCircle />
				</div>
				<div className="sharesocialcont">
					<span>Share in Social Media</span>
					<div className="shareicons">
						<FacebookShareButton
							url="https://pixelmatters.pages.dev/beams"
							title="Inbrieff"
							quote={desc}
							hashtag="Innbrieff"
						>
							<FacebookIcon round={true} />
						</FacebookShareButton>
						<WhatsappShareButton
							url="https://pixelmatters.pages.dev/beams"
							title="Inbrieff"
							
						>
							<WhatsappIcon round={true}></WhatsappIcon>
						</WhatsappShareButton>
						<TwitterShareButton
							url="https://pixelmatters.pages.dev/beams"
							title="Inbrieff"
						>
							<TwitterIcon round={true} />
						</TwitterShareButton>
						<EmailShareButton
							url="https://pixelmatters.pages.dev/beams"
							title="Inbrieff"
						>
							<EmailIcon round={true} />
						</EmailShareButton>
					</div>
				</div>

				<CopyToClipboard
					text="text"
					onCopy={() => toast.success("Copied to Clipboard")}
				>
					<div className="ctoclipboard">
						<span>{"https://pixelmatters.pages.dev/beams#" + url}</span>
						<BsClipboardCheck size={22} />
					</div>
				</CopyToClipboard>
			</div>
		</Backdrop>
	);
};

export default ShareModel;
