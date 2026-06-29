import React from "react";

// Minimal vector mark — golden harvest + crossed tools on a green shield
export default function Logo({ size = 44 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label="Liberia Rebuilding Party logo"
    >
      <defs>
        <linearGradient id="shield" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#0F7A3E" />
          <stop offset="1" stopColor="#0A5A2C" />
        </linearGradient>
      </defs>
      <path
        d="M32 2 L60 12 V32 C60 48 47 58 32 62 C17 58 4 48 4 32 V12 Z"
        fill="url(#shield)"
        stroke="#F4B400"
        strokeWidth="2"
      />
      {/* wheat */}
      <g stroke="#F4B400" strokeWidth="1.6" strokeLinecap="round">
        <line x1="32" y1="44" x2="32" y2="22" />
        <line x1="32" y1="26" x2="26" y2="22" />
        <line x1="32" y1="26" x2="38" y2="22" />
        <line x1="32" y1="32" x2="25" y2="28" />
        <line x1="32" y1="32" x2="39" y2="28" />
        <line x1="32" y1="38" x2="26" y2="34" />
        <line x1="32" y1="38" x2="38" y2="34" />
      </g>
      {/* crossed tools */}
      <g stroke="#F8F4EC" strokeWidth="2.2" strokeLinecap="round">
        <line x1="18" y1="48" x2="46" y2="20" />
        <line x1="46" y1="48" x2="18" y2="20" />
      </g>
      <circle cx="32" cy="34" r="2.4" fill="#C8102E" />
    </svg>
  );
}
