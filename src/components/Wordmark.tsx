import { APP } from '../config/app';

// The brand wordmark from design/brand/wordmark.html: FAN / FRICTION with a
// gold slash. "on-blue" is the white version for Dodger-blue backgrounds.
export function Wordmark({ onBlue = false }: { onBlue?: boolean }) {
  return (
    <span className={`ff-wordmark${onBlue ? ' on-blue' : ''}`} role="img" aria-label={APP.name}>
      <span className="fan" aria-hidden="true">FAN</span>
      <span className="slash" aria-hidden="true" />
      <span className="friction" aria-hidden="true">FRICTION</span>
    </span>
  );
}
