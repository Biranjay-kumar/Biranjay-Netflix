import React from "react";
import "./ProfileBanner.css";
import PlayButton from "../components/PlayButton";
import MoreInfoButton from "../components/MoreInfoButton";

const ProfileBanner: React.FC = () => {
  // Static data for the profile banner
  const bannerData = {
    headline: "Biranjay Kumar Gupta - Software Developer",
    profileSummary:
      "A passionate and results-driven Full-stack Developer with strong expertise in the MERN stack (MongoDB, Express, React, Node.js). With hands-on experience in building scalable web applications, I thrive in solving complex problems and creating user-friendly solutions. I'm eager to apply my knowledge of frontend and backend technologies to contribute to impactful projects. I’m always excited about learning new tools and technologies to stay ahead of industry trends and deliver high-quality code.",
    resumeLink: { url: "https://drive.google.com/file/d/1XDfwY4hV4X48_9pPDPNxHfRC_xDzgYMI/view?usp=sharing" },
    linkedinLink: "https://www.linkedin.com/in/biranjay-kumar-gupta-74941323b/",
    backgroundImage: { url: "https://via.placeholder.com/1500x500" },
  };

  const handlePlayClick = () => {
    window.open(bannerData.resumeLink.url, "_blank");
  };

  const handleLinkedinClick = () => {
    window.open(bannerData.linkedinLink, "_blank");
  };

  return (
    <div
      className="profile-banner"
      style={{ backgroundImage: `url(${bannerData.backgroundImage.url})` }}
    >
      <div className="banner-content">
        <h1 className="banner-headline" id="headline">
          {bannerData.headline}
        </h1>
        <p className="banner-description">{bannerData.profileSummary}</p>

        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="LinkedIn" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
