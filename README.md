# Railway Web Solutions — site rebuild

A React (Vite) rebuild of the Railway Web Solutions marketing site.
Dark background kept (now with a light mode too), built around the
brand's `< Railway />` code-bracket mark, the literal idea of a
*railway*, and the slogan **on track web solutions**.

## Run it

```
npm install
npm run dev        # local dev server
npm run build       # production build -> dist/
npm run preview     # preview the production build
```

Requires Node 18+.

## What changed in this pass

- **The rail line now actually animates, in every browser.** It was
  built on CSS `animation-timeline: scroll(root)`, which Firefox
  doesn't support yet — that's why it looked static for you. It's now
  driven by GSAP + ScrollTrigger instead (`src/components/RailLine.jsx`),
  which works the same everywhere.
- **The line wanders**, left/right/left, all the way down the page,
  rather than running straight — see "Signature element" below.
- **Background gradients removed.** The diffuse ambient glow behind the
  hero is gone. The only gradient left is a thin two-stop stroke on the
  rail line itself (signal-blue → dusk-violet), which is a foreground
  detail, not a background wash.
- **Five new sections**, pulled from the reference file you sent
  (adapted to our palette and copy, not copied as-is): **Solutions**,
  **Work** (selected projects), a tech-stack **marquee**, **Team**, and
  a closing **CTA banner**. Customer testimonials were intentionally
  left out, as requested.
- **Every section animates in on scroll now**, via a small shared GSAP
  system (`src/scrollAnimations.js`) — see below.
- **The blinking cursor moved.** It's gone from the hero title. It now
  lives in the decorative code panel, which no longer shows placeholder
  "route" text — it's a small, real-looking React component whose JSX
  props double as marketing copy (`loadsFast`, `ranksHigher`,
  `convertsVisitors`, `builtBy="Railway"`).
- **New navbar**, modeled on the floating-pill reference image: a
  centered rounded capsule with a circular logo mark, section links, a
  theme toggle, and a pill CTA.
- **New mobile navigation**, modeled on the bottom-tab reference image:
  a fixed rounded tab bar with five stops (Home, Process, Solutions,
  Work, Team). The active tab lifts into a filled circle with an
  indicator dash, and highlights automatically as you scroll past each
  section (via `IntersectionObserver`). The old hamburger menu is gone.
- **Light/dark theme switcher**, top-right of the desktop pill nav (sun
  / moon icon). Persists via `localStorage` and respects the system
  preference on first visit; the `<html>` tag gets `data-theme` set
  before React even mounts, so there's no flash of the wrong theme.

## Design concept

- **Palette** — near-black charcoal-blue (`#0a0d12`) in dark mode, soft
  cool grey-white (`#f5f6f9`) in light mode; the accent colors —
  **signal blue** (`#4fc3ff`) and **dusk violet** (`#a78bfa`) — stay
  identical in both themes so the brand reads the same either way. All
  tokens live in `src/styles/tokens.css`, dark as the `:root` default,
  light as a `:root[data-theme="light"]` override.
- **Type** — Space Mono for headlines, code brackets, and the hero's
  code panel; Manrope for body copy and UI text.
- **Signature element** — `RailLine` (`src/components/RailLine.jsx`), a
  single SVG path that runs the full height of the page, just left of
  the content, gently wandering left/right/left as it goes down (this
  is what "on track" refers to — literally a rail line, not a straight
  progress bar). As you scroll, the path draws itself in and a small
  glowing marker travels along it, in sync with how far down the page
  you are. It's hidden below 640px, where the mobile tab bar takes over
  as the page's other wayfinding element.

## The animation system

Everything scroll-driven is now GSAP + ScrollTrigger, not CSS
`animation-timeline`. That spec still isn't supported in Firefox, so
anything built on it silently never animated there — this rebuild
replaces it wholesale rather than patching around it:

- **`src/scrollAnimations.js`** — one shared reveal system, applied
  once from `App.jsx`. Two conventions, used throughout every section:
  - `.reveal` / `.reveal-scale` on a single element — fades (and
    optionally scales) it in once as it enters the viewport.
  - `[data-reveal-group]` on a wrapper — staggers its direct children
    in together as a set (used for the Solutions grid and Team grid).
  Nothing is hidden by default in the CSS — if JavaScript fails to run
  for any reason, the page is simply static, never blank.
- **`RailLine.jsx`** — its own `ScrollTrigger`, tracking overall page
  scroll progress (`trigger: document.body, start: "top top", end:
  "bottom bottom", scrub: true`), used to draw the path and move the
  marker.
- Hover and toggle interactions (buttons, nav links, the service-card
  flip, the theme-toggle icon) are still plain CSS transitions using
  individual transform properties (`scale`, `rotate`, `translate`)
  rather than the `transform` shorthand, so they never fight the GSAP
  reveal tweens running on the same or nearby elements.
- The service-card flip still uses the 3D-aware `rotate: y 180deg`
  syntax.
- Everything respects `prefers-reduced-motion`.

## Content notes / what to swap in

- Both forms (`Quote.jsx`, `Contact.jsx`) still point at the same
  Web3Forms `access_key` from the old site — swap it if you want a
  fresh key.
- **Work section** — the two project cards ("Event logistics platform",
  "Retail order-flow system") are placeholders carried over from your
  reference file, not real case studies. Swap in real project names,
  descriptions, and a real screenshot or mockup image before this goes
  live — right now the thumbnail is just a decorative SVG placeholder.
- **Team section** — uses the two names that actually appear in your
  original site's source (the page author and a developer credited in
  a code comment). Roles are my best guess and should be confirmed;
  I deliberately didn't invent a third person to fill out the grid —
  the third card is a "we're growing" placeholder instead.
- **Tech marquee** — lists React, Vite, TypeScript, Node.js,
  Cloudflare, and GSAP, based on what's actually used in this project
  plus Cloudflare (mentioned in your original service copy). Edit the
  `STACK` array in `TechMarquee.jsx` to match whatever you actually
  want to publicly claim as your stack.

## File map

```
src/
  main.jsx                 entry point, wraps App in ThemeProvider
  App.jsx                  page composition + scroll animation init
  scrollAnimations.js      shared GSAP/ScrollTrigger reveal system
  context/ThemeContext.jsx light/dark theme state + persistence
  styles/tokens.css        color/type/space tokens (dark + light), resets
  components/
    RailLine.jsx/.css      signature wandering scroll-synced rail
    Navbar.jsx/.css        floating pill nav (desktop) + theme toggle
    MobileNav.jsx/.css     bottom tab bar (mobile), scroll-spy active state
    Hero.jsx/.css          hero + "growth.jsx" code panel
    Process.jsx/.css       5-stage process, station markers
    Solutions.jsx/.css     NEW — dashboards / eCommerce systems
    Services.jsx/.css      3 flip cards (Performance / SEO / Responsiveness)
    Work.jsx/.css          NEW — selected work / portfolio
    TechMarquee.jsx/.css   NEW — infinite tech-stack marquee
    Team.jsx/.css          NEW — team grid
    CtaBanner.jsx/.css     NEW — closing call to action
    Quote.jsx/.css         "Build a quote" form (Web3Forms)
    Contact.jsx/.css       "Get in touch" form (Web3Forms)
    Footer.jsx/.css        footer
```
