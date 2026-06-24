'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Data-flow nodes for Brandoscopy
function DataNodes() {
  const groupRef = useRef<THREE.Group>(null)
  const nodeCount = 12
  const lineCount = 16

  const nodes = useMemo(() => {
    return Array.from({ length: nodeCount }, (_, i) => ({
      x: (Math.random() - 0.5) * 3.5,
      y: (Math.random() - 0.5) * 2.5,
      z: (Math.random() - 0.5) * 2,
      size: 0.04 + Math.random() * 0.06,
    }))
  }, [])

  const connections = useMemo(() => {
    const lines: [number, number][] = []
    for (let i = 0; i < lineCount; i++) {
      const a = Math.floor(Math.random() * nodeCount)
      let b = Math.floor(Math.random() * nodeCount)
      while (b === a) b = Math.floor(Math.random() * nodeCount)
      lines.push([a, b])
    }
    return lines
  }, [])

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y = clock.getElapsedTime() * 0.12
    groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.15
  })

  return (
    <group ref={groupRef}>
      {/* Nodes */}
      {nodes.map((node, i) => (
        <mesh key={i} position={[node.x, node.y, node.z]}>
          <sphereGeometry args={[node.size, 8, 8]} />
          <meshStandardMaterial
            color="#00D9D4"
            emissive="#00D9D4"
            emissiveIntensity={0.8}
            roughness={0.2}
            metalness={0.5}
          />
        </mesh>
      ))}

      {/* Connection lines */}
      {connections.map(([a, b], i) => {
        const start = new THREE.Vector3(nodes[a].x, nodes[a].y, nodes[a].z)
        const end = new THREE.Vector3(nodes[b].x, nodes[b].y, nodes[b].z)
        const geo = new THREE.BufferGeometry().setFromPoints([start, end])
        const mat = new THREE.LineBasicMaterial({ color: '#00D9D4', transparent: true, opacity: 0.25 })
        const lineObj = new THREE.Line(geo, mat)
        return <primitive key={i} object={lineObj} />
      })}
    </group>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[2, 2, 2]} color="#00D9D4" intensity={2} distance={8} />
      <pointLight position={[-2, -2, -2]} color="#ffffff" intensity={0.5} distance={6} />
      <DataNodes />
    </>
  )
}

export default function BrandoscopyScene() {
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
