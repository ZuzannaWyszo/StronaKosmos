import React from 'react';

const Navigation = ({ onNext, onPrev }) => {
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
      <button onClick={onPrev} style={{ padding: '10px', fontSize: '16px' }}>
      ←
      </button>
      <button onClick={onNext} style={{ padding: '10px', fontSize: '16px' }}>
      →
      </button>
      
    </div>
  );
};

export default Navigation;