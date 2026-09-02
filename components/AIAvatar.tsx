"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Sparkles, RoundedBox } from "@react-three/drei";
import { useRef, Suspense, useMemo } from "react";
import * as THREE from "three";

const SKIN = "#eeb289";
const SKIN_SHADOW = "#d99a70";
const HAIR = "#241b16";
const IRIS = "#4a2f1a";
const LIP = "#b06a5e";
const SHIRT = "#23232c";
const SHIRT_ACCENT = "#7f1d1d";
const RED = "#ef4444";

function femaleEyeSide(x: number): boolean {
  return x < 0;
}

function HumanPortrait() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      const bob = Math.sin(state.clock.elapsedTime * 1.4) * 0.022;
      groupRef.current.position.y = bob;
    }
  });

  const hairFringe = useMemo(
    () =>
      [
        { x: -0.3, y: 0.42, z: 0.4, sx: 0.34, sy: 0.16, sz: 0.24 },
        { x: -0.08, y: 0.46, z: 0.46, sx: 0.3, sy: 0.15, sz: 0.2 },
        { x: 0.16, y: 0.44, z: 0.44, sx: 0.3, sy: 0.16, sz: 0.22 },
        { x: 0.32, y: 0.38, z: 0.36, sx: 0.28, sy: 0.15, sz: 0.2 },
      ],
    []
  );

  return (
    <group ref={groupRef}>
      <Float speed={1.8} rotationIntensity={0.12} floatIntensity={0.6}>
        <group rotation={[0.08, 0, 0]}>
          {/* Torso — relaxed crew-neck tee */}
          <RoundedBox args={[1.65, 1.3, 0.85]} radius={0.32} smoothness={6} position={[0, -1.0, 0]}>
            <meshStandardMaterial color={SHIRT} roughness={0.9} metalness={0} />
          </RoundedBox>
          <mesh position={[0, -0.32, 0]}>
            <torusGeometry args={[0.23, 0.1, 16, 28]} />
            <meshStandardMaterial color={SHIRT_ACCENT} roughness={0.85} />
          </mesh>
          <mesh position={[0, -1.55, 0]}>
            <planeGeometry args={[1.65, 1.3]} />
            <meshStandardMaterial color="#1b1b22" roughness={1} />
          </mesh>

          {/* Neck */}
          <mesh position={[0, -0.62, 0]}>
            <cylinderGeometry args={[0.17, 0.2, 0.45, 20]} />
            <meshStandardMaterial color={SKIN} roughness={0.75} />
          </mesh>

          {/* Head group */}
          <group position={[0, 0.18, 0]}>
            {/* Back hair shell */}
            <mesh position={[0, 0.25, -0.05]} scale={[1.06, 1.12, 1.02]}>
              <sphereGeometry args={[0.57, 48, 48]} />
              <meshStandardMaterial color={HAIR} roughness={0.85} />
            </mesh>

            {/* Skull */}
            <mesh scale={[1.0, 1.14, 0.98]}>
              <sphereGeometry args={[0.56, 48, 48]} />
              <meshStandardMaterial color={SKIN} roughness={0.6} />
            </mesh>

            {/* Jaw / chin */}
            <mesh position={[0, -0.34, -0.02]} scale={[1.05, 0.85, 0.92]}>
              <sphereGeometry args={[0.4, 36, 36]} />
              <meshStandardMaterial color={SKIN} roughness={0.6} />
            </mesh>

            {/* Ears */}
            <mesh position={[-0.55, 0.02, 0]}>
              <sphereGeometry args={[0.11, 20, 20]} />
              <meshStandardMaterial color={SKIN} roughness={0.6} />
            </mesh>
            <mesh position={[0.55, 0.02, 0]}>
              <sphereGeometry args={[0.11, 20, 20]} />
              <meshStandardMaterial color={SKIN} roughness={0.6} />
            </mesh>

            {/* Forehead hair fringe */}
            {hairFringe.map((h, i) => (
              <mesh key={i} position={[h.x, h.y, h.z]} scale={[h.sx, h.sy, h.sz]}>
                <sphereGeometry args={[0.5, 28, 28]} />
                <meshStandardMaterial color={HAIR} roughness={0.85} />
              </mesh>
            ))}

            {/* Hair side curtains */}
            <mesh position={[-0.5, -0.02, 0.06]} scale={[0.5, 0.75, 0.55]}>
              <sphereGeometry args={[0.3, 24, 24]} />
              <meshStandardMaterial color={HAIR} roughness={0.85} />
            </mesh>
            <mesh position={[0.5, -0.02, 0.06]} scale={[0.5, 0.75, 0.55]}>
              <sphereGeometry args={[0.3, 24, 24]} />
              <meshStandardMaterial color={HAIR} roughness={0.85} />
            </mesh>

            {/* Eye sockets shading */}
            <mesh position={[-0.19, 0.09, 0.5]} scale={[0.9, 0.55, 0.28]}>
              <sphereGeometry args={[0.13, 20, 20]} />
              <meshStandardMaterial color={SKIN_SHADOW} roughness={0.8} transparent opacity={0.55} />
            </mesh>
            <mesh position={[0.19, 0.09, 0.5]} scale={[0.9, 0.55, 0.28]}>
              <sphereGeometry args={[0.13, 20, 20]} />
              <meshStandardMaterial color={SKIN_SHADOW} roughness={0.8} transparent opacity={0.55} />
            </mesh>

            {/* Eyes — whites, iris, pupil, highlights */}
            {[-0.19, 0.19].map((x) => (
              <group key={x}>
                <mesh position={[x, 0.1, 0.53]} scale={[0.8, 0.4, 0.4]}>
                  <sphereGeometry args={[0.085, 20, 20]} />
                  <meshStandardMaterial color="#f5f0ea" roughness={0.3} />
                </mesh>
                <mesh position={[x, 0.1, 0.585]}>
                  <sphereGeometry args={[0.05, 20, 20]} />
                  <meshStandardMaterial color={IRIS} roughness={0.25} />
                </mesh>
                <mesh position={[x, 0.1, 0.612]}>
                  <sphereGeometry args={[0.022, 16, 16]} />
                  <meshBasicMaterial color="#0b0b10" />
                </mesh>
                {femaleEyeSide(x) ? (
                  <mesh position={[x - 0.02, 0.115, 0.615]}>
                    <sphereGeometry args={[0.012, 10, 10]} />
                    <meshBasicMaterial color="#ffffff" />
                  </mesh>
                ) : (
                  <mesh position={[x + 0.02, 0.115, 0.615]}>
                    <sphereGeometry args={[0.012, 10, 10]} />
                    <meshBasicMaterial color="#ffffff" />
                  </mesh>
                )}
              </group>
            ))}

            {/* Eyebrows */}
            {[-0.19, 0.19].map((x) => (
              <mesh key={x} position={[x, 0.23, 0.53]} rotation={[0, 0, femaleEyeSide(x) ? 0.09 : -0.09]}>
                <boxGeometry args={[0.13, 0.028, 0.035]} />
                <meshStandardMaterial color={HAIR} roughness={0.8} />
              </mesh>
            ))}

            {/* Nose */}
            <mesh position={[0, -0.05, 0.565]} scale={[0.7, 0.72, 0.34]}>
              <sphereGeometry args={[0.085, 20, 20]} />
              <meshStandardMaterial color={SKIN} roughness={0.65} />
            </mesh>

            {/* Lips */}
            <mesh position={[0, -0.19, 0.545]} scale={[1.6, 0.42, 0.5]}>
              <sphereGeometry args={[0.09, 20, 20]} />
              <meshStandardMaterial color={LIP} roughness={0.5} />
            </mesh>
            <mesh position={[0, -0.24, 0.54]} scale={[1.3, 0.4, 0.5]}>
              <sphereGeometry args={[0.085, 20, 20]} />
              <meshStandardMaterial color="#8d5047" roughness={0.55} />
            </mesh>
            <mesh position={[0, -0.24, 0.545]} scale={[1.35, 0.12, 0.4]}>
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshStandardMaterial color="#7a423b" roughness={0.6} />
            </mesh>
          </group>
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
        camera={{ position: [0, 0.35, 4.7], fov: 40 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.55} />
        <directionalLight position={[3, 4, 5]} intensity={1.3} color="#fff4ea" />
        <directionalLight position={[-3, 1, 3]} intensity={0.4} color="#ffffff" />
        <pointLight position={[0, 0.5, 2.4]} intensity={4} color="#ffffff" />
        <pointLight position={[-2.5, 1.5, -2]} intensity={7} color={RED} />
        <Suspense fallback={null}>
          <HumanPortrait />
          <Sparkles count={22} scale={[3.2, 2.4, 1.6]} size={1.8} speed={0.3} color={RED} opacity={0.45} />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping
          autoRotate
          autoRotateSpeed={1.1}
          minPolarAngle={Math.PI * 0.32}
          maxPolarAngle={Math.PI * 0.72}
        />
      </Canvas>
    </div>
  );
}