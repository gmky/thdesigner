import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function Join() {
  return (
    <Canvas
      style={{ height: '100vh', width: '100vw' }}
      camera={{ position: [4, 4, 4], fov: 75, near: 0.1, far: 1000 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <mesh>
        <sphereGeometry args={[2.3, 32, 32]} />
        <meshStandardMaterial attach="material" map={new THREE.TextureLoader().load('/images/123.png')} />
      </mesh>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}

export default Join;
