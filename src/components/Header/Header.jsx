import React from "react";
import "./Header.css";
import { FaInstagram } from "react-icons/fa";
import rpfcLogo from "../../assets/rpfc-logo.png"; // ✅ your logo path

const Header = ({ homeRef, aboutRef, membersRef, matchesRef }) => {
  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="navbar">
      {/* ✅ Left side — clickable logo instead of HOME */}
      <div className="nav-logo" onClick={() => handleScroll(homeRef)}>
        <img src={rpfcLogo} alt="RPFC Logo" className="rpfc-nav-logo" />
      </div>

      {/* ✅ Center links */}
      <ul className="nav-links">
        <li>
          <button onClick={() => handleScroll(aboutRef)}>ABOUT US</button>
        </li>
        <li>
          <button onClick={() => handleScroll(membersRef)}>MEMBERS</button>
        </li>
        <li>
          <button onClick={() => handleScroll(matchesRef)}>MATCHES</button>
        </li>
      </ul>

      {/* ✅ Instagram icon right side */}
      <div className="nav-icon">
        <a
          href="https://www.instagram.com/r.p.fc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="insta-icon" />
        </a>
      </div>
    </header>
  );
};

export default Header;
