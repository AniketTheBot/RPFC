import React from "react";
import "./PlayerCard.css";

const PlayerCard = ({ img, name, position, onImageLoad }) => {
  return (
    <div className="player-card">
      <div className="player-shape">
        <img
          src={img}
          alt={name}
          className="player-photo"
          onLoad={onImageLoad}
        />
        <div className="player-overlay">
          <h3>{name}</h3>
          <p>{position}</p>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
