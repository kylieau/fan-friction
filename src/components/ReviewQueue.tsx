import { useEffect, useState } from 'react';
import { reviewQueue, setReviewStatus, type ReviewRow } from '../data';
import { METROS } from '../config/metros';

const STATUS_WORD: Record<string, string> = { pending: 'Pending', approved: 'Approved', confirmed: 'Confirmed', declined: 'Declined', seeded: 'Seeded' };

/** "Season in · Opponent free text · Room on file", the gate's findings in words. */
function checksLine(row: ReviewRow): string {
  const c = row.checks;
  if (!c) return row.source === 'form' ? 'Typed in by hand' : '';
  const season = c.season === 'in' ? 'In season' : c.season === 'out' ? 'Out of season' : 'Season unknown';
  const opponent = c.opponent === 'known' ? 'Opponent known' : c.opponent === 'free-text' ? 'Opponent typed' : null;
  const room = c.room === 'on-file' ? 'Room on file' : 'Room typed';
  return [season, opponent, room].filter(Boolean).join(' · ');
}

function when(row: ReviewRow): string {
  const d = new Date(`${row.date}T12:00:00Z`).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', timeZone: 'UTC' });
  const t = row.startTime ? ` · ${Number(row.startTime.slice(0, 2)) % 12 || 12}:${row.startTime.slice(3, 5)} ${Number(row.startTime.slice(0, 2)) >= 12 ? 'pm' : 'am'}` : '';
  return `${d}${t}`;
}

/**
 * The review queue (Kylie, Oct 21, 2026, late evening: no dashboard; an admin marker and an access rule). Settings ›
 * Review queue, for an admin account only: each fan-added event sent for review, with the gate's findings, and
 * Approve / Decline. An approved row is written to the catalog at the next nightly run.
 */
export function ReviewQueue() {
  const [rows, setRows] = useState<ReviewRow[] | null>(null);
  const [busy, setBusy] = useState<string | null>(null);
  useEffect(() => {
    let current = true;
    reviewQueue().then((list) => current && setRows(list));
    return () => {
      current = false;
    };
  }, []);
  const decide = async (row: ReviewRow, status: 'approved' | 'declined' | 'pending') => {
    setBusy(row.id);
    const ok = await setReviewStatus(row.id, status);
    setBusy(null);
    if (ok) setRows((list) => (list ?? []).map((r) => (r.id === row.id ? { ...r, status, confirmedBy: status === 'approved' ? 'admin' : null } : r)));
  };
  if (rows === null) return <div className="settings-row settings-static">Loading…</div>;
  if (rows.length === 0) return <div className="settings-row settings-static">Nothing to review.</div>;
  return (
    <ul className="review-list">
      {rows.map((row) => (
        <li key={row.id} className={`review-row${row.status === 'pending' ? '' : ' settled'}`}>
          <div className="review-title">{row.title}</div>
          <div className="review-sub">
            {[when(row), row.venue, row.metroId ? METROS[row.metroId]?.name : null].filter(Boolean).join(' · ')}
          </div>
          {checksLine(row) && <div className="review-checks">{checksLine(row)}</div>}
          <div className="review-actions">
            {row.status === 'pending' ? (
              <>
                <button type="button" className="gold-button small" disabled={busy === row.id} onClick={() => decide(row, 'approved')}>
                  Approve
                </button>
                <button type="button" className="fav-toggle" disabled={busy === row.id} onClick={() => decide(row, 'declined')}>
                  Decline
                </button>
              </>
            ) : (
              <>
                <span className="review-status">{STATUS_WORD[row.status] ?? row.status}{row.confirmedBy === 'second-person' ? ' · a second person' : ''}</span>
                {(row.status === 'approved' || row.status === 'declined') && (
                  <button type="button" className="link-button" disabled={busy === row.id} onClick={() => decide(row, 'pending')}>
                    Undo
                  </button>
                )}
              </>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
