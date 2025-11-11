import React, { useEffect, useState } from "react";
import "./PlayersSection.css";
import PlayerCard from "../PlayerCard/PlayerCard";

import AdityaYadav from "/CODE/RPFC/frontend/src/assets/playerPhotos/AdityaYadav.jpg";
import AnshumanYadav from "/CODE/RPFC/frontend/src/assets/playerPhotos/AnshumanYadav.jpg";
import BonaAmingo from "/CODE/RPFC/frontend/src/assets/playerPhotos/BonaAmingo.jpg";
import Diwas from "/CODE/RPFC/frontend/src/assets/playerPhotos/Diwas.jpg";
import LakshAnand from "/CODE/RPFC/frontend/src/assets/playerPhotos/Laksh Anand.jpg";
import ShaadNoor from "/CODE/RPFC/frontend/src/assets/playerPhotos/ShaadNoor.jpg";
import ShauryaVeer from "/CODE/RPFC/frontend/src/assets/playerPhotos/ShauryaVeer.jpg";
import Tarush from "/CODE/RPFC/frontend/src/assets/playerPhotos/Tarush.jpg";
import Vihaan from "/CODE/RPFC/frontend/src/assets/playerPhotos/vihaan.jpg";
import Yash from "/CODE/RPFC/frontend/src/assets/playerPhotos/Yash.jpg";

const PlayersSection = () => {
  const players = [
    { name: "Aditya Yadav", position: "Defence", img: AdityaYadav },
    { name: "Anshuman Yadav", position: "Forward", img: AnshumanYadav },
    { name: "Aayaan", position: "Forward", img: BonaAmingo },
    { name: "Diwas", position: "Defence", img: Diwas },
    { name: "Laksh Anand", position: "Forward", img: LakshAnand },
    { name: "Shaad Noor", position: "Defence", img: ShaadNoor },
    { name: "Shaurya Veer", position: "Defence", img: ShauryaVeer },
    { name: "Tarush", position: "Defence", img: Tarush },
    { name: "Vihaan", position: "Mid-fielder", img: Vihaan },
    { name: "Yash", position: "Goalkeeper", img: Yash },
  ];
  const [loadedCount, setLoadedCount] = useState(0);
  const [allLoaded, setAllLoaded] = useState(false);

  useEffect(() => {
    if (loadedCount === players.length) {
      setAllLoaded(true);
    }
  }, [loadedCount, players.length]);

  const handleImageLoad = () => {
    setLoadedCount((prev) => prev + 1);
  };

  return (
    <section className="players-section">
      {!allLoaded && (
        <div className="loader-container">
          <div className="loader"></div>
          <p>Loading Players...</p>
        </div>
      )}
      <h2 className="players-title">THE SQUAD</h2>
      <div className={`players-scroll ${allLoaded ? "visible" : "hidden"}`}>
        {players.map((player, index) => (
          <PlayerCard
            key={index}
            img={player.img}
            name={player.name}
            position={player.position}
            onImageLoad={handleImageLoad}
          />
        ))}
      </div>
    </section>
  );
};

export default PlayersSection;
