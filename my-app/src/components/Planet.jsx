import React, { useRef, useEffect } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Planet = ({ modelPath, position, visible, isRotating }) => {
  const planetRef = useRef();
  const model = useLoader(GLTFLoader, modelPath);

 
  useFrame(() => {
    if (isRotating && planetRef.current && visible) {
      
      planetRef.current.rotation.y += 0.001;
      //planetRef.current.rotation.x += 0.000005;
    }
  });

  return (
    <mesh ref={planetRef} position={position} visible={visible}>
      <primitive object={model.scene} />
    </mesh>
  );
};

export default Planet;