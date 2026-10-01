// The words for the rating model, chosen by Kylie on Oct 1, 2026.
// Change a word here and it changes everywhere.

// The night's 1–10 rating always shows with its word: "Cooked · 9/10".
export const SCORE_LABELS = [
  { max: 2, label: 'Chill' },
  { max: 4, label: 'Light' },
  { max: 6, label: 'Mid' },
  { max: 8, label: 'Brutal' },
  { max: 10, label: 'Cooked' },
] as const;

export function scoreLabel(score: number): string {
  return (SCORE_LABELS.find((band) => score <= band.max) ?? SCORE_LABELS[SCORE_LABELS.length - 1]).label;
}

// Events get no number. They get an occasion chip and a friction verdict,
// both set only from facts known before the event. Shown as "Extreme friction".
export const OCCASIONS = ['Routine', 'Notable', 'Major', 'Marquee'] as const;
export type Occasion = (typeof OCCASIONS)[number];

export const FRICTION_LEVELS = ['Low', 'Moderate', 'Heavy', 'Extreme'] as const;
export type Friction = (typeof FRICTION_LEVELS)[number];

export const frictionLabel = (level: Friction) => `${level} friction`;
