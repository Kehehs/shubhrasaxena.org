# Shubhra Saxena — About Page Structure and Design Specification

**Theme:** First Light
**Reference:** Attached liveasyou wellness screenshot, structural pattern only, not visual style
**Logo:** SS_FINAL_LOGO.png (diya monogram + SHUBHRA SAXENA wordmark)
**Rule:** No em dashes in any copy. No visual language outside the First Light theme. No image collage, overlap, or decorative frame treatment of the kind used in the reference page (the reference stacks a mountain photo, a tree silhouette, and a circular rotating stamp with overlapping crops). This page uses single, clean, contained images only.

---

## Design Tokens

Identical to the homepage. Do not introduce new colours, fonts, or spacing units. See `homepage-structure.md` for the full token table (`--dawn`, `--cloud`, `--ink`, `--ink-soft`, `--marigold`, `--marigold-soft`, `--rose`, `--sky`, Cormorant Garamond, Jost, 1080px max content width).

---

## Logo Usage and Global Navigation

Identical to the homepage. Reuse the fixed top navigation, full logo lockup, and the same three nav links (About, Writing, Connect), with About now shown in its active state. Do not duplicate this spec here; implement exactly as defined in `homepage-structure.md`.

---

## What This Page Does Differently From the Homepage

The homepage sells the idea of her in five sections and funnels everywhere to "Read her story." This page is the payoff of that click. Two things distinguish it structurally:

1. **A sustained first-person narrative block** (Sections 2 to 4) instead of the homepage's third-person body copy. Typographically this is signalled by keeping these three sections in Cormorant Garamond italic throughout, at a slightly larger size than the homepage Thesis Strip, so a reader feels the register shift without needing a label that says "in her words."
2. **A podcast section** styled after the Book section's dark band, since IMAL and the book share the same underlying phrase and both function as "go deeper" conversions rather than the page's primary CTA.

---

## Section 1 — Hero (Split Layout)

**Reference pattern:** Same split-hero pattern as the homepage, reused for consistency between the two pages
**Background:** Dawn
**Layout:** Two columns, full viewport height on desktop

### Left column (52% width)

| Element | Spec |
|---|---|
| Eyebrow | `HER STORY` · Jost 500 · 0.72rem · uppercase · letter-spacing 0.3em · Rose |
| Headline | *Her name means radiance. She has spent her life trying to earn it.* · Cormorant Garamond 700 · `clamp(2.6rem, 4.5vw, 4.4rem)` · line-height 1.05 · Ink · max-width 15ch |
| Headline accent | Word *radiance* only: italic 500, Marigold |
| Subline | *Shubhra is a Sanskrit word for pure light. It is also, she has come to believe, a description of the work: to notice the light already in people, and help them find their way back to it.* · Jost 400 · 0.95rem · Ink-soft · max-width 46ch · left border 2px Marigold · padding-left 18px |
| Primary CTA | `Listen to her podcast →` · same button spec as homepage primary CTA, scrolls to Section 5 |

Vertical rhythm identical to the homepage hero: eyebrow → 22px → headline → 26px → subline → 34px → button.

### Right column (48% width)

| Element | Spec |
|---|---|
| Image | `about-hero.jpg` |
| Alt text | *Shubhra Saxena in a quiet, reflective portrait* |
| Fit | `object-fit: cover` · `object-position: 50% 25%` |
| Divider | Hairline 1px vertical between columns, Ink at 10% opacity |
| Mobile | Image stacks above text, fixed height 58vh, face always in frame |

---

## Section Divider — Pattern A

*(28px diya monogram, marigold stroke, no fill, 64px above and below, exactly as specified on the homepage)*

---

## Section 2 — In Her Own Words: The Name

**Background:** Dawn
**Layout:** Single centred column, max-width 680px, generous vertical padding (80px top and bottom), same footprint as the homepage Thesis Strip

| Element | Spec |
|---|---|
| Body copy | *Shubhra is a Sanskrit word which signifies radiance and pure light...* (see content file, Section 2) |
| Typography | Cormorant Garamond 400 italic · `clamp(1.35rem, 3vw, 1.9rem)` · line-height 1.55 · Ink |
| Alignment | Centred |

> This is slightly larger and more generously spaced than the homepage Thesis Strip italic treatment, to signal the shift into first person.

---

## Section Divider — Pattern A

---

## Section 3 — Where It Began

**Background:** Cloud (`#FFFDF9`), distinguishing this narrative block from the Dawn sections around it
**Layout:** Two columns, image left (44%), text right (56%), 48px gap
**Padding:** 88px top and bottom

### Left column — Image

| Element | Spec |
|---|---|
| Image | `about-jharkhand.jpg` |
| Alt text | *A quiet landscape evocative of rural Jharkhand* |
| Crop | 4:5 portrait, single clean crop, `border-radius: 16px`, no overlapping elements, no rotated frames |
| Fit | `object-fit: cover` |

### Right column — Text

| Element | Spec |
|---|---|
| Section label | `WHERE IT BEGAN` · Jost 500 · 0.68rem · uppercase · letter-spacing 0.2em · Marigold |
| Body copy | Cormorant Garamond 400 italic · `clamp(1.2rem, 2.6vw, 1.6rem)` · line-height 1.55 · Ink |

**Mobile:** Image stacks above text, 60vh fixed height, `object-position: 50% 40%`.

---

## Section Divider — Pattern A

---

## Section 4 — The Path to Service

**Background:** Dawn
**Layout:** Two columns, text left (56%), image right (44%), 48px gap, mirrored from Section 3 for visual rhythm
**Padding:** 88px top and bottom

### Left column — Text

| Element | Spec |
|---|---|
| Section label | `THE PATH TO SERVICE` · same spec as Section 3 label |
| Body copy | Cormorant Garamond 400 italic · `clamp(1.2rem, 2.6vw, 1.6rem)` · line-height 1.55 · Ink |
| CTA | `Read her full story →` · Jost 500 · 0.8rem · Marigold · underline on hover · margin-top 28px |

### Right column — Image

| Element | Spec |
|---|---|
| Image | `Podium_1.png`, reused from the homepage's reserved asset |
| Alt text | *Shubhra Saxena delivering a speech at the Election Commission of India* |
| Crop | 4:5 portrait, single clean crop, `border-radius: 16px` |
| Fit | `object-fit: cover` |

**Mobile:** Image stacks above text, 60vh fixed height.

---

## Section Divider — Pattern A

---

## Section 5 — The Podcast: IMAL

**Reference pattern:** Same structural template as the homepage Book section, reused because both are "go deeper" conversions on a dark band
**Background:** Twilight Ink (`#2B2733`)
**Layout:** Two columns. Text left (55%), phone mockup image right (45%). Centred vertically.
**Padding:** `clamp(72px, 10vw, 120px)` top and bottom
**Subtle glow:** Radial gradient behind the phone image, rgba(230,162,60,0.12) at centre, fading to transparent, identical treatment to the Book section's glow behind the cover

### Left column content

| Element | Spec |
|---|---|
| Eyebrow | `THE PODCAST` · Jost 500 · 0.7rem · uppercase · letter-spacing 0.3em · Marigold |
| Title | *It Matters A Lot.* · Cormorant Garamond 700 · `clamp(2.4rem, 4.5vw, 3.8rem)` · line-height 1.05 · Cloud |
| Title accent | *A Lot.* in italic 500, Marigold-soft |
| Body copy | Cormorant Garamond 400 italic · `clamp(1.1rem, 2.2vw, 1.4rem)` · line-height 1.55 · Cloud at 88% opacity (see content file, Section 5, for full first-person text) |
| Platform CTA | `Listen on Spotify →` · Jost 500 · uppercase · letter-spacing 0.1em · background Marigold · text Ink · pill radius 999px · padding 14px 28px · hover: Marigold-soft, translateY(-2px) · links to `https://open.spotify.com/show/033BDLX5SdTvC1T1TkfxUm` |

### Right column — Phone mockup

| Element | Spec |
|---|---|
| Image | `imal-podcast-mockup.jpg` |
| Alt text | *IMAL podcast playing on a phone, earbuds resting beside it* |
| Composition | Recreate the attached reference screenshot's framing: phone at a slight angle, podcast artwork visible on screen, earbuds resting beside it on a plain surface. Use IMAL's own cover art and a neutral background consistent with Dawn or Cloud tones, not the reference's literal photo. |
| Treatment | Single image, soft drop shadow only (`0 20px 60px rgba(0,0,0,0.35)`), no additional framing, borders, or collage elements |
| Width | 320px on desktop, centred in the 45% column |

**Mobile:** Phone mockup stacks above text, centred, max-width 260px.

---

## Section Divider — Pattern A

---

## Section 6 — Closing Band

**Reference pattern:** Identical structure to the homepage Closing Band
**Background:** Twilight Ink (`#2B2733`)
**Layout:** Single centred column, max-width 680px
**Padding:** 96px top and bottom

| Element | Spec |
|---|---|
| Diya monogram | 36px, Marigold, centred, margin-bottom 32px |
| Quote | *"Everyone achieves victory at her own pace..."* · Cormorant Garamond 400 italic · `clamp(1.3rem, 3vw, 2rem)` · line-height 1.45 · Dawn |
| Attribution | `Shubhra Saxena` · Jost 400 · 0.78rem · uppercase · letter-spacing 0.16em · Rose · margin-top 20px |
| CTA | `Listen to IMAL →` · same button spec as homepage Closing Band CTA · links to Section 5 or directly to Spotify |

---

## Footer

Reuse the homepage footer exactly as specified in `homepage-structure.md`. No changes for this page.

---

## Responsive Breakpoints

| Breakpoint | Behaviour |
|---|---|
| `≥ 1080px` | Full desktop layout, all multi-column sections at their designed proportions |
| `768px to 1079px` | Two-column sections reduce to equal 50/50 columns. Podcast section keeps text and phone mockup side by side at reduced scale. |
| `< 768px` | All columns stack to single column. Hero image stacks above text at 58vh. Sections 3 and 4 images stack above their text at 60vh. Podcast phone mockup stacks above text, centred. Navigation collapses to hamburger, identical to homepage behaviour. |

---

## Accessibility Checklist

- All body text passes WCAG AA contrast on their respective backgrounds, same token pairings as verified on the homepage
- All images carry descriptive alt text as specified per section
- Focus-visible outline: 2px solid Marigold, offset 3px, on all interactive elements
- The Spotify link opens in a new tab and carries `rel="noopener noreferrer"`
- Navigation is keyboard-navigable in DOM order
- `@media (prefers-reduced-motion: reduce)` disables all transitions and animations

---

## File Naming Convention (new assets for this page)

| Asset | Filename |
|---|---|
| Hero photo | `about-hero.jpg` |
| Jharkhand landscape photo | `about-jharkhand.jpg` |
| Public service photo | `Podium_1.png` (reused from homepage assets, not re-shot) |
| Podcast phone mockup | `imal-podcast-mockup.jpg` |

Full images folder plan, crop specs, and sourcing notes to follow once this structure is approved.
