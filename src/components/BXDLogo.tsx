export default function BXDLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="bxd-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00b8db" />
          <stop offset="100%" stopColor="#0096b8" />
        </linearGradient>
        <linearGradient id="bxd-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0096b8" />
          <stop offset="100%" stopColor="#7d3fcc" />
        </linearGradient>
        <linearGradient id="bxd-gradient-3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7d3fcc" />
          <stop offset="100%" stopColor="#ad46ff" />
        </linearGradient>
      </defs>
      
      {/* Foundation Block - "Building" */}
      <path 
        d="M 2 28 L 2 22 L 8 19 L 14 22 L 14 28 L 8 31 Z" 
        fill="url(#bxd-gradient-1)"
        opacity="0.9"
      />
      <path 
        d="M 8 19 L 14 22 L 14 28 L 8 25 Z" 
        fill="url(#bxd-gradient-1)"
        opacity="0.7"
      />
      
      {/* Transformation Block - "X-factor" */}
      <path 
        d="M 13 18 L 13 12 L 20 9 L 27 12 L 27 18 L 20 21 Z" 
        fill="url(#bxd-gradient-2)"
        opacity="0.9"
      />
      <path 
        d="M 20 9 L 27 12 L 27 18 L 20 15 Z" 
        fill="url(#bxd-gradient-2)"
        opacity="0.7"
      />
      
      {/* Discovery Block - "Extraordinary insight" */}
      <path 
        d="M 26 8 L 26 2 L 33 -1 L 40 2 L 40 8 L 33 11 Z" 
        fill="url(#bxd-gradient-3)"
        opacity="0.95"
      />
      <path 
        d="M 33 -1 L 40 2 L 40 8 L 33 5 Z" 
        fill="url(#bxd-gradient-3)"
        opacity="0.75"
      />
      
      {/* Illumination rays from discovery (subtle) */}
      <circle cx="33" cy="3" r="1.5" fill="#ad46ff" opacity="0.6">
        <animate 
          attributeName="opacity" 
          values="0.4;0.8;0.4" 
          dur="2s" 
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="37" cy="5" r="1" fill="#ad46ff" opacity="0.4">
        <animate 
          attributeName="opacity" 
          values="0.2;0.6;0.2" 
          dur="2.5s" 
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}
