
// components/MedifyLogo.tsx
export default function Medifylogo({ size = 64, className = '' }) {
    return (
      <svg
        className={className}
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Medify logo"
        role="img"
      >
        {/* Heart shape */}
        <path
          d="M32 58s26-15.5 26-34.5S42 6 32 18 6 13.5 6 23.5 32 58 32 58z"
          fill="url(#heartGradient)"
          stroke="#ef4444"
          strokeWidth="2"
        />
        {/* M-shaped heartbeat */}
        <path
          d="M16 30 L22 30 L26 38 L30 26 L34 42 L38 30 L44 30"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <defs>
          <linearGradient id="heartGradient" x1="32" y1="6" x2="32" y2="58" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ef4444" />
            <stop offset="1" stopColor="#fca5a5" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  