import { useSearchParams } from 'react-router-dom';
import { BackLink } from './BackLink';
import { ChevronDown } from './Icons';

/**
 * The head the You pages share (Ranks, Recap, Your year, Spend details; build 7): "‹ You", the title, and the year the
 * page covers (`?year=`, this year by default, any year with stubs, or All time), picked in place.
 */
export function YearHeader({ title, years, year, sub, back = { to: '/you', label: 'You' } }: { title: string; years: readonly string[]; year: string; sub?: string; back?: { to: string; label: string } }) {
  const [params, setParams] = useSearchParams();
  const pick = (next: string) =>
    setParams(
      (prev) => {
        const p = new URLSearchParams(prev);
        p.set('year', next);
        return p;
      },
      { replace: true },
    );
  void params;
  return (
    <>
      <BackLink to={back.to} label={back.label} />
      <div className="you-header">
        <h1 className="page-title">{title}</h1>
        <label className="year-pick year-pick-head">
          <select className="year-select" value={year} aria-label="Year" onChange={(ev) => pick(ev.target.value)}>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
            <option value="All time">All time</option>
          </select>
          <span className="year-word small" aria-hidden>
            {year} <ChevronDown />
          </span>
        </label>
      </div>
      {sub && <p className="you-fine page-sub">{sub}</p>}
    </>
  );
}

/** The year a You page covers, from `?year=`: a four-digit year or "All time"; this year otherwise. */
export function yearParam(raw: string | null, thisYear: string): string {
  return raw === 'All time' || (raw && /^\d{4}$/.test(raw)) ? raw : thisYear;
}
