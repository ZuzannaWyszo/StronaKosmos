import React, { useState, useEffect, useRef } from 'react';

const PlanetMenu = ({ planets, onPlanetSelect, isDis }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); 
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handlePlanetSelect = (planetIndex) => {
    onPlanetSelect(planetIndex);
    setIsMenuOpen(false); 
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
      setIsMenuOpen(false); 
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div style={{ position: 'absolute', top: 20, right: 20, zIndex: 10 }}>
      
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        disabled={isDis}
        style={{
            position: 'absolute',
            top: '20px',
            right: isMenuOpen ? '250px' : '0', 
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            borderRadius: '5px',
            border: 'none',
            cursor: isDis ? 'default' : 'pointer',
            opacity: isDis ? 0.5 : 1, 
            visibility: isDis ? 'hidden' : 'visible', 
            transition: 'opacity 1.5s ease', 
  }}
>
  {isMenuOpen ? 'X' : 'Wybierz planetę'}
</button>

      
      <div
        ref={menuRef}
        style={{
          position: 'fixed',
          top: '0',
          right: isMenuOpen ? '0' : '-250px',
          width: '250px',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          color: 'white',
          transition: 'right 0.3s ease', 
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
        }}
      >
        <ul
          style={{
            padding: '20px',
            listStyleType: 'none',
            margin: 0,
            overflowY: 'auto',
          }}
        >
          {planets.map((planet, index) => (
            <li
              key={planet.name}
              onClick={() => handlePlanetSelect(index)}
              style={{
                padding: '10px 0',
                borderBottom: '1px solid #fff',
                cursor: 'pointer',
                textAlign: 'center',
                transition: 'background-color 0.3s',
              }}
            >
              {planet.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlanetMenu;