# Reviews and build notes

Everything here is input from outside the build: independent reviews of the app, and Kylie's decisions on them. The reviews are claims, not decisions. The build notes are her decisions.

| Folder or file | What it holds |
|---|---|
| `gap-reviews/` | Independent reviews of the live app and the repo (Codex, GrokBot/Cursor), with screenshots and mockups under `assets/`. See its README. |
| `tester-readiness-reviews/` | Independent reviews of whether a tester can use the main flows unaided (Codex, GrokBot). See its README. |
| `build2-judgment-call-decisions.md` | Kylie's Oct 11 decisions on the six build 2 judgment calls, three more calls, and the build 2 review fixes, saved verbatim. Mocks `call1`, `call2`, `call5`, `call6` in `docs/design/`. |
| `build-notes-2-oct10.md` | Kylie's second build plan (Oct 10, 2026), saved verbatim: 18 review fixes first, then the settled read, Favorites, Following, privacy, global search, naming, chips, friction words, colors, the ticket line and "I watched it". Mocks in `docs/design/`; research in `docs/research/`. |
| `build-notes-oct9.md` | Kylie's decisions on all 103 issues from the Oct 7 reviews, plus her Oct 9 calls, saved verbatim. The build order and the open questions are inside. Mockups in `assets/build-notes-oct9/`. |

Closing a review: add a `Status: closed, <where it went>, <date>` line to it; the pre-commit hook moves it, with its assets, to `docs/archive/reviews/` and fixes the links (`npm run docs:tidy` previews).
