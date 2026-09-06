# Design system

Source of truth: `projects/portfolio/design/portfolio-redesign-2026-09-06.html`
(human-gate PASSED 2026-09-06, round 4, reviewer Guy Shalev) — an evolution of
the original `portfolio-design-v2.html` (passed 2026-08-31). Tokens live in
code at `src/styles/GlobalStyles.ts` (`theme`) and are typed in
`src/types/Theme.ts`. Every component below consumes them by name — no inline
hex, no literal spacing/radius numbers.

## Tokens

### Color (`theme.color`)

| Token | Value | Use |
|---|---|---|
| `canvas` | `#0F1520` | Page background — the instrument housing |
| `surface` | `#171F2E` | Raised panels, the top bar, the loadout band |
| `surface2` | `#1E2839` | Inset surfaces — loadout tiles, topology nodes, chips |
| `ink` | `#E8EDF5` | Primary text — 15.6:1 on canvas |
| `muted` | `#8C99AC` | The only secondary text — 6.3:1 on canvas |
| `line` | `#253044` | Hairlines and borders. Never text. |
| `idle` | `#3A4557` | Dot fills, unpicked Dispatch chip borders. Never text. |
| `signal` | `#FFB020` | The one accent — amber. 10.0:1 on canvas |
| `signalHi` | `#FFC24D` | Hover-only lift on `signal` — 11.4:1 on canvas. Never used at rest. |
| `live` | `#4FD1C5` | Functional status only — running / passing |
| `alert` | `#FF6B5B` | Functional status only — blocked / failed |

`dim` (`#4A5568`, 2.4:1) and `faint` (`#3E4A5C`, 2.0:1) are deleted — both
carried real text and both failed WCAG AA. There is no third text color
between `ink` and `muted`; tertiary hierarchy is carried by size and weight,
not by lowering contrast. Lowest text ratio anywhere on the page: 5.1:1
(`muted` on `surface2`), against a 4.5 floor.

`queued` is renamed `idle` — same hex, same "fills and borders only" rule,
new name because it no longer describes a `StatusDot` waiting on real work;
it's just the neutral dot.

### Spacing (`theme.spacing`)

`s1` 4px · `s2` 8px · `s3` 12px · `s4` 16px · `s5` 24px · `s6` 32px ·
`s7` 48px · `s8` 72px · `s9` 96px · `s10` 128px · `s11` 160px

`s10` changed from 160px to 128px, and the old 160px value survives as the
new `s11` — the page now runs a real 96 / 128 / 160 rhythm instead of one
repeated value.

### Radius (`theme.radius`)

`sm` 4px · `md` 8px · `lg` 14px · `full` 999px (unchanged, and locked — a
child's radius is never larger than its parent's).

### Type (`theme.font`, `theme.fontWeight`)

- `font.display` — Bricolage Grotesque. Weights: `fontWeight.displayLight`
  (200) and `fontWeight.displayBold` (800), plus a plain `700` used directly
  on every `<h3>` (headline steps only, no middle-weight body text).
- `font.body` — Newsreader 400. All prose — the human voice.
- `font.mono` — JetBrains Mono, `fontWeight.monoRegular` (400) / `monoMedium`
  (500) / `monoBold` (700). All labels, status readouts, spec values — the
  machine voice.
- `font.pixel` — Silkscreen, loaded via `index.html` as a webfont (not an npm
  dependency). Exactly two roles, never a third: the top bar wordmark
  (`GUY.SHALEV`, 14px desktop / 12px mobile) and the demo keycap legends
  (9px glyphs, an 11px ceiling for anything in this face).

### Motion (`theme.motion`, `src/utils/motion-easing-utils.ts`)

Easing `cubic-bezier(.2,.7,.3,1)` (`EASE_OUT` as an array for the `motion`
library). Durations: fast 120ms, base 200ms, slow 400ms. One orchestrated
load moment: the hero console's rows resolve 60ms apart
(`useBootStagger`), then the top bar's active-link underline draws in,
200ms, left to right. Section enter is a 200ms rise-and-fade
(`useRevealVariants`), once. Hover is 120ms. The availability dot in the top
bar is the only looping animation on the page. All of it collapses to an
instant, non-animated state under `prefers-reduced-motion: reduce`.

### Breakpoint (`theme.breakpoint.mobile`)

`1024px` — the single breakpoint used everywhere: the top bar collapses to
the mobile bar and sheet here, and every section's mobile override
(stacking, gutters, type sizes) applies here too.

## Layout

The content field is `max-width: 1008px; margin: 0 auto` (`contentField` in
`src/styles/layout-mixins.ts`), shared by the page's `Wrap` and the top bar's
inner row so both align on the same left/right edge at every viewport width
— this is what keeps the wordmark flush with the hero headline. Below the
breakpoint it drops the cap for a fixed `s5` (24px) side gutter instead.

The loadout band is the one element that escapes the field: full-bleed via
`margin-inline: calc(50% - 50vw); padding-inline: calc(50vw - 50%)` on
`LoadoutSection`, not a fixed negative margin — the formula resolves to
exactly 216px of padding at a 1440px viewport (matching the design comp,
which fakes the same effect with a fixed artboard-only margin) and keeps the
band flush with the true window edge at every other width.

## Components

- **`GlobalStyles`** (`src/styles/GlobalStyles.ts`) — reset, base
  body/heading font families, `:focus-visible` ring (`{signal}`, 2px,
  2px offset — never removed), `prefers-reduced-motion: reduce` handling.
- **`TopBar`** (`src/layouts/top-bar/`) — replaces the old 220px sticky side
  rail. One line, `{s8}` (72px), sticky, `{surface}` fill, a `{line}`
  hairline beneath. Left cluster: the Silkscreen wordmark, the role, and the
  availability state (the only looping dot on the page), each separated by a
  `{line}` hairline. Right cluster: the six jump links, active state tracked
  by `IntersectionObserver` (`useActiveSection`) with a `{signal}` underline
  that slides between links via a shared `layoutId` (off under reduced
  motion). Below `{breakpoint.mobile}` it drops to a 48px bar with a
  current-section trigger that opens a sheet carrying the same six links
  plus the role, availability, and one "Email Guy" action.
- **`HeroSection`** (`src/features/hero-section/`) — no eyebrow (the old
  version-stamp tag is gone). `h1a`/`h1b` split (`fontWeight.displayLight`
  intro line, `displayBold` 88px headline, amber accent), two CTAs via
  `ButtonLink` ("Play the demos" / "Email Guy"), and the `AgentConsole`
  panel (`{surface}` panel, five status rows, both games it describes are
  real and playable below).
- **`CapabilitySection`** — three equal-width `CapabilityColumn`s (flex,
  `{s7}` gutter, one type scale, `DELIVERY` / `SYSTEMS` / `RANGE`
  micro-labels) plus the wide "Builds agents. Not prompts." panel with
  `TopologyDiagram` (lead → fan of four → merged PR, `aria-hidden` —
  decorative, the prose already says it). The three equal columns are a
  deliberate, settled choice: the reviewer compared this against an
  asymmetric 7/5 grid across two rounds and chose the equal columns anyway.
  No cards, no borders, no background; ragged column bottoms are expected.
- **`SpecSheetSection`** (`src/features/spec-sheet-section/`) — the
  signature element. A full-bleed "loadout" band (`LoadoutSection`) with a
  pixel-grid backdrop, replacing the old flat spec table. Three
  `LoadoutGroup`s ("Ships the client" / "Ships the service" / "Ships the
  rest"), each holding one or more `LoadoutSlot`s (a label plus a wrapped
  row of `LoadoutTile`s — 26 item tiles total). Tiles wrap, never truncate,
  never scroll sideways; a long qualifier grows the tile and pushes the row
  down. Hover is an amber border at 55%. This section carries the page's one
  remaining section eyebrow, "LOADOUT" — every other section heading stands
  alone.
- **`DemoSection`** — section frame (its top hairline suppressed, since the
  loadout band's bottom hairline already separates them), the lead
  paragraph, and a two-column CSS grid of `DemoPanel`s. The two panels are
  matched height **by construction**: a grid with default stretch, each
  panel a flex column with its `KeysLegend` keycap hint on `margin-top:
  auto`. Both games (`TicTacToe`, `Dispatch`) are real and already worked
  before this redesign — they were re-housed here, not rewritten.
- **`ReceiptsSection`** — three text rows (`ReceiptRow`), not cards. A row
  with no `href` (the a11y toolkit) renders as plain text, not a link. Link
  rows get rest/hover/focus states: hover lifts `signal` to `signalHi`,
  focus uses a 3px-offset amber ring so the underline stays legible inside
  it.
- **`ContactSection`** — email/GitHub/LinkedIn rows (`ContactRowItem`, same
  hover/focus language as receipts) plus the closing `ButtonLink` CTA.
  Nothing on this page is set at display scale except the hero headline and
  the six section headings.

## Shared primitives (`src/components/`)

- **`MonoLabel`** — the mono kicker, `variant="muted" | "signal"`. Used for
  column/row/slot labels; the loadout band's own eyebrow reuses it directly
  with `variant="signal"`.
- **`Panel`** — `{surface}` background, `{line}` border, `{radius.lg}`.
- **`StatusDot`** — `variant="live" | "idle" | "signal" | "alert"`, optional
  `pulse` (2s loop, amber — reserved for the top bar's availability dot,
  the only looping animation on the page, dropped under reduced motion).
- **`ButtonLink`** — `variant="primary" | "ghost"`. Hover lifts `signal` to
  `signalHi` (primary) or the border to `muted` (ghost); active dips 1px.
- **`SectionHeading`** — a bare `<h2>`, no kicker. The page's eyebrow count
  dropped from six to one (only the loadout band keeps one, built as its own
  bespoke header), so this component no longer renders one at all.
  `noMarginBottom` suppresses its own bottom margin for the two sections
  (Demo, Contact) whose lead paragraph carries that spacing instead.
- **`SectionFrame`** — the `.sec` wrapper (hairline top border, unless
  `noTopBorder`) plus the shared scroll-reveal (16px rise + fade,
  `whileInView`, once — instant opacity swap under reduced motion). Vertical
  padding defaults to the shared `{s10}` rhythm but is overridable per
  section (`paddingTop`/`paddingBottom`/`mobilePaddingTop`/
  `mobilePaddingBottom`) — the page's rhythm is no longer flat: Capability
  and Demo use the `{s10}` default, Receipts runs `{s11}`/`{s10}`, Contact
  runs `{s9}`/`{s8}`.

## Known, deliberate gaps

Carried from the approved design's own "open items," not fixed here:

- No resume PDF exists in `/public`, so no resume link is drawn anywhere.
- No photography anywhere — the identity is an instrument housing, not a
  document, and stock imagery would break it.
- The comp's `.panel.hud` corner-bracket decoration and its `--shadow-panel`
  / `--shadow-cta` box-shadow tokens are not implemented — they predate this
  ticket's five stages and weren't in its scope.
