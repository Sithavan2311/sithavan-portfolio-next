"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, Sparkles, RoundedBox } from "@react-three/drei";
import { useRef, Suspense, useMemo } from "react";
import * as THREE from "three";

const BLOOD_RED = "#dc2626";
const HOT_RED = "#ef4444";
const DEEP_RED = "#7f1d1d";
const DARK_PLASMA = "#991b1b";

function OrbitingRing({
  radius,
  color,
  speed,
  tilt,
  nodeCount = 24,
  nodeSize = 0.06,
}: {
  radius: number;
  color: string;
  speed: number;
  tilt: number;
  nodeCount?: number;
  nodeSize?: number;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const nodes = useMemo(() => {
    const arr: { angle: number; offset: number }[] = [];
    for (let i = 0; i < nodeCount; i++) {
      arr.push({ angle: (i / nodeCount) * Math.PI * 2, offset: (i % 2) * nodeSize * 2 });
    }
    return arr;
  }, [nodeCount, nodeSize]);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * speed;
  });

  return (
    <group ref={groupRef} rotation={[tilt, 0.4, 0]}>
      <mesh>
        <torusGeometry args={[radius, 0.015, 12, 200]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.4} transparent opacity={0.6} />
      </mesh>
      <mesh>
        <torusGeometry args={[radius, nodeSize, 8, 80]} />
        <meshBasicMaterial color={color} transparent opacity={0.25} wireframe />
      </mesh>
      {nodes.map((node, i) => (
        <mesh key={i} position={[Math.cos(node.angle) * radius, node.offset, Math.sin(node.angle) * radius]}>
          <sphereGeometry args={[nodeSize, 12, 12]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={2}
            roughness={0.2}
            metalness={0.4}
          />
        </mesh>
      ))}
    </group>
  );
}

function CentralCore() {
  const groupRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.2;
    groupRef.current.rotation.x += delta * 0.05;
    if (innerRef.current) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 2.4) * 0.08;
      innerRef.current.scale.setScalar(pulse);
    }
  });
  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <Float speed={1.8} rotationIntensity={0.3} floatIntensity={1.2}>
        <RoundedBox args={[1.6, 1.6, 1.6]} radius={0.25} smoothness={4}>
          <meshStandardMaterial
            color={DEEP_RED}
            emissive={DARK_PLASMA}
            emissiveIntensity={0.6}
            roughness={0.15}
            metalness={0.8}
            wireframe
            transparent
            opacity={0.85}
          />
        </RoundedBox>
      </Float>
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[0.62, 0]} />
        <meshStandardMaterial
          color={HOT_RED}
          emissive={HOT_RED}
          emissiveIntensity={1.8}
          roughness={0.1}
          metalness={0.3}
        />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[0.98, 0]} />
        <meshBasicMaterial color={BLOOD_RED} wireframe transparent opacity={0.28} />
      </mesh>
      <pointLight intensity={4} distance={14} color={HOT_RED} />
      <pointLight intensity={1.6} distance={8} color="#ffffff" />
    </group>
  );
}

function TorusKnotRing() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.12;
    ref.current.rotation.y += delta * 0.2;
  });
  return (
    <mesh ref={ref} position={[0, 0, -2.5]}>
      <torusKnotGeometry args={[2.6, 0.35, 128, 24, 3, 5]} />
      <meshStandardMaterial
        color={DEEP_RED}
        emissive={DARK_PLASMA}
        emissiveIntensity={0.35}
        wireframe
        transparent
        opacity={0.5}
        metalness={0.6}
        roughness={0.3}
      />
    </mesh>
  );
}

function FloatingCrystals() {
  const shapes = useMemo(
    () => [
      { position: [-7, 2.8, -3] as const, color: HOT_RED, size: 0.5 },
      { position: [7, 2.8, -2] as const, color: BLOOD_RED, size: 0.55 },
      { position: [-7.5, -2.8, -1] as const, color: "#f87171", size: 0.4 },
      { position: [7.2, -2.8, -4] as const, color: DARK_PLASMA, size: 0.5 },
      { position: [-4, 3.9, -5] as const, color: HOT_RED, size: 0.38 },
      { position: [4.2, 3.9, -5] as const, color: "#b91c1c", size: 0.45 },
      { position: [0, -3.6, -3] as const, color: "#fca5a5", size: 0.35 },
    ],
    []
  );

  return (
    <>
      {shapes.map((s, i) => (
        <Float key={i} speed={1.2 + i * 0.25} rotationIntensity={1.4} floatIntensity={2.6}>
          <mesh position={s.position}>
            <octahedronGeometry args={[s.size]} />
            <meshStandardMaterial
              color={s.color}
              roughness={0.1}
              metalness={0.9}
              emissive={s.color}
              emissiveIntensity={0.45}
              flatShading
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

function generateDustPositions(count: number) {
  let seed = 1337;
  const rand = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i += 3) {
    positions[i] = (rand() - 0.5) * 30;
    positions[i + 1] = (rand() - 0.5) * 18;
    positions[i + 2] = (rand() - 0.5) * 20 - 3;
  }
  return positions;
}

function DustParticles() {
  const particles = useMemo(() => generateDustPositions(600), []);
  const pointsRef = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.015;
  });
  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[particles, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color={HOT_RED}
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function Scene() {
  return (
    <>
      <fog attach="fog" args={["#000000", 9, 22]} />
      <ambientLight intensity={0.35} color="#ffffff" />
      <directionalLight position={[6, 6, 6]} intensity={1.2} color="#ffe4e6" />
      <pointLight position={[-6, -4, 4]} intensity={1} color={HOT_RED} />
      <pointLight position={[6, 4, -4]} intensity={0.9} color={BLOOD_RED} />
      <CentralCore />
      <OrbitingRing radius={2.7} color={HOT_RED} speed={0.5} tilt={0.55} nodeCount={28} />
      <OrbitingRing radius={3.5} color={BLOOD_RED} speed={-0.38} tilt={1.15} nodeCount={34} nodeSize={0.05} />
      <OrbitingRing radius={4.4} color={DARK_PLASMA} speed={0.3} tilt={0.25} nodeCount={40} nodeSize={0.04} />
      <TorusKnotRing />
      <FloatingCrystals />
      <DustParticles />
      <Stars radius={80} depth={50} count={3000} factor={4} saturation={0} fade speed={0.8} />
      <Sparkles count={160} scale={15} size={3} speed={0.45} color={HOT_RED} />
      <Sparkles count={90} scale={11} size={2.2} speed={0.35} color="#ffffff" />
    </>
  );
}

export default function ThreeDBackground() {
  return (
    <div className="fixed inset-0 z-0 bg-black">
      <Canvas
        camera={{ position: [0, 0, 8.5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: false }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}