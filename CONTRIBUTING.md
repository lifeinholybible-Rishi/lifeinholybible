# Contributing Guide

Thank you for helping improve Life in Holy Bible.

This repository contains a static website. Most safe improvements should focus on navigation, readability, accessibility, SEO, testing, documentation, and bug fixes.

## Safe contribution areas

Good changes include:

- Fixing broken links.
- Improving mobile layout.
- Improving accessibility.
- Improving search behavior.
- Improving documentation.
- Improving testing checklists.
- Improving sitemap or page discovery.
- Fixing clear HTML, CSS, or JavaScript errors.

## Content caution

Be very careful with written content.

Before changing content, confirm the purpose of the change. Do not casually rewrite:

- Bible explanations.
- Verse references.
- Book of Know Truth text.
- Spiritual wording.
- Author statements.

If a content change is needed, make it in a separate pull request and explain exactly what changed and why.

## Recommended workflow

1. Create a new branch from `main`.
2. Make a small focused change.
3. Test the affected page.
4. Follow `TESTING.md` where relevant.
5. Open a pull request.
6. Use the pull request template checklist.
7. Merge only after reviewing changed files.

## Pull request rules

Keep pull requests small when possible.

A good pull request should:

- Have a clear title.
- Explain what changed.
- Mention which pages were affected.
- Say whether content was changed.
- Include testing notes.

Avoid mixing unrelated changes in one pull request. For example, do not mix a search fix, a design change, and content rewriting in one PR.

## Testing before merge

At minimum, check:

- The changed page opens correctly.
- Mobile view is still usable.
- Links still work.
- No important content is hidden.
- Browser console has no obvious new errors.

For bigger changes, use `TESTING.md`.

## Security

For security-related reports or changes, read `SECURITY.md` first. Do not post secrets, private data, or harmful exploit details publicly.

## Documentation

When making repeated improvements, update `CHANGELOG.md` so future reviewers can understand what changed over time.
