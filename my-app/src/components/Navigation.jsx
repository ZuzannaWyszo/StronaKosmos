import React from 'react';

const Navigation = ({ onNext, onPrev, disabled }) => {
  const buttonStyle = {
    padding: '20px', 
    fontSize: '24px', 
    transition: 'opacity 2s ease, visibility 1s ease', 
    opacity: disabled ? 0.5 : 1, 
    visibility: disabled ? 'hidden' : 'visible',
    backgroundColor: 'transparent',
    color: 'white',
    border: '2px solid white',
    borderRadius: '50%',
    cursor: disabled ? 'default' : 'pointer',
  };

  return (
    <div
      style={{
        position: 'absolute',
        bottom: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        color: 'white',
        display: 'flex',
        gap: '1000px', 
      }}
    >
      <button onClick={onPrev} style={buttonStyle} disabled={disabled}>
        ←
      </button>
      <button onClick={onNext} style={buttonStyle} disabled={disabled}>
        →
      </button>
    </div>
  );
};

export default Navigation;