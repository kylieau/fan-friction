import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PeopleIcon, StarIcon } from './Icons';
import { favoriteName } from './FavoriteBadge';
import {
  approveFollow,
  blockUser,
  declineFollow,
  favoriteDisplayName,
  favoriteKey,
  favoriteOfficialName,
  follow,
  removeFollower,
  TEAMS,
  toggleFavorite,
  unfollow,
  type Favorite,
  type FavoriteKind,
  type FollowRequest,
  type PersonRow,
} from '../data';

export type FollowingSegment = 'faves' | 'friends';

/** A filter: null shows everything; a set of keys shows only those. */
export type Picked = ReadonlySet<string> | null;

const KINDS: { kind: FavoriteKind; label: string }[] = [
  { kind: 'team', label: 'Teams' },
  { kind: 'artist', label: 'Artists' },
  { kind: 'venue', label: 'Venues' },
  { kind: 'festival', label: 'Festivals' },
];

/**
 * "Basketball · NBA", "Football · College", "Country": the line under a Fave's name in the sheet. An artist's word is
 * its genre from the listings (Kylie, Oct 19, 2026; `useArtistGenres`), "Artist" while no listing is on file (a lean).
 */
function subOf(fav: Favorite, genres: ReadonlyMap<string, string>): string {
  const team = fav.teamId ? TEAMS[fav.teamId] : undefined;
  if (team) {
    const sport = team.sport.charAt(0).toUpperCase() + team.sport.slice(1);
    const league = /^college/i.test(team.league) ? 'College' : team.league;
    return `${sport} · ${league}`;
  }
  if (fav.kind === 'artist') {
    const genre = genres.get(favoriteKey(fav));
    if (genre) return genre;
  }
  return KINDS.find((k) => k.kind === fav.kind)?.label.replace(/s$/, '') ?? '';
}

function personName(p: Pick<PersonRow, 'profile'>): string {
  return p.profile.displayName ?? p.profile.handle ?? 'Someone';
}

/**
 * The Following tab's one sheet (Kylie, Oct 19, 2026; mockups 03 to 05): "Show and manage". A Faves | Friends switch
 * at the top opens on the segment you came from. Faves: an All row, then the Faves by kind, A–Z, each with a check
 * that filters the timeline as soon as it is tapped; Edit adds an "Add" row and a remove button per Fave. Friends:
 * Find people, the requests waiting on you, the people you follow (a check each), and the people who follow you
 * without a follow back (a Follow pill); a ⋯ menu with Remove / Unfollow / Block behind one confirm, as the People
 * list has had since Oct 9. "Also in Settings ›" at the foot.
 */
export function FollowingSheet({
  segment,
  onSegment,
  onClose,
  favorites,
  genres,
  favPicked,
  onFavPicked,
  signedIn,
  people,
  requests,
  friendPicked,
  onFriendPicked,
  onPeopleChanged,
}: {
  segment: FollowingSegment;
  onSegment: (next: FollowingSegment) => void;
  onClose: () => void;
  favorites: readonly Favorite[];
  /** Each artist favorite's genre word by favorite key (`useArtistGenres`). */
  genres: ReadonlyMap<string, string>;
  favPicked: Picked;
  onFavPicked: (next: Picked) => void;
  signedIn: boolean;
  people: readonly PersonRow[] | null;
  requests: readonly FollowRequest[];
  friendPicked: Picked;
  onFriendPicked: (next: Picked) => void;
  /** Told after any follow change, so the lists and the timeline reload. */
  onPeopleChanged: () => Promise<void> | void;
}) {
  const [editing, setEditing] = useState(false);
  return (
    <div className="home-backdrop sheet-backdrop" role="dialog" aria-modal="true" aria-label="Show and manage" onClick={onClose}>
      <div className="action-sheet following-sheet" onClick={(ev) => ev.stopPropagation()}>
        <span className="sheet-handle" aria-hidden />
        <div className="following-sheet-head">
          {segment === 'faves' ? (
            <button type="button" className="link-button" aria-pressed={editing} onClick={() => setEditing((v) => !v)}>
              {editing ? 'Show' : 'Edit'}
            </button>
          ) : (
            <span />
          )}
          <h2 className="following-sheet-title">{editing && segment === 'faves' ? 'Edit Faves' : 'Show and manage'}</h2>
          <button type="button" className="link-button" onClick={onClose}>
            Done
          </button>
        </div>
        <div className="segmented following-sheet-segments" role="tablist" aria-label="Faves or Friends">
          <button type="button" role="tab" aria-selected={segment === 'faves'} onClick={() => onSegment('faves')}>
            <StarIcon /> Faves
          </button>
          <button type="button" role="tab" aria-selected={segment === 'friends'} onClick={() => onSegment('friends')}>
            <PeopleIcon /> Friends
          </button>
        </div>
        <div className="following-sheet-body">
          {segment === 'faves' ? (
            <FavesSide favorites={favorites} genres={genres} picked={favPicked} onPicked={onFavPicked} editing={editing} onClose={onClose} />
          ) : (
            <FriendsSide signedIn={signedIn} people={people} requests={requests} picked={friendPicked} onPicked={onFriendPicked} onChanged={onPeopleChanged} onClose={onClose} />
          )}
          <Link to={segment === 'faves' ? '/you?panel=faves' : '/you?panel=people'} className="following-sheet-foot" onClick={onClose}>
            Also in Settings <span aria-hidden>›</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

/** A round check: on, off. */
function Check({ on, label, onClick }: { on: boolean; label: string; onClick: () => void }) {
  return (
    <button type="button" role="checkbox" aria-checked={on} aria-label={label} className={`sheet-check${on ? ' on' : ''}`} onClick={onClick}>
      {on ? '✓' : ''}
    </button>
  );
}

/** Tapping one item while All is on selects only that item (a lean); tapping the last checked item goes back to All. */
function toggleIn(picked: Picked, key: string, all: readonly string[]): Picked {
  if (picked === null) return new Set([key]);
  const next = new Set(picked);
  if (next.has(key)) next.delete(key);
  else next.add(key);
  if (next.size === 0 || next.size === all.length) return null;
  return next;
}

function FavesSide({ favorites, genres, picked, onPicked, editing, onClose }: { favorites: readonly Favorite[]; genres: ReadonlyMap<string, string>; picked: Picked; onPicked: (next: Picked) => void; editing: boolean; onClose: () => void }) {
  const keys = favorites.map(favoriteKey);
  const shownCount = picked === null ? favorites.length : [...picked].filter((k) => keys.includes(k)).length;
  return (
    <>
      {editing ? (
        <Link to="/favorites/edit" className="card sheet-add-row" onClick={onClose}>
          <span className="sheet-add-plus" aria-hidden>
            +
          </span>
          Add a team, artist, venue or festival
        </Link>
      ) : (
        <button type="button" role="checkbox" aria-checked={picked === null} className="card sheet-all-row" onClick={() => onPicked(null)}>
          {/* One control: the check is drawn, not a second button inside this one (found Oct 19, 2026). */}
          <span className={`sheet-check${picked === null ? ' on' : ''}`} aria-hidden>
            {picked === null ? '✓' : ''}
          </span>
          <span className="log-main">
            <span className="log-title">All Faves</span>
            <span className="log-facts">{picked === null ? `All ${favorites.length} on timeline` : `${shownCount} of ${favorites.length} on timeline`}</span>
          </span>
        </button>
      )}
      {KINDS.map(({ kind, label }) => {
        const list = favorites.filter((f) => f.kind === kind).sort((a, b) => favoriteDisplayName(a).localeCompare(favoriteDisplayName(b)));
        if (list.length === 0) return null;
        return (
          <section key={kind} className="you-block" aria-label={label}>
            <h3 className="you-heading sheet-heading">
              {label} · {list.length}
            </h3>
            <ul className="log-list card sheet-list">
              {list.map((fav) => {
                const key = favoriteKey(fav);
                const on = picked === null || picked.has(key);
                return (
                  <li key={key} className="sheet-row">
                    {!editing && <Check on={on} label={favoriteName(fav)} onClick={() => onPicked(toggleIn(picked, key, keys))} />}
                    <button type="button" className="log-main sheet-row-words" onClick={() => (editing ? undefined : onPicked(toggleIn(picked, key, keys)))} disabled={editing}>
                      <span className="log-title">{favoriteOfficialName(fav)}</span>
                      <span className="log-facts">{subOf(fav, genres)}</span>
                    </button>
                    {editing && (
                      <button type="button" className="sheet-remove" aria-label={`Remove ${favoriteName(fav)}`} onClick={() => toggleFavorite(fav)}>
                        −
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </>
  );
}

function FriendsSide({ signedIn, people, requests, picked, onPicked, onChanged, onClose }: { signedIn: boolean; people: readonly PersonRow[] | null; requests: readonly FollowRequest[]; picked: Picked; onPicked: (next: Picked) => void; onChanged: () => Promise<void> | void; onClose: () => void }) {
  const [menuFor, setMenuFor] = useState<string | null>(null);
  const [asking, setAsking] = useState<{ id: string; action: 'remove' | 'unfollow' | 'block' } | null>(null);
  const [note, setNote] = useState<string | null>(null);
  if (!signedIn) {
    return (
      <div className="card empty-card">
        <div className="card-title">Sign in to follow people.</div>
      </div>
    );
  }
  const following = (people ?? []).filter((p) => p.youFollow !== 'none');
  const followers = (people ?? []).filter((p) => p.followsYou && p.youFollow === 'none');
  const keys = following.filter((p) => p.youFollow === 'approved').map((p) => p.profile.id);
  const decide = async (followerId: string, yes: boolean) => {
    setNote(null);
    if (yes) await approveFollow(followerId);
    else setNote(await declineFollow(followerId));
    await onChanged();
  };
  const act = async (p: PersonRow, action: 'remove' | 'unfollow' | 'block') => {
    setAsking(null);
    setMenuFor(null);
    setNote(null);
    if (action === 'remove') await removeFollower(p.profile.id);
    else if (action === 'unfollow') await unfollow(p.profile.id);
    else setNote(await blockUser(p.profile.id));
    await onChanged();
  };
  const menu = (p: PersonRow) => (
    <span className="people-menu">
      <button type="button" className="round-button people-more" aria-label={`More for ${personName(p)}`} aria-expanded={menuFor === p.profile.id} onClick={() => setMenuFor(menuFor === p.profile.id ? null : p.profile.id)}>
        ⋯
      </button>
      {menuFor === p.profile.id && (
        <span className="people-menu-sheet" role="menu">
          {p.followsYou && (
            <button type="button" role="menuitem" className="link-button" onClick={() => { setMenuFor(null); setAsking({ id: p.profile.id, action: 'remove' }); }}>
              Remove
            </button>
          )}
          {p.youFollow !== 'none' && (
            <button type="button" role="menuitem" className="link-button" onClick={() => { setMenuFor(null); setAsking({ id: p.profile.id, action: 'unfollow' }); }}>
              {p.youFollow === 'pending' ? 'Cancel request' : 'Unfollow'}
            </button>
          )}
          <button type="button" role="menuitem" className="link-button remove-entry" onClick={() => { setMenuFor(null); setAsking({ id: p.profile.id, action: 'block' }); }}>
            Block
          </button>
        </span>
      )}
    </span>
  );
  const confirm = (p: PersonRow) =>
    asking?.id === p.profile.id ? (
      <span className="remove-confirm compact">
        <span>{asking.action === 'remove' ? 'Remove?' : asking.action === 'block' ? 'Block?' : 'Unfollow?'}</span>
        <button type="button" className="link-button" onClick={() => setAsking(null)}>
          Keep
        </button>
        <button type="button" className="link-button remove-entry" onClick={() => act(p, asking.action)}>
          {asking.action === 'remove' ? 'Remove' : asking.action === 'block' ? 'Block' : 'Unfollow'}
        </button>
      </span>
    ) : null;
  return (
    <>
      <Link to="/you?panel=people&find=1" className="card sheet-add-row" onClick={onClose}>
        <span className="sheet-add-plus" aria-hidden>
          +
        </span>
        Find people
      </Link>
      {note && (
        <p className="you-fine" role="status">
          {note}
        </p>
      )}
      {requests.length > 0 && (
        <section className="you-block" aria-label="Requests">
          <h3 className="you-heading sheet-heading">Requests · {requests.length}</h3>
          <ul className="log-list card sheet-list">
            {requests.map((r) => (
              <li key={r.followerId} className="sheet-row">
                <span className="avatar avatar-small" aria-hidden>
                  {(r.displayName ?? r.handle ?? '?').slice(0, 1).toUpperCase()}
                </span>
                <span className="log-main">
                  <span className="log-title">{r.displayName ?? r.handle ?? 'Someone'}</span>
                  <span className="log-facts">Wants to follow you</span>
                </span>
                <span className="request-actions">
                  <button type="button" className="fav-toggle people-pill" onClick={() => decide(r.followerId, true)}>
                    Approve
                  </button>
                  <button type="button" className="link-button" onClick={() => decide(r.followerId, false)}>
                    Decline
                  </button>
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}
      {people === null ? null : (
        <>
          {following.length > 0 && (
            <section className="you-block" aria-label="Following">
              <h3 className="you-heading sheet-heading">Following · {following.length}</h3>
              <ul className="log-list card sheet-list">
                {following.map((p) => {
                  const id = p.profile.id;
                  const approved = p.youFollow === 'approved';
                  return (
                    <li key={id} className="sheet-row">
                      {approved ? <Check on={picked === null || picked.has(id)} label={personName(p)} onClick={() => onPicked(toggleIn(picked, id, keys))} /> : <span className="sheet-check-gap" aria-hidden />}
                      <span className="avatar avatar-small" aria-hidden>
                        {personName(p).slice(0, 1).toUpperCase()}
                      </span>
                      <button type="button" className="log-main sheet-row-words" onClick={() => approved && onPicked(toggleIn(picked, id, keys))} disabled={!approved}>
                        <span className="log-title">{personName(p)}</span>
                        <span className="log-facts">{!approved ? 'Requested' : p.followsYou ? 'Follows you' : 'You follow'}</span>
                      </button>
                      {confirm(p) ?? menu(p)}
                    </li>
                  );
                })}
              </ul>
            </section>
          )}
          {followers.length > 0 && (
            <section className="you-block" aria-label="Follows you">
              <h3 className="you-heading sheet-heading">Follows you · {followers.length}</h3>
              <ul className="log-list card sheet-list">
                {followers.map((p) => (
                  <li key={p.profile.id} className="sheet-row">
                    <span className="avatar avatar-small" aria-hidden>
                      {personName(p).slice(0, 1).toUpperCase()}
                    </span>
                    <span className="log-main">
                      <span className="log-title">{personName(p)}</span>
                      <span className="log-facts">Follows you</span>
                    </span>
                    {confirm(p) ?? (
                      <>
                        <button type="button" className="fav-toggle people-pill" onClick={async () => { await follow(p.profile); await onChanged(); }}>
                          Follow
                        </button>
                        {menu(p)}
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          )}
          {following.length === 0 && followers.length === 0 && requests.length === 0 && (
            <div className="card empty-card">
              <div className="card-title">No one yet.</div>
            </div>
          )}
        </>
      )}
    </>
  );
}
