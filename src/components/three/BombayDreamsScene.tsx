'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Particle spotlight effect for Bombay Dreams
function SpotlightParticles() {
  const count = 200
  const pointsRef = useRef<THREE.Points>(null)

  const { positions, speeds } = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const spd = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2
      const radius = Math.random() * 1.8
      pos[i * 3] = Math.cos(angle) * radius
      pos[i * 3 + 1] = (Math.random() - 0.5) * 4
      pos[i * 3 + 2] = Math.sin(angle) * radius
      spd[i] = 0.1 + Math.random() * 0.4
    }
    return { positions: pos, speeds: spd }
  }, [])

  const posRef = useRef(new Float32Array(positions))

  useFrame(({ clock }) => {
    if (!pointsRef.current) return
    const geo = pointsRef.current.geometry
    const pos = geo.attributes.position.array as Float32Array
    const t = clock.getElapsedTime()
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] += speeds[i] * 0.008
      if (pos[i * 3 + 1] > 2) {
        pos[i * 3 + 1] = -2
      }
    }
    geo.attributes.position.needsUpdate = true
    pointsRef.current.rotation.y = t * 0.1
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
        color="#D4AF37"
        size={0.04}
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  )
}

function GoldStar() {
  const meshRef = useRef<THREE.Mesh>(null)
  useFrame(({ clock }) => {
    if (!meshRef.current) return
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.3
    meshRef.current.rotation.z = clock.getElapsedTime() * 0.15
  })
  return (
    <mesh ref={meshRef}>
      <octahedronGeometry args={[0.6, 0]} />
      <meshStandardMaterial
        color="#D4AF37"
        emissive="#D4AF37"
        emissiveIntensity={0.5}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 3, 0]} color="#D4AF37" intensity={3} distance={6} />
      <pointLight position={[2, -1, 2]} color="#ffffff" intensity={0.8} distance={5} />
      <SpotlightParticles />
      <GoldStar />
    </>
  )
}

export default function BombayDreamsScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
      aria-hidden="true"
    >
      <Scene />
    </Canvas>
  )
}
