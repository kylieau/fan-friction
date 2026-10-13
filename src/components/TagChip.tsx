/**
 * One of your tags (build notes 4, "Stub tags" 6; mock tags-luggage.png): a luggage tag with a pointed
 * left end and an open punched hole, thin violet outline and text, 11 pt, lowercase, no "#".
 * With `onRemove` it carries a × (the tag panel and the sheet's row); with `onClick` it opens the tag.
 * `size="row"` is the smaller chip on a Stubs row (4.6 pt ring, less padding).
 */
export function TagChip({ tag, onRemove, onClick, size = 'sheet' }: { tag: string; onRemove?: () => void; onClick?: () => void; size?: 'sheet' | 'row' }) {
  const body = (
    <>
      <span className="tag-chip-hole" aria-hidden />
      <span className="tag-chip-text">{tag}</span>
    </>
  );
  return (
    <span className={`tag-chip is-${size}${onClick ? ' is-link' : ''}`}>
      {onClick ? (
        <button type="button" className="tag-chip-body" onClick={onClick}>
          {body}
        </button>
      ) : (
        <span className="tag-chip-body">{body}</span>
      )}
      {onRemove && (
        <button type="button" className="tag-chip-x" aria-label={`Remove ${tag}`} onClick={onRemove}>
          ×
        </button>
      )}
    </span>
  );
}
