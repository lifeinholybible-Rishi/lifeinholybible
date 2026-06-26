# Changelog

This file records safe technical improvements made to the Life in Holy Bible website.

## 2026-06-26

### Safe technical cleanup

- Improved the project `README.md` so the repository is easier to understand.
- Fixed invalid CSS in `home.html`.
- Fixed the duplicate/nested footer structure in `home.html`.
- Improved `js/bible-search.js` reliability:
  - Uses a safer relative path for `kjv.json`.
  - Handles failed Bible data loading.
  - Escapes search text before using it for highlighting.
  - Enforces the 50-result limit more reliably.
- Added `robots.txt`.
- Expanded `sitemap.xml` to include the main site pages and Book of Know Truth pages.

### UI, SEO, and accessibility improvements

- Added SEO and social-preview metadata to key pages.
- Improved mobile readability and responsive layout.
- Added keyboard-focus visibility.
- Added reduced-motion support.
- Improved Bible table readability through CSS without editing Bible table content.
- Added lazy image loading to the Book of Know Truth library page.

### Reader mode preparation

- Added reusable reader-navigation assets:
  - `books/book-navigation.css`
  - `books/book-navigation.js`
- Added `book-reader.html` as a safe reader mode page.
- Added `reader-library.html` to open all 27 books through Reader Mode.
- Added Reader Library links to the home page.

### Site navigation and discovery

- Added `404.html` so broken links show a helpful page.
- Added `site-index.html` to list the main site pages, original book pages, and Reader Mode links.
- Added `site-index.html` to `sitemap.xml`.
- Added a Site Index link to the 404 page.

## Content safety note

The changes listed here were intended to be technical, navigational, accessibility, SEO, and readability improvements only. Bible explanations, verse references, Book of Know Truth text, and spiritual wording were not intentionally rewritten.
