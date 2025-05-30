import React from "react";

import { faSteam } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import "@/styles/Steam.scss";

const SteamSteamPurchaseLink = (): React.JSX.Element => {
	return (
		<Link
			className="link hover-blue steam-login-container steam-purchase-container"
			href={"https://store.steampowered.com/app/2126580?utm_source=Phaserwebsite&utm_medium=web"}
		>
			<div className="steam-login-container-top">
				<p className="steam-login-text">view on</p>
				<div className="inline">
					<p className="steam-login-brand-text">STEAM</p>
					<p className="steam-login-tm">&#174;</p>
				</div>
				<FontAwesomeIcon className="steam-login-logo" icon={faSteam} />
			</div>
			<div className="steam-login-container-bottom">
				<p className="steam-login-text-bottom">This site is not associated with Valve Corp.</p>
			</div>
		</Link>
	);
};

export default SteamSteamPurchaseLink;
