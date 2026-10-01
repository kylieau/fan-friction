// The word shown next to every 1–10 score (night scores and Squeeze), so a
// number never appears bare. Chosen by Kylie, Oct 1, 2026.
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
