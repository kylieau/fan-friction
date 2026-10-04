import { useState } from 'react';

// The skippable three-tip guide shown the first time the app opens.
// Tip 1 matches the light gold wash: a wider circle is a bigger crowd. Tip 2 was redrafted for the Night + friction
// model and needs her OK. The old tip 3 ("Any night. Your nights too.") is on hold: it named
// Nights and "I was there", which aren't on the map. A tip only goes in once the control it
// points at is on the screen it shows over.
const TIPS = [
  {
    title: 'Gold glow = where the crowds went.',
    body: 'A wider circle means a bigger crowd. The gold is a light wash. Tap a mark to see what it was up against.',
  },
  {
    title: 'Friction = what it was up against.',
    body: 'Every date is rated from Chill to Cooked. Each big event shows its friction, from Low to Extreme: other big events, traffic, weather.',
  },
];

export function FirstRunTips({ onDone }: { onDone: () => void }) {
  const [index, setIndex] = useState(0);
  const tip = TIPS[index];
  const last = index === TIPS.length - 1;

  return (
    <div className="tips-backdrop" role="dialog" aria-modal="true" aria-labelledby="tip-title">
      <div className="tip-card">
        <div className="tip-progress" aria-label={`Tip ${index + 1} of ${TIPS.length}`}>
          {TIPS.map((_, i) => (
            <span key={i} className={i <= index ? 'on' : undefined} />
          ))}
        </div>
        <div className="tip-copy">
          <div id="tip-title" className="tip-title">{tip.title}</div>
          <div className="tip-body">{tip.body}</div>
        </div>
        <div className="tip-actions">
          {index > 0 ? (
            <button type="button" className="link-button" onClick={() => setIndex(index - 1)}>
              Back
            </button>
          ) : (
            <button type="button" className="link-button" onClick={onDone}>
              Skip tips
            </button>
          )}
          <button
            type="button"
            className="gold-button small"
            onClick={() => (last ? onDone() : setIndex(index + 1))}
          >
            {last ? 'Start' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}
