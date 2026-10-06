import type { LabeledFact } from '../data';
import { LockIcon } from './Icons';

/** One line per category. Nothing here joins them into a single sentence. */
export function FactList({ facts }: { facts: LabeledFact[] }) {
  if (facts.length === 0) return null;
  return (
    <dl className="fact-list">
      {facts.map((fact) => (
        <div className={`fact-line${fact.private ? ' private' : ''}`} key={fact.label}>
          <dt>
            {fact.label}
            {fact.private && <LockIcon />}
          </dt>
          <dd>
            {fact.href ? (
              <a href={fact.href} target="_blank" rel="noreferrer">
                {fact.value}
              </a>
            ) : (
              fact.value
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}
