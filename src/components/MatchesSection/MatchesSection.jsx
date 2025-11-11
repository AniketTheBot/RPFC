import React from "react";
import "./MatchesSection.css";
import MatchCard from "../MatchCard/MatchCard";

const MatchesSection = () => {
  const pastMatches = [
    { left: "RPFC", mid: "15 - 3", right: "OG FC" },
    { left: "RPFC", mid: "3 - 3", right: "ZINK FC" },
    { left: "RPFC", mid: "4 - 0", right: "DSN FC" },
    { left: "RPFC", mid: "7 - 6", right: "MGFC" },
    { left: "RPFC", mid: "9 - 7", right: "MGFC" },
    { left: "RPFC", mid: "3 - 2", right: "RIMFC" },
  ];

  const futureMatches = [
    { left: "RPFC", mid: "20 NOV", right: "MPFC" },
    { left: "RPFC", mid: "15 DEC", right: "DSN FC" },
  ];

  return (
    <section className="matches-section">
      {/* Left side – Past */}
      <div className="matches-column">
        <h2 className="column-title">PAST</h2>
        {pastMatches.map((m, i) => (
          <MatchCard
            key={i}
            leftTeam={m.left}
            midText={m.mid}
            rightTeam={m.right}
          />
        ))}
      </div>

      {/* Right side – Future */}
      <div className="matches-column">
        <h2 className="column-title">FUTURE</h2>
        {futureMatches.map((m, i) => (
          <MatchCard
            key={i}
            leftTeam={m.left}
            midText={m.mid}
            rightTeam={m.right}
          />
        ))}
      </div>
    </section>
  );
};

export default MatchesSection;
