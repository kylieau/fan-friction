import { useEffect, useMemo, useRef, useState } from 'react';
import { TAG_MAX, normalizeTag, type TagSummary } from '../data';
import { activeStarters, noteStarterTapped, noteStartersShown, startersFor, type TagContext } from '../lib/starterTags';
import { TagChip } from './TagChip';

/** How many suggestions show at once (T09). */
const SHOWN = 8;

/**
 * The add-tags panel (build notes 4, "Stub tags" 2–3, T08–T09; board tags-r1 frame 2): the field with
 * your tags in it, the matches from your own tags, then one blended row of suggestions: your most
 * used and most recent first, starters filling the rest. Comma or Return adds. Done always works.
 */
export function TagsPanel({
  tags,
  onChange,
  onDone,
  context,
  known,
}: {
  tags: string[];
  onChange: (next: string[]) => void;
  onDone: () => void;
  context: TagContext;
  /** Every tag you use, most-used then most recent. */
  known: TagSummary[];
}) {
  const [text, setText] = useState('');
  const input = useRef<HTMLInputElement>(null);

  const add = (raw: string) => {
    const tag = normalizeTag(raw);
    if (tag && !tags.includes(tag)) onChange([...tags, tag]);
    setText('');
  };

  const typed = normalizeTag(text) ?? '';
  const matches = useMemo(() => (typed ? known.filter((k) => !tags.includes(k.tag) && k.tag.includes(typed)).slice(0, 4) : []), [known, tags, typed]);

  // Own tags first, starters fill the rest; a starter never repeats a tag you use or have added.
  const suggestions = useMemo(() => {
    const own = known.filter((k) => !tags.includes(k.tag)).map((k) => k.tag);
    const mine = new Set([...own, ...tags]);
    const starters = activeStarters(startersFor(context)).filter((s) => !mine.has(s));
    return {
      list: [...own, ...starters].slice(0, SHOWN),
      starters: new Set(starters),
    };
    // The suggestion row is fixed for one visit of the panel, so a tap does not reshuffle it.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [known.length, context.domain, context.sport, context.ahead]);

  useEffect(() => {
    noteStartersShown(suggestions.list.filter((t) => suggestions.starters.has(t)));
    input.current?.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pick = (tag: string) => {
    if (suggestions.starters.has(tag)) noteStarterTapped(tag);
    add(tag);
  };

  return (
    <div className="tags-panel" role="group" aria-label="Add tags">
      <div className="tags-panel-head">
        <button type="button" className="tags-panel-back" onClick={onDone}>
          ‹ Back
        </button>
        <h2 className="tags-panel-title">Add tags</h2>
        <button type="button" className="tags-panel-done" onClick={onDone}>
          Done
        </button>
      </div>
      <label className="tags-panel-field" onClick={() => input.current?.focus()}>
        {tags.map((tag) => (
          <TagChip key={tag} tag={tag} onRemove={() => onChange(tags.filter((t) => t !== tag))} />
        ))}
        <input
          ref={input}
          value={text}
          enterKeyHint="done"
          autoCapitalize="none"
          autoComplete="off"
          aria-label="Add a tag"
          placeholder={tags.length === 0 ? 'Add a tag' : ''}
          onChange={(ev) => {
            const value = ev.target.value;
            if (value.includes(',')) {
              const parts = value.split(',');
              const remaining = parts.pop() ?? '';
              const next = [...tags];
              for (const part of parts) {
                const tag = normalizeTag(part);
                if (tag && !next.includes(tag)) next.push(tag);
              }
              // One update preserves every tag when several arrive in the same input event.
              if (next.length !== tags.length) onChange(next);
              setText(remaining.slice(0, TAG_MAX));
              return;
            }
            setText(value.slice(0, TAG_MAX));
          }}
          onKeyDown={(ev) => {
            if (ev.key === 'Enter') {
              ev.preventDefault();
              if (typed) add(text);
              else onDone();
            } else if (ev.key === 'Backspace' && text === '' && tags.length > 0) {
              onChange(tags.slice(0, -1));
            }
          }}
        />
      </label>
      {matches.length > 0 && (
        <ul className="tags-panel-matches">
          {matches.map((m) => (
            <li key={m.tag}>
              <button type="button" onClick={() => add(m.tag)}>
                <span className="tags-panel-match">{m.tag}</span>
                <span className="tags-panel-count">
                  on {m.count} {m.count === 1 ? 'stub' : 'stubs'}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
      {suggestions.list.filter((t) => !tags.includes(t)).length > 0 && (
        <div className="tags-panel-suggest" role="group" aria-label="Suggestions">
          {suggestions.list
            .filter((t) => !tags.includes(t))
            .map((tag) => (
              <button key={tag} type="button" className="tags-panel-chip" onClick={() => pick(tag)}>
                {tag}
              </button>
            ))}
        </div>
      )}
    </div>
  );
}
