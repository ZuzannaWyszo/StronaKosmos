import React, { useState } from 'react';

const InfoButton = ({ planet, onToggle }) => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo((prev) => !prev);
    onToggle && onToggle(!showInfo); 
  };

  return (
    <div>
      
      <button
        onClick={toggleInfo}
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          padding: '10px 20px',
          fontSize: '16px',
        }}
      >
        {showInfo ? 'Ukryj informacje' : 'Pokaż informacje'}
      </button>

      
      {showInfo && (
        <div
          style={{
            position: 'absolute',
            top: '50%', 
            right: '20px', 
            transform: 'translateY(-50%)', 
            padding: '20px',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            borderRadius: '10px',
            maxWidth: '300px',
            textAlign: 'center',
          }}
        >
          <h3>{planet.name}</h3>
          <p>{planet.description}</p>
        </div>
      )}
    </div>
  );
};

export default InfoButton;