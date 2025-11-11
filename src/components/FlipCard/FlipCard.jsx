import React, { useState, useEffect } from "react";

const FlipCard = ({ title, text }) => {
  const [typedText, setTypedText] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let index = 0;
    let timeout;

    if (isHovered) {
      const type = () => {
        if (index < text.length) {
          setTypedText((prev) => prev + text.charAt(index));
          index++;
          timeout = setTimeout(type, 25); // typing speed
        }
      };
      type();
    } else {
      setTypedText(""); // reset when not hovered
    }

    return () => clearTimeout(timeout);
  }, [isHovered, text]);

  return (
    <div
      className="info-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-inner">
        {/* Front */}
        <div className="card-front">
          <h2 dangerouslySetInnerHTML={{ __html: title }} />
        </div>

        {/* Back */}
        <div className="card-back">
          <p>{typedText}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
