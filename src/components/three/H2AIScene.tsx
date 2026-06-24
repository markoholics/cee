'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Neural lattice for H2AI
function NeuralLattice() {
  const groupRef = useRef<THREE.Group>(null)

  const layers = [
    { count: 3, x: -1.5 },
    { count: 5, x: -0.5 },
    { count: 5, x: 0.5 },
    { count: 3, x: 1.5 },
  ]

  const nodePositions = useMemo(() => {
    return layers.flatMap(({ count, x }) =>
      Array.from({ length: count }, (_, i) => {
        const spacing = 0.55
        const y = (i - (count - 1) / 2) * spacing
        return { x, y, z: 0, layerCount: count, layerX: x }
      })
    )
  }, [])

  // Build connections between adjacent layers
  const connections = useMemo(() => {
    const lines: [number[], number[]][] = []
    let offset = 0
    for (let l = 0; l < layers.length - 1; l++) {
      const currCount = layers[l].count
      const nextCount = layers[l + 1].count
      for (let a = 0; a < currCount; a++) {
        for (let b = 0; b < nextCount; b++) {
          const nodeA = nodePositions[offset + a]
          const nodeB = nodePositions[offset + currCount + b]
          lines.push(
            [[nodeA.x, nodeA.y, 0], [nodeB.x, nodeB.y, 0]]
          )
        }
      }
      offset += currCount
    }
    return lines
  }, [nodePositions])

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.4
    groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.1
  })

  return (
    <group ref={groupRef}>
      {/* Connection lines */}
      {connections.map(([a, b], i) => {
        const start = new THREE.Vector3(a[0], a[1], a[2])
        const end = new THREE.Vector3(b[0], b[1], b[2])
        const geo = new THREE.BufferGeometry().setFromPoints([start, end])
        const mat = new THREE.LineBasicMaterial({ color: '#7C5CFF', transparent: true, opacity: 0.2 })
        const lineObj = new THREE.Line(geo, mat)
        return <primitive key={i} object={lineObj} />
      })}
      {/* Nodes */}
      {nodePositions.map((pos, i) => (
        <mesh key={i} position={[pos.x, pos.y, pos.z]}>
          <sphereGeometry args={[0.07, 10, 10]} />
          <meshStandardMaterial
            color="#7C5CFF"
            emissive="#7C5CFF"
            emissiveIntensity={0.9}
            roughness={0.1}
            metalness={0.5}
          />
        </mesh>
      ))}
    </group>
  )
}

// Animated signal pulse along a path
function SignalPulse() {
  const meshRef = useRef<THREE.Mesh>(null)
  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const t = (clock.getElapsedTime() * 0.5) % 1
    meshRef.current.position.x = THREE.MathUtils.lerp(-1.5, 1.5, t)
    meshRef.current.position.y = Math.sin(t * Math.PI) * 0.2
    ;(meshRef.current.material as THREE.MeshStandardMaterial).opacity = Math.sin(t * Math.PI)
  })
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.08, 8, 8]} />
      <meshStandardMaterial
        color="#9E84FF"
        emissive="#9E84FF"
        emissiveIntensity={1}
        transparent
        opacity={1}
      />
    </mesh>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 2, 3]} color="#7C5CFF" intensity={2.5} distance={8} />
      <pointLight position={[0, -2, -3]} color="#5C3FCC" intensity={1} distance={6} />
      <NeuralLattice />
      <SignalPulse />
    </>
  )
}

export default function H2AIScene() {
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
