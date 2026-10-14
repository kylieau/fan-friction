import { typeIconMarkup } from '../map/typeIcons';

/**
 * The type icon at the very start of a title (build 5, item 12). `size` is the surface's measured size (18 on rows,
 * the date page lineup, the event title and the Faves picker; 17 on the timeline; 16 on Stubs). Decorative: the
 * title says what it is.
 */
export function TypeIcon({ typeKey, size, className = '' }: { typeKey: string | null | undefined; size: number; className?: string }) {
  if (!typeKey) return null;
  return <span className={`type-icon-wrap ${className}`.trim()} aria-hidden dangerouslySetInnerHTML={{ __html: typeIconMarkup(typeKey, size) }} />;
}
