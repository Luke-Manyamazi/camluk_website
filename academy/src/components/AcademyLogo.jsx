export default function AcademyLogo({ iconSize = 32, showText = true, className = '' }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Camluk Academy logo"
      >
        <rect width="64" height="64" rx="14" fill="#0f1929"/>
        <path d="M32 10 L56 23 L32 36 L8 23 Z" fill="#ff6600"/>
        <path d="M32 10 L56 23 L44 29.5 L32 23 Z" fill="#ff8c3a"/>
        <path d="M16 26 L16 38 Q32 48 48 38 L48 26 L32 36 Z" fill="#cc4d00"/>
        <line x1="56" y1="23" x2="56" y2="35" stroke="#ff6600" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="56" cy="37.5" r="3.5" fill="#ff6600"/>
        <line x1="53" y1="41" x2="51.5" y2="47" stroke="#ff6600" strokeWidth="2" strokeLinecap="round"/>
        <line x1="56" y1="41" x2="56"   y2="47" stroke="#ff6600" strokeWidth="2" strokeLinecap="round"/>
        <line x1="59" y1="41" x2="60.5" y2="47" stroke="#ff6600" strokeWidth="2" strokeLinecap="round"/>
      </svg>

      {showText && (
        <span className="font-bold text-lg leading-none">
          Camluk{' '}
          <span className="text-primary">Academy</span>
        </span>
      )}
    </div>
  );
}
