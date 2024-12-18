import React from 'react';

const Navigation = ({ onNext, onPrev, disabled }) => {
  const buttonStyle = {
    padding: '10px',
    fontSize: '16px',
    transition: 'opacity 0.3s ease, visibility 0.3s ease',
    opacity: disabled ? 0 : 1,
    visibility: disabled ? 'hidden' : 'visible',
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
        gap: '10px',
      }}
    >
      <button
        onClick={onPrev}
        style={buttonStyle}
        disabled={disabled}
      >
        ←
      </button>
      <button
        onClick={onNext}
        style={buttonStyle}
        disabled={disabled}
      >
        →
      </button>
    </div>
  );
};

export default Navigation;