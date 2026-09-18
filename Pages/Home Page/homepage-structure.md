# Shubhra Saxena — Homepage Structure and Design Specification

**Theme:** First Light  
**Reference:** brenebrown.com (structural pattern, not visual style)  
**Logo:** SS_FINAL_LOGO.png (diya monogram + SHUBHRA SAXENA wordmark)  
**Rule:** No em dashes in any copy. No visual language from the brand theme document (no rising arcs, no thread SVG, no decorative motifs other than the diya from the actual logo).

---

## Design Tokens

All sections use these values without exception.

| Token | Value | Usage |
|---|---|---|
| `--dawn` | `#F8F4ED` | Primary background, page surface |
| `--cloud` | `#FFFDF9` | Cards, lifted surfaces |
| `--ink` | `#2B2733` | Headlines, primary text, dark sections |
| `--ink-soft` | `#56505f` | Body copy, secondary text |
| `--marigold` | `#E6A23C` | Buttons, accents, diya fill, active states |
| `--marigold-soft` | `#F0BE6E` | Italic highlights, hover states |
| `--rose` | `#C98A74` | Eyebrows, attribution, warm secondary |
| `--sky` | `#9DB0C2` | Used sparingly, footer meta, quiet labels |
| `--serif` | Cormorant Garamond | All display, headlines, pullquotes |
| `--sans` | Jost | All body, UI, labels, buttons, navigation |
| Max content width | `1080px` | Centred with `padding: 0 36px` |

---

## Logo Usage

**Primary logo:** Full lockup — diya monogram above, SHUBHRA SAXENA wordmark below.  
Use in the navigation bar and the footer.

**Diya monogram only:** The flame-within-S from `SS_FINAL_LOGO.png`, extracted and used in isolation.  
Use in the following places:
- Section dividers between major content blocks (small, 32px wide, centred, marigold stroke, no fill)
- The book cover placeholder (64px, centred on the CSS cover card)
- The closing band (small watermark, bottom right, low opacity)
- The browser favicon

**Wordmark only:** SHUBHRA SAXENA in its serif treatment, without the monogram.  
Use only when the monogram has already appeared nearby and repetition would crowd the layout.

**Colour variants:**
- On Dawn or Cloud backgrounds: full-colour logo (marigold monogram, ink wordmark)
- On Twilight Ink backgrounds: reversed logo (marigold monogram, cloud wordmark)
- Never invert the monogram to white; the marigold always stays

---

## Global Navigation

**Position:** Fixed top, full width  
**Background:** Dawn (`#F8F4ED`) with a hairline bottom border in ink at 8% opacity  
**Scroll behaviour:** On scroll, background gains a very subtle drop shadow (0 2px 16px rgba(43,39,51,0.06)) to lift it off the content

**Left:** Full logo lockup (diya monogram + wordmark), 36px from left edge  
**Right:** Navigation links, 36px from right edge

**Navigation links** (Jost 500, 0.78rem, uppercase, letter-spacing 0.16em, colour ink-soft)

- About
- Writing
- Connect

**Active / hover state:** Underline in marigold, 1.5px, offset 4px  
**Mobile:** Hamburger menu at 768px breakpoint. Menu opens as a full-width drawer from the top, Dawn background, links stacked vertically with generous padding.

---

## Section 1 — Hero (Split Layout)

**Reference pattern:** Brené Brown's featured content banner (image paired with strong text)  
**Background:** Dawn  
**Layout:** Two columns, full viewport height on desktop

### Left column (52% width)

Vertical padding: `clamp(40px, 6vw, 96px)` left and right, centred vertically.

| Element | Spec |
|---|---|
| Eyebrow | `SHUBHRA SAXENA` · Jost 500 · 0.72rem · uppercase · letter-spacing 0.3em · Rose |
| Headline | *Life does not suddenly become meaningful at the end. Meaning is built quietly, every day.* · Cormorant Garamond 700 · `clamp(2.6rem, 4.5vw, 4.4rem)` · line-height 1.05 · Ink · max-width 15ch |
| Headline accent | Word *quietly* only: italic 500, Marigold |
| Subline | *IAS officer and 2009 All-India Topper. A life in public service, shaped by the belief that how we live matters more than what we achieve.* · Jost 400 · 0.95rem · Ink-soft · max-width 46ch · left border 2px Marigold · padding-left 18px |
| Primary CTA | `Read her story →` · Jost 500 · uppercase · letter-spacing 0.1em · background Marigold · text Ink · pill radius 999px · padding 14px 28px · hover: Marigold-soft, translateY(-2px) |

**Vertical rhythm between elements:** eyebrow → 22px → headline → 26px → subline → 34px → button

### Right column (48% width)

| Element | Spec |
|---|---|
| Image | `Hero_image.png` |
| Alt text | *Shubhra Saxena at her desk with the Constitution of India* |
| Fit | `object-fit: cover` · `object-position: 65% 25%` |
| Divider | Hairline 1px vertical between columns, Ink at 10% opacity |
| Mobile | Image stacks above text, fixed height 58vh, face always in frame |

---

## Section Divider — Pattern A

Used between all major sections on the Dawn background.

**Element:** Diya monogram from `SS_FINAL_LOGO.png`, extracted as SVG  
**Size:** 28px wide  
**Colour:** Marigold stroke, no fill  
**Alignment:** Centred  
**Above and below:** 64px vertical breathing room  

> This is the only decorative element used between sections. No lines, no rules, no other motifs.

---

## Section 2 — Thesis Strip

**Reference pattern:** Brené Brown's introductory paragraph block beneath the hero  
**Background:** Dawn  
**Layout:** Single centred column, max-width 720px, generous vertical padding (80px top and bottom)

| Element | Spec |
|---|---|
| Body copy | *For two decades, Shubhra Saxena has served the public record as a District Magistrate across India and as a Director at the Election Commission of India. But the conviction that shapes her work is a quieter one. She believes a meaningful life is not a destination reached but a practice kept, built in small and deliberate choices, repeated until they become a way of living.* |
| Typography | Cormorant Garamond 400 italic · `clamp(1.25rem, 2.8vw, 1.75rem)` · line-height 1.5 · Ink |
| Alignment | Centred |

---

## Section 3 — Two Gateways

**Reference pattern:** Brené Brown's "Brené in the Media" and hub cards (two or three columns of equal-weight content cards)  
**Background:** Cloud (`#FFFDF9`)  
**Layout:** Two cards side by side, equal width, separated by a 24px gap  
**Padding:** 88px top and bottom

### Section heading

| Element | Spec |
|---|---|
| Heading | None. The cards speak for themselves. Heading would add redundancy. |

### Card anatomy (both cards)

| Element | Spec |
|---|---|
| Image | Full width of card, fixed height 280px, `object-fit: cover` |
| Card background | Cloud |
| Border | 1px solid Ink at 8% opacity, border-radius 16px |
| Card padding | 28px |
| Label | Jost 500 · 0.68rem · uppercase · letter-spacing 0.2em · Marigold |
| Card headline | Cormorant Garamond 600 · 1.4rem · Ink |
| Card copy | Jost 400 · 0.9rem · line-height 1.65 · Ink-soft |
| CTA link | Jost 500 · 0.8rem · Marigold · underline on hover |
| Hover state (card) | Subtle lift: box-shadow 0 8px 32px rgba(43,39,51,0.10), translateY(-3px), 0.2s ease |

### Gateway Card A — Her Story

| Element | Content |
|---|---|
| Image | `Conference.png` |
| Alt text | *Shubhra Saxena speaking at the Global Election Year 2024 International Conference* |
| Image crop | 1:1 square, tight on face and upper body |
| Label | HER STORY |
| Headline | The path and the person |
| Copy | From an All-India rank to two decades in public service, the record and the beliefs behind it. |
| CTA | → Read her story |

### Gateway Card B — Writing and Ideas

| Element | Content |
|---|---|
| Image | `Writings.jpg` |
| Alt text | *A person reading an open book in warm natural light* |
| Image crop | 3:2 landscape |
| Label | WRITING AND IDEAS |
| Headline | Reflections on living deliberately |
| Copy | Essays and short pieces on conscious living, growth, and the work of becoming. |
| CTA | → Explore her writing |

---

## Section Divider — Pattern A

*(Repeat diya monogram divider as above)*

---

## Section 4 — Latest Reflections

**Reference pattern:** Brené Brown's "Most Popular" resources strip  
**Background:** Dawn  
**Layout:** Section heading left-aligned, three article cards in a row below  
**Padding:** 88px top and bottom

### Section heading block

| Element | Spec |
|---|---|
| Eyebrow | `RECENT WRITING` · Jost 500 · 0.7rem · uppercase · letter-spacing 0.3em · Rose |
| Heading | *Short reflections on living deliberately.* · Cormorant Garamond 600 · `clamp(1.6rem, 3vw, 2.2rem)` · Ink |
| Heading margin below | 48px |

### Article card anatomy (three cards)

| Element | Spec |
|---|---|
| Thumbnail | Abstract or motif treatment, consistent across all three. Aspect ratio 3:2. Default: diya monogram on Dawn background at 40% opacity. |
| Date | Jost 400 · 0.7rem · letter-spacing 0.1em · Ink-soft |
| Article title | Cormorant Garamond 600 · 1.15rem · Ink · hover: Marigold underline |
| Excerpt | Jost 400 · 0.85rem · Ink-soft · max 2 lines, truncate with ellipsis |
| Card padding | 20px |
| Border | None. Cards sit on Dawn, separated by a 1px column gap in Ink at 6% opacity. |

### Placeholder content (replace before launch)

| Card | Title | Excerpt |
|---|---|---|
| 1 | On growing at your own pace | What it means to stop measuring your life against someone else's timeline. |
| 2 | What conscious living actually asks of us | It is not about doing less. It is about doing what matters with full attention. |
| 3 | The quiet discipline of a meaningful day | Small choices, made deliberately, are the architecture of a life. |

### Section footer

| Element | Spec |
|---|---|
| CTA | `→ All writing` · Jost 500 · 0.82rem · Marigold · centred below the cards · margin-top 48px |

---

## Section 5 — Book (It Matters A Lot)

**Reference pattern:** Brené Brown's "Books by Brené" section (image left, text and description right, full-width dark band)  
**Background:** Twilight Ink (`#2B2733`)  
**Layout:** Two columns. Text and CTA left (55%). Book cover placeholder right (45%). Centred vertically.  
**Padding:** `clamp(72px, 10vw, 120px)` top and bottom  
**Subtle glow:** Radial gradient behind the book cover, rgba(230,162,60,0.12) at centre, fading to transparent

### Left column content

| Element | Spec |
|---|---|
| Eyebrow | `THE BOOK` · Jost 500 · 0.7rem · uppercase · letter-spacing 0.3em · Marigold |
| Badge | `Coming Soon` · Jost 500 · 0.68rem · uppercase · Ink on Marigold background · pill radius 999px · padding 5px 14px |
| Title | *It Matters A Lot.* · Cormorant Garamond 700 · `clamp(2.8rem, 5vw, 4.6rem)` · line-height 1.02 · Cloud |
| Title accent | *A Lot.* in italic 500, Marigold-soft |
| Author line | `Shubhra Saxena` · Jost 400 · 0.88rem · uppercase · letter-spacing 0.08em · Rose |
| Divider | 40px wide, 1px, Marigold at 60% opacity |
| Description | *A book about the quiet decisions that shape a life, and why the things we overlook every day are often the ones that matter most.* · Cormorant Garamond 400 italic · `clamp(1.15rem, 2.2vw, 1.5rem)` · line-height 1.5 · Cloud at 82% opacity |
| Notify label | `Be the first to know when it arrives.` · Jost 400 · 0.78rem · Cloud at 45% opacity |
| Email input | Jost · 0.88rem · background rgba(255,255,255,0.07) · border 1px Cloud at 20% opacity · pill-left radius · Cloud text · placeholder Cloud at 35% |
| Submit button | `Notify me` · Jost 500 · uppercase · Ink on Marigold · pill-right radius · hover: Marigold-soft |

### Right column — Book cover placeholder

**To be replaced with the real cover once it is designed. Until then:**

| Element | Spec |
|---|---|
| Cover card | 220px wide · 300px tall · Cloud background · border-left 6px Marigold (spine) · border-radius 4px 12px 12px 4px |
| Shadow layers | Two stacked pseudo-elements behind the cover, rotated 3deg and 6deg, Marigold at 8% and 5% opacity, creating physical book depth |
| Cover mark | Diya monogram from `SS_FINAL_LOGO.png`, extracted SVG, 64px, Marigold stroke, centred on cover |
| Cover title | *It Matters A Lot.* · Cormorant Garamond 700 · 1.05rem · Ink |
| Cover author | `Shubhra Saxena` · Jost 400 · 0.62rem · uppercase · letter-spacing 0.14em · Ink-soft |
| Cover badge | `Coming Soon` · Jost 500 · 0.58rem · Cloud on Marigold · pill radius |

**On real cover launch:** Replace the entire placeholder div with `<img src="ss-book-cover.jpg" alt="It Matters A Lot by Shubhra Saxena book cover">` at the same dimensions. Remove shadow pseudo-elements and use a single soft box-shadow instead.

---

## Section Divider — Pattern A

*(Repeat diya monogram divider as above)*

---

## Section 6 — Closing Band

**Reference pattern:** Brené Brown's footer quote and newsletter signup band  
**Background:** Twilight Ink (`#2B2733`)  
**Layout:** Single centred column, max-width 680px  
**Padding:** 96px top and bottom

| Element | Spec |
|---|---|
| Diya monogram | `SS_FINAL_LOGO.png` monogram only · 36px · Marigold · centred · margin-bottom 32px |
| Quote | *"Everyone achieves victory at her own pace. Self-growth is among the most important responsibilities each of us carries."* · Cormorant Garamond 400 italic · `clamp(1.3rem, 3vw, 2rem)` · line-height 1.45 · Dawn |
| Attribution | `Shubhra Saxena` · Jost 400 · 0.78rem · uppercase · letter-spacing 0.16em · Rose · margin-top 20px |
| CTA | `Read her story →` · Jost 500 · uppercase · Marigold background · Ink text · pill radius · padding 14px 28px · margin-top 36px |

---

## Footer

**Reference pattern:** Brené Brown's four-column footer (name/about, links, connect, newsletter)  
**Background:** Ink (`#2B2733`) deepened to `#1e1c25` to distinguish from the closing band  
**Layout:** Three columns on desktop, stacked on mobile  
**Padding:** 56px top and bottom

### Column 1 — Identity

| Element | Spec |
|---|---|
| Logo | Full lockup: diya monogram + SHUBHRA SAXENA wordmark (reversed: Marigold monogram, Cloud wordmark) |
| Tagline | *A life built around what matters.* · Cormorant Garamond 400 italic · 0.95rem · Cloud at 70% opacity · margin-top 14px |

### Column 2 — Navigation

| Element | Spec |
|---|---|
| Column label | `EXPLORE` · Jost 500 · 0.66rem · uppercase · letter-spacing 0.2em · Marigold · margin-bottom 16px |
| Links | About · Writing · Connect · Jost 400 · 0.88rem · Cloud at 75% opacity · hover: Cloud at 100% |

### Column 3 — Connect

| Element | Spec |
|---|---|
| Column label | `CONNECT` · same as above |
| LinkedIn link | LinkedIn · Jost 400 · 0.88rem · Cloud at 75% opacity · hover: Marigold |
| Line below | `For speaking enquiries and press, use the Connect page.` · Jost 400 · 0.78rem · Cloud at 45% opacity · margin-top 10px |

### Footer base bar

Hairline top border, Cloud at 8% opacity. Below it, two items left-right:

- Left: `© Shubhra Saxena` · Jost 400 · 0.72rem · Cloud at 40% opacity
- Right: `Privacy` · Jost 400 · 0.72rem · Cloud at 40% opacity

---

## Responsive Breakpoints

| Breakpoint | Behaviour |
|---|---|
| `≥ 1080px` | Full desktop layout, all multi-column sections at their designed proportions |
| `768px to 1079px` | Two-column sections reduce to equal 50/50 columns. Gateway cards and article cards remain side by side. Hero text scales via clamp. |
| `< 768px` | All columns stack to single column. Hero image stacks above text at 58vh. Gateway cards stack vertically. Three article cards stack vertically. Book section stacks with cover above text. Navigation collapses to hamburger. |

---

## Typography Scale

| Role | Font | Weight | Size | Colour |
|---|---|---|---|---|
| Display / Hero headline | Cormorant Garamond | 700 | clamp(2.6rem, 4.5vw, 4.4rem) | Ink |
| Section heading | Cormorant Garamond | 600 | clamp(1.6rem, 3vw, 2.2rem) | Ink |
| Card headline | Cormorant Garamond | 600 | 1.15 to 1.4rem | Ink |
| Pullquote / thesis | Cormorant Garamond | 400 italic | clamp(1.25rem, 2.8vw, 1.75rem) | Ink |
| Body copy | Jost | 400 | 0.9 to 0.95rem | Ink-soft |
| Eyebrow / label | Jost | 500 | 0.68 to 0.72rem | Rose or Marigold |
| Button | Jost | 500 | 0.8 to 0.82rem | Ink on Marigold |
| Navigation | Jost | 500 | 0.78rem | Ink-soft |
| Footer meta | Jost | 400 | 0.72rem | Cloud at 40% opacity |

---

## Button System

Two button types only. No other variants on the homepage.

**Primary (Marigold filled)**

```
background: #E6A23C
color: #2B2733
font: Jost 500, uppercase, 0.82rem, letter-spacing 0.1em
padding: 14px 28px
border-radius: 999px
hover: background #F0BE6E, translateY(-2px), transition 0.2s ease
```

**Ghost (outline only, for dark backgrounds)**

```
background: transparent
color: #FFFDF9
border: 1.5px solid rgba(255,253,249,0.3)
font: same as primary
hover: border-color rgba(255,253,249,0.7)
```

---

## Accessibility Checklist

- All body text passes WCAG AA contrast on their respective backgrounds
- Ink-soft (`#56505f`) on Dawn (`#F8F4ED`) meets AA (ratio approx 5.9:1)
- All images carry descriptive alt text as specified per section
- Focus-visible outline: 2px solid Marigold, offset 3px, on all interactive elements
- Navigation is keyboard-navigable in DOM order
- Email input in the book section carries an `aria-label`
- `@media (prefers-reduced-motion: reduce)` disables all transitions and animations

---

## File Naming Convention

| Asset | Filename |
|---|---|
| Hero photo | `hero-shubhra.jpg` |
| Conference photo | `ss-story-square.jpg` |
| Writings photo | `ss-writings.jpg` |
| Logo full lockup | `ss-logo-full.png` |
| Diya monogram SVG | `ss-diya.svg` |
| Book cover (when ready) | `ss-book-cover.jpg` |
| Favicon | `ss-favicon.png` (32x32, diya monogram on transparent) |
