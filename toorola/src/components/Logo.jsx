import { useId } from 'react';

export function LogoMark({ size = 32 }) {
  // useId gives each logo instance a unique gradient id (the logo appears twice on the page)
  const gradientId = `logo-${useId().replace(/:/g, '')}`;

  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#2f5bff" />
          <stop offset="1" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill={`url(#${gradientId})`} />
      <path d="M10 11h12M16 11v11" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      <circle cx="23" cy="22" r="2.2" fill="#fff" fillOpacity="0.9" />
    </svg>
  );
}

export default function Logo() {
  return (
    <a href="/" className="logo" aria-label="Toolora – home">
      <LogoMark />
      <span>Toolora</span>
    </a>
  );
}