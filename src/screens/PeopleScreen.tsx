import { useEffect, useState, useSyncExternalStore } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { ChevronDown } from '../components/Icons';
import { backFrom } from '../lib/view';
import { SearchIcon } from '../components/Icons';
import {
  approveFollow,
  blockUser,
  declineFollow,
  declinedRequests,
  follow,
  followRequests,
  getAccount,
  PEOPLE_SEARCH_MIN,
  peopleList,
  removeFollower,
  searchPeople,
  subscribeAccount,
  unfollow,
  type FollowRequest,
  type PersonRow,
  type Profile,
} from '../data';

type Chip = 'all' | 'mutual' | 'followers' | 'following';

const CHIPS: { id: Chip; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'mutual', label: 'Mutual' },
  { id: 'followers', label: 'Follows you' },
  { id: 'following', label: 'You follow' },
];

/**
 * People (build notes 2, section 3, mock f3-people.png): one list of everyone linked
 * to you, narrowed by chips; the requests waiting on you in one row on top; each row's
 * status on the right; a ⋯ menu with Remove and Unfollow behind one confirm. Nothing
 * here notifies anyone, and a decline or removal shows no change on their side.
 */
export function PeopleScreen() {
  const account = useSyncExternalStore(subscribeAccount, getAccount, getAccount);
  const [params, setParams] = useSearchParams();
  const chip = (CHIPS.find((c) => c.id === params.get('chip'))?.id ?? 'all') as Chip;
  const [people, setPeople] = useState<PersonRow[] | null>(null);
  const [requests, setRequests] = useState<FollowRequest[]>([]);
  const [declined, setDeclined] = useState<FollowRequest[]>([]);
  const [showRequests, setShowRequests] = useState(false);
  const [menuFor, setMenuFor] = useState<string | null>(null);
  const [asking, setAsking] = useState<{ id: string; action: 'remove' | 'unfollow' | 'block' } | null>(null);
  const [finding, setFinding] = useState(false);
  const [query, setQuery] = useState('');
  const [found, setFound] = useState<Profile[] | null>(null);
  const [note, setNote] = useState<string | null>(null);
  const location = useLocation();
  const back = backFrom(location.pathname, location.search);

  const load = async () => {
    const [list, pending, gone] = await Promise.all([peopleList(), followRequests(), declinedRequests()]);
    setPeople(list);
    setRequests(pending);
    setDeclined(gone);
  };
  useEffect(() => {
    let current = true;
    setPeople(null);
    Promise.all([peopleList(), followRequests(), declinedRequests()]).then(([list, pending, gone]) => {
      if (!current) return;
      setPeople(list);
      setRequests(pending);
      setDeclined(gone);
    });
    return () => {
      current = false;
    };
  }, [account?.id]);

  const decide = async (followerId: string, yes: boolean) => {
    if (yes) await approveFollow(followerId);
    else await declineFollow(followerId);
    await load();
  };

  const name = (p: PersonRow) => p.profile.displayName ?? p.profile.handle ?? 'Someone';
  const shown = (people ?? []).filter((p) => {
    if (chip === 'mutual') return p.followsYou && p.youFollow === 'approved';
    if (chip === 'followers') return p.followsYou;
    if (chip === 'following') return p.youFollow !== 'none';
    return true;
  });

  const act = async (p: PersonRow, action: 'remove' | 'unfollow' | 'block') => {
    setAsking(null);
    setMenuFor(null);
    setNote(null);
    if (action === 'remove') await removeFollower(p.profile.id);
    else if (action === 'unfollow') await unfollow(p.profile.id);
    else setNote(await blockUser(p.profile.id));
    await load();
  };

  // Find people: part of a name or handle, from three characters (Kylie, Oct 9). Name, handle, Follow.
  const q = query.trim();
  useEffect(() => {
    if (q.length < PEOPLE_SEARCH_MIN) {
      setFound(null);
      return;
    }
    let current = true;
    searchPeople(q).then((list) => current && setFound(list));
    return () => {
      current = false;
    };
  }, [q]);
  const known = new Map((people ?? []).map((p) => [p.profile.id, p]));

  return (
    <div className="screen page">
      <Link to="/you" className="back-link">
        <ChevronDown /> You
      </Link>
      <h1 className="page-title">People</h1>
      {/* The one line that says what access means (privacy 10). */}
      <p className="you-fine">You see their logged events and plans once they approve.</p>

      <div className="filter-row" role="group" aria-label="Who">
        {CHIPS.map((c) => (
          <button key={c.id} type="button" className="filter-chip" aria-pressed={chip === c.id} onClick={() => setParams(c.id === 'all' ? {} : { chip: c.id })}>
            {c.label}
          </button>
        ))}
      </div>

      {(requests.length > 0 || declined.length > 0) && (
        <section className="card people-requests" aria-label="Requests">
          <button type="button" className="people-requests-row" aria-expanded={showRequests} onClick={() => setShowRequests((v) => !v)}>
            <span className="people-avatars" aria-hidden>
              {requests.slice(0, 2).map((r) => (
                <span key={r.followerId} className="avatar avatar-small">
                  {(r.displayName ?? r.handle ?? '?').slice(0, 1).toUpperCase()}
                </span>
              ))}
            </span>
            <span className="log-main">
              <span className="log-title">Requests ({requests.length})</span>
              <span className="log-facts">{requests.length > 0 ? 'Approve or decline' : `${declined.length} declined`}</span>
            </span>
            <span className="see-all">{showRequests ? 'Hide' : 'See all ›'}</span>
          </button>
          {showRequests && (
            <ul className="log-list">
              {requests.map((r) => (
                <li key={r.followerId} className="request-row">
                  <Link to={r.handle ? `/p/${r.handle}` : '#'} state={{ back }} className="log-main">
                    <span className="log-title">{r.displayName ?? r.handle ?? 'Someone'}</span>
                    {/* What approval gives, in one line (Kylie, Oct 9, 3.24). */}
                    <span className="log-facts">They'll see your logged events and plans.</span>
                  </Link>
                  <span className="request-actions">
                    <button type="button" className="link-button" onClick={() => decide(r.followerId, true)}>
                      Approve
                    </button>
                    <button type="button" className="link-button" onClick={() => decide(r.followerId, false)}>
                      Decline
                    </button>
                  </span>
                </li>
              ))}
              {declined.map((r) => (
                <li key={r.followerId} className="request-row">
                  <Link to={r.handle ? `/p/${r.handle}` : '#'} state={{ back }} className="log-main">
                    <span className="log-title">{r.displayName ?? r.handle ?? 'Someone'}</span>
                    <span className="log-facts">Declined</span>
                  </Link>
                  <span className="request-actions">
                    <button type="button" className="link-button" onClick={() => decide(r.followerId, true)}>
                      Approve
                    </button>
                  </span>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}

      {note && (
        <p className="you-fine" role="status">
          {note}
        </p>
      )}

      {finding ? (
        <section className="card people-find" aria-label="Find people">
          <div className="search-box">
            <label className="search-field">
              <SearchIcon />
              <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Name or handle" aria-label="Name or handle" autoFocus />
            </label>
            <button type="button" className="search-clear" onClick={() => { setFinding(false); setQuery(''); }}>
              Done
            </button>
          </div>
          {found && found.length > 0 && (
            <ul className="log-list">
              {found.map((profile) => {
                const row = known.get(profile.id);
                const status = row?.youFollow ?? 'none';
                return (
                  <li key={profile.id} className="request-row people-row">
                    <span className="avatar avatar-small" aria-hidden>
                      {(profile.displayName ?? profile.handle ?? '?').slice(0, 1).toUpperCase()}
                    </span>
                    <Link to={profile.handle ? `/p/${profile.handle}` : '#'} state={{ back }} className="log-main">
                      <span className="log-title">{profile.displayName ?? profile.handle}</span>
                      {profile.handle && <span className="log-facts">@{profile.handle}</span>}
                    </Link>
                    {status === 'none' ? (
                      <button type="button" className="fav-toggle people-pill" onClick={async () => { await follow(profile); await load(); }}>
                        Follow
                      </button>
                    ) : (
                      <span className="fav-toggle on people-pill">{status === 'pending' ? 'Requested' : 'Following'}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
          {found && found.length === 0 && <p className="you-fine">No one by that name.</p>}
        </section>
      ) : (
        <button type="button" className="card people-find-row" onClick={() => setFinding(true)}>
          <span className="avatar avatar-small people-plus" aria-hidden>
            +
          </span>
          <span className="log-title">Find people</span>
        </button>
      )}

      {people === null ? null : shown.length === 0 ? (
        <div className="card empty-card">
          <div className="card-title">{people.length === 0 ? 'No one yet.' : 'No one here.'}</div>
        </div>
      ) : (
        <ul className="log-list card people-list">
          {shown.map((p) => {
            const mutual = p.followsYou && p.youFollow === 'approved';
            return (
              <li key={p.profile.id} className="request-row people-row">
                <span className="avatar avatar-small" aria-hidden>
                  {name(p).slice(0, 1).toUpperCase()}
                </span>
                <Link to={p.profile.handle ? `/p/${p.profile.handle}` : '#'} state={{ back }} className="log-main">
                  <span className="log-title">{name(p)}</span>
                  {p.profile.handle && <span className="log-facts">@{p.profile.handle}</span>}
                </Link>
                <span className="request-actions">
                  {asking?.id === p.profile.id ? (
                    <span className="remove-confirm compact">
                      <span>{asking.action === 'remove' ? 'Remove?' : asking.action === 'block' ? 'Block?' : 'Unfollow?'}</span>
                      <button type="button" className="link-button" onClick={() => setAsking(null)}>
                        Keep
                      </button>
                      <button type="button" className="link-button remove-entry" onClick={() => act(p, asking.action)}>
                        {asking.action === 'remove' ? 'Remove' : asking.action === 'block' ? 'Block' : 'Unfollow'}
                      </button>
                    </span>
                  ) : (
                    <>
                      {mutual ? (
                        <span className="people-status">Mutual</span>
                      ) : p.youFollow === 'approved' ? (
                        <span className="fav-toggle on people-pill">Following</span>
                      ) : p.youFollow === 'pending' ? (
                        <button type="button" className="fav-toggle people-pill" onClick={() => act(p, 'unfollow')}>
                          Requested
                        </button>
                      ) : p.followsYou ? (
                        <button type="button" className="fav-toggle on people-pill" onClick={async () => { await follow(p.profile); await load(); }}>
                          Follow back
                        </button>
                      ) : null}
                      <span className="people-menu">
                        <button type="button" className="round-button people-more" aria-label={`More for ${name(p)}`} aria-expanded={menuFor === p.profile.id} onClick={() => setMenuFor(menuFor === p.profile.id ? null : p.profile.id)}>
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
                    </>
                  )}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
