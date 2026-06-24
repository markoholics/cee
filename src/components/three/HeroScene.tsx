'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float } from '@react-three/drei'
import * as THREE from 'three'

// Individual orbiting shape for each house
function HouseShape({
  orbitRadius,
  orbitSpeed,
  orbitOffset,
  color,
  shape,
  size,
}: {
  orbitRadius: number
  orbitSpeed: number
  orbitOffset: number
  color: string
  shape: 'octahedron' | 'tetrahedron' | 'dodecahedron' | 'icosahedron'
  size: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const t = clock.getElapsedTime() * orbitSpeed + orbitOffset
    meshRef.current.position.x = Math.cos(t) * orbitRadius
    meshRef.current.position.z = Math.sin(t) * orbitRadius
    meshRef.current.position.y = Math.sin(t * 0.7) * 0.4
    meshRef.current.rotation.x += 0.005
    meshRef.current.rotation.y += 0.008
  })

  const geometry = useMemo(() => {
    switch (shape) {
      case 'octahedron':
        return new THREE.OctahedronGeometry(size, 0)
      case 'tetrahedron':
        return new THREE.TetrahedronGeometry(size, 0)
      case 'dodecahedron':
        return new THREE.DodecahedronGeometry(size, 0)
      case 'icosahedron':
        return new THREE.IcosahedronGeometry(size, 0)
    }
  }, [shape, size])

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.3}
        roughness={0.3}
        metalness={0.6}
        wireframe={false}
      />
    </mesh>
  )
}

// Centre orb
function CentreOrb() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.2
    meshRef.current.rotation.x = clock.getElapsedTime() * 0.1
  })

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.35, 16, 16]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={0.15}
          roughness={0.1}
          metalness={0.8}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  )
}

// Particle field
function Particles() {
  const count = 120
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12
    }
    return pos
  }, [])

  const pointsRef = useRef<THREE.Points>(null)

  useFrame(({ clock }) => {
    if (!pointsRef.current) return
    pointsRef.current.rotation.y = clock.getElapsedTime() * 0.02
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#ffffff"
        size={0.025}
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <pointLight position={[-3, 2, -3]} color="#D4AF37" intensity={1.5} distance={8} />
      <pointLight position={[3, -2, 3]} color="#7C5CFF" intensity={1.5} distance={8} />

      <CentreOrb />
      <Particles />

      {/* Bombay Dreams - gold octahedron */}
      <HouseShape
        orbitRadius={2.2}
        orbitSpeed={0.35}
        orbitOffset={0}
        color="#D4AF37"
        shape="octahedron"
        size={0.28}
      />

      {/* Brandoscopy - cyan tetrahedron */}
      <HouseShape
        orbitRadius={2.2}
        orbitSpeed={0.35}
        orbitOffset={Math.PI * 0.5}
        color="#00D9D4"
        shape="tetrahedron"
        size={0.3}
      />

      {/* Labl.co - magenta dodecahedron */}
      <HouseShape
        orbitRadius={2.2}
        orbitSpeed={0.35}
        orbitOffset={Math.PI}
        color="#FF4D6D"
        shape="dodecahedron"
        size={0.24}
      />

      {/* H2AI - violet icosahedron */}
      <HouseShape
        orbitRadius={2.2}
        orbitSpeed={0.35}
        orbitOffset={Math.PI * 1.5}
        color="#7C5CFF"
        shape="icosahedron"
        size={0.26}
      />
    </>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 1.5, 6], fov: 55 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
      aria-hidden="true"
    >
      <Scene />
    </Canvas>
  )
}
