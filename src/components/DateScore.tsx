import { ReadTile, type EmptyKind } from './ReadTile';

// The rating for a city's date in the Map header, as the same box the date page
// and every list use (Kylie, Oct 5). Quiet = no big events; a dash = events but
// no rating yet. The headline and event count live in the header text beside it.
interface Props {
  rating: number | null;
  empty?: EmptyKind;
  showScore?: boolean;
}

export function DateScore({ rating, empty, showScore = true }: Props) {
  if (!showScore) return null;
  return (
    <div className="datescore">
      <ReadTile rating={rating} size="big" empty={empty} />
    </div>
  );
}
