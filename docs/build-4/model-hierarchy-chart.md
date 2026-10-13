# Fan/Friction: who builds what

```mermaid
flowchart TD
  N[Build notes] --> P{Plan step}
  P -->|Fable available| F[Fable 5.1, high: read, plan, ask questions]
  P -->|Fable out| S[Codex GPT-6.1 Sol, medium: plan only, then stop]
  F --> H[Plan handoff file]
  S --> H
  H --> D[Design-heavy parts: Fable, or Opus on high]
  H --> C[Patterned parts: Cursor Composer]
  D -->|Opus also out| C
  C --> K[Codex Sol, medium: check-only pass]
  D --> K
  K --> M[Commit and merge]
```

## The models

| Model | Best at | What it costs | Effort | Build 4 parts it owns | If it's unavailable |
|---|---|---|---|---|---|
| **Fable 5.1** (Claude) | Top quality, long specs, design taste | Uses up Claude quota fast | High for read/plan, medium for decided steps | Default builder for everything (out for about 27 hours right now) | Sol plans, Opus and Composer build |
| **Opus** (Claude) | Strong design and new-feature builds | Claude quota, possibly the same limit as Fable | High | City view redesign (Map/List, calendar, friend chips), stub tags, New stub sheet | Composer builds these too, with an extra Sol check |
| **Codex GPT-6.1 Sol** | Careful planning and review | Expensive: one big build used about 20% of the weekly Codex allowance | Medium (high only if the notes conflict) | The plan only, plus the final check-only pass. It never does the full build | Fable plans, or wait for the reset |
| **Cursor Composer** | Fast pattern-following code | Cheap: Cursor bar at 2%, monthly | Default | Chicago rebuild, crowd-number fix, copy and data items | Opus, or wait |

## City-build pipeline
1. Do the research first (already done).
2. **Composer** builds the city from the research file, using Milwaukee as the pattern.
3. **Sol** does a check-only pass against the research and Milwaukee, fixing gaps without rebuilding.

## What the plan handoff file must have
- [ ] Steps in order, with the files each one touches and how to check it's done
- [ ] Every locked decision, quoted from the notes
- [ ] Data and Supabase changes spelled out (tables, columns, RLS)
- [ ] Conflicts found, and how each was resolved
- [ ] Open questions, marked as blocking or not blocking
- [ ] What's out of scope
- [ ] Which builder owns each step
- [ ] The commit plan
- [ ] The rule: if something isn't in the plan, stop and ask; don't guess
