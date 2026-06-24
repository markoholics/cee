'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

// Product box form for Labl.co
function ProductBox() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y = clock.getElapsedTime() * 0.25
    groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.15
  })

  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.5}>
      <group ref={groupRef}>
        {/* Main box */}
        <mesh>
          <boxGeometry args={[1, 1.3, 0.7]} />
          <meshStandardMaterial
            color="#FF4D6D"
            emissive="#FF4D6D"
            emissiveIntensity={0.2}
            roughness={0.4}
            metalness={0.3}
          />
        </mesh>
        {/* Lid rim */}
        <mesh position={[0, 0.68, 0]}>
          <boxGeometry args={[1.06, 0.08, 0.76]} />
          <meshStandardMaterial
            color="#CC2D4E"
            roughness={0.3}
            metalness={0.5}
          />
        </mesh>
        {/* Small floating box */}
        <mesh position={[1.0, 0.3, 0.2]} rotation={[0.3, 0.6, 0.2]}>
          <boxGeometry args={[0.35, 0.45, 0.25]} />
          <meshStandardMaterial
            color="#FF7A93"
            emissive="#FF4D6D"
            emissiveIntensity={0.15}
            roughness={0.5}
            metalness={0.2}
          />
        </mesh>
        {/* Tiny accent sphere */}
        <mesh position={[-0.9, -0.4, 0.3]}>
          <sphereGeometry args={[0.15, 12, 12]} />
          <meshStandardMaterial
            color="#FF4D6D"
            emissive="#FF4D6D"
            emissiveIntensity={0.5}
            roughness={0.1}
            metalness={0.8}
          />
        </mesh>
      </group>
    </Float>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 4, 3]} intensity={1} color="#ffffff" />
      <pointLight position={[-2, 2, -2]} color="#FF4D6D" intensity={2} distance={7} />
      <pointLight position={[2, -2, 2]} color="#ffffff" intensity={0.5} distance={5} />
      <ProductBox />
    </>
  )
}

export default function LablScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 4.5], fov: 52 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
      aria-hidden="true"
    >
      <Scene />
    </Canvas>
  )
}
