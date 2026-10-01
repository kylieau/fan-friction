import { useState } from 'react';

// The skippable three-tip guide shown the first time the app opens.
// Tip 1's wording is from the mockup; tips 2 and 3 are Kylie's approved wording.
const TIPS = [
  {
    title: 'Gold glow = where the crowds went.',
    body: 'The brighter the spot, the more people were there. Tap the brightest one to see what it was up against.',
  },
  {
    title: 'Squeeze = how crowded out it was.',
    body: 'Every big event gets a Squeeze score from 1 to 10. The higher it is, the more the night was working against it: other big events, traffic, weather.',
  },
  {
    title: 'Any night. Your nights too.',
    body: 'Pick any past night from Nights. Went to something? Tap "I was there" and it lands in You.',
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
          <button type="button" className="link-button" onClick={onDone}>
            Skip tips
          </button>
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
