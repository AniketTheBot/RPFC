import React from "react";
import "./MatchCard.css";
import rpfcLogo from "/CODE/RPFC/frontend/src/assets/rpfc-logo.png";

const MatchCard = ({ leftTeam, midText, rightTeam }) => {
  return (
    <div className="match-card">
      {/* background logo */}
      <img src={rpfcLogo} alt="RPFC Logo" className="match-logo-bg" />

      {/* actual text */}
      <div className="match-content">
        <span className="team left">{leftTeam}</span>
        <span className="mid">{midText}</span>
        <span className="team right">{rightTeam}</span>
      </div>
    </div>
  );
};

export default MatchCard;
