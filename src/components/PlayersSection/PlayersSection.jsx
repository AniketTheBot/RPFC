import React, { useEffect, useState } from "react";
import "./PlayersSection.css";
import PlayerCard from "../PlayerCard/PlayerCard";

import AdityaYadav from "../../assets/playerPhotos/AdityaYadav.jpg";
import AnshumanYadav from "../../assets/playerPhotos/AnshumanYadav.jpg";
import Diwas from "../../assets/playerPhotos/Diwas.jpg";
import LakshAnand from "../../assets/playerPhotos/Laksh Anand.jpg";
import ShaadNoor from "../../assets/playerPhotos/ShaadNoor.jpg";
import ShauryaVeer from "../../assets/playerPhotos/ShauryaVeer.jpg";
import Tarush from "../../assets/playerPhotos/Tarush.jpg";
import Vihaan from "../../assets/playerPhotos/vihaan.jpg";
import Yash from "../../assets/playerPhotos/Yash.jpg";
import Ashmit from "../../assets/playerPhotos/Ashmit.jpeg";
import Veer from "../../assets/playerPhotos/Veer.JPG";



const PlayersSection = () => {
  const players = [
    { name: "Ashmit (C)", position: "Midfielder", img: Ashmit },
    { name: "Veer", position: "Forward", img: Veer },
    { name: "Aditya Yadav", position: "Defence", img: AdityaYadav },
    { name: "Anshuman Yadav", position: "Forward", img: AnshumanYadav },
    { name: "Diwas", position: "Defence", img: Diwas },
    { name: "Laksh Anand", position: "Forward", img: LakshAnand },
    { name: "Shaad Noor", position: "Defence", img: ShaadNoor },
    { name: "Shauryavir", position: "Defence", img: ShauryaVeer },
    { name: "Tarush", position: "Defence", img: Tarush },
    { name: "Vihaan", position: "Midfielder", img: Vihaan },
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
