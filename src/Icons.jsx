import React, { useId } from "react";

// Minimal monochrome line-icons. Each draws + illuminates on scroll.
const SETS = {
  sovereign: ["M32 6 L54 16 V32 C54 46 44 54 32 58 C20 54 10 46 10 32 V16 Z", "M23 32 l6 6 l12 -14"],
  platform: ["M12 20 h40 v10 h-40 z", "M12 34 h40 v10 h-40 z", "M12 48 h24 v6 h-24 z"],
  whitelabel: ["M10 32 L32 10 h22 v22 L32 54 Z", "M45 19 a2 2 0 1 0 0.1 0"],
  ai: ["M22 14 h20 v8 h8 v20 h-8 v8 h-20 v-8 h-8 v-20 h8 z", "M30 30 h4 v4 h-4 z", "M20 32 h-6 M50 32 h-6 M32 20 v-6 M32 50 v-6"],
  next: ["M14 18 h36 v34 h-36 z", "M14 26 h36", "M22 12 v8 M42 12 v8", "M24 38 l6 6 l12 -12"],
};

export default function LineIcon({ name, size = 96, stroke = 1.6, className = "", drawClass = "" }) {
  const id = useId().replace(/:/g, "");
  const paths = SETS[name] || SETS.platform;
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 64 64" fill="none"
      style={{ overflow: "visible" }}>
      <defs>
        <filter id={`ig-${id}`} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation={2.2} result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <g filter={`url(#ig-${id})`} opacity={0.5}>
        {paths.map((d, i) => (
          <path key={`g${i}`} d={d} stroke="#fff" strokeWidth={stroke}
            strokeLinecap="round" strokeLinejoin="round" opacity={0.5} />
        ))}
      </g>
      {paths.map((d, i) => (
        <path key={i} className={drawClass} d={d} stroke="#fff" strokeWidth={stroke}
          strokeLinecap="round" strokeLinejoin="round" />
      ))}
    </svg>
  );
}
