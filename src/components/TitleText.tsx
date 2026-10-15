// An event or stub title with its label set apart (labels round 3, Kylie, Oct 15;
// docs/build-5/mosaic/labels/labels-r3-note.md). Titles stay plain strings everywhere (share text, calendar,
// saved stubs): "Brewers at Dodgers (NLCS G3)". On screen:
//   stacked (lists, pages): the name, then the label on its own line, no parentheses ("NLCS Game 3"), with
//     "(if necessary)" after it;
//   inline (Local Competition bars, feed sentences): the name, then "(NLCS G3)" or "(NLCS G6, if necessary)".
// Stage labels are dark, weight 500; low-stakes, occasion and doubleheader labels and "if necessary" are grey,
// regular. Older saved titles (" · NLCS Game 3", "Preseason · vs. Nuggets") read the same way.
import { splitTitleLabel, type TitleLabel } from '../lib/eventTitle';

/** The label on its own line: "NLCS Game 3", "NLCS Game 6 (if necessary)", "Preseason". */
export function LabelLine({ label, className = '' }: { label: TitleLabel; className?: string }) {
  return (
    <span className={`title-label-line label-${label.kind} ${className}`.trim()}>
      {label.own}
      {label.ifNecessary && <span className="label-ifnec"> (if necessary)</span>}
    </span>
  );
}

/** The label inline after a name: "(NLCS G3)", "(NLCS G6, if necessary)". */
export function InlineLabel({ label }: { label: TitleLabel }) {
  return (
    <span className={`title-label label-${label.kind}`}>
      ({label.inline}
      {label.ifNecessary && <span className="label-ifnec">, if necessary</span>})
    </span>
  );
}

export function TitleText({ text, layout = 'stacked' }: { text: string; layout?: 'stacked' | 'inline' }) {
  const { name, label } = splitTitleLabel(text);
  if (!label) return <>{text}</>;
  if (layout === 'inline') {
    return (
      <>
        {name} <InlineLabel label={label} />
      </>
    );
  }
  return (
    <>
      {name}
      <LabelLine label={label} />
    </>
  );
}
