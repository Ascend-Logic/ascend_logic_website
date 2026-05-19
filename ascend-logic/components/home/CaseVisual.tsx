type Kind =
  | "construction"
  | "it"
  | "infra"
  | "insurance"
  | "healthcare"
  | "government"
  | "property";

const dots = (id: string) => (
  <defs>
    <pattern id={id} x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
      <circle cx="1" cy="1" r="0.6" fill="var(--fg-4)" opacity="0.25" />
    </pattern>
  </defs>
);

export default function CaseVisual({ kind }: { kind: Kind }) {
  const common = { viewBox: "0 0 200 110", preserveAspectRatio: "xMidYMid meet" as const };

  if (kind === "construction") {
    return (
      <svg {...common}>
        {dots("p-c")}
        <rect width="200" height="110" fill="url(#p-c)" />
        {/* buildings */}
        <rect
          x="44"
          y="58"
          width="28"
          height="48"
          fill="none"
          stroke="var(--fg-3)"
          strokeWidth="1"
        />
        <rect
          x="76"
          y="38"
          width="34"
          height="68"
          fill="none"
          stroke="var(--fg-2)"
          strokeWidth="1.2"
        />
        <rect
          x="114"
          y="52"
          width="26"
          height="54"
          fill="none"
          stroke="var(--fg-3)"
          strokeWidth="1"
        />
        {/* windows */}
        <rect x="82" y="46" width="5" height="5" fill="var(--accent)" opacity="0.85" />
        <rect x="90" y="46" width="5" height="5" fill="var(--accent)" opacity="0.35" />
        <rect x="98" y="46" width="5" height="5" fill="var(--accent)" opacity="0.6" />
        <rect x="82" y="58" width="5" height="5" fill="var(--accent)" opacity="0.4" />
        <rect x="90" y="58" width="5" height="5" fill="var(--accent)" opacity="0.7" />
        <rect x="98" y="58" width="5" height="5" fill="var(--accent)" opacity="0.3" />
        {/* crane */}
        <line x1="93" y1="38" x2="93" y2="18" stroke="var(--accent)" strokeWidth="1.2" />
        <line x1="73" y1="18" x2="120" y2="18" stroke="var(--accent)" strokeWidth="1.2" />
        <line x1="73" y1="18" x2="78" y2="22" stroke="var(--accent)" strokeWidth="0.8" />
        <line x1="120" y1="18" x2="120" y2="24" stroke="var(--accent)" strokeWidth="0.8" />
        <circle cx="120" cy="26" r="1.5" fill="var(--accent)" />
        <line x1="40" y1="106" x2="160" y2="106" stroke="var(--fg-3)" strokeWidth="0.8" />
      </svg>
    );
  }

  if (kind === "it") {
    return (
      <svg {...common}>
        {dots("p-it")}
        <rect width="200" height="110" fill="url(#p-it)" />
        {/* edges */}
        <g stroke="var(--fg-4)" strokeWidth="0.7" fill="none">
          <line x1="40" y1="30" x2="100" y2="55" />
          <line x1="100" y1="20" x2="160" y2="30" />
          <line x1="40" y1="80" x2="100" y2="55" />
          <line x1="160" y1="80" x2="100" y2="55" />
          <line x1="40" y1="30" x2="100" y2="20" />
          <line x1="160" y1="30" x2="100" y2="20" />
        </g>
        <line x1="100" y1="55" x2="160" y2="80" stroke="var(--accent)" strokeWidth="1.1" />
        <line x1="100" y1="55" x2="100" y2="90" stroke="var(--accent)" strokeWidth="1.1" />
        {/* central node */}
        <circle cx="100" cy="55" r="11" fill="none" stroke="var(--accent)" strokeOpacity="0.35" />
        <circle cx="100" cy="55" r="5.5" fill="var(--accent)" />
        {/* peripheral nodes */}
        <circle cx="40" cy="30" r="3" fill="var(--fg-3)" />
        <circle cx="100" cy="20" r="3" fill="var(--fg-3)" />
        <circle cx="160" cy="30" r="3" fill="var(--fg-3)" />
        <circle cx="40" cy="80" r="3" fill="var(--fg-3)" />
        <circle cx="160" cy="80" r="3.5" fill="var(--accent)" />
        <circle cx="100" cy="90" r="3" fill="var(--fg-3)" />
      </svg>
    );
  }

  if (kind === "infra") {
    return (
      <svg {...common}>
        {dots("p-i")}
        <rect width="200" height="110" fill="url(#p-i)" />
        {/* tower */}
        <path
          d="M92 95 L100 28 L108 95 M89 50 L111 50 M87 70 L113 70 M85 90 L115 90"
          stroke="var(--fg-3)"
          strokeWidth="1"
          fill="none"
        />
        {/* antenna */}
        <line x1="100" y1="28" x2="100" y2="16" stroke="var(--accent)" strokeWidth="1.4" />
        <circle cx="100" cy="14" r="2.2" fill="var(--accent)" />
        {/* signal arcs */}
        <path
          d="M86 18 Q100 4 114 18"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="0.9"
          opacity="0.7"
        />
        <path
          d="M76 22 Q100 -6 124 22"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="0.7"
          opacity="0.4"
        />
        <path
          d="M66 28 Q100 -14 134 28"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="0.6"
          opacity="0.22"
        />
        {/* base ground */}
        <line x1="60" y1="100" x2="140" y2="100" stroke="var(--fg-3)" strokeWidth="1" />
      </svg>
    );
  }

  if (kind === "insurance") {
    return (
      <svg {...common}>
        {dots("p-in")}
        <rect width="200" height="110" fill="url(#p-in)" />
        {/* car body */}
        <path
          d="M40 78 L52 56 L78 50 L122 50 L148 56 L160 78 L160 90 L142 90 L142 82 L58 82 L58 90 L40 90 Z"
          fill="none"
          stroke="var(--fg-2)"
          strokeWidth="1.1"
          strokeLinejoin="round"
        />
        <path
          d="M58 78 L62 60 L138 60 L142 78 Z"
          fill="none"
          stroke="var(--fg-4)"
          strokeWidth="0.8"
        />
        <line x1="100" y1="60" x2="100" y2="78" stroke="var(--fg-4)" strokeWidth="0.6" />
        {/* wheels */}
        <circle cx="68" cy="86" r="6.5" fill="none" stroke="var(--fg-2)" strokeWidth="1.2" />
        <circle cx="132" cy="86" r="6.5" fill="none" stroke="var(--fg-2)" strokeWidth="1.2" />
        {/* shield */}
        <path
          d="M100 12 L116 19 L116 32 Q116 43 100 50 Q84 43 84 32 L84 19 Z"
          fill="var(--accent)"
          fillOpacity="0.14"
          stroke="var(--accent)"
          strokeWidth="1.1"
        />
        <path
          d="M92 30 L99 37 L109 24"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (kind === "healthcare") {
    return (
      <svg {...common}>
        {dots("p-h")}
        <rect width="200" height="110" fill="url(#p-h)" />
        {/* pulse line */}
        <path
          d="M10 62 L60 62 L70 62 L80 38 L92 86 L102 50 L112 70 L122 62 L190 62"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* baseline ticks */}
        <g stroke="var(--fg-4)" strokeWidth="0.5">
          <line x1="20" y1="94" x2="20" y2="98" />
          <line x1="60" y1="94" x2="60" y2="98" />
          <line x1="100" y1="94" x2="100" y2="98" />
          <line x1="140" y1="94" x2="140" y2="98" />
          <line x1="180" y1="94" x2="180" y2="98" />
        </g>
        <line x1="10" y1="98" x2="190" y2="98" stroke="var(--fg-4)" strokeWidth="0.5" />
        {/* heart node */}
        <path
          d="M150 30 C150 22 156 18 162 20 C165 20.6 168 22.8 169 26 C170 22.8 173 20.6 176 20 C182 18 188 22 188 30 C188 42 169 56 169 56 C169 56 150 42 150 30 Z"
          fill="var(--accent)"
          fillOpacity="0.18"
          stroke="var(--accent)"
          strokeWidth="1.1"
        />
        <circle cx="92" cy="86" r="2.4" fill="var(--accent)" />
      </svg>
    );
  }

  if (kind === "government") {
    return (
      <svg {...common}>
        {dots("p-g")}
        <rect width="200" height="110" fill="url(#p-g)" />
        {/* pediment */}
        <path
          d="M55 36 L100 14 L145 36 Z"
          fill="none"
          stroke="var(--fg-2)"
          strokeWidth="1"
          strokeLinejoin="round"
        />
        {/* entablature */}
        <rect
          x="50"
          y="36"
          width="100"
          height="6"
          fill="var(--accent)"
          fillOpacity="0.25"
          stroke="var(--fg-3)"
          strokeWidth="0.6"
        />
        {/* columns */}
        <line x1="62" y1="48" x2="62" y2="86" stroke="var(--fg-3)" strokeWidth="1.6" />
        <line x1="80" y1="48" x2="80" y2="86" stroke="var(--fg-3)" strokeWidth="1.6" />
        <line x1="100" y1="48" x2="100" y2="86" stroke="var(--accent)" strokeWidth="1.6" />
        <line x1="120" y1="48" x2="120" y2="86" stroke="var(--fg-3)" strokeWidth="1.6" />
        <line x1="138" y1="48" x2="138" y2="86" stroke="var(--fg-3)" strokeWidth="1.6" />
        {/* base step */}
        <rect
          x="42"
          y="86"
          width="116"
          height="5"
          fill="none"
          stroke="var(--fg-2)"
          strokeWidth="0.9"
        />
        <line x1="36" y1="96" x2="164" y2="96" stroke="var(--fg-3)" strokeWidth="0.9" />
        {/* star */}
        <circle cx="100" cy="25" r="1.6" fill="var(--accent)" />
      </svg>
    );
  }

  // property
  return (
    <svg {...common}>
      {dots("p-p")}
      <rect width="200" height="110" fill="url(#p-p)" />
      {/* document */}
      <rect
        x="50"
        y="18"
        width="100"
        height="80"
        rx="2"
        fill="var(--bg)"
        stroke="var(--fg-3)"
        strokeWidth="1"
      />
      {/* header line */}
      <line x1="60" y1="32" x2="130" y2="32" stroke="var(--accent)" strokeWidth="1.3" />
      {/* table grid */}
      <g stroke="var(--fg-4)" strokeWidth="0.6">
        <line x1="50" y1="48" x2="150" y2="48" />
        <line x1="50" y1="62" x2="150" y2="62" />
        <line x1="50" y1="76" x2="150" y2="76" />
        <line x1="80" y1="42" x2="80" y2="98" />
        <line x1="115" y1="42" x2="115" y2="98" />
      </g>
      {/* highlighted cell */}
      <rect x="80" y="48" width="35" height="14" fill="var(--accent)" fillOpacity="0.2" />
      {/* OCR scan indicator */}
      <line
        x1="55"
        y1="86"
        x2="145"
        y2="86"
        stroke="var(--accent)"
        strokeWidth="0.8"
        strokeDasharray="2 2"
        opacity="0.7"
      />
      <circle cx="145" cy="86" r="2" fill="var(--accent)" />
    </svg>
  );
}
