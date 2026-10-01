# Press page, structure

Scope: /press.html on shubhrasaxena.org. Static HTML on Vercel, no framework, no build step.
Rule: this file defines markup, layout, nav state and link behaviour. All reader-facing copy and every press item come from press-content.md. Visual styling comes from the existing site CSS.

Layout reference: github.com/about/press (screenshot supplied, mobile view). What that page does, and what this file copies:
1. Breadcrumb at the top (About / Press).
2. Centred H1 "Press" with no subhead.
3. A centred facts row (two items with small icons).
4. A centred links row (three links with small icons, the last one being media resources).
5. A centred press email with an envelope icon.
6. A grid of tall rectangular cards, two columns at mobile width, equal height per row, light grey surface, no border, rounded corners. Each card holds the outlet name (small, muted) at the top, the article title in the middle, and the date (small, muted) pinned to the bottom. The whole card is the link.
7. Centred pagination under the grid (Previous, current page, ellipsis, last page, Next).
There is NO side panel on that page. Do not add one.

## Before touching anything
- Read index.html, about.html, book.html and the stylesheet.
- Reuse the existing header/nav, footer, fonts, colours, spacing and label styles. Do not invent a new style. Do not add a monospace font unless the site already uses one.
- Follow the site's image folder convention and active-nav pattern.

## Head
- Title tag: from press-content.md (meta.title).
- Meta description: from press-content.md (meta.description).
- Canonical: https://www.shubhrasaxena.org/press.html
- Robots: index, follow.
- Open Graph: og:type website, og:title, og:description, og:url, og:image (from press-content.md; fall back to the homepage OG image).
- Twitter: summary_large_image with the same values.
- JSON-LD CollectionPage: name, url, description, `about` = Person "Shubhra Saxena" (sameAs from the footer social links, stripped of utm/igsh/si params), and `mainEntity` = ItemList with one ListItem per press item (position, name = title, url = external article URL). Do not mark external articles as authored by this site.
- JSON-LD BreadcrumbList: Home, Press.

## Page skeleton

```html
<main id="main">

  <!-- Centred heading block -->
  <header class="press-header">
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <ol>
        <li><a href="/index.html">{{breadcrumb_home}}</a></li>
        <li aria-current="page">{{breadcrumb_press}}</li>
      </ol>
    </nav>

    <h1>{{h1}}</h1>

    <!-- Facts row: up to 2 items, small inline SVG icon + text (an item may be a link) -->
    <ul class="press-facts">
      <li><svg aria-hidden="true" focusable="false">...</svg> <span>{{fact.text}}</span></li>
    </ul>

    <!-- Links row: up to 3 links, small inline SVG icon + label -->
    <ul class="press-links">
      <li><a href="{{link.url}}"><svg aria-hidden="true" focusable="false">...</svg> {{link.label}}</a></li>
      <!-- the media resources link uses the download attribute if it points to a file -->
    </ul>

    <!-- Press email -->
    <p class="press-contact">
      <svg aria-hidden="true" focusable="false">...</svg>
      <a href="mailto:{{contact_email}}">{{contact_email}}</a>
    </p>
  </header>

  <!-- Card grid -->
  <section class="press-grid-section" aria-labelledby="coverage-heading">
    <h2 id="coverage-heading" class="visually-hidden">{{coverage_heading}}</h2>

    <ul class="press-grid">
      <!-- To add an item, duplicate one <li> and fill it from press-content.md.
           Keep newest first. Also add the item to the JSON-LD ItemList. -->
      <li>
        <a class="press-card"
           href="{{item.url}}"
           target="_blank"
           rel="noopener">
          <span class="press-card__outlet">{{item.outlet}}</span>
          <h3 class="press-card__title">{{item.title}}</h3>
          <time class="press-card__date" datetime="{{item.date_iso}}">{{item.date_display}}</time>
          <span class="visually-hidden">{{opens_new_tab_label}}</span>
        </a>
      </li>
      <!-- repeat for each item in press-content.md -->
    </ul>

    <!-- Pagination: not needed yet. When there are more than about 12 items, add a centred
         <nav aria-label="Pagination"> with Previous, numbered links (press.html, press-2.html),
         an ellipsis and Next, with aria-current="page" on the current number. -->
  </section>

</main>
```

## Icons
- Small inline SVGs, aria-hidden, sized with em or rem, coloured with currentColor. No icon font or library.
- Facts row: any two simple icons that suit the text (for example a book and a pin). The content file supplies the icon key for each item; if a key is missing, use no icon.
- Links row and email: use a simple link/document icon for links and an envelope for the email.

## Card behaviour
- The whole card is ONE link. No nested links inside a card.
- Every card opens in a new tab with `target="_blank"` and `rel="noopener"`. These are editorial outbound links, so do not add nofollow or sponsored.
- Visually hidden text in each card says the link opens in a new tab.
- Card anatomy, top to bottom: outlet name (small, muted), title (largest text in the card), date (small, muted, pinned to the bottom of the card with `margin-top: auto` in a flex column).
- Cards in the same row are equal height. Give cards a sensible minimum height so short titles do not look cramped.
- Surface: a light neutral background from the site's existing tokens, no border, a small border radius, comfortable padding.
- Hover: a subtle background shift and an underline on the title. Visible keyboard focus ring on the card. Respect prefers-reduced-motion.
- No thumbnails, no logos, no descriptions, no type tags, no JavaScript, no filters. Keep it as plain as the reference.

## Layout notes
- Heading block is centred. The grid sits in the site's standard container.
- Grid: two columns at mobile width, as in the screenshot. Below 360px wide, use one column. The screenshot only shows mobile, so the desktop column count is an assumption: three columns from 1024px up. Gap from the site's spacing scale, about 20px.
- Facts row, links row and email wrap and stay centred on narrow screens.
- Newest item first.
- Responsive at 375, 768 and 1280px.

## Nav and footer
- Add Press to the site header nav and the footer Explore list on every page: Home, About, Book, Blog, Press, Contact. This is the only change to those pages.
- Mark Press as the current page on press.html, following the pattern used on other pages (aria-current="page" and the active class).

## Homepage
- In index.html, add a "View all press" link at the end of the "Featured In" section pointing to /press.html. The label comes from press-content.md (view_all_press_label). Keep the four existing cards as they are.

## Sitemap
- If sitemap.xml exists, add /press.html. If it does not exist, do not create one and say so.

## Verify
- Serve locally and check 375, 768 and 1280 widths, and also 340px for the one-column fallback.
- No console errors, no layout shift, correct keyboard order, focus visible on every card.
- Confirm every card opens the right external URL in a new tab.
- Confirm cards in a row are equal height and dates sit at the bottom.
- Run the JSON-LD through Google's Rich Results Test.
- Run Lighthouse if available.

## Content fields this file expects from press-content.md
meta.title, meta.description, og_image, breadcrumb_home, breadcrumb_press, h1, facts (up to 2, each with text, optional icon key, optional url), links (up to 3, each with label, url, optional icon key, optional download flag), contact_email, coverage_heading, opens_new_tab_label, view_all_press_label, and for each press item: outlet, date_iso, date_display, title, url.
