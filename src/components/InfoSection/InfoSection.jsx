import React from "react";
import "./InfoSection.css";
import FlipCard from "../FlipCard/FlipCard";

const InfoSection = () => {
  return (
    <section className="info-section">
      <FlipCard
        title="ORIGIN"
        text=" RPFC began as a small group of passionate footballers playing in a modest park within our society. What started as casual evening games soon turned into organized matches against nearby teams. With every match, our skills, spirit, and team grew stronger. As our passion expanded, so did our ambitions - we moved to a better ground, attracted more talented players, and eventually secured sponsors. From humble beginnings to becoming a recognized local club, RPFC's journey reflects teamwork, dedication, and love for the game."
      />
      <FlipCard
        title="FUTURE"
        text=" Looking ahead, RPFC aims to reach new heights by competing in major tournaments and making a mark beyond the pitch. Our vision is not only to grow as a team but also to use our platform to promote meaningful causes and inspire others through our journey. With determination, unity, and passion for the sport, we hope to continue evolving and creating a lasting impact both in football and in our community."
      />
      <FlipCard
        title={"WHAT<br>WE DO"}
        text=" At present, RPFC proudly collaborates with Youth Organ Donation Awareness (YODA) to promote the noble cause of organ donation and organ wellness through the power of sports. We believe that football can inspire change, unite communities, and spread awareness about vital issues. Through our matches, events, and outreach efforts, we strive to encourage young people to understand the importance of organ donation and contribute to building a healthier, more compassionate society."
      />
    </section>
  );
};

export default InfoSection;
