import type { LabeledFact } from '../data';

/** One line per category. Nothing here joins them into a single sentence. */
export function FactList({ facts }: { facts: LabeledFact[] }) {
  if (facts.length === 0) return null;
  return (
    <dl className="fact-list">
      {facts.map((fact) => (
        <div className="fact-line" key={fact.label}>
          <dt>{fact.label}</dt>
          <dd>{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}
