# It Matters A Lot — Book Page Structure and Design Specification

**Route:** `/it-matters-a-lot`
**Theme:** First Light
**Inherits from:** `homepage-structure.md`. Every token, the nav, the divider, the button system, the footer, and the book cover placeholder come from that file unchanged. This document only specifies what is new or different.

> **Precedence note.** This spec overrides the uploaded `CLAUDE.md`. That file describes a single-file Tailwind CDN landing page and does not apply to this project. What carries over from it: the anti-generic guardrails, the localhost screenshot comparison loop (minimum two rounds), full interactive states on every clickable element, `transform` and `opacity` only in animation, never `transition-all`.

---

## Design Tokens

Unchanged from `homepage-structure.md`. Restated for a self-contained build.

| Token | Value |
|---|---|
| `--dawn` | `#F8F4ED` |
| `--cloud` | `#FFFDF9` |
| `--ink` | `#2B2733` |
| `--ink-soft` | `#56505f` |
| `--marigold` | `#E6A23C` |
| `--marigold-soft` | `#F0BE6E` |
| `--rose` | `#C98A74` |
| `--sky` | `#9DB0C2` |
| `--serif` | Cormorant Garamond |
| `--sans` | Jost |
| Max content width | `1080px`, `padding: 0 36px` |

**No new tokens are introduced on this page.** If a value is needed that is not in this table, the answer is the wrong value.

---

## Page Rhythm

The page alternates light and dark to give the book weight. Read top to bottom, the background sequence is:

```
Hero            Twilight Ink   dark
Synopsis        Dawn           light   ← follows the hero directly since revision pass 2
Inside the Book Cloud          light, lifted
Excerpt         Twilight Ink   dark
Author          Dawn           light   ← moved up in revision pass 1
Notify          Dawn           light   ← last content section
Footer          #1e1c25        dark
```

**Revision pass 1:** Author moved above Notify. Notify is the conversion and belongs last, immediately before the footer. A Pattern A divider sits between Author and Notify (both Dawn).

**Revision pass 2:** the Thesis Strip (the centred italic paragraph that used to sit between the Hero and the Synopsis) is deleted entirely — component, copy, and its trailing divider. The Pattern A divider that used to sit between the Thesis Strip and the Synopsis is kept, and now falls directly between the Hero and the Synopsis, since the background still changes Twilight Ink → Dawn there and the page still needs the breath. Every section from Synopsis onward is renumbered down by one.

**Revision pass 3:** the two remaining dividers described in revision pass 1 and 2 above (Hero→Synopsis, Author→Notify) are both removed. Neither pair needed the divider once seen in the built page — both are Twilight Ink→Dawn or Dawn→Dawn transitions that read as one continuous flow once the surrounding padding is tightened, rather than a hard seam. Only one Pattern A divider remains on the page: between Synopsis and Inside the Book, both light sections that genuinely benefit from the breath.

The homepage opens light and closes dark. This page opens dark. That inversion is the point: the site is Dawn, the book is the thing you go into.

**Section divider — Pattern A** (28px diya, marigold stroke, centred, 64px clearance above and below) is used sparingly on this page (revision pass 3 — down to a single instance, between Synopsis and Inside the Book). It is not used against Twilight Ink sections, whose background change is already the divider, and it is no longer used between every pair of Dawn/Cloud sections by default — only where the page still needs the breath.

---

## Global Navigation

Per `homepage-structure.md`, with the nav items updated site-wide:

**Home · About · Book · Blog · Contact**

`Book` carries the active state on this route: marigold underline, 1.5px, offset 4px. Handle with `usePathname()`.

---

## Section 1 — Hero (`BookHero`)

**Origin:** adapted from the supplied `FinancialHero` component. The bones are kept: a Framer Motion stagger container, text left, a pair of tilted overlapping cards right, and the same variant vocabulary. Everything else is replaced.

**What changed and why**

| Original | Replacement | Reason |
|---|---|---|
| Two floating financial cards | Book cover front, marigold backing plate behind | There is one book and one cover. Two identical cards would be a lie about the catalogue. The back plate reads as depth, not as a second product. |
| Uniform 3rem grid background | 1px grid at Cloud 4% opacity, 48px, faded out by a radial mask | Keeps the structural device from the original but tunes it to a ruled page, which ties to the study table the book opens on. It is the one visual risk on this page. Everything else is quiet. |
| `bg-background` / `text-foreground` shadcn semantics | Explicit First Light tokens | The project does not use shadcn theming. Do not introduce it. |
| shadcn `Button` | Existing primary button from the site's button system | One button component across the site. |
| `ArrowRight` from lucide | Kept | Already in the dependency tree. |

### Nav overlay (revision pass 2 — bug fix)

**The bug:** the global nav is `position: fixed`. The hero was accounting for it with top padding equal to nav flow height, but the padding math did not hold under the revision pass 1 vertical-rhythm increase, and the nav ended up rendering under the hero with the hero clipped top and bottom — the Notify Me button was sliced in half.

**The fix:** rather than padding the hero down below a solid nav, the nav now overlays the hero transparently and reverses colour to read against Twilight Ink:
- While the hero is in view: `background: transparent`, no border, marigold monogram (unchanged — marigold already reads on both Dawn and Twilight Ink), **Cloud** wordmark and nav links (`rgba(255,253,249,.85)`), Cloud mobile-menu bars.
- Once the page scrolls past the hero (tracked via the hero's bounding-box bottom crossing the 76px nav height, not a fixed scroll-Y threshold, so it holds at every breakpoint): the nav solidifies to the standard Dawn background, ink-coloured wordmark and links, and the scrolled box-shadow.
- Toggled with two classes, `.nav-on-dark` / `.nav-solid`, swapped on scroll and resize. Initial state is `.nav-on-dark` since the page always loads at the hero.

The hero itself now reserves its own top clearance directly (`padding-top: 96px` desktop, `104px` mobile — both comfortably more than the 76px nav height) rather than relying on nav flow height, and uses `min-height: 100vh` since the nav no longer occupies document flow space above it. Bottom padding is `40px` desktop / `48px` mobile (revision pass 3 — was 56px/48px; trimmed on desktop along with the removal of the Pattern A divider that used to sit directly below the hero — see "Section 2 — Synopsis" for the matching change on that side).

### Layout

**Background:** Twilight Ink (`#2B2733`)
**Min height:** `100vh` (revision pass 2 — was 90vh; raised because the nav no longer occupies flow height above the hero, see above), auto on mobile
**Container:** max-width 1080px, `padding: 0 36px`, flex row, gap `clamp(64px, 7vw, 120px)` (raised from 48px in revision pass 1, to stop the text and cover crowding each other), items centred
**Grid overlay:** two linear gradients at 48px, `rgba(255,253,249,0.04)`, absolutely positioned, then masked with `radial-gradient(ellipse at 65% 50%, black 0%, transparent 70%)` so it survives only behind the cover and fades to nothing behind the text
**Marigold glow:** `radial-gradient(circle at 72% 50%, rgba(230,162,60,0.14), transparent 60%)`, sits above the grid, below the content

### Left column (48%, revision pass 1 — was 52%)

**`max-width: 480px`** so the text block does not sprawl toward the cover.

| Element | Spec |
|---|---|
| Eyebrow | `THE BOOK` · Jost 500 · 0.7rem · uppercase · letter-spacing 0.3em · Marigold |
| Badge | `Coming Soon` · Jost 500 · 0.68rem · uppercase · Ink on Marigold · pill radius 999px · padding 5px 14px · sits inline beside the eyebrow, 16px gap |
| Title | *It Matters A Lot.* · Cormorant Garamond 700 · `clamp(2.8rem, 5.2vw, 4.6rem)` · line-height 1.02 · Cloud · max-width 12ch |
| Title accent | *A Lot.* only: italic 500, Marigold-soft |
| Author line | `Shubhra Saxena` · Jost 400 · 0.88rem · uppercase · letter-spacing 0.08em · Rose |
| Rule | 40px wide, 1px, Marigold at 60% opacity |
| Pitch | *A book about the question we all asked once as children, and quietly stopped asking out loud.* · Cormorant Garamond 400 italic · `clamp(1.15rem, 2.2vw, 1.5rem)` · line-height 1.5 · Cloud at 82% opacity · max-width 34ch |
| Primary CTA | `Notify me →` · primary button · href `/contact#notify` |
| Secondary CTA | `Read the synopsis ↓` · Jost 500 · 0.8rem · Cloud at 60% opacity · hover Marigold-soft · smooth scroll to `#synopsis` |

**Vertical rhythm (revision pass 1, opened up across the board):** eyebrow row → 30px → title → 22px → author → 24px → rule → 30px → pitch → 44px → CTA row (buttons 24px apart, aligned to baseline)

### Right column (52%, revision pass 1 — was 48%) — Book cover, centred in the column

**Cover size, hero only: 300x410** (revision pass 1 — was 220x300). This is a size variant for the hero placement; the homepage book section keeps its cover at 220x300 unchanged. Cloud background, 6px Marigold spine, radius `4px 12px 12px 4px`, diya monogram, title, author, Coming Soon badge, scaled proportionally: diya mark 84px, cover title 1.4rem, author 0.72rem, badge 0.66rem.

Two changes to how it is presented, and only to presentation:

| Element | Spec |
|---|---|
| Backing plate | A second card, same dimensions as the cover (300x410), Marigold at 14% opacity, no content, `rotate(-6deg) translate(38px, 20px)` (offset increased from 28px/14px in revision pass 1 to match the larger cover), sits behind the cover. |
| Cover transform | `rotate(4deg)`, `box-shadow: 0 32px 80px rgba(0,0,0,0.40), 0 6px 16px rgba(0,0,0,0.22)` (deepened in revision pass 1) |
| Hover, cover | `translateY(-10px) rotate(2deg)`, 0.3s spring easing |
| Hover, plate | `translateY(-4px) rotate(-8deg)`, 0.3s |
| Reduced motion | Both sit flat at rotate 0, no hover transform |

**On real cover launch:** swap the placeholder div for the final cover image at 300x410 (2x export 600x820 for retina). Keep the backing plate, the rotations, and the shadow. Nothing else changes.

### Motion

Reuse the supplied variants as-is. `containerVariants` staggers children by 0.2s. `itemVariants` fades up 20px over 0.5s for each left column element. `cardsVariants` slides the cover group in from x: 50 over 0.8s with a 0.3s inner stagger, so the backing plate lands, then the cover. Run once on mount, `initial="hidden" animate="visible"`. No scroll trigger on the hero.

### Component signature

```tsx
// components/book/BookHero.tsx
'use client';

interface BookHeroProps {
  eyebrow: string;          // "THE BOOK"
  badge: string;            // "Coming Soon"
  title: React.ReactNode;   // title with <em>A Lot.</em>
  author: string;
  pitch: string;
  ctaText: string;          // "Notify me"
  ctaHref: string;          // "/contact#notify"
  secondaryText: string;    // "Read the synopsis"
  secondaryHref: string;    // "#synopsis"
  className?: string;
}
```

The cover is not a prop. It is the `<BookCover />` component, imported directly, shared with the homepage. One cover, one source of truth.

### Mobile (< 768px)

Cover stacks **above** the text, scaled to 240x328 (revision pass 1 — was 180x245, kept in proportion with the larger hero cover), rotations reduced to 2deg and -4deg, backing plate offset halved, diya mark scaled to 64px. Text centres. CTAs stack full width with 12px between them. Grid overlay is removed entirely below 768px; it becomes noise at that size.

---

## Section 2 — Synopsis

**Anchor id:** `synopsis`
**Background:** Dawn
**Layout:** Single centred column, max-width 680px
**Padding:** 56px top, 88px bottom (revision pass 3 — top was 88px; bottom is unchanged, since the Pattern A divider before Inside the Book is still there)

**Revision pass 1 — restructured.** The original three-paragraph synopsis read as a wall nobody would finish. It is now three beats, each with a marigold spine rule, separated by a pull line and closed with a standalone closing line. Content is roughly a third shorter — see `book-content.md` Section 2 for the exact cuts.

**Revision pass 2:** this section now follows the Hero directly (previously it followed the Thesis Strip, which is deleted). It is the page's second section.

**Revision pass 3:** the Pattern A divider that used to sit directly above this section (between the Hero and the Synopsis) is removed, and top padding tightened from 88px to 56px so the hero flows into this section without a hard seam. The hero's own bottom padding was also trimmed, from 56px to 40px (desktop), for the same reason. See "Section 1 — Hero" for the matching hero-side change.

| Element | Spec |
|---|---|
| Eyebrow | `WHAT THE BOOK IS ABOUT` · Jost 500 · 0.7rem · uppercase · letter-spacing 0.3em · Rose · centred |
| Heading | *An invitation back to the question* · Cormorant Garamond 600 · `clamp(1.6rem, 3vw, 2.2rem)` · Ink · centred · margin-bottom 40px |
| Beat spine rule | 2px, full height of the beat, left edge, Marigold at 45% opacity, 24px padding between rule and text (16px on mobile, rule drops to 1px, if the 24px/2px combination squeezes the measure below 768px) |
| Beat label | Jost 500 · 0.66rem · uppercase · letter-spacing 0.2em · Rose · margin-bottom 12px |
| Beat copy | Jost 400 · 1rem · line-height 1.75 · Ink-soft |
| Beat gap | 48px between beats |
| Pull line (between Beat 1 and Beat 2) | Centred, full column width, Cormorant Garamond 400 italic, `clamp(1.5rem, 3vw, 2.1rem)`, line-height 1.4, Ink, 56px clearance above and below. No quote marks, no attribution — the book's voice surfacing, not a citation. |
| Quad line (`Daughter. Partner. Officer. Mother.`, inside Beat 2) | Its own line, Cormorant Garamond 500 italic, 1.15rem, Ink, 12px space above and below |
| Closing line (below Beat 3) | Centred, Cormorant Garamond 500 italic, `clamp(1.3rem, 2.6vw, 1.8rem)`, Ink, 40px gap above |
| Book title in copy | *It Matters A Lot* italic, Cormorant, Ink, every time it appears in body text |

**Scroll reveal:** each beat fades up 16px, staggered 0.12s, triggered at 20% viewport entry, `once: true`. The pull line and closing line fade only, no translate, triggered at 40% viewport entry. Disabled under `prefers-reduced-motion`.

---

## Section Divider — Pattern A

---

## Section 3 — Inside the Book

**Background:** Cloud (`#FFFDF9`)
**Layout:** Heading block centred, then four cards. Grid: 4 across at `≥1080px`, 2x2 at 768–1079px, stacked below 768px. Gap 24px.
**Padding:** 88px top and bottom

### Heading block

| Element | Spec |
|---|---|
| Eyebrow | `FOUR STAGES, FOUR QUESTIONS` · Jost 500 · 0.7rem · uppercase · letter-spacing 0.3em · Rose |
| Heading | *The book is built the way a life is* · Cormorant Garamond 600 · `clamp(1.6rem, 3vw, 2.2rem)` · Ink |
| Subcopy | Jost 400 · 0.9rem · line-height 1.65 · Ink-soft · max-width 52ch · centred |
| Margin below | 56px |

### Card anatomy

| Element | Spec |
|---|---|
| Background | Cloud |
| Border | 1px solid Ink at 8% opacity, radius 16px |
| Padding | 28px |
| Min height | 200px, flex column, question pinned to the bottom |
| Label | Jost 500 · 0.68rem · uppercase · letter-spacing 0.2em · Marigold |
| Rule under label | 24px wide, 1px, Marigold at 40% opacity, margin 14px 0 |
| Question | Cormorant Garamond 500 italic · 1.15rem · line-height 1.4 · Ink |
| Hover | `translateY(-3px)`, box-shadow `0 8px 32px rgba(43,39,51,0.10)`, 0.2s ease |
| Images | None. Four stock photographs of four life stages would be the single most generic thing on this site. The type is the card. |

**Cards are not links.** Nothing to link to yet. No cursor pointer, no hover chevron. The hover lift is the only response.

**Revision pass 1 note:** the synopsis (Section 2) no longer lists the four life stages in its body copy, since that list was redundant with these cards. This section is now the first and only place the four stages appear, which is the intended payoff, not a repeat.

---

## Section 4 — Excerpt

**Background:** Twilight Ink (`#2B2733`)
**Layout:** Single centred column, max-width 780px
**Padding:** 96px top and bottom

| Element | Spec |
|---|---|
| Diya monogram | 32px · Marigold · centred · margin-bottom 28px |
| Eyebrow | `FROM THE INTRODUCTION` · Jost 500 · 0.68rem · uppercase · letter-spacing 0.3em · Marigold at 70% opacity · margin-bottom 24px |
| Excerpt | Cormorant Garamond 400 italic · `clamp(1.5rem, 3.4vw, 2.3rem)` · line-height 1.4 · Dawn · centred |
| Quote marks | Rendered, not decorative. Use real typographic quotes in the string. Do not add oversized ornamental quote glyphs. |
| Attribution | `It Matters A Lot, Shubhra Saxena` (revision pass 1 — was `It Matters A Lot, Introduction`) · Jost 400 · 0.76rem · uppercase · letter-spacing 0.16em · Rose · margin-top 24px |
| Markup | `<blockquote><p>…</p><cite>…</cite></blockquote>` |

**Motion:** the excerpt fades in, no translate, 0.8s ease, triggered at 40% viewport entry, `once: true`. It is the still point of the page. It does not slide.

---

## Section 5 — Author (`AuthorSection`)

**Revision pass 1:** moved up from last position to directly after the Excerpt, ahead of the Notify band. Notify is the conversion and belongs last, immediately before the footer.

**Revision pass 2 — rebuilt from a supplied Feature component.** The earlier two-column author block (square image + copy) is replaced entirely with a full-width feature panel: a large media panel on one side, a badge/heading/body/link stack on the other. This is the same shape as the site's other narrative sections (`about.html`'s Section 3/4), scaled up and re-skinned to First Light tokens.

**What changed from the supplied component and why**

| Original | Replacement | Reason |
|---|---|---|
| `bg-muted` empty div | Real 4:5 image with a marigold depth plate behind it | The plate is the same device as the hero book cover's backing plate. It ties the two sections together and it is the only decoration in this block. |
| `aspect-video` | `aspect-[4/5]` | She is a person at a podium. A 16:9 crop is mostly wood panelling. |
| shadcn `Badge` | Marigold-tinted pill (`rgba(230,162,60,.14)` background, Marigold text) | The project does not use shadcn and never has, on this page or anywhere else in the codebase. Do not install it for one badge. |
| `text-muted-foreground`, `bg-muted` | Explicit First Light tokens | Same reason — no shadcn theming enters this codebase. |
| `font-regular`, `tracking-tighter` | Cormorant 600, `letter-spacing: -0.02em` | Matches every other heading on the site. |
| `flex-col-reverse lg:flex-row` | Kept | Correct: on mobile the text leads and the portrait follows. |
| `py-20 lg:py-40` | `py-24 lg:py-32` (96px / 128px) | 160px of vertical padding (the original `lg:py-40`) is more air than any other section on this page has. It would break the page rhythm. |

**Background:** Dawn
**Layout:** `flex-direction: column-reverse` below 1024px (text first, then media — via DOM order media-then-text with `column-reverse`), `flex-direction: row` at ≥1024px (media left, text right), `gap: 48px` mobile / `80px` desktop, `align-items: center` at desktop. Container is the standard `.wrap` (max-width 1080px, padding 0 36px).
**Padding:** 96px top, 56px bottom; 128px top, 72px bottom at ≥1024px (revision pass 3 — bottom was symmetric with top, 96px/128px. Trimmed along with the removal of the Pattern A divider that used to sit directly below this section, before Notify. Top padding is unchanged, since the background change from the Excerpt's Twilight Ink already provides separation there.)

### Media panel

| Element | Spec |
|---|---|
| Frame | `aspect-ratio: 4/5`, `width: 100%`, `border-radius: 16px`, `overflow: hidden` |
| Image | `object-fit: cover`, fills the frame |
| Depth plate | A second panel, same dimensions as the frame, Marigold at 14% opacity, positioned `bottom: -16px; left: -16px; z-index: -1`, behind and offset from the image. Same device as the hero book cover's backing plate. |
| At tablet (640–1023px) | Frame capped at `max-width: 420px`, centred, so it does not stretch full-bleed while still stacked above/below the text. |

**Image — 4:5 portrait crop (revision pass 2, replaces the 1:1 square used in revision pass 1).**

- New crop: 4:5 portrait, not 1:1. Same subject anchoring as before — head and shoulders, mic head in frame, mic stand mostly out, podium reduced to a sliver, she sits slightly left, facing into open space.
- Same background treatment: radial depth blur, sharp on her face, 12% corner vignette, nothing cloned out.
- Same colour treatment: saturation down 7%, white balance warmed roughly +250K, shadows lifted.
- Export at 1200x1500, JPG quality 85 progressive, plus a WebP sibling.
- Filenames stay `ss-author-book.jpg` / `ss-author-book.webp`.
- **Pending asset:** no image-editing capability was available to produce this re-crop. The live page currently renders the existing 1:1 `ss-author-book.webp` inside the 4:5 frame via `object-fit: cover`, which crops it rather than being a true re-composed portrait shot. Replace the file with the real 1200x1500 export (vignette, blur, colour grade as specified above) before this page ships.
- **Alt text:** Shubhra Saxena

### Text column

| Element | Spec |
|---|---|
| Badge | `About the Author` · pill, `border-radius: 999px`, padding `6px 14px` · Jost 500 · 0.66rem · uppercase · letter-spacing 0.2em · background `rgba(230,162,60,.14)` · color Marigold |
| Heading | *Shubhra Saxena* · Cormorant Garamond 600 · `clamp(2.2rem, 4vw, 3.2rem)` · line-height 1.08 · letter-spacing -0.02em · Ink |
| Body | Jost 400 · 1.02rem · line-height 1.8 · Ink-soft · max-width ~36em |
| Link | `→ Read her story` · Jost 500 · 0.88rem · Marigold · hover Marigold-soft · href `/about` |
| Vertical gaps | 24px between badge and the heading/body/link group; 20px between heading, body, and link within that group |

**Scale discipline (retired in revision pass 2).** The earlier note that this block "must read as smaller than the synopsis" no longer applies — it was already retired in spirit by the revision pass 1 upsizing, and is now formally replaced: **the author section is a full-width feature panel, deliberately large, but it carries no CTA other than "Read her story," so it does not compete with Notify for the conversion.** The page's single conversion is still Notify me; this section's only job is context and credibility.

---

## Section 6 — Notify Band

**Background:** Dawn
**Layout:** Single centred column, max-width 620px
**Padding:** 56px top, 80px bottom (revision pass 3 — top was 80px, trimmed to match the removal of the Pattern A divider that used to sit directly above this section, before the Author section flows straight into it. Bottom is unchanged.)

| Element | Spec |
|---|---|
| Heading | *The book is not out yet* · Cormorant Garamond 600 · `clamp(1.5rem, 2.8vw, 2rem)` · Ink |
| Body | Jost 400 · 0.92rem · line-height 1.7 · Ink-soft · max-width 48ch · centred · margin-top 16px |
| CTA | `Notify me →` · primary button · href `/contact#notify` · margin-top 32px |

**No form here.** The Contact page owns every input on this site. This is a link styled as the primary button, identical to the hero CTA in label and destination.

---

## Footer

Unchanged global footer component, with the nav column updated to Home · About · Book · Blog · Contact.

---

## Responsive Breakpoints

| Breakpoint | Behaviour |
|---|---|
| `≥ 1080px` | Full layout. Hero 48/52 (revision pass 1 — was 52/48), cover at 300x410. Four stage cards in one row. Author section media/text at ≥1024px per its own breakpoint below. |
| `1024px to 1079px` | Author section switches to row layout (media left, text right); checked for cramping at 1024 specifically and confirmed comfortable with equal flex on both columns — no `flex-[0.85]` adjustment needed. |
| `768px to 1023px` | Hero 50/50, text loses its 480px cap, cover stays at 300x410 unless it crowds the text, in which case widen the column gap before shrinking the cover. Stage cards go 2x2. Author section stacks column-reverse (text leads, image follows), frame capped at max-width 420px and centred from 640px up. |
| `< 768px` | Everything stacks. Hero cover above text, 240x328 (revision pass 1 — was 180x245), grid overlay removed, hero top padding 104px to clear the nav. Stage cards stack to one column. Author section stacks the same as the 768–1023px range. |

---

## Accessibility

- Cloud on Twilight Ink and Dawn on Twilight Ink both clear WCAG AA. Cloud at 60% opacity on Twilight Ink (the hero secondary CTA) does **not**. Raised to 72% (`rgba(255,253,249,.72)`) — done, verified in the built page.
- Marigold on Twilight Ink at small sizes is borderline. Never set marigold body text below 0.9rem on the dark bands. Eyebrows are permitted as they are uppercase, letter-spaced, and non-essential.
- Every CTA is a real `<a>`, keyboard reachable, focus-visible outline 2px Marigold at 3px offset.
- The `#synopsis` scroll link respects `prefers-reduced-motion` and jumps instead of smooth-scrolling.
- `@media (prefers-reduced-motion: reduce)` disables all Framer Motion variants, the hero card rotations and hovers, and every scroll reveal. Content renders in its final state.
- The book cover placeholder is decorative in the DOM sense but carries meaning. Give the wrapper `role="img"` and `aria-label="It Matters A Lot by Shubhra Saxena, coming soon"`.

---

## Build Order for Claude Code

1. Read this file and `book-content.md` in full before writing anything.
2. Extract `<BookCover />` from the existing homepage book section into a shared component if it is not one already. Do not duplicate it.
3. Build `BookHero` from the adapted spec above, including the transparent-nav overlay behaviour. Screenshot it against the homepage hero and confirm the type scale and button read as the same system, and confirm both hero CTAs render fully visible with nothing clipped.
4. Build sections 2 through 6.
5. Add `Book` to the global nav and footer nav, wired to `/it-matters-a-lot`.
6. Serve on localhost, screenshot at 1440, 1024, and 390 wide.
7. Compare against the homepage. Any token, spacing step, or button treatment that does not match is a bug, not a variation. Fix and re-screenshot. Minimum two rounds.

**Revision pass 1 changelog:** hero column gap and cover enlarged (220x300 → 300x410) with matching backing-plate offset and shadow; hero vertical rhythm opened up; min-height raised to 90vh; synopsis restructured from three long paragraphs into three labelled beats with a marigold spine rule, a pull line, and a closing line, cut by roughly a third; excerpt attribution corrected to "It Matters A Lot, Shubhra Saxena"; author block moved above the Notify band (Notify is now the last content section) and scaled up (720px → 880px container, 180px → 260px image). No new tokens, fonts, or spacing steps were introduced.

**Revision pass 2 changelog:** fixed a real layout bug where the fixed nav clipped the hero and cut the Notify Me button in half — the nav now overlays the hero transparently with reversed (Cloud) colour, then solidifies to the standard Dawn nav once scrolled past the hero; hero min-height raised to 100vh with its own top padding (96px desktop / 104px mobile) since the nav no longer occupies flow height. The Thesis Strip (Section 2) is deleted entirely — component, copy, divider — and the Synopsis is now Section 2, directly below the hero; every later section renumbered down by one. The Author section is rebuilt from a supplied Feature component pattern: a full-width panel with a 4:5 media crop (replacing the 1:1 square), a marigold depth plate behind the image echoing the hero cover's backing plate, a pill badge, and Cormorant 600 heading — see Section 5 for the retired "smaller than the synopsis" constraint and its replacement. The 4:5 image export (1200x1500, described retouching) is a pending asset; the live page currently CSS-crops the existing square photo as a placeholder. No new tokens, fonts, or spacing steps were introduced.

**Revision pass 3 changelog:** removed the two remaining Pattern A dividers that read as too much empty space — the one directly below the Hero (before the Synopsis) and the one directly below the Author section (before Notify). Tightened the surrounding padding on both sides of each removed divider: hero bottom padding 56px→40px, synopsis top padding 88px→56px, author-section bottom padding 96px/128px→56px/72px, notify-band top padding 80px→56px. Only one Pattern A divider remains on the page, between Synopsis and Inside the Book. No new tokens, fonts, or spacing steps were introduced.

## Hard Rules

- One book. Never plural.
- No purchase links, no price, no date, no retailer.
- No forms on this page. The Contact page owns forms.
- No new colours, no new fonts, no new spacing steps.
- No stock photography anywhere on this page.
- No `transition-all`. Animate `transform` and `opacity` only.
- Section 4 is the only verbatim manuscript text on the page. Everything else is paraphrase.
