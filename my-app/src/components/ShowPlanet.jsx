import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Planet from './Planet';
import Navigation from './Navigation';
import InfoButton from './InfoButton'

const SolarSystem = () => {
  const planets = [
    { name: 'Ziemia', modelPath: '/models/earth.glb',description: 'Trzecia planeta od Słońca, znana jako Błękitna Planeta.'  },
    { name: 'Wenus', modelPath: '/models/sun.glb',description: 'Druga planeta od Słońca, znana z wysokiej temperatury i gęstej atmosfery.'  },
  ];

  const [currentPlanet, setCurrentPlanet] = useState(0);
  const [isRotating, setIsRotating] = useState(true);

  const handleNext = () => {
    setCurrentPlanet((prev) => (prev + 1) % planets.length);
  };

  const handlePrev = () => {
    setCurrentPlanet((prev) => (prev - 1 + planets.length) % planets.length);
  };
  const toggleRotation = () => {
    setIsRotating(prev => !prev); 
  };
  
  return (
    <div style={{ width: '100vw', height: '100vh', background:'black' }}>
      <Canvas camera={{ position: [0, 0, 50], fov: 50 }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} intensity={100} />
        <directionalLight intensity={5} position={[20,0,100]} ></directionalLight>
        <OrbitControls enablePan={false} maxDistance={100} minDistance={1} autoRotate={false} autoRotateSpeed={1}/>
        <Stars  />
        
        {planets.map((planet, index) => (
          <Planet
            key={planet.name}
            modelPath={planet.modelPath}
            position={[0, 0, 0]}
            visible={index === currentPlanet} 
            isRotating={isRotating}
          />
        ))}
      </Canvas>
      <Navigation onNext={handleNext} onPrev={handlePrev} />
      <button 
        style={{
          position: 'absolute', 
          top: '10px', 
          left: '10px', 
          padding: '10px', 
          backgroundColor: '#fff', 
          borderRadius: '5px', 
          fontSize: '14px'
        }} 
        onClick={toggleRotation}
      >
        {isRotating ? 'Zatrzymaj obrót' : 'Włącz obrót'}
      </button>
      <InfoButton planet={planets[currentPlanet]} />
    </div>
  );
};

export default SolarSystem;