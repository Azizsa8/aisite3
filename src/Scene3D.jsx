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

/*
  Two hands reaching toward each other (Creation-of-Adam motif) drawn as
  minimal line art onto a canvas texture — same thin-stroke language as the
  site's icons. The right hand mirrors the left; index fingertips stop just
  short of touching at the center, where the scene's pulsing light sits.
*/
function makeHandsTexture() {
  const c = document.createElement("canvas");
  c.width = 2048; c.height = 1024;
  const x = c.getContext("2d");
  if (!x) return null;
  x.strokeStyle = "#ffffff";
  x.lineCap = "round";
  x.lineJoin = "round";
  x.shadowColor = "rgba(255,255,255,0.8)";
  x.shadowBlur = 13;

  const drawHand = () => {
    x.lineWidth = 12;
    // forearm top sweeping into the long extended index finger
    x.beginPath();
    x.moveTo(140, 430);
    x.bezierCurveTo(400, 405, 650, 405, 820, 440);
    x.bezierCurveTo(880, 452, 930, 462, 970, 470);
    x.stroke();
    // index underside back to the knuckle
    x.beginPath();
    x.moveTo(970, 470);
    x.bezierCurveTo(925, 484, 875, 490, 830, 492);
    x.stroke();
    // three fingers folding under, stacked down from the knuckle
    x.beginPath();
    x.moveTo(830, 492);
    x.bezierCurveTo(890, 500, 910, 522, 878, 538);
    x.bezierCurveTo(858, 547, 834, 540, 828, 528);
    x.stroke();
    x.beginPath();
    x.moveTo(828, 528);
    x.bezierCurveTo(872, 545, 880, 568, 850, 580);
    x.bezierCurveTo(830, 588, 806, 580, 800, 568);
    x.stroke();
    x.beginPath();
    x.moveTo(800, 568);
    x.bezierCurveTo(834, 585, 834, 606, 808, 613);
    x.bezierCurveTo(789, 618, 770, 609, 766, 598);
    x.stroke();
    // palm heel sweeping back into the forearm bottom
    x.beginPath();
    x.moveTo(766, 598);
    x.bezierCurveTo(650, 620, 480, 622, 360, 600);
    x.bezierCurveTo(270, 585, 190, 560, 140, 538);
    x.stroke();
    // thumb rising across the palm toward the index
    x.beginPath();
    x.moveTo(620, 610);
    x.bezierCurveTo(700, 592, 762, 560, 796, 516);
    x.stroke();
  };

  // left hand reaches right…
  drawHand();
  // …right hand is its mirror, reaching left; small vertical offset so the
  // fingertips pass close without overlapping
  x.save();
  x.translate(2048, -60);
  x.scale(-1, 1);
  drawHand();
  x.restore();

  const tex = new THREE.CanvasTexture(c);
  tex.anisotropy = 2;
  return tex;
}

function CoreScene({ progress, active, total }) {
  const group = useRef();
  const hands = useRef();
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

  const handsTex = useMemo(() => makeHandsTexture(), []);

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

    if (hands.current) {
      // billboard: always face the orbiting camera, with a gentle breathing scale
      hands.current.lookAt(state.camera.position);
      const hs = 1 + Math.sin(t * 0.5) * 0.02 + p * 0.12;
      hands.current.scale.setScalar(hs);
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

      {/* two hands reaching toward each other — the connection at the heart
          of the perimeter, fingertips meeting at the pulsing light */}
      {handsTex && (
        <mesh ref={hands} position={[0, -0.35, 0]}>
          <planeGeometry args={[4.6, 2.3]} />
          <meshBasicMaterial map={handsTex} transparent opacity={0.85} depthWrite={false} />
        </mesh>
      )}

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
