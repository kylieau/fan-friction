// Line icons from the mockups.
const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export function MapIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" {...base} aria-hidden>
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
      <line x1="9" y1="3" x2="9" y2="18" />
      <line x1="15" y1="6" x2="15" y2="21" />
    </svg>
  );
}

export function CalendarIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" {...base} aria-hidden>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <line x1="8" y1="3" x2="8" y2="7" />
      <line x1="16" y1="3" x2="16" y2="7" />
    </svg>
  );
}

export function CompareIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" {...base} aria-hidden>
      <line x1="6" y1="20" x2="6" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="18" y1="20" x2="18" y2="14" />
    </svg>
  );
}

/** The share glyph everyone uses: a box with an arrow out the top. */
export function ShareIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" {...base} aria-hidden>
      <path d="M12 3v13" />
      <path d="M7.5 7.5L12 3l4.5 4.5" />
      <path d="M5 12v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7" />
    </svg>
  );
}

export function StarIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" {...base} aria-hidden>
      <path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1.1 5.9L12 16.9l-5.3 2.8 1.1-5.9-4.3-4.1 5.9-.8z" />
    </svg>
  );
}

export function PersonIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" {...base} aria-hidden>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" />
    </svg>
  );
}

export function GearIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" {...base} aria-hidden>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h0a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v0a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
    </svg>
  );
}

export function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" {...base} aria-hidden>
      <circle cx="11" cy="11" r="7" />
      <line x1="16.5" y1="16.5" x2="21" y2="21" />
    </svg>
  );
}

export function ChevronDown() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" {...base} aria-hidden>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export function ChevronLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" {...base} aria-hidden>
      <polyline points="15 6 9 12 15 18" />
    </svg>
  );
}

export function ChevronRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" {...base} aria-hidden>
      <polyline points="9 6 15 12 9 18" />
    </svg>
  );
}

/** A small sun for the Today feels-like line. Not a weather forecast. */
export function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" {...base} aria-hidden>
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2.5" x2="12" y2="5" />
      <line x1="12" y1="19" x2="12" y2="21.5" />
      <line x1="2.5" y1="12" x2="5" y2="12" />
      <line x1="19" y1="12" x2="21.5" y2="12" />
      <line x1="5.1" y1="5.1" x2="6.9" y2="6.9" />
      <line x1="17.1" y1="17.1" x2="18.9" y2="18.9" />
      <line x1="18.9" y1="5.1" x2="17.1" y2="6.9" />
      <line x1="6.9" y1="17.1" x2="5.1" y2="18.9" />
    </svg>
  );
}

/** A small house for the home city. The words "Home" sit on the mark around it. */
export function HomeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" {...base} aria-hidden>
      <path d="M4 11.2 12 4l8 7.2" />
      <path d="M7 10.2V20h10V10.2" />
    </svg>
  );
}

export function ArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" {...base} strokeWidth={2} aria-hidden>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="13 6 19 12 13 18" />
    </svg>
  );
}
