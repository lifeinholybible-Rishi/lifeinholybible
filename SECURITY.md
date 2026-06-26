# Security Policy

Life in Holy Bible is currently a static website repository. Even for a static site, security issues and unsafe changes should be reported carefully.

## Reporting a security issue

If you find a security problem, please do not post sensitive exploit details publicly in an issue.

Instead, report only a safe summary first, such as:

- Which page or file may be affected.
- What type of problem it is.
- Whether it affects visitors, links, scripts, or content safety.

Avoid posting:

- Working exploit steps.
- Private tokens or secrets.
- Personal information.
- Attack payloads that could harm visitors.

## Safe public issues

It is okay to open a normal GitHub issue for non-sensitive problems, such as:

- Broken links.
- Mobile layout problems.
- Search not working.
- Missing page links.
- Typing mistakes.
- Accessibility or readability issues.

## Content safety

For content-related reports, clearly mention the exact page and section. Do not rewrite Bible explanations, verse references, Book of Know Truth text, or spiritual wording unless the change is intentional and carefully reviewed.

## Maintainer checklist

Before merging security-related changes:

- Review the changed files carefully.
- Confirm no secrets or private information were committed.
- Confirm scripts do not load unknown or unnecessary external resources.
- Confirm Bible and Book of Know Truth content was not unintentionally changed.
- Test the affected pages on desktop and mobile.

## Supported versions

The latest `main` branch is the supported version of this website.
