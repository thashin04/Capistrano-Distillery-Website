import React, { useState } from 'react';
import './index.css';

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flip-card" onClick={handleClick}>
      <div className={`flip-card-inner ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front Side */}
        <div className="flip-card-front">
          <h2 className="flip-card-text gabarito-regular">Front Side</h2>
        </div>

        {/* Back Side */}
        <div className="flip-card-back">
          <h2 className="flip-card-text gabarito-regular">Back Side</h2>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;