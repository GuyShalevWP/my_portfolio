# Design system

Source of truth: `projects/portfolio-design/portfolio-design-v2.html` (human-gate
passed 2026-08-31, 2 rounds, reviewer Guy Shalev). Tokens live in code at
`src/styles/GlobalStyles.ts` (`theme`) and are typed in `src/types/Theme.ts`.
Every component below consumes them by name — no inline hex, no literal
spacing/radius numbers.

## Tokens

### Color (`theme.color`)

| Token | Value | Use |
|---|---|---|
| `canvas` | `#0F1520` | Page background — the instrument housing |
| `surface` | `#171F2E` | Raised panels, the dispatch rail, the mobile bar |
| `surface2` | `#1E2839` | Inset surfaces — topology nodes |
| `ink` | `#E8EDF5` | Primary text |
| `muted` | `#8C99AC` | Secondary text — 5.8:1 on canvas |
| `line` | `#253044` | Hairlines, borders |
| `signal` | `#FFB020` | The one accent — amber. 9.8:1 on canvas |
| `live` | `#4FD1C5` | Functional status only — running / passing |
| `alert` | `#FF6B5B` | Functional status only — blocked / failed |

### Spacing (`theme.spacing`)

`s1` 4px · `s2` 8px · `s3` 12px · `s4` 16px · `s5` 24px · `s6` 32px ·
`s7` 48px · `s8` 72px · `s9` 96px · `s10` 160px

### Radius (`theme.radius`)

`sm` 4px · `md` 8px · `lg` 14px · `full` 999px

### Type (`theme.font`, `theme.fontWeight`)

- `font.display` — Bricolage Grotesque. Weights: `fontWeight.displayLight`
  (200) and `fontWeight.displayBold` (800) only — never a middle weight.
  **Known discrepancy:** the approved comp's own CSS sets `.h3` to
  `font-weight: 700`, one step short of that "only 200/800" rule stated
  in this ticket's design tokens section. Shipped code matches the comp
  (700 for every `<h3>`) rather than the stated rule, since the comp is
  what passed human-gate. Flagged for `web-dev-designer` to reconcile.
- `font.body` — Newsreader 400. All prose (hero sub, capability body
  copy, receipt/demo descriptions) — the human voice.
- `font.mono` — JetBrains Mono, `fontWeight.monoRegular` (400) /
  `monoMedium` (500) / `monoBold` (700). All labels, status readouts,
  spec values — the machine voice.

### Motion (`theme.motion`, `src/utils/motion-easing-utils.ts`)

Easing `cubic-bezier(.2,.7,.3,1)` (`EASE_OUT` as an array for the
`motion` library). Durations: fast 120ms, base 200ms, slow 400ms.

### Breakpoint (`theme.breakpoint.mobile`)

`1024px` — the single breakpoint used everywhere: the rail collapses to
the mobile bar here, and every section's `.m`-prefixed comp override
(stacking, gutters, type sizes) applies here too.

## Components

- **`GlobalStyles`** (`src/styles/GlobalStyles.ts`) — reset, base
  body/heading font families, `:focus-visible` ring (`{signal}`, 2px,
  2px offset — never removed), `prefers-reduced-motion: reduce` handling.
- **`DispatchRail`** (`src/layouts/dispatch-rail/`) — desktop: 220px
  sticky column, `{surface}` fill (the rail is housing, not a gap), a
  1px seam on its right edge whose gradient stop tracks scroll progress.
  Below `{breakpoint.mobile}` it collapses to a 48px sticky bar that
  opens a sheet with the same six jump links (`RailNavList`, shared by
  both).
- **`HeroSection`** (`src/features/hero-section/`) — `h1a`/`h1b` split
  (`fontWeight.displayLight` intro line, `displayBold` headline, amber
  accent), CTAs via `ButtonLink`, and the `AgentConsole` panel
  (`{surface}` panel, five status rows).
- **`CapabilitySection`** — three `CapabilityColumn`s plus the wide
  "Builds agents. Not prompts." panel with `TopologyDiagram` (lead →
  fan of four → merged PR, `aria-hidden` — decorative, the prose already
  says it).
- **`SpecSheetSection`** — labelled rows of named values only. No
  proficiency bars, no percentages.
- **`DemoSection`** — section frame and the two panel containers only.
  Interiors are dashed-border static placeholders (`Stage 3 · queued`) —
  the interactive tic-tac-toe/dispatch games ship separately.
- **`ReceiptsSection`** — three text rows (`ReceiptRow`), not cards. A
  row with no `href` (the a11y toolkit, per the content correction)
  renders as plain text, not a link.
- **`ContactSection`** — email/GitHub/LinkedIn rows plus the closing
  `ButtonLink` CTA.

## Shared primitives (`src/components/`)

Promoted here once a second feature needed them, per the project file's
colocation rule:

- **`MonoLabel`** — the mono kicker, `variant="muted" | "signal"`.
- **`Panel`** — `{surface}` background, `{line}` border, `{radius.lg}`.
- **`StatusDot`** — `variant="live" | "queued" | "signal" | "alert"`,
  optional `pulse` (2s loop — the only looping animation on the page,
  reserved for the single active rail item, dropped under reduced
  motion).
- **`ButtonLink`** — `variant="primary" | "ghost"`.
- **`SectionHeading`** — the `<h2>` + kicker pair repeated by every
  section below the hero.
- **`SectionFrame`** — the `.sec` wrapper (padding `{s10}`, `{line}` top
  border) plus the shared scroll-reveal (16px rise + fade,
  `whileInView`, once — instant opacity swap under reduced motion).
