# Build 4: plan only (Codex GPT-6.1 Sol, medium effort)

You are planning build 4 of Fan/Friction (repo kylieau/fan-friction). **Do not write or change any app code. Do not commit.** Read, plan, ask questions, then stop. Other models will build from your plan: Opus does the design-heavy parts, and Cursor Composer does the patterned parts.

## Read first
1. Pull the latest `main`. Read `MEMORY_HANDOFF.md`, `BACKLOG.md`, and `docs/product/product-decisions.md`.
2. Read `docs/build-4/build-notes-4-oct12.md` in the repo. It's the source of truth. `docs/build-4/build3-review-form-decisions-oct12.md` holds the full rationale behind each decision.
3. Look at the mockups in `docs/build-4/mockups/city/` (city view) and `docs/build-4/mockups/tags/` (stub tags; `tags-luggage.png` is the final chip). `docs/build-4/live-screens/` shows how the app looks today.
4. `docs/build-4/research/starter-tags-research-*.md` is also copied to `docs/research/topics/`. It's research only, not a decision.

5. **Research under review:** Research answers in `docs/research/topics/{city-names-codes,city-types,open-site-crowds,team-colors}-answer.md` are under review by Kylie and not yet decided. Do not plan from them as decisions. The Chicago rebuild depends on them, especially whether the Wrigley 36.7% driving share is a real figure or a mix-up with a University of Washington number. Mark the Chicago step as blocked on that review and list it in your blocking questions.

## Scope (all decided in the notes)
- §0, the crowd number bug: unify on Final, else Announced, else Estimated.
- §1, the city view: Map/List, the shared header, the K1 calendar, the List range, the chips' activity line, chip tap, the date page instead of the Why card, and hiding Famous dates.
- The other build items: R04, R10 (the page title is "New stub"), C01 Tampa Bay, C03, C11, C16 re-checks, and the C04 car-share estimates marked estimated.
- C15: rebuild Chicago from scratch with the Astra notes.
- Stub tags, T01–T13, plus the tag suggestions. How the T13 filters combine is **open on purpose**: build the Tag filter alongside the existing chips, and don't invent the rules for combining filters.
- Seats as an optional structured field (if the notes have it in this build).
- BACKLOG and docs-only items listed in the notes.

## Your output: `docs/build-4-plan.md`
Save it as a downloadable .md. It must contain:
- The steps in order, with the files each one touches and the checks that show it's done.
- Every locked decision, quoted from the notes, next to the step it governs.
- Data and Supabase changes spelled out: tables, columns, migrations, RLS, and tag privacy (tags follow their stub's privacy).
- Conflicts you found between the notes, the code and past decisions, with how you'd resolve each. Mark any you can't resolve as questions.
- Open questions, each marked **blocking** or **not blocking**.
- What's out of scope.
- Which builder owns each step: **Opus** (city view, stub tags, New stub sheet) or **Composer** (crowd fix, copy and data items, Chicago rebuild, docs).
- A commit and PR plan: one PR per step, small and mergeable one at a time. Note that 14 city PRs are landing at the same time and touch the metros, venues and expectedDraw files.
- This rule for the builders: **if it isn't in the plan, stop and ask; don't guess.**

Then stop. List your blocking questions at the end of your reply.
