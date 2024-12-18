
import React, { useState } from 'react';

const InfoButton = ({ planet, onToggle }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [isDis, setIsDis] = useState(false);
  const toggleInfo = () => {
    const newShowInfo = !showInfo;
    setShowInfo(newShowInfo);
    onToggle && onToggle(newShowInfo); 
    setIsDis(true);
    setTimeout(function(){
      setIsDis(false);
    },2500)
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
        }}
      >
        {showInfo ? 'Ukryj informacje i zamknij planetę' : 'Pokaż informacje i otwórz planetę'}
      </button>

      {showInfo && (
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