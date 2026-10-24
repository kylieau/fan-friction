import type { SkyKind } from '../data';

/**
 * The day page's three weather marks (build 7.1, M3; the 03-final row spec): a plain sun, cloud or rain at 16 × 16,
 * a 1.75 round stroke, no fill, one neutral grey for every one of them. Heat is never shown with color; the number
 * carries it. Hand-drawn in the app's line style, like the type icons (no icon font).
 */
export function WeatherIcon({ kind, size = 16 }: { kind: SkyKind; size?: number }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.75, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true };
  if (kind === 'sun') {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="4.2" />
        <path d="M12 3v2.4M12 18.6V21M3 12h2.4M18.6 12H21M5.6 5.6l1.7 1.7M16.7 16.7l1.7 1.7M5.6 18.4l1.7-1.7M16.7 7.3l1.7-1.7" />
      </svg>
    );
  }
  if (kind === 'cloud') {
    return (
      <svg {...common}>
        <path d="M7 18.5h10.2a3.8 3.8 0 0 0 .5-7.57A5.6 5.6 0 0 0 7.1 9.9 4.3 4.3 0 0 0 7 18.5Z" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M7 15.5h10.2a3.6 3.6 0 0 0 .5-7.17A5.4 5.4 0 0 0 7.1 7.2 4.15 4.15 0 0 0 7 15.5Z" />
      <path d="M9 18.5v2.2M12.5 18.5v2.2M16 18.5v2.2" />
    </svg>
  );
}
