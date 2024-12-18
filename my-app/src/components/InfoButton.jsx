import React, { useState } from 'react';

const InfoButton = ({ planet, onToggle }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [isDis, setIsDis] = useState(false);
  const [isVisible, setIsVisible] = useState(false); 

  const toggleInfo = () => {
    if (showInfo) {
      setShowInfo(false);
      setTimeout(() => setIsVisible(false), 1500); 
    } else {
      setIsVisible(true);
      setTimeout(() => setShowInfo(true), 10); 
    }
    onToggle && onToggle(!showInfo);

    
    setIsDis(true);
    setTimeout(() => {
      setIsDis(false);
    }, 2500);
  };

  return (
    <div>
      <button
        onClick={toggleInfo}
        disabled={isDis}
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: 'rgba(255, 255, 255, 0.2)', 
          color: 'white',
          border: '1px solid white',
          borderRadius: '8px',
          cursor: isDis ? 'default' : 'pointer',
          opacity: isDis ? 0.5 : 1, 
          transition: 'opacity 1.5s ease', 
        }}
      >
        {showInfo ? 'Ukryj informacje i zamknij planetę' : 'Pokaż informacje i otwórz planetę'}
      </button>
      {isVisible && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '20px',
            transform: 'translateY(-50%)',
            padding: '20px',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            borderRadius: '10px',
            maxWidth: '400px',
            textAlign: 'center',
            overflowY: 'auto',
            maxHeight: '60vh',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            opacity: showInfo ? 1 : 0, 
            transition: 'opacity 1.5s ease', 
          }}
        >
          <h3>{planet.name}</h3>
          <p>{planet.description}</p>
          <table
            style={{
              width: '100%',
              marginTop: '10px',
              color: 'white',
              borderCollapse: 'collapse',
            }}
          >
            <tbody>
              <tr>
                <td><strong>Masa:</strong></td>
                <td>{planet.mass}</td>
              </tr>
              <tr>
                <td><strong>Średnica:</strong></td>
                <td>{planet.diameter}</td>
              </tr>
              <tr>
                <td><strong>Odległość od Słońca:</strong></td>
                <td>{planet.hfar}</td>
              </tr>
              <tr>
                <td><strong>Atmosfera:</strong></td>
                <td>{planet.atmospheree || 'Brak danych'}</td>
              </tr>
              <tr>
                <td><strong>Temperatura:</strong></td>
                <td>{planet.temp || 'Brak danych'}</td>
              </tr>
              <tr>
                <td><strong>Długość dnia:</strong></td>
                <td>{planet.dlength || 'Brak danych'}</td>
              </tr>
              <tr>
                <td><strong>Długość roku:</strong></td>
                <td>{planet.ylength || 'Brak danych'}</td>
              </tr>
              <tr>
                <td><strong>Księżyce:</strong></td>
                <td>{planet.moons || 'Brak'}</td>
              </tr>
              <tr>
                <td><strong>Geologia:</strong></td>
                <td>{planet.geology || 'Brak danych'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      
    </div>
  );
};

export default InfoButton;
