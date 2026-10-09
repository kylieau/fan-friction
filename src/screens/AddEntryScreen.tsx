import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DEFAULT_METRO, METROS } from '../config/metros';
import {
  addManualEntry,
  addManualPlan,
  getPersonalLog,
  similarTitles,
  subscribePersonalLog,
  todayIn,
  competitionNamed,
  competitionsFor,
  divisionChoices,
  LEVELS,
  markSuggested,
  searchAllDates,
  SPORTS_MORE,
  SPORTS_SHOWN,
  suggestEvent,
  type DateSearchHit,
  type Division,
  type EventKind,
  type ManualNight,
  type SportsLevel,
  venueNamesIn,
} from '../data';
import { ChevronDown, SearchIcon } from '../components/Icons';
import { ReadTile } from '../components/ReadTile';
import { getHomeId } from '../lib/homeCity';
import { longLocalDate } from '../lib/dates';
import { datePath, entryPath } from '../lib/view';

const KINDS: { kind: EventKind; label: string }[] = [
  { kind: 'game', label: 'Game' },
  { kind: 'show', label: 'Show' },
  { kind: 'festival', label: 'Festival' },
  { kind: 'live-broadcast', label: 'Live broadcast' },
  { kind: 'special', label: 'Special event' },
];


/** The Where list's last choice: a venue the app doesn't know. */
const OTHER = '__other__';

/**
 * Add an event to your log. Search first: a listed night is one tap away.
 * When nothing fits, type it in yourself (Kylie, Oct 6: anything can be logged).
 */
export function AddEntryScreen() {
  const homeId = getHomeId() ?? 'la';
  const [query, setQuery] = useState('');
  const [hits, setHits] = useState<DateSearchHit[] | null>(null);
  const [typing, setTyping] = useState(false);
  const trimmed = query.trim();

  useEffect(() => {
    if (trimmed.length < 2) {
      setHits(null);
      return;
    }
    let current = true;
    setHits(null);
    searchAllDates(homeId, trimmed).then((list) => current && setHits(list));
    return () => {
      current = false;
    };
  }, [homeId, trimmed]);

  return (
    <div className="screen page add-page">
      <Link to="/you" className="back-link">
        <ChevronDown /> You
      </Link>
      <h1 className="page-title">Log an event</h1>

      {!typing && (
        <>
          <div className="search-box">
            <label className="search-field">
              <SearchIcon />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search a team, artist or venue"
                aria-label="Search a team, artist or venue"
                autoFocus
              />
            </label>
            {query && (
              <button type="button" className="search-clear" onClick={() => setQuery('')}>
                Clear
              </button>
            )}
          </div>

          {trimmed.length >= 2 && hits && hits.length > 0 && (
            <section className="famous" aria-live="polite">
              <h2 className="section-title">{hits.length === 1 ? '1 date' : `${hits.length} dates`}</h2>
              <ul className="famous-list">
                {hits.map((hit) => (
                  <li key={`${hit.metroId}-${hit.date}`}>
                    <Link to={datePath(hit.date, hit.metroId)} className="famous-row">
                      <ReadTile rating={hit.rating} />
                      <span className="famous-text">
                        <span className="famous-headline">{hit.headline}</span>
                        <span className="famous-meta">
                          {[longLocalDate(hit.date), hit.metroId !== homeId ? METROS[hit.metroId]?.name : null, hit.matched].filter(Boolean).join(' · ')}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
          {trimmed.length >= 2 && hits && hits.length === 0 && <p className="card-body search-note">Nothing listed matches that.</p>}
          {trimmed.length >= 2 && !hits && <p className="card-body search-note">Searching…</p>}

          <button type="button" className="mark-button" onClick={() => setTyping(true)}>
            Add it yourself
          </button>
        </>
      )}

      {typing && <ManualForm homeId={homeId} firstTitle={trimmed} onCancel={() => setTyping(false)} />}
    </div>
  );
}

function ManualForm({ homeId, firstTitle, onCancel }: { homeId: string; firstTitle: string; onCancel: () => void }) {
  const navigate = useNavigate();
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const [title, setTitle] = useState(firstTitle);
  const [kind, setKind] = useState<EventKind>('game');
  const [sport, setSport] = useState('');
  const [moreSports, setMoreSports] = useState(false);
  const [level, setLevel] = useState<SportsLevel | ''>('');
  const [division, setDivision] = useState<Division | ''>('');
  const [competition, setCompetition] = useState('');
  const [day, setDay] = useState('');
  const [city, setCity] = useState<string>(homeId);
  const [venue, setVenue] = useState('');
  const [otherVenue, setOtherVenue] = useState('');
  const [big, setBig] = useState(false);
  const [busy, setBusy] = useState(false);
  const venues = useMemo(() => (city === 'elsewhere' ? [] : venueNamesIn(city)), [city]);
  const venueName = venue === OTHER || venues.length === 0 ? otherVenue : venue;

  // The essentials are required (Kylie, Oct 9, C060): what, when, city and where. The rest is optional.
  const validDay = /^\d{4}-\d{2}-\d{2}$/.test(day);
  const ready = title.trim().length > 0 && validDay && venueName.trim().length > 0;
  const known = competitionNamed(competition);
  // Division is asked where it isn't implied: college, school and club always; pro only with no competition.
  const askDivision = kind === 'game' && level !== '' && level !== 'lower' && (level !== 'pro' || !known);
  const sportChips = moreSports || (sport && !SPORTS_SHOWN.includes(sport)) ? [...SPORTS_SHOWN, ...SPORTS_MORE] : SPORTS_SHOWN;
  const ahead = validDay && day >= todayIn(METROS[city] ?? DEFAULT_METRO);
  // A warning, not a block (C059): something on the same date with the same or a similar title.
  const duplicate = useMemo(() => {
    if (!validDay || title.trim().length < 2) return null;
    const entry = log.added.find((e) => e.when.sort === day && similarTitles(e.title, title));
    if (entry) return entry.title;
    const plan = log.plans.find((p) => p.date === day && similarTitles(p.title, title));
    return plan ? plan.title : null;
  }, [log, day, title, validDay]);

  const pickCompetition = (name: string) => {
    setCompetition(name);
    const comp = competitionNamed(name);
    if (comp) {
      setLevel(comp.level);
      if (comp.division) setDivision(comp.division);
      if (comp.sport !== '*' && comp.sport !== sport) setSport(comp.sport);
    }
  };

  const save = async () => {
    if (!ready || busy) return;
    setBusy(true);
    const night: ManualNight = {
      title,
      kind,
      sport: kind === 'game' ? sport || undefined : undefined,
      level: kind === 'game' && level ? level : undefined,
      division: kind === 'game' && division && (askDivision || known?.division) ? division : undefined,
      competition: kind === 'game' ? competition || undefined : undefined,
      when: { sort: day, label: '', precision: 'day' },
      venue: venueName,
      metroId: city === 'elsewhere' ? undefined : city,
    };
    // A date still ahead is a plan; it becomes an entry once the date passes (C059).
    if (ahead) {
      addManualPlan(night, homeId);
      navigate('/you', { replace: true });
      return;
    }
    const entry = addManualEntry(night, homeId);
    if (big) {
      const id = await suggestEvent(entry);
      if (id) markSuggested(entry.id, id);
    }
    navigate(entryPath(entry.id), { replace: true });
  };

  return (
    <form
      className="profile-form"
      aria-label="Add it yourself"
      onSubmit={(event) => {
        event.preventDefault();
        void save();
      }}
    >
      <label className="field">
        <span className="field-label">What</span>
        <input className="account-input" value={title} onChange={(e) => setTitle(e.target.value)} maxLength={120} autoFocus autoComplete="off" required />
      </label>

      <label className="field">
        <span className="field-label">When</span>
        <input className="account-input" type="date" value={day} onChange={(e) => setDay(e.target.value)} required />
      </label>

      <label className="field">
        <span className="field-label">City</span>
        <select
          className="account-input"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
            setVenue('');
          }}
        >
          {Object.values(METROS).map((metro) => (
            <option key={metro.id} value={metro.id}>
              {metro.name}
            </option>
          ))}
          <option value="elsewhere">Somewhere else</option>
        </select>
      </label>

      <label className="field">
        <span className="field-label">Where</span>
        {venues.length > 0 && (
          <select className="account-input" value={venue} onChange={(e) => setVenue(e.target.value)} required>
            <option value="">Pick a venue</option>
            {venues.map((name) => (
              <option key={name}>{name}</option>
            ))}
            <option value={OTHER}>Another venue</option>
          </select>
        )}
        {(venue === OTHER || venues.length === 0) && (
          <input
            className="account-input"
            value={otherVenue}
            onChange={(e) => setOtherVenue(e.target.value)}
            maxLength={80}
            autoComplete="off"
            aria-label="Venue"
            required
          />
        )}
      </label>

      {duplicate && (
        <p className="you-fine" role="status">
          Looks like {duplicate} on this date is already in your log.
        </p>
      )}

      <div className="field-group-label">Details</div>
      <p className="you-fine">More details help match this to listings later.</p>

      <div className="field">
        <span className="field-label">Type</span>
        <div className="pill-row" role="group" aria-label="Type">
          {KINDS.map((k) => (
            <button type="button" key={k.kind} aria-pressed={kind === k.kind} className="filter-chip" onClick={() => setKind(k.kind)}>
              {k.label}
            </button>
          ))}
        </div>
      </div>

      {kind === 'game' && (
        <>
          <div className="field">
            <span className="field-label">Sport</span>
            <div className="pill-row" role="group" aria-label="Sport">
              {sportChips.map((s) => (
                <button type="button" key={s} aria-pressed={sport === s} className="filter-chip" onClick={() => setSport(s)}>
                  {s}
                </button>
              ))}
              {!sportChips.includes(SPORTS_MORE[0]) && (
                <button type="button" className="filter-chip more-chip" onClick={() => setMoreSports(true)}>
                  More
                </button>
              )}
            </div>
          </div>

          <div className="field">
            <span className="field-label">Level</span>
            <div className="pill-row" role="group" aria-label="Level">
              {LEVELS.map((row) => (
                <button
                  type="button"
                  key={row.level}
                  aria-pressed={level === row.level}
                  className="filter-chip"
                  onClick={() => {
                    setLevel(row.level);
                    if (known && known.level !== row.level) setCompetition('');
                  }}
                >
                  {row.label}
                </button>
              ))}
            </div>
          </div>

          {askDivision && level && (
            <div className="field">
              <span className="field-label">Division</span>
              <div className="pill-row" role="group" aria-label="Division">
                {divisionChoices(level).map((row) => (
                  <button
                    type="button"
                    key={row.division}
                    aria-pressed={division === row.division}
                    className="filter-chip"
                    onClick={() => setDivision(row.division)}
                  >
                    {row.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          <label className="field">
            <span className="field-label">Competition</span>
            <input
              className="account-input"
              list="known-competitions"
              value={competition}
              onChange={(e) => pickCompetition(e.target.value)}
              maxLength={60}
              autoComplete="off"
              placeholder={competitionsFor(sport || '*', level || undefined).slice(0, 3).map((c) => c.name).join(', ') || 'Optional'}
            />
            <datalist id="known-competitions">
              {competitionsFor(sport || '*', level || undefined).map((comp) => (
                <option key={comp.name} value={comp.name} />
              ))}
            </datalist>
          </label>
        </>
      )}

      {!ahead && (
        <label className="choice-line">
          <input type="checkbox" checked={big} onChange={(e) => setBig(e.target.checked)} />
          <span>Big event (5,000 or more)</span>
        </label>
      )}

      <div className="entry-form-actions">
        <button type="button" className="link-button" onClick={onCancel}>
          Back
        </button>
        <button type="submit" className="gold-button small" disabled={!ready || busy}>
          {ahead ? 'Save plan' : 'Save'}
        </button>
      </div>
    </form>
  );
}
