# Research prompt: where to get per-school season attendance for college non-revenue sports

Paste everything below the line into the research tool. Kylie runs it herself (build 7.1, item M35, "research first, ship later").

---

I'm building a US events app that shows an expected crowd figure on every event and uses those figures to judge how busy an area is on a given day. College football and men's basketball already have attendance data. **Soccer, volleyball, baseball, softball, women's basketball, water polo, hockey, lacrosse and other non-revenue sports usually don't**, so their rows show no number. Today the app knows each building's capacity for the setup (for example Titan Stadium at Cal State Fullerton, 10,000 for soccer), and it reads each school's schedule from its athletics website (most run on the Sidearm Sports platform).

Schools I cover now include (Los Angeles area) UCLA, USC, Cal Baptist, LMU, Long Beach State, Pepperdine, CSUN, UC Irvine, Cal State Fullerton, Cal Poly Pomona, Cal State LA, Azusa Pacific, Cal Lutheran and CSUDH, plus schools in other US metros (for example Cal, Santa Clara, Boston College, Northeastern, DePaul, Ohio State, SMU, TCU, Denver and Michigan).

I want a season-average home attendance per school and sport, from published sources, so a row can read "about 1,200" instead of nothing or "Up to 10,000".

Please find and summarize:

1. **NCAA sources.** Does NCAA statistics (stats.ncaa.org or the NCAA's attendance reports) publish attendance by school for these sports? Which sports, which divisions, which years, and in what form (per game, season total, average)? Is there a stable URL pattern or a download?
2. **Sidearm Sports school sites.** Do box scores or "cumulative season stats" pages on Sidearm sites list per-game attendance? Is it consistent across schools and sports? Give 3 to 5 example URLs (for example a Cal State Fullerton men's soccer box score, a UC Irvine women's volleyball box score, a Long Beach State baseball box score).
3. **Conference reports.** Which conferences (Big West, WCC, Big Ten, Pac-12 successor groupings, Mountain West, American, etc.) publish attendance leaders or averages by sport?
4. **Other aggregators** (D1Baseball, TopDrawerSoccer, volleyball attendance rankings, the NCAA's annual "attendance records" PDFs, College Baseball Nation, etc.), and how reliable they are.
5. **Gaps and quirks.** Sports where attendance is often not recorded or recorded as an estimate, free-admission events, doubleheaders, neutral-site tournaments, and how schools report "announced" vs. turnstile counts.
6. **Terms of use.** Anything that would stop an app from reading these pages automatically once a season.

Rules for the answer:
- Cite every claim with a source name, date, and URL. Prefer 2023 to 2026 seasons.
- **Don't guess numbers.** If attendance isn't published for a school or sport, say "Not published".
- Give a final table: sport × source → coverage (which schools or divisions), format, how to read it, reliability (high / medium / low).
- Finish with a short recommendation: the most reliable source per sport, and which sports should keep showing "Up to N" (the setup's capacity) because no source exists.
