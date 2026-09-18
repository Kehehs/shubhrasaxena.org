# It Matters A Lot — Book Page Content

**Route:** `/it-matters-a-lot`
**Theme:** First Light
**Voice:** Calm third person, editorial. The book's own voice is first person, but this page speaks about the book, not as it.
**Last updated:** July 2026 (revision pass 3)

**Rules**
- No em dashes anywhere in copy.
- No first person, except inside the one verbatim excerpt.
- Only one book exists on this site. Never pluralise, never write "her books", never imply a catalogue.
- The book is unreleased. Every reference to availability is future tense. No buy links, no price, no retailer logos, no publication date.
- Credentials appear once, in the author section (Section 5). Nowhere else.
- Single conversion on this page: **Notify me**, which links to the form on the Contact page. There is no second ask.
- Everything on this page is paraphrased from the manuscript introduction, with one exception: the excerpt in Section 4, which is verbatim and marked as such.

**Revision pass 2:** the Thesis Strip (formerly Section 2) is deleted entirely — component, copy, and its trailing divider. The Synopsis is now Section 2, directly below the hero. Every section after it is renumbered down by one. See the per-section notes below for what else changed.

**Revision pass 3:** two more Pattern A dividers removed — the one directly below the Hero (before the Synopsis) and the one directly below the Author section (before the Notify band). Both were left over from when those pairs of sections had more space between them; removing them and tightening the surrounding padding reads as one continuous flow instead of a hard seam. The divider between the Synopsis and Inside the Book is unchanged and still there.

---

## Section 1 — Hero

**Background:** Twilight Ink (#2B2733). Deliberate inversion of the homepage hero, which is Dawn. The book is the dark, intimate object on a light site.
**Layout:** Split. Text left, book cover right, cover tilted against a marigold backing plate.
**Image:** No photograph. Reuses the CSS book cover placeholder from the homepage book section, unchanged.
**Nav (revision pass 2 — bug fix):** the nav is `position: fixed` and was clipping the hero, with the Notify Me button sliced in half. Fixed by letting the nav overlay the hero transparently: while the hero is in view the nav renders with no background, the marigold monogram, and cloud-coloured wordmark and links. Once the page scrolls past the hero, the nav solidifies to the standard Dawn background with ink-coloured type. The hero itself now reserves its own top clearance (96px desktop, 104px mobile) rather than being pushed down by nav flow height.

---

**Eyebrow**

THE BOOK

**Coming soon badge**

Coming Soon

**Title** *(Cormorant Garamond, 700, display size)*

It Matters A Lot.

> Note for developer: *A Lot.* renders in italic 500 weight, colour Marigold Soft (#F0BE6E). Identical treatment to the homepage book section, so the title reads the same way in both places.

**Author line**

Shubhra Saxena

**One-line pitch**

A book about the question we all asked once as children, and quietly stopped asking out loud.

**Primary CTA**

Notify me →

> Links to the enquiry form on the Contact page, anchored to the notify field. Not a modal. Not an inline form. The Contact page owns every form on this site.

**Secondary CTA (text link, no button)**

Read the synopsis ↓

> Scrolls to Section 2.

---

## Section 2 — Synopsis

**Image:** None. Single centred column on Dawn, max-width 680px.
**Divider:** none (revision pass 3 — removed). This section now follows the Hero directly with no diya divider between them; top padding tightened to 56px (was 88px) so the two sections read as one continuous flow rather than a hard seam. Bottom padding is unchanged at 88px, since the Pattern A divider before Inside the Book is still there.
**Structure (revision pass 1):** the synopsis was a wall of three long paragraphs and read as six hundred words nobody would finish. It is now three short beats, each carrying a marigold spine rule and a label, separated by a pull line and closed with a standalone closing line. Roughly a third shorter. Cuts: "no language for what had happened to her," the "whole arrangement" clause, the "childhood, adolescence, adulthood, old age" list (redundant with the Section 3 cards), the "what a child actually needs / what an adult actually means" pair (also redundant with the cards), and "The book will not fix your life or tell you what it should look like."
**Revision pass 2:** the Thesis Strip that used to precede this section is deleted entirely (component, copy, divider). This section now follows the hero directly and is the page's second section.

---

**Section eyebrow**

WHAT THE BOOK IS ABOUT

**Section heading**

An invitation back to the question

**Beat 1 — label: THE TABLE**

She was six years old, at her study table on a Sunday morning, homework half finished. Her mother moved through the house the way she always did, room to room, kitchen and back, the kind of motion that becomes invisible because it never stops. And then a question walked into the room and sat down across from her. Why any of it. Why the lunch, why the homework, if one day it ends.

**Pull line** *(centred, full column width, no quote marks, no attribution — the book's voice surfacing, not a citation)*

She only knew the question had pulled up a chair, and intended to stay.

**Beat 2 — label: THE TABLES AFTER**

A desk in a classroom, where being clever felt safer than being curious. A desk in an office, where she signed things and let the coffee go cold and mistook being busy for being alive. A table set for two, then for more, where she played the roles she had been handed.

> Daughter. Partner. Officer. Mother.

She played them so well that she believed the question had left her. It had not. She had only stopped asking it out loud.

**Beat 3 — label: THE BOOK**

*It Matters A Lot* is what happened when she went back to that table. It is not a book of answers and it is not a manual. Each chapter sits inside one stage of a life, not to instruct you on how to live it, but to slow you down inside it. It asks a plainer question, and then leaves it with you.

**Closing line** *(centred, below Beat 3)*

Are you merely existing, or are you truly living.

---

## Section 3 — Inside the Book

**Image:** None. Four cards, one per life stage. Structure is the content here: the book is organised by stage, so the page is too.

---

**Section eyebrow**

FOUR STAGES, FOUR QUESTIONS

**Section heading**

The book is built the way a life is

**Section subcopy**

Each chapter sits with one stage and one question. The questions are not rhetorical. They are the ones the book actually spends its pages on.

---

### Card 1

**Label:** CHILDHOOD
**Question:** What does a child actually need when she says she wants to be heard?

### Card 2

**Label:** ADOLESCENCE
**Question:** What is a teenager really chasing when he says he wants to be free?

### Card 3

**Label:** ADULTHOOD
**Question:** What does an adult really mean when he says he is tired?

### Card 4

**Label:** OLD AGE
**Question:** What is an elderly man really doing when he simply listens?

> Note for developer: no numbered markers on these cards. The stages are a sequence, but the numerals add nothing the labels do not already carry, and they make it look like a process diagram. Labels only.

---

## Section 4 — Excerpt

**Background:** Twilight Ink (#2B2733)
**Image:** None. Diya monogram above the quote.

---

**Eyebrow**

FROM THE INTRODUCTION

**Excerpt** *(Cormorant italic, display size, colour Dawn. This is the only verbatim text from the manuscript on the entire page.)*

"People live their lives like waves: rising, falling, rising again."

**Attribution**

It Matters A Lot, Shubhra Saxena

---

## Section 5 — Author (feature panel)

**Revision pass 2 — rebuilt.** Replaced the two-column author block with a full-width feature panel: a large 4:5 media panel on one side, a badge/heading/body/link stack on the other. This is a bigger, more deliberate treatment than the earlier author block — see `book-structure.md` for the retired "must read as smaller than the synopsis" constraint and what replaced it.

**Divider (revision pass 3):** the Pattern A diya divider that used to sit below this section, before the Notify band, is removed. Bottom padding tightened to 56px / 72px desktop (was 96px / 128px) so the section flows into Notify without a hard seam. Top padding is unchanged, since the background change from the Excerpt's Twilight Ink already provides the separation there.

**Image:** Author photograph, **4:5 portrait crop** (revision pass 2 — was 1:1 square). Filenames stay `ss-author-book.jpg` / `ss-author-book.webp`.

**Image export spec (revision pass 2):**
- New crop: 4:5 portrait, not 1:1. Same subject anchoring as before — head and shoulders, mic head in frame, mic stand mostly out, podium reduced to a sliver, she sits slightly left, facing into open space.
- Same background treatment: radial depth blur, sharp on her face, 12% corner vignette, nothing cloned out.
- Same colour treatment: saturation down 7%, white balance warmed roughly +250K, shadows lifted.
- Export at 1200x1500, JPG quality 85 progressive, plus a WebP sibling.
- **Pending asset:** the live page currently renders the existing 1:1 `ss-author-book.webp` inside the 4:5 frame via CSS `object-fit: cover`, since no image-editing capability was available to produce the true re-crop and retouch described above. Swap in the real 1200x1500 export before this page is considered finished — the crop, vignette, and colour grade described here are not yet applied to the file in the repo.

**Alt text:** Shubhra Saxena

**Marigold depth plate:** a second panel, same dimensions as the image, marigold at 14% opacity, offset behind and below-left of the image. Same device as the hero book cover's backing plate — it is the only decoration in this block, and it ties the two sections together.

---

**Badge**

About the Author

**Name** *(heading)*

Shubhra Saxena

**Body copy**

Shubhra Saxena is an IAS officer and the 2009 All-India Topper, with two decades in public service as a District Magistrate and as a Director at the Election Commission of India. That is the record. This book is about the thing the record does not hold: the question she has been carrying since she was six, and what happened when she finally sat back down with it.

**Link**

→ Read her story

---

## Section 6 — Notify Band

**Background:** Dawn
**Image:** None.

---

**Heading**

The book is not out yet

**Body copy**

It is being written. When it has a date, a cover, and a place to buy it, this is where that will be announced first. No newsletter, no schedule, one message when it matters.

**CTA**

Notify me →

> Links to the notify field on the Contact page. Same destination as the hero CTA, same label. One action, one name, used consistently in both places.

---

## Global Elements

### Navigation

Home · About · Book · Blog · Contact

> Book is the active item on this page. Active state is the marigold underline, per the global nav spec.

### Footer

Unchanged global footer component.

---

## Copy Rules Recap

- No em dashes. Restructure sentences to avoid them.
- Third person throughout, except the Section 4 excerpt.
- Never plural. There is one book.
- Never past tense about publication. It has not happened.
- The word *quietly* and the word *quiet* are load-bearing across this brand. Use them, but not more than twice on this page, or they stop meaning anything.
- Credentials belong in Section 5 (Author section) and nowhere else.
- Both CTAs on the page say the same thing and go to the same place: Notify me, on the Contact page.
