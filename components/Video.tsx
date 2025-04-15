"use client";
import React from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const Video = () => {
	return (
		<div className="video">
			<LiteYouTubeEmbed aspectHeight={9} aspectWidth={16} id="nVDfVseH24g" title={"levdev Trailer"} iframeClass="responsive-iframe" poster={"maxresdefault"} />
		</div>
	);
};

export default Video;
