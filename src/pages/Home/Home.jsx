import React, { useRef } from "react";
import "./Home.css";
import bg from "/CODE/RPFC/frontend/src/assets/football-field.jpg";
import Header from "../../components/Header/Header";
import InfoSection from "../../components/InfoSection/InfoSection";
import MatchesSection from "../../components/MatchesSection/MatchesSection";
import PlayersSection from "../../components/PlayersSection/PlayersSection";
import rpfcLogo from "/CODE/RPFC/frontend/src/assets/rpfc-logo.png"; // ✅ your logo path

const Home = () => {
  // Section refs
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const membersRef = useRef(null);
  const matchesRef = useRef(null);

  return (
    <div className="home">
      {/* HERO SECTION */}
      <section
        ref={homeRef}
        className="hero"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Header
          homeRef={homeRef}
          aboutRef={aboutRef}
          membersRef={membersRef}
          matchesRef={matchesRef}
        />

        <div className="hero-content">
          <div className="rpfc-wrapper">
            <h1 className="rpfc-title">RPFC</h1>
            <a
              href="https://www.instagram.com/r.p.fc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={rpfcLogo} alt="RPFC Logo" className="rpfc-hero-logo" />
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="who-section">
        <h1 className="who-text">
          ABE HUM
          <br />
          HAI
          <br />
          KONN??
        </h1>
      </section>

      {/* <section className="who-section">
        <div className="who-text-wrapper">
          <h1 className="who-text">
            ABBE HUM HAIN KONN? &nbsp; ABBE HUM HAIN KONN? &nbsp; ABBE HUM HAIN KONN
            WE? &nbsp;
          </h1>
          <h1 className="who-text">
            ABBE HUM HAIN KONN? &nbsp; ABBE HUM HAIN KONN? &nbsp; ABBE HUM HAIN KONN
            WE? &nbsp;
          </h1>
        </div>
      </section> */}

      <div ref={aboutRef}>
        <InfoSection />
      </div>

      {/* WHO WE ARE SECTION */}
      <section className="who-section">
        <h1 className="who-text">
          SO FRR
          <br />
          WHO
          <br />
          ARE WE?
        </h1>
      </section>

      {/* <section className="who-section">
        <div className="who-text-wrapper">
          <h1 className="who-text">
            SO FRR WHO ARE WE? &nbsp; SO FRR WHO ARE WE? &nbsp; SO FRR WHO ARE
            WE? &nbsp;
          </h1>
          <h1 className="who-text">
            SO FRR WHO ARE WE? &nbsp; SO FRR WHO ARE WE? &nbsp; SO FRR WHO ARE
            WE? &nbsp;
          </h1>
        </div>
      </section> */}

      {/* MEMBERS SECTION */}
      <div ref={membersRef}>
        <PlayersSection />
      </div>

      {/* MATCHES SECTION */}
      <div ref={matchesRef}>
        <MatchesSection />
      </div>
    </div>
  );
};

export default Home;
