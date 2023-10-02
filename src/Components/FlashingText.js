import React from 'react';
import "../Styles/FlashingText.css"

const FlashingText = ({ text }) => {
  return (
    <div className="flashing-text">
      {text}
    </div>
  );
}

export default FlashingText;
