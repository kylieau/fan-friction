// An event or stub title with its aside set apart: "Nuggets at Clippers (Preseason)" renders the
// parenthesis smaller, regular weight and muted (Kylie, Oct 15: preseason isn't important enough
// to be part of the title). Titles stay plain strings everywhere else (share text, calendar, saved
// stubs); older saved titles with " · Preseason" or "Preseason · " render the same way.

const ASIDE = '(?:Preseason|Spring training(?:, [A-Za-z ]+ League)?)';
const TRAILING = new RegExp(`^(.*?)\\s*(?:\\((${ASIDE})\\)|·\\s*(${ASIDE}))$`);
const LEADING = new RegExp(`^(${ASIDE})\\s*·\\s*(.+)$`);

/** The title's name and its aside ("Preseason"), or the whole title when it has none. */
export function splitAside(title: string): { name: string; aside: string | null } {
  const lead = title.match(LEADING);
  if (lead) return { name: lead[2], aside: lead[1] };
  const trail = title.match(TRAILING);
  if (trail && trail[1]) return { name: trail[1], aside: trail[2] ?? trail[3] };
  return { name: title, aside: null };
}

export function TitleText({ text }: { text: string }) {
  const { name, aside } = splitAside(text);
  if (!aside) return <>{text}</>;
  return (
    <>
      {name} <span className="title-aside">({aside})</span>
    </>
  );
}
