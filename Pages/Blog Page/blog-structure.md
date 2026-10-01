# Blog page, structure

Scope: /blog.html on shubhrasaxena.org. Static HTML on Vercel, no framework, no build step.
Rule: this file defines markup, nav state, image slots and link targets. All reader-facing copy comes from blog-content.md. Visual styling comes from the existing site CSS.

## Before touching anything
- Read index.html, about.html, book.html and the stylesheet.
- Reuse the existing header/nav, footer and type scale.
- Follow the site's image folder convention and the active-nav pattern already used on other pages.
- Do not restyle any other page.

## Head
- Title tag: from blog-content.md (meta.title).
- Meta description: from blog-content.md (meta.description).
- Canonical: https://www.shubhrasaxena.org/blog.html
- Open Graph: og:type website, og:title, og:description, og:url, og:image (1200x630).
- Twitter: summary_large_image, with the same title, description and image.
- JSON-LD Blog: blogPost entries for the three posts (headline, url, datePublished, author = Person "Shubhra Saxena" with sameAs taken from the footer social links, stripped of utm/igsh/si params).
- JSON-LD BreadcrumbList: Home, Blog.

## Page skeleton

```html
<main id="main">

  <!-- Header band -->
  <section class="blog-hero">
    <picture>
      <source media="(max-width: 768px)" srcset="/Pages/Blog Page/shubhra-saxena-blog-header-mobile.webp">
      <img
        src="/Pages/Blog Page/shubhra-saxena-blog-header.webp"
        alt=""
        width="2400" height="900"
        fetchpriority="high">
    </picture>
    <div class="blog-hero__overlay"></div>
    <div class="blog-hero__inner">
      <p class="eyebrow">{{eyebrow}}</p>
      <h1>{{h1_pre}} <em>{{h1_italic}}</em></h1>
      <p class="subhead">{{subhead}}</p>
    </div>
  </section>

  <!-- Post list -->
  <section class="blog-list" aria-label="Blog posts">
    <!-- To add a new post, duplicate one <article>, update the date, category, title,
         link and excerpt from blog-content.md, and add the post to the JSON-LD. -->

    <article class="post-card">
      <p class="post-meta">
        <time datetime="{{post.date_iso}}">{{post.date_display}}</time>
        <span class="post-category">{{post.category}}</span>
      </p>
      <h2><a href="{{post.url}}">{{post.title}}</a></h2>
      <p class="post-excerpt">{{post.excerpt}}</p>
      <p><a class="read-more" href="{{post.url}}">{{read_more_label}}</a></p>
    </article>

    <!-- repeat for each post in blog-content.md, newest first -->
  </section>

</main>
```

## Nav
- Keep the existing header and nav markup from the other pages, unchanged.
- Mark the Blog link as the current page, following the pattern used elsewhere on the site (add aria-current="page" if used, and whatever active class the other pages apply).

## Footer
- Keep the existing site footer, unchanged. The JSON-LD author sameAs values are read from the footer social links.

## Hero image
- Desktop source: /Pages/Blog Page/shubhra-saxena-blog-header.webp, 2400x900.
- Mobile source: /Pages/Blog Page/shubhra-saxena-blog-header-mobile.webp, 1200x800.
- Explicit width and height, fetchpriority="high", no lazy-loading.
- alt="" because the image sits behind text and the H1 carries the meaning.
- Left-to-right gradient overlay (dark on the left, fading to transparent) to hold 4.5:1 contrast under the heading.
- If either image file is missing, fall back to a solid brand-colour gradient and leave a TODO.

## Layout notes
- Hero band is full width.
- Post list is a single vertical column, max-width about 760px, centred.
- Newest post first.
- Text only, no thumbnails, no pagination, no JavaScript.
- Visible keyboard focus on every link.
- Responsive at 375, 768 and 1280 pixels.
- Respect prefers-reduced-motion.

## Post link targets
- Point each href at the slug listed in blog-content.md.
- If a post file does not yet exist, link to the slug anyway and leave a TODO so the author can be warned about the 404.

## Sitemap and cross-page edits
- If sitemap.xml exists, add /blog.html and the three post URLs.
- In index.html, repoint the "Explore her writing" link from book.html to blog.html. No other page is to be changed.

## Verify
- Serve locally and check 375, 768 and 1280 widths.
- No console errors, no cumulative layout shift from the hero image.
- Keyboard focus order is correct.
- Run the JSON-LD through Google's Rich Results Test.
