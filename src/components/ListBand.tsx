// One separator for every grouped list (Kylie, Oct 15: "I'd like this standard across the board"): the Explore
// List's day band, a full-width grey band with an uppercase label and, when it has one, the day's read at the
// right. Used by Explore's List, Faves, Stubs, Following and tag pages.
import type { ReactNode } from 'react';

export function ListBand({ label, right, as: Tag = 'h3' }: { label: ReactNode; right?: ReactNode; as?: 'h2' | 'h3' }) {
  return (
    <div className="list-band">
      <Tag className="list-band-label">{label}</Tag>
      {right}
    </div>
  );
}
