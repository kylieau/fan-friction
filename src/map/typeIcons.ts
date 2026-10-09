// One-color type icons for the map chips (Kylie, Oct 9, 3.18): line style like the
// app's other icons (src/components/Icons.tsx), 11px, Dodger blue, before the time.
// Drawn here, not taken from an icon font, so every icon on screen matches.

import type { CrowdEvent } from '../data';

const ATTRS = 'width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#005A9C" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"';

const ICONS: Record<string, string> = {
  // a ball with two seams
  baseball: '<circle cx="12" cy="12" r="9"/><path d="M6 5.5c2.5 2 2.5 11 0 13M18 5.5c-2.5 2-2.5 11 0 13"/>',
  // a ball with a curved line across
  basketball: '<circle cx="12" cy="12" r="9"/><path d="M3.5 12h17M12 3.5v17M5.6 5.6c3 3.5 3 9.3 0 12.8M18.4 5.6c-3 3.5-3 9.3 0 12.8"/>',
  // a football, laces on top
  football: '<path d="M4 20C4 11 11 4 20 4c0 9-7 16-16 16Z"/><path d="M8.5 15.5l7-7M11 11.5l1 1M13 9.5l1 1M9 13.5l1 1"/>',
  // two crossed sticks and a puck
  hockey: '<path d="M4 4l9 12M20 4l-9 12"/><path d="M13 16h-2l-1 3h4Z"/><ellipse cx="12" cy="20.5" rx="4" ry="1.5"/>',
  // a ball with a pentagon
  soccer: '<circle cx="12" cy="12" r="9"/><path d="M12 7.5l4.3 3.1-1.6 5h-5.4l-1.6-5Z"/><path d="M12 7.5V3.2M16.3 10.6l4 -1.3M14.7 15.6l2.6 3.5M9.3 15.6l-2.6 3.5M7.7 10.6l-4-1.3"/>',
  // a racket
  tennis: '<ellipse cx="13.5" cy="9" rx="6.5" ry="7.5" transform="rotate(-35 13.5 9)"/><path d="M8.5 15.5 3.5 20.5"/>',
  // a music note
  concert: '<path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/>',
  // a flag
  festival: '<path d="M5 21V4"/><path d="M5 4h13l-3 4 3 4H5"/>',
  // a ticket
  special: '<path d="M3 9a2 2 0 0 0 2-2V6h14v1a2 2 0 0 0 2 2v6a2 2 0 0 0-2 2v1H5v-1a2 2 0 0 0-2-2Z"/><path d="M12 7v10" stroke-dasharray="2 2"/>',
};

function iconKey(event: CrowdEvent): string {
  if (event.audience.domain === 'sports') return ICONS[event.audience.sport] ? event.audience.sport : 'special';
  if (event.kind === 'show') return 'concert';
  if (event.kind === 'festival') return 'festival';
  return 'special';
}

/** The icon as an inline SVG string, for the chip's HTML. */
export function typeIconSvg(event: CrowdEvent): string {
  return `<svg class="crowd-type" ${ATTRS}>${ICONS[iconKey(event)]}</svg>`;
}
