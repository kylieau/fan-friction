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
  favoritesOf,
  searchFavoriteRecords,
  favoriteFor,
  yourEntries,
  type Favorite,
} from '../data';
import { QuickAddSheet } from '../components/QuickAddSheet';
import { FavoriteBadge } from '../components/FavoriteBadge';
import { TEAMS, favoriteOfficialName, isCollegeTeam } from '../data';

/** "College" or the league, under a team's name in the pick list. */
function teamLevelWord(team: (typeof TEAMS)[string]): string {
  return isCollegeTeam(team) ? 'College' : team.league;
}
import { SearchIcon } from '../components/Icons';
import { ReadTile } from '../components/ReadTile';
import { getHomeId } from '../lib/homeCity';
import { longLocalDate } from '../lib/dates';
import { getPref, setPref } from '../lib/prefs';
import { datePath, entryPath, eventPath } from '../lib/view';
import { BackLink } from '../components/BackLink';

// The type words (build 5, item 11): Concert (N02), Watch party (N01), and "Event" in place of "Special event" (N30).
// "Event" stays stored as `special`; its title goes through the same keyword pass as the feeds (Theatre, Comedy…).
const KINDS: { kind: EventKind; label: string }[] = [
  { kind: 'game', label: 'Game' },
  { kind: 'show', label: 'Concert' },
  { kind: 'festival', label: 'Festival' },
  { kind: 'live-broadcast', label: 'Watch party' },
  { kind: 'special', label: 'Event' },
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
  // The type first (Kylie, Oct 21, 2026, late evening): Game or Concert find a team or artist and open the card; Other is the search as before.
  const [pick, setPick] = useState<'game' | 'show' | 'other'>('game');
  const [target, setTarget] = useState<Favorite | null>(null);
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const trimmed = query.trim();
  // Teams from the records on file; artists from your favorites and log, then the acts the listings name (R16).
  const records = useMemo(() => {
    if (pick === 'other') return [];
    const found = searchFavoriteRecords(trimmed, favoritesOf(log), yourEntries(log), homeId, pick === 'game' ? 'team' : 'artist');
    if (pick === 'show' && trimmed.length >= 2) {
      const q = trimmed.toLowerCase();
      const seen = new Set(found.map((f) => f.id));
      for (const name of (hits ?? []).flatMap((h) => h.artists ?? [])) {
        const fav = favoriteFor('artist', name);
        if (name.toLowerCase().includes(q) && !seen.has(fav.id)) {
          seen.add(fav.id);
          found.push(fav);
        }
      }
    }
    return found.slice(0, 6);
  }, [pick, trimmed, log, homeId, hits]);
  const listedArtists = useMemo(() => new Set((hits ?? []).flatMap((h) => h.artists ?? []).map((n) => n.toLowerCase())), [hits]);
  // "Saved to your Stubs" is said once, on the first visit (Kylie, Oct 12, 11:42 PM PT): marked seen on open.
  const [firstVisit] = useState(() => !getPref<boolean>('new-stub-seen', false));
  useEffect(() => {
    setPref('new-stub-seen', true);
  }, []);

  useEffect(() => {
    if (trimmed.length < 2) {
      setHits(null);
      return;
    }
    let current = true;
    setHits(null);
    // Anything can be logged by hand (Kylie, Oct 6), so a further-out event is always findable here.
    searchAllDates(homeId, trimmed, undefined, { withFurtherOut: true }).then((list) => current && setHits(list));
    return () => {
      current = false;
    };
  }, [homeId, trimmed]);

  return (
    <div className="screen page add-page">
      <BackLink to="/stubs" />
      <h1 className="page-title">New stub</h1>
      {firstVisit && <p className="you-fine">Saved to your Stubs</p>}

      {!typing && (
        <>
          <div className="pill-row add-type" role="group" aria-label="Type">
            {([['game', 'Game'], ['show', 'Concert'], ['other', 'Other']] as const).map(([k, label]) => (
              <button type="button" key={k} className="filter-chip" aria-pressed={pick === k} onClick={() => setPick(k)}>
                {label}
              </button>
            ))}
          </div>
          <div className="search-box">
            <label className="search-field">
              <SearchIcon />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={pick === 'game' ? 'Which team?' : pick === 'show' ? 'Which artist?' : 'Search a team, artist or venue'}
                aria-label={pick === 'game' ? 'Which team?' : pick === 'show' ? 'Which artist?' : 'Search a team, artist or venue'}
                autoFocus
              />
            </label>
            {query && (
              <button type="button" className="search-clear" onClick={() => setQuery('')}>
                Clear
              </button>
            )}
          </div>

          {records.length > 0 && (
            <section className="card add-records" aria-label={pick === 'game' ? 'Teams' : 'Artists'}>
              <ul className="add-record-list">
                {records.map((fav) => (
                  <li key={`${fav.kind}:${fav.id}`}>
                    <button type="button" className="add-record-row" onClick={() => setTarget(fav)}>
                      <FavoriteBadge fav={fav} shown={records} size="mark" />
                      <span className="add-record-text">
                        <span className="add-record-name">{favoriteOfficialName(fav)}</span>
                        <span className="you-fine">{fav.teamId ? teamLevelWord(TEAMS[fav.teamId]) : 'Artist'}</span>
                      </span>
                      <span className="add-record-chev" aria-hidden>›</span>
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          )}
          {target && <QuickAddSheet target={target} homeId={homeId} artistListed={listedArtists.has(target.label.toLowerCase())} onClose={() => setTarget(null)} />}
          {trimmed.length >= 2 && hits && hits.length > 0 && (
            <section className="famous" aria-live="polite">
              <h2 className="section-title">{hits.length === 1 ? '1 date' : `${hits.length} dates`}</h2>
              <ul className="famous-list">
                {hits.map((hit) => (
                  <li key={`${hit.metroId}-${hit.date}`}>
                    {/* A further-out event opens its own page (found Oct 21, 2026): the date page's lists switch may hide it. */}
                    <Link to={hit.furtherOut && hit.eventId ? eventPath(hit.eventId, hit.metroId) : datePath(hit.date, hit.metroId)} className="famous-row">
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
  // Under the title once there is something to name: "Braves at Mets · Sat" (Kylie, Oct 12, 11:42 PM PT).
  const weekday = validDay ? new Date(`${day}T12:00:00Z`).toLocaleDateString('en-US', { weekday: 'short', timeZone: 'UTC' }) : '';
  const named = title.trim() && weekday ? `${title.trim()} · ${weekday}` : null;
  // A warning, not a block (C059): something on the same date with the same or a similar title.
  const duplicate = useMemo(() => {
    if (!validDay || title.trim().length < 2) return null;
    const entry = log.added.find((e) => e.when.sort === day && similarTitles(e.title, title));
    if (entry) return { title: entry.title, plan: false };
    const plan = log.plans.find((p) => p.date === day && similarTitles(p.title, title));
    return plan ? { title: plan.title, plan: true } : null;
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
      navigate('/stubs', { replace: true });
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
      {named && <p className="new-stub-sub">{named}</p>}
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
          Looks like {duplicate.title} on this date is already in your {duplicate.plan ? 'plans' : 'log'}.
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
