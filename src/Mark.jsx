import React, { useId } from "react";

// Faithful centerlines traced from the AISERS mark (MAIN_LOGO alpha channel).
// viewBox 0 0 60 300. Four flowing strokes with the signature offset jogs.
export const MARK_PATHS = [
  "M1.25 0 L5.31 7.13 L6.25 128.27 L10.31 135.39 L25.94 149.64 L28.12 153.21 L28.75 267.22 L34.38 277.91",
  "M2.19 153.21 L5.62 160.33 L5.62 245.84 L6.25 249.41 L10.31 256.53",
  "M25.31 21.38 L29.69 28.5 L30 117.58 L33.44 124.7 L49.69 138.95 L53.12 146.08 L53.12 288.6 L58.44 299.29",
  "M49.38 14.25 L53.44 21.38 L53.12 110.45 L53.75 114.01 L57.81 121.14",
];

/*
  Reusable AISERS mark.
  - `draw` (class hook) lets GSAP animate stroke-dashoffset per path.
  - glow filter gives the luminous illumination on brand.
*/
export default function Mark({ size = 60, stroke = 8, glow = 0.9, className = "", drawClass = "" }) {
  const id = useId().replace(/:/g, "");
  const w = size;
  const h = size * 5; // 60:300 ratio
  return (
    <svg
      className={className}
      width={w}
      height={h}
      viewBox="0 0 60 300"
      fill="none"
      aria-label="AISERS"
      style={{ overflow: "visible" }}
    >
      <defs>
        <filter id={`g-${id}`} x="-80%" y="-40%" width="260%" height="180%">
          <feGaussianBlur stdDeviation={2.4} result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* soft glow layer */}
      <g filter={`url(#g-${id})`} opacity={glow}>
        {MARK_PATHS.map((d, i) => (
          <path key={`glow${i}`} d={d} stroke="#ffffff" strokeWidth={stroke}
            strokeLinecap="round" strokeLinejoin="round" opacity={0.55} />
        ))}
      </g>
      {/* crisp strokes (animated by GSAP via drawClass) */}
      {MARK_PATHS.map((d, i) => (
        <path key={i} className={drawClass} data-i={i} d={d} stroke="#ffffff"
          strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" />
      ))}
    </svg>
  );
}
