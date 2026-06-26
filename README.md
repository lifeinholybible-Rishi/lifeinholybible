# Life in Holy Bible

Life in Holy Bible is a static Scripture study website focused on helping visitors read, search, reflect, and learn from the Holy Bible.

The website includes:

- A cinematic landing experience
- A home page for navigation
- Book of Know Truth section
- Global Bible Search (KJV)
- Bible reference and explanation tables
- Elder Mode for easier reading
- Events and devotional sections

## Project Structure

```text
.
├── index.html
├── home.html
├── bible.html
├── bible-search.html
├── know-truth.html
├── bible.css
├── sitemap.xml
├── js/
│   └── bible-search.js
├── books/
│   ├── book-01.html
│   └── ...
└── images/
    └── books/
```

## Main Pages

| Page | Purpose |
|---|---|
| `index.html` | Opening animation and redirect page |
| `home.html` | Main landing page |
| `bible.html` | Bible reference and study table |
| `bible-search.html` | Global KJV Bible search page |
| `know-truth.html` | Book of Know Truth library page |
| `books/book-01.html` to `books/book-27.html` | Individual Book of Know Truth pages |

## Technology Used

- HTML
- CSS
- JavaScript
- JSON Bible data
- Google Analytics

## Current Status

This is a static website project. It does not require Node.js, Express.js, or a database to run.

## How to Run Locally

Open `index.html` directly in a browser, or serve the folder using any simple static server.

Example using Python:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Future Improvements

- Improve shared CSS structure
- Add better mobile navigation
- Add topic filters for Bible study content
- Add verse/category search
- Expand sitemap coverage
- Add Open Graph preview tags
- Improve accessibility and keyboard navigation

## Author

Author & Web Developer: Y B Rishi

By the Grace of God Almighty Jesus.
