 // Global KJV Bible Search – MATCHES YOUR JSON STRUCTURE

let bibleBooks = [];
const input = document.getElementById("searchInput");
const results = document.getElementById("results");

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function appendHighlightedText(container, text, query) {
  const regex = new RegExp(escapeRegExp(query), "gi");
  const value = String(text);
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(value))) {
    if (match.index > lastIndex) {
      container.appendChild(document.createTextNode(value.slice(lastIndex, match.index)));
    }

    const mark = document.createElement("span");
    mark.className = "highlight";
    mark.textContent = match[0];
    container.appendChild(mark);
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < value.length) {
    container.appendChild(document.createTextNode(value.slice(lastIndex)));
  }
}

// Load Bible (root-level JSON array)
fetch("kjv.json")
  .then(res => res.json())
  .then(data => {
    bibleBooks = Array.isArray(data) ? data : []; // <-- IMPORTANT FIX
    console.log("Bible loaded:", bibleBooks.length, "books");
  })
  .catch(err => {
    console.error("Bible load failed:", err);
  });

// Search logic
input.addEventListener("input", () => {
  const query = input.value.trim().toLowerCase();
  results.innerHTML = "";

  if (query.length < 2 || bibleBooks.length === 0) return;

  let count = 0;

  searchLoop:
  for (const book of bibleBooks) {
    const bookName = book.abbrev.toUpperCase();

    for (let chapterIndex = 0; chapterIndex < book.chapters.length; chapterIndex++) {
      const chapter = book.chapters[chapterIndex];

      for (let verseIndex = 0; verseIndex < chapter.length; verseIndex++) {
        const verseText = chapter[verseIndex];
        if (verseText.toLowerCase().includes(query)) {
          const div = document.createElement("div");
          const reference = document.createElement("div");
          const verse = document.createElement("div");

          div.className = "result";
          reference.className = "reference";
          reference.textContent = `${bookName} ${chapterIndex + 1}:${verseIndex + 1}`;
          appendHighlightedText(verse, verseText, query);
          div.append(reference, verse);

          results.appendChild(div);
          if (++count >= 50) break searchLoop;
        }
      }
    }
  }

  if (count === 0) {
    results.innerHTML = "<p>No verses found.</p>";
  }
});
