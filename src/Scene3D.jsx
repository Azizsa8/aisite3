import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/*
  The persistent home-page scene: a sovereign data core.
  An emissive core (your data) sealed inside rotating geodesic wireframe
  shells (the in-Kingdom perimeter) with a contained particle field — all
  monochrome to match the brand. One scroll progress value [0..1] drives
  the camera's orbit through the whole page; the active service index
  nudges the core sideways so each section reads as a different station.
  Mouse adds parallax. Mobile gets fewer particles and a capped DPR.
*/

const isSmall = () => typeof window !== "undefined" && window.innerWidth < 768;

function CoreScene({ progress, active, total }) {
  const group = useRef();
  const shell = useRef();
  const shell2 = useRef();
  const ring = useRef();
  const nodesRef = useRef();
  const coreLight = useRef();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  // contained particle field (inside the shell radius)
  const nodes = useMemo(() => {
    const n = isSmall() ? 220 : 520;
    const pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const r = 0.4 + Math.random() * 1.3;
      const th = Math.random() * Math.PI * 2;
      const ph = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(ph) * Math.cos(th);
      pos[i * 3 + 1] = r * Math.sin(ph) * Math.sin(th);
      pos[i * 3 + 2] = r * Math.cos(ph);
    }
    return pos;
  }, []);

  useFrame((state) => {
    const p = progress.current;
    const t = state.clock.elapsedTime;

    // camera orbits the core across the whole page, then pulls away at the end
    const angle = p * Math.PI * 1.6;
    const recede = THREE.MathUtils.smoothstep(p, 0.82, 1);
    const radius = 6 + recede * 4.5;
    state.camera.position.x = Math.sin(angle) * radius;
    state.camera.position.z = Math.cos(angle) * radius;
    state.camera.position.y = Math.sin(p * Math.PI * 2) * 0.9;
    state.camera.lookAt(0, 0, 0);

    // each service station nudges the core to a new spot; the whole group sits
    // deep enough in the fog that page content always stays legible over it
    if (group.current) {
      const svcAngle = (active / Math.max(total, 1)) * Math.PI * 2;
      const tx = Math.cos(svcAngle) * 0.55;
      const ty = Math.sin(svcAngle) * 0.35;
      const tz = -2.9 + Math.sin(p * Math.PI) * 1.5;
      group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, tx, 0.03);
      group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, ty, 0.03);
      group.current.position.z = THREE.MathUtils.lerp(group.current.position.z, tz, 0.04);
      // mouse parallax on the whole group
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, mouse.current.x * 0.14, 0.05);
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, mouse.current.y * 0.1, 0.05);
    }

    if (coreLight.current) coreLight.current.intensity = 2.2 + Math.sin(t * 1.5) * 0.5 + p * 1.2;

    if (shell.current) {
      shell.current.rotation.y = t * 0.1 + p * Math.PI;
      shell.current.rotation.x = Math.sin(t * 0.14) * 0.14;
      shell.current.scale.setScalar(1.9 + Math.sin(p * Math.PI) * 0.14);
    }
    if (shell2.current) {
      shell2.current.rotation.y = -t * 0.07 - p * Math.PI * 0.6;
      shell2.current.rotation.z = t * 0.04;
      shell2.current.scale.setScalar(2.3);
    }
    if (ring.current) {
      ring.current.rotation.z = t * 0.05;
      ring.current.rotation.x = Math.PI / 2.4 + Math.sin(t * 0.1) * 0.05;
    }
    if (nodesRef.current) {
      nodesRef.current.rotation.y = t * 0.05;
      nodesRef.current.rotation.x = -t * 0.025;
    }
  });

  return (
    <group ref={group}>
      <pointLight ref={coreLight} position={[0, 0, 0]} intensity={2.4} color="#ffffff" distance={10} />
      <pointLight position={[4, 3, 4]} intensity={1.2} color="#cdd3d9" />
      <pointLight position={[-4, -2, -3]} intensity={0.5} color="#7d848c" />

      {/* contained particle field */}
      <points ref={nodesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[nodes, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.022} color="#e8eaec" transparent opacity={0.75} sizeAttenuation />
      </points>

      {/* boundary shells — the sovereignty perimeter */}
      <mesh ref={shell}>
        <icosahedronGeometry args={[1, 2]} />
        <meshBasicMaterial color="#f5f6f7" wireframe transparent opacity={0.14} />
      </mesh>
      <mesh ref={shell2}>
        <icosahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color="#9BA0A6" wireframe transparent opacity={0.1} />
      </mesh>

      {/* orbital ring */}
      <mesh ref={ring}>
        <torusGeometry args={[3, 0.004, 8, 120]} />
        <meshBasicMaterial color="#f5f6f7" transparent opacity={0.22} />
      </mesh>
    </group>
  );
}

export default function Scene3D({ progress, active = 0, total = 11 }) {
  return (
    <div className="scene3d" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 40 }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.22} />
        <CoreScene progress={progress} active={active} total={total} />
        <fog attach="fog" args={["#000000", 7.5, 15]} />
      </Canvas>
    </div>
  );
}
