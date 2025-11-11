import React from "react";
import "./MatchCard.css";
import { useNavigate } from "react-router-dom"; // for later navigation

const MatchCard = ({ leftTeam, midText, rightTeam }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // mock for now – later we’ll route to /match/:id
    console.log(`Clicked on match: ${leftTeam} vs ${rightTeam}`);
    // navigate(`/match/${leftTeam}-vs-${rightTeam}`);
  };

  return (
    <div className="match-card" onClick={handleClick}>
      <span className="team left">{leftTeam}</span>
      <span className="mid">{midText}</span>
      <span className="team right">{rightTeam}</span>
    </div>
  );
};

export default MatchCard;
