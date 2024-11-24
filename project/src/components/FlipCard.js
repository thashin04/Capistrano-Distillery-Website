import React, { useState } from 'react';
import './index.css';

const FlipCard = ({ frontImage, backImage }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flip-card" onClick={handleClick}>
      <div className={`flip-card-inner ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front Side */}
        <div className="flip-card-front">
          <img src={frontImage} alt="Front Side" className="object-cover rounded-3xl w-auto h-full" />
        </div>

        {/* Back Side */}
        <div className="flip-card-back">
          <img src={backImage} alt="Back Side" className="object-cover rounded-3xl w-auto h-full" />
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
