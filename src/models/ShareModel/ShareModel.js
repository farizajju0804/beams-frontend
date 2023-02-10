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

const ShareModel = () => {
	return (
		<Backdrop>
			<div className="sharecontainer">
				<div className="sharesocialcont">
					<span>Share in Social Media</span>
					<div className="shareicons">
						<FacebookShareButton>
							<FacebookIcon round={true} />
						</FacebookShareButton>
						<WhatsappShareButton>
							<WhatsappIcon round={true}></WhatsappIcon>
						</WhatsappShareButton>
						<TwitterShareButton>
							<TwitterIcon round={true} />
						</TwitterShareButton>
						<EmailShareButton>
							<EmailIcon round={true} />
						</EmailShareButton>
					</div>
				</div>

				<CopyToClipboard
					text="text"
					onCopy={() => toast.success("Copied to Clipboard")}
				>
					<div className="ctoclipboard">
						<span>https://www.inbrieff.com</span>
						<BsClipboardCheck size={22} />
					</div>
				</CopyToClipboard>
			</div>
		</Backdrop>
	);
};

export default ShareModel;
