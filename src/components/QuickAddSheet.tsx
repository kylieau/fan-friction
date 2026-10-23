import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCityDate, quickAddDefaults, saveQuickAdd, type Favorite, type QuickAddDefaults } from '../data';
import { entryPath, eventPath } from '../lib/view';

/** The Where and Opponent lists' last choice: something the app doesn't have on file. */
const OTHER = '__other__';

/**
 * The Add a game / Add a show card (Kylie, Oct 21, 2026, late evening; docs/product/add-from-page-proposal.md): a
 * bottom card over the team's or artist's page, or over New stub after the type and the team are picked. The team,
 * type, sport and level are set; a game asks Opponent, When and Where, a show asks Where and When. One gold Save.
 * Save goes to the person's log and, when the inclusion standard is met, for review; the pending label is on the
 * entry's page.
 */
export function QuickAddSheet({ target, homeId, genreWord, artistListed, playedRooms, onClose }: { target: Favorite; homeId: string | null; genreWord?: string | null; artistListed?: boolean; /** Rooms this artist has played in the city, listed first. */ playedRooms?: readonly string[]; onClose: () => void }) {
  const navigate = useNavigate();
  const [defaults, setDefaults] = useState<QuickAddDefaults | null>(null);
  const [opponent, setOpponent] = useState('');
  const [otherOpponent, setOtherOpponent] = useState('');
  const [date, setDate] = useState(() => new Date().toLocaleDateString('en-CA'));
  const [start, setStart] = useState('');
  const [venue, setVenue] = useState('');
  const [otherVenue, setOtherVenue] = useState('');
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let current = true;
    quickAddDefaults(target, homeId, genreWord, artistListed, playedRooms).then((d) => {
      if (!current) return;
      setDefaults(d);
      setVenue(d.homeVenue && d.rooms.includes(d.homeVenue) ? d.homeVenue : '');
    });
    return () => {
      current = false;
    };
  }, [target, homeId, genreWord, artistListed, playedRooms]);

  useEffect(() => {
    const onKey = (ev: KeyboardEvent) => ev.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const game = defaults?.kind === 'game';
  const venueName = venue === OTHER ? otherVenue.trim() : venue;
  const opponentName = opponent === OTHER ? otherOpponent.trim() : opponent;
  const ready = Boolean(defaults) && /^\d{4}-\d{2}-\d{2}$/.test(date) && venueName.length > 0 && (!game || opponentName.length > 0);

  const save = async () => {
    if (!defaults || !ready || busy) return;
    setBusy(true);
    const result = await saveQuickAdd({ target, defaults, opponent: game ? opponentName : undefined, date, start: start || undefined, venue: venueName }, homeId, getCityDate);
    onClose();
    // Already listed: the plan went on that event, so land there. Otherwise Stubs (a plan) or the new entry's page.
    if (result.matchedEventId && result.matchedMetroId && result.plan) navigate(eventPath(result.matchedEventId, result.matchedMetroId), { replace: true });
    // A plan lives on Upcoming (build 7); a stub opens its own page.
    else navigate(result.plan ? '/upcoming' : entryPath(result.id), { replace: true });
  };

  return (
    <div className="home-backdrop quick-backdrop" role="dialog" aria-modal="true" aria-labelledby="quick-add-title" onClick={onClose}>
      <form
        className="home-card quick-card"
        onClick={(ev) => ev.stopPropagation()}
        onSubmit={(ev) => {
          ev.preventDefault();
          void save();
        }}
      >
        <h1 id="quick-add-title" className="home-title">{defaults?.title ?? target.label}</h1>
        {defaults && (
          <p className="you-fine quick-set">
            {game ? 'A game that isn’t listed yet.' : 'A show that isn’t listed yet.'} {defaults.setLine} {defaults.setLine.includes('·') ? 'are' : 'is'} set.
          </p>
        )}
        {game && (
          <label className="field">
            <span className="field-label">Opponent</span>
            <select className="account-input" value={opponent} onChange={(e) => setOpponent(e.target.value)} required>
              <option value="">Pick an opponent</option>
              {defaults?.opponents.map((name) => (
                <option key={name}>{name}</option>
              ))}
              <option value={OTHER}>Someone else…</option>
            </select>
            {opponent === OTHER && (
              <input className="account-input" value={otherOpponent} onChange={(e) => setOtherOpponent(e.target.value)} maxLength={60} autoComplete="off" aria-label="Opponent" autoFocus required />
            )}
          </label>
        )}
        {!game && <WhereField defaults={defaults} venue={venue} otherVenue={otherVenue} setVenue={setVenue} setOtherVenue={setOtherVenue} />}
        <div className="field">
          <span className="field-label">When</span>
          <div className="quick-when">
            <input className="account-input" type="date" value={date} onChange={(e) => setDate(e.target.value)} required aria-label="Date" />
            <input className="account-input" type="time" value={start} onChange={(e) => setStart(e.target.value)} aria-label="Time" />
          </div>
        </div>
        {game && <WhereField defaults={defaults} venue={venue} otherVenue={otherVenue} setVenue={setVenue} setOtherVenue={setOtherVenue} />}
        <button type="submit" className="gold-button small quick-save" disabled={!ready || busy}>
          Save
        </button>
        <button type="button" className="home-done link-button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
}

function WhereField({ defaults, venue, otherVenue, setVenue, setOtherVenue }: { defaults: QuickAddDefaults | null; venue: string; otherVenue: string; setVenue: (v: string) => void; setOtherVenue: (v: string) => void }) {
  return (
    <label className="field">
      <span className="field-label">Where</span>
      <select className="account-input" value={venue} onChange={(e) => setVenue(e.target.value)} required>
        <option value="">Pick a venue</option>
        {defaults?.rooms.map((name) => (
          <option key={name}>{name}</option>
        ))}
        <option value={OTHER}>Another venue</option>
      </select>
      {venue === OTHER && <input className="account-input" value={otherVenue} onChange={(e) => setOtherVenue(e.target.value)} maxLength={80} autoComplete="off" aria-label="Venue" required />}
    </label>
  );
}
