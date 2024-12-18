import React, { useRef, useEffect } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

const Planet = ({ modelPath, position, visible, isOpen }) => {
  const planetRef = useRef();
  const model = useLoader(GLTFLoader, modelPath);
  const mixerRef = useRef(null);
  const actionsRef = useRef([]);

  useEffect(() => {
    if (model.animations.length) {
      const mixer = new THREE.AnimationMixer(model.scene);
      mixerRef.current = mixer;

      const actions = model.animations.map((clip) => {
        const action = mixer.clipAction(clip);
        action.loop = THREE.LoopOnce;
        action.clampWhenFinished = true;
        action.play();
        return action;
      });

      actionsRef.current = actions;
    }
  }, [model]);

  useEffect(() => {
    actionsRef.current.forEach((action) => {
      if (isOpen) {
        action.reset();
        action.time = 0;
        action.timeScale = 1; 
        action.play();
      } else {
        action.reset();
        action.time = action.getClip().duration;
        action.timeScale = -1; 
        action.play();
      }
    });
  }, [isOpen]);

  useFrame((state, delta) => {
    if (mixerRef.current) {
      mixerRef.current.update(delta);
    }
  });

  return (
    <mesh ref={planetRef} position={position} visible={visible}>
      <primitive object={model.scene} />
    </mesh>
  );
};

export default Planet;