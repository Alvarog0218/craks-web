/**
 * BrandDecor - Vectores y trazos decorativos en turquesa (#15c6d2)
 * y amarillo yema profundo (#E8B923) inspirados en el manual de marca CRACKS.
 *
 * Cada componente es decorativo (pointer-events-none, aria-hidden) y está
 * pensado para colocarse dentro de una sección con position: relative.
 */

type DecorProps = {
  className?: string;
};

/* ─── Onda turquesa orgánica (top o bottom de sección) ─── */
export function WaveTurquoise({ className = "" }: DecorProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 140"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute left-0 w-full h-24 md:h-32 ${className}`}
    >
      {/* Capa petróleo de fondo */}
      <path
        d="M0,80 C220,30 460,130 720,70 C980,10 1220,90 1440,60 L1440,140 L0,140 Z"
        fill="#428488"
        opacity="0.95"
      />
      {/* Onda turquesa principal */}
      <path
        d="M0,95 C260,55 480,135 740,90 C1000,45 1220,115 1440,85 L1440,140 L0,140 Z"
        fill="#15c6d2"
      />
      {/* Acento rosa del manual */}
      <path
        d="M0,118 C320,98 620,128 940,108 C1160,96 1300,118 1440,108 L1440,140 L0,140 Z"
        fill="#ebbed3"
        opacity="0.55"
      />
    </svg>
  );
}

/* ─── Trazo amarillo yema tipo pincelada ─── */
export function YolkBrush({ className = "" }: DecorProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 600 80"
      className={`pointer-events-none ${className}`}
    >
      <path
        d="M10,55 C120,15 260,75 380,40 C460,18 540,50 590,30"
        stroke="#E8B923"
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M30,62 C140,38 280,72 400,50"
        stroke="#F5C634"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
    </svg>
  );
}

/* ─── Círculo punteado turquesa (orbita) ─── */
export function TurquoiseOrbit({ className = "" }: DecorProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 240 240"
      className={`pointer-events-none ${className}`}
    >
      <circle
        cx="120"
        cy="120"
        r="110"
        fill="none"
        stroke="#15c6d2"
        strokeWidth="2"
        strokeDasharray="2 8"
      />
      <circle
        cx="120"
        cy="120"
        r="80"
        fill="none"
        stroke="#428488"
        strokeWidth="1.5"
        strokeDasharray="6 6"
        opacity="0.6"
      />
    </svg>
  );
}

/* ─── Blob amarillo (mancha de yema) ─── */
export function YolkBlob({ className = "" }: DecorProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 320 320"
      className={`pointer-events-none ${className}`}
    >
      <defs>
        <radialGradient id="yolkBlobGrad" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FFE680" />
          <stop offset="60%" stopColor="#F5C634" />
          <stop offset="100%" stopColor="#E8B923" />
        </radialGradient>
      </defs>
      <path
        d="M160,20 C235,30 295,80 300,160 C305,235 240,295 165,300 C85,305 30,245 20,165 C10,90 80,15 160,20 Z"
        fill="url(#yolkBlobGrad)"
      />
    </svg>
  );
}

/* ─── Línea ondulada turquesa (separador delgado) ─── */
export function TurquoiseSquiggle({ className = "" }: DecorProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 800 40"
      className={`pointer-events-none ${className}`}
    >
      <path
        d="M0,20 Q50,0 100,20 T200,20 T300,20 T400,20 T500,20 T600,20 T700,20 T800,20"
        stroke="#15c6d2"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ─── Patrón de puntos (turquesa + amarillo) ─── */
export function DotGrid({ className = "" }: DecorProps) {
  const dots = [];
  for (let r = 0; r < 6; r++) {
    for (let c = 0; c < 8; c++) {
      const isYolk = (r + c) % 3 === 0;
      dots.push(
        <circle
          key={`${r}-${c}`}
          cx={20 + c * 28}
          cy={20 + r * 28}
          r={isYolk ? 5 : 3}
          fill={isYolk ? "#E8B923" : "#15c6d2"}
          opacity={isYolk ? 0.85 : 0.6}
        />
      );
    }
  }
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 240 180"
      className={`pointer-events-none ${className}`}
    >
      {dots}
    </svg>
  );
}

/* ─── Subrayado amarillo (resaltado bajo títulos) ─── */
export function YolkUnderline({ className = "" }: DecorProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 300 20"
      preserveAspectRatio="none"
      className={`pointer-events-none ${className}`}
    >
      <path
        d="M5,12 C80,4 160,18 295,8"
        stroke="#E8B923"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/* ─── Cáscara cracked (líneas turquesa que evocan grieta) ─── */
export function CrackLines({ className = "" }: DecorProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 200"
      className={`pointer-events-none ${className}`}
    >
      <g stroke="#15c6d2" strokeWidth="2" fill="none" strokeLinecap="round">
        <path d="M100,20 L110,55 L95,80 L120,110 L100,140 L115,180" />
        <path d="M110,55 L140,65" />
        <path d="M95,80 L70,90" />
        <path d="M120,110 L150,120" />
        <path d="M100,140 L80,155" />
      </g>
    </svg>
  );
}

/* ─── Huevo amarillo grande (silueta yema fuerte) ─── */
export function EggShape({
  className = "",
  variant = "yolk",
}: DecorProps & { variant?: "yolk" | "turquoise" | "petrol" | "outline" }) {
  const fills: Record<string, { fill: string; stroke: string; shadow: string }> = {
    yolk:      { fill: "#FFC500", stroke: "#E8B923", shadow: "#FFE680" },
    turquoise: { fill: "#15c6d2", stroke: "#0FA8B3", shadow: "#7DE0E8" },
    petrol:    { fill: "#428488", stroke: "#2E6E73", shadow: "#6FB0B5" },
    outline:   { fill: "none",    stroke: "#FFC500", shadow: "#FFC500" },
  };
  const c = fills[variant];
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 240"
      className={`pointer-events-none ${className}`}
    >
      <defs>
        <radialGradient id={`eggGrad-${variant}`} cx="38%" cy="32%" r="70%">
          <stop offset="0%" stopColor={c.shadow} />
          <stop offset="100%" stopColor={c.fill} />
        </radialGradient>
      </defs>
      <path
        d="M100,12 C150,12 180,90 180,150 C180,200 145,228 100,228 C55,228 20,200 20,150 C20,90 50,12 100,12 Z"
        fill={variant === "outline" ? "none" : `url(#eggGrad-${variant})`}
        stroke={c.stroke}
        strokeWidth={variant === "outline" ? 4 : 2}
      />
    </svg>
  );
}

/* ─── Patrón de huevos repetidos (campo de fondo) ─── */
export function EggField({ className = "" }: DecorProps) {
  const eggs = [
    { x: 40,  y: 60,  r: 0,   s: 0.7, c: "#FFC500" },
    { x: 180, y: 30,  r: 15,  s: 0.5, c: "#15c6d2" },
    { x: 320, y: 90,  r: -10, s: 0.8, c: "#FFC500" },
    { x: 90,  y: 200, r: 20,  s: 0.6, c: "#428488" },
    { x: 260, y: 220, r: -8,  s: 0.7, c: "#FFC500" },
    { x: 380, y: 170, r: 5,   s: 0.55,c: "#15c6d2" },
  ];
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 440 280"
      className={`pointer-events-none ${className}`}
    >
      {eggs.map((e, i) => (
        <g key={i} transform={`translate(${e.x},${e.y}) rotate(${e.r}) scale(${e.s})`}>
          <path
            d="M0,0 C30,0 48,46 48,82 C48,112 27,128 0,128 C-27,128 -48,112 -48,82 C-48,46 -30,0 0,0 Z"
            fill={e.c}
            opacity="0.85"
          />
        </g>
      ))}
    </svg>
  );
}
