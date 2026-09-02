"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, Sparkles } from "@react-three/drei";
import { useRef, Suspense, useMemo } from "react";
import * as THREE from "three";

function OrbitingRing({
  radius,
  color,
  speed,
  tilt,
}: {
  radius: number;
  color: string;
  speed: number;
  tilt: number;
}) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = state.clock.elapsedTime * speed;
  });
  return (
    <group ref={ref} rotation={[tilt, 0.4, 0]}>
      <mesh>
        <torusGeometry args={[radius, 0.03, 16, 128]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.9} transparent opacity={0.85} />
      </mesh>
      <mesh>
        <torusGeometry args={[radius, 0.3, 8, 64]} />
        <meshBasicMaterial color={color} transparent opacity={0.08} wireframe />
      </mesh>
    </group>
  );
}

function CentralCore() {
  const ref = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.25;
  });
  return (
    <group ref={ref}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh>
          <icosahedronGeometry args={[1.4, 1]} />
          <meshStandardMaterial color="#0ea5e9" wireframe transparent opacity={0.9} />
        </mesh>
      </Float>
      <mesh>
        <icosahedronGeometry args={[0.55, 0]} />
        <meshStandardMaterial color="#0ea5e9" emissive="#0ea5e9" emissiveIntensity={0.7} roughness={0.2} />
      </mesh>
      <pointLight intensity={1.5} distance={10} color="#0ea5e9" />
    </group>
  );
}

function FloatingShapes() {
  const shapes = useMemo(
    () => [
      { position: [-6.5, 2.5, -3], color: "#f472b6", size: 0.55, shape: "diamond" as const },
      { position: [6.5, 2.5, -2], color: "#34d399", size: 0.6, shape: "sphere" as const },
      { position: [-7, -2.5, -1], color: "#fbbf24", size: 0.45, shape: "torus" as const },
      { position: [6.8, -2.5, -4], color: "#818cf8", size: 0.5, shape: "diamond" as const },
      { position: [0, 3.8, -5], color: "#22d3ee", size: 0.4, shape: "sphere" as const },
      { position: [-3.5, -3.5, -2], color: "#f97316", size: 0.4, shape: "torus" as const },
      { position: [3.5, 3.6, -5], color: "#a78bfa", size: 0.5, shape: "diamond" as const },
    ],
    []
  );

  return (
    <>
      {shapes.map((s, i) => (
        <Float key={i} speed={1.4 + i * 0.3} rotationIntensity={1.2} floatIntensity={2.5}>
          <mesh position={s.position as [number, number, number]}>
            {s.shape === "sphere" ? (
              <sphereGeometry args={[s.size, 24, 24]} />
            ) : s.shape === "torus" ? (
              <torusGeometry args={[s.size, s.size / 2.5, 16, 48]} />
            ) : (
              <octahedronGeometry args={[s.size]} />
            )}
            <meshStandardMaterial
              color={s.color}
              roughness={0.25}
              metalness={0.2}
              emissive={s.color}
              emissiveIntensity={0.25}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

function RotatingRingGlow() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.5;
    ref.current.rotation.y += delta * 0.3;
  });
  return (
    <mesh ref={ref} position={[0, 0, -3]}>
      <torusGeometry args={[5.5, 0.02, 16, 128]} />
      <meshBasicMaterial color="#0ea5e9" transparent opacity={0.1} />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.85} />
      <directionalLight position={[5, 5, 5]} intensity={1.4} color="#ffffff" />
      <pointLight position={[-5, -3, 3]} intensity={0.8} color="#f472b6" />
      <pointLight position={[5, 3, -3]} intensity={0.8} color="#34d399" />
      <CentralCore />
      <OrbitingRing radius={2.6} color="#0ea5e9" speed={0.45} tilt={0.6} />
      <OrbitingRing radius={3.4} color="#f472b6" speed={-0.35} tilt={1.1} />
      <OrbitingRing radius={4.2} color="#34d399" speed={0.3} tilt={0.3} />
      <RotatingRingGlow />
      <FloatingShapes />
      <Stars radius={70} depth={50} count={2500} factor={4} saturation={0.6} fade speed={1} />
      <Sparkles count={180} scale={14} size={3} speed={0.5} color="#0ea5e9" />
      <Sparkles count={100} scale={10} size={2} speed={0.4} color="#f472b6" />
    </>
  );
}

export default function ThreeDBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
