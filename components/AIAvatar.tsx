"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Sparkles, RoundedBox } from "@react-three/drei";
import { useRef, Suspense, useMemo } from "react";
import * as THREE from "three";

const SKIN = "#e8b88a";
const HAIR = "#17171c";
const HOODIE = "#1a1a21";
const RED = "#ef4444";
const DEEP_RED = "#7f1d1d";

function HoodieBust() {
  const haloRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (haloRef.current) {
      haloRef.current.rotation.z = state.clock.elapsedTime * 0.4;
    }
    if (groupRef.current) {
      const bob = Math.sin(state.clock.elapsedTime * 1.6) * 0.02;
      groupRef.current.position.y = bob;
    }
  });

  const eyeHighlights = useMemo(
    () => [
      { x: -0.17, y: 0.1, z: 0.47 },
      { x: 0.17, y: 0.1, z: 0.47 },
    ],
    []
  );
  const haloDots = useMemo(
    () =>
      Array.from({ length: 5 }, (_, i) => {
        const angle = (i / 5) * Math.PI * 2;
        return { x: Math.cos(angle) * 1.05, y: Math.sin(angle) * 1.05 };
      }),
    []
  );

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.18} floatIntensity={0.7}>
        <group rotation={[0.12, 0, 0]}>
          <RoundedBox args={[1.7, 1.25, 0.85]} radius={0.3} smoothness={6} position={[0, -0.85, 0]}>
            <meshStandardMaterial color={HOODIE} roughness={0.85} metalness={0.05} />
          </RoundedBox>

          <mesh position={[0, -0.85, 0.44]}>
            <planeGeometry args={[1.7, 1.25]} />
            <meshStandardMaterial color={DEEP_RED} roughness={0.9} transparent opacity={0.35} />
          </mesh>

          <mesh position={[0, -1.25, 0.43]}>
            <boxGeometry args={[1.2, 0.18, 0.05]} />
            <meshStandardMaterial color={DEEP_RED} roughness={0.6} metalness={0.2} emissive={DEEP_RED} emissiveIntensity={0.6} />
          </mesh>

          <mesh position={[0, -0.28, 0]}>
            <cylinderGeometry args={[0.2, 0.24, 0.35, 18]} />
            <meshStandardMaterial color={SKIN} roughness={0.7} />
          </mesh>

          <mesh position={[-0.52, -0.1, 0]}>
            <sphereGeometry args={[0.13, 16, 16]} />
            <meshStandardMaterial color={SKIN} roughness={0.7} />
          </mesh>
          <mesh position={[0.52, -0.1, 0]}>
            <sphereGeometry args={[0.13, 16, 16]} />
            <meshStandardMaterial color={SKIN} roughness={0.7} />
          </mesh>

          <mesh position={[0, 0.02, 0]}>
            <sphereGeometry args={[0.56, 40, 40]} />
            <meshStandardMaterial color={SKIN} roughness={0.55} />
          </mesh>

          <mesh position={[0, 0.34, 0]} scale={[1.08, 0.55, 1.06]}>
            <sphereGeometry args={[0.58, 40, 40]} />
            <meshStandardMaterial color={HAIR} roughness={0.8} />
          </mesh>
          <mesh position={[-0.46, 0.06, 0.08]} scale={[0.34, 0.5, 0.5]}>
            <sphereGeometry args={[0.24, 24, 24]} />
            <meshStandardMaterial color={HAIR} roughness={0.8} />
          </mesh>
          <mesh position={[0.46, 0.06, 0.08]} scale={[0.34, 0.5, 0.5]}>
            <sphereGeometry args={[0.24, 24, 24]} />
            <meshStandardMaterial color={HAIR} roughness={0.8} />
          </mesh>
          <mesh position={[0, -0.05, 0.42]} scale={[0.55, 0.3, 0.4]}>
            <sphereGeometry args={[0.34, 24, 24]} />
            <meshStandardMaterial color={HAIR} roughness={0.8} />
          </mesh>

          {[-0.19, 0.19].map((x) => (
            <mesh key={x} position={[x, 0.09, 0.5]}>
              <sphereGeometry args={[0.055, 16, 16]} />
              <meshStandardMaterial color="#101014" roughness={0.2} />
            </mesh>
          ))}
          {eyeHighlights.map((e, i) => (
            <mesh key={i} position={[e.x + 0.02, e.y + 0.025, e.z + 0.03]}>
              <sphereGeometry args={[0.018, 12, 12]} />
              <meshBasicMaterial color="#ffffff" />
            </mesh>
          ))}

          {[-0.21, 0.21].map((x) => (
            <mesh key={x} position={[x, 0.23, 0.5]} rotation={[0, 0, 0.08]}>
              <boxGeometry args={[0.11, 0.028, 0.03]} />
              <meshStandardMaterial color={HAIR} roughness={0.8} />
            </mesh>
          ))}

          <mesh position={[0, -0.12, 0.53]} rotation={[0, 0, 0]} scale={[1, -1, 1]}>
            <torusGeometry args={[0.14, 0.032, 10, 28, Math.PI]} />
            <meshStandardMaterial color="#8a3a2f" roughness={0.6} />
          </mesh>

          <mesh ref={haloRef} position={[0, 0.05, -0.55]} rotation={[0.18, 0.15, 0]}>
            <torusGeometry args={[0.85, 0.018, 12, 120]} />
            <meshStandardMaterial color={RED} emissive={RED} emissiveIntensity={2.2} transparent opacity={0.85} />
          </mesh>
          {haloDots.map((d, i) => (
            <mesh key={i} position={[d.x, d.y, -0.42]}>
              <sphereGeometry args={[0.045, 12, 12]} />
              <meshBasicMaterial color={i % 2 === 0 ? RED : "#ff8a8a"} transparent opacity={0.9} />
            </mesh>
          ))}
        </group>
      </Float>
    </group>
  );
}

export default function AIAvatar({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative ${className}`}
      onPointerDown={(e) => e.stopPropagation()}
      onPointerMove={(e) => e.stopPropagation()}
    >
      <Canvas
        camera={{ position: [0, 0.4, 4.6], fov: 42 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.45} />
        <directionalLight position={[3, 5, 4]} intensity={1.1} color="#ffffff" />
        <pointLight position={[-3, 1, 2.5]} intensity={22} color={RED} />
        <pointLight position={[3, -1, -2]} intensity={16} color="#4b1030" />
        <Suspense fallback={null}>
          <HoodieBust />
          <Sparkles count={36} scale={[3.4, 2.6, 1.6]} size={2.6} speed={0.4} color={RED} opacity={0.65} />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping
          autoRotate
          autoRotateSpeed={1.4}
          minPolarAngle={Math.PI * 0.3}
          maxPolarAngle={Math.PI * 0.7}
        />
      </Canvas>
    </div>
  );
}