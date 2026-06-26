# Manual Testing Checklist

Use this checklist after every website change before considering the site ready.

## 1. Home page

- Open `home.html`.
- Confirm the page loads without a blank screen.
- Confirm the star/divine-light visual does not block reading.
- Click `Search` in the navbar.
- Click `Reader Library` in the navbar.
- Click the `Book Of Know Truth` gateway.
- Click the `Global Bible Search (KJV)` gateway.
- Click the `Reader Library (All 27 Books)` gateway.
- Test `Elder Mode`.
- Check the page on mobile width.

## 2. Bible Study page

- Open `bible.html`.
- Confirm the Bible study table/content is visible.
- Search for a known word.
- Confirm suggestions/results do not overlap important content.
- Check horizontal scrolling on mobile if tables are wide.

## 3. Bible Search page

- Open `bible-search.html`.
- Search for a simple word such as `faith`.
- Search for a phrase or special character to make sure the page does not break.
- Confirm results appear clearly.
- Confirm the page handles no-results text properly.

## 4. Book of Know Truth library

- Open `know-truth.html`.
- Confirm all 27 book covers appear.
- Click Book 1 and confirm it opens.
- Randomly test a middle book and the last book.
- Check the page on mobile width.

## 5. Reader Library and Reader Mode

- Open `reader-library.html`.
- Confirm all 27 reader cards appear.
- Open Book 1 in Reader Mode.
- Test `Previous` and `Next`.
- Test `Large Text`.
- Test `Plain Mode`.
- Test `Print`.
- Open Book 27 and confirm `Next` is disabled or does not move past Book 27.
- Open an invalid book number and confirm it safely loads a valid book.

## 6. Site Index

- Open `site-index.html`.
- Confirm main page links work.
- Confirm original book page links work.
- Confirm Reader Mode book links work.

## 7. 404 page

- Open a fake page such as `missing-page-test.html`.
- Confirm the custom 404 page appears.
- Test links back to Home, Bible Study, Bible Search, Book of Know Truth, Reader Library, and Site Index.

## 8. SEO and discovery files

- Open `robots.txt`.
- Open `sitemap.xml`.
- Confirm `sitemap.xml` includes the main pages and all 27 book pages.

## 9. Content safety check

Before merging any content-related change, confirm:

- Bible explanations were not unintentionally rewritten.
- Verse references were not unintentionally changed.
- Book of Know Truth text was not unintentionally changed.
- Spiritual wording was not unintentionally changed.
- Navigation/readability changes did not hide important content.

## 10. Device checks

Test at least:

- Desktop browser.
- Mobile browser.
- Slow network reload.
- Hard refresh after deployment.

## Final pass

If all important checks pass, the change is safe to keep. If anything breaks, revert the latest PR or create a fix PR before adding new features.
