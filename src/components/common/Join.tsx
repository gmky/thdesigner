import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function Join() {
  function Earth() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame(() => {
      if (meshRef.current) {
        meshRef.current.rotation.y += 0.01; // Rotate 0.01 radians per frame
      }
    });

    return (
      <mesh ref={meshRef}>
        <sphereGeometry args={[3, 32, 32]} />
        <meshStandardMaterial attach="material" map={new THREE.TextureLoader().load('/images/123.png')} />
      </mesh>
    );
  }
  return (
    <div
      className="framer-9L1qR framer-PyGGP framer-tvBuf framer-zZPvB framer-1tpzw0m"
      style={{
        width: "auto",
      }}
    >
      <div className="framer-1oe39p4" data-framer-name="CONTENT" id="body">
        <div className="framer-mlsokg">
          <div className="framer-mjxgg5" data-framer-name="Section">
            <div className="framer-en031i" data-framer-name="Blog">
              <div className="framer-1mqpga6-container">
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    placeItems: "center",
                    placeContent: "center",
                    overflow: "visible",
                    background: "rgb(255, 255, 255)",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      aspectRatio: "1 / 1",
                      maxWidth: "800px",
                      maskImage:
                        "radial-gradient(circle at 50% 50%, rgb(0, 0, 0) 60%, rgba(0, 0, 0, 0) 70%)",
                    }}
                  >
                    <Canvas
                      style={{ height: '100%', width: '100%' }}
                      camera={{ position: [4, 4, 4], fov: 75, near: 0.1, far: 1000 }}
                    >
                      <ambientLight intensity={0.5} />
                      <directionalLight position={[5, 5, 5]} intensity={1} />
                      <Earth />
                      <OrbitControls enableZoom={false} />
                    </Canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Join;
