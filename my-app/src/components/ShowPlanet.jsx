import React, { useState } from 'react';
import { Canvas} from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Planet from './Planet';
import Navigation from './Navigation';
import InfoButton from './InfoButton';
import { planets } from './planetData';

const SolarSystem = () => {
  

  const [currentPlanet, setCurrentPlanet] = useState(0);
  const [isPlanetOpen, setIsPlanetOpen] = useState(false); 

  const handleNext = () => {
    setCurrentPlanet((prev) => (prev + 1) % planets.length);
    setIsPlanetOpen(false); 
  };

  const handlePrev = () => {
    setCurrentPlanet((prev) => (prev - 1 + planets.length) % planets.length);
    setIsPlanetOpen(false);
  };

  const handleTogglePlanet = (shouldOpen) => {
    setIsPlanetOpen(shouldOpen);
  };

  return (
    <div style={{ width: '100vw', height: '100vh', background: 'black' }}>
      <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} intensity={10} />
        <directionalLight intensity={1} position={[20, 0, 100]} />
        <OrbitControls enablePan={false} maxDistance={100} minDistance={3} autoRotate={false} autoRotateSpeed={1} />
        <Stars />

        {planets.map((planet, index) => (
          <Planet
            key={planet.name}
            modelPath={planet.modelPath}
            position={[0, 0, 0]}
            visible={index === currentPlanet}
            isOpen={index === currentPlanet && isPlanetOpen} 
          />
        ))}
      </Canvas>
      <Navigation onNext={handleNext} onPrev={handlePrev} disabled={isPlanetOpen}/>
      <InfoButton planet={planets[currentPlanet]} onToggle={handleTogglePlanet} />
    </div>
  );
};

export default SolarSystem;