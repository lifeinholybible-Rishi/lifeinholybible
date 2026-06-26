// Global KJV Bible Search – MATCHES YOUR JSON STRUCTURE

let bibleBooks = [];
const input = document.getElementById("searchInput");
const results = document.getElementById("results");

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function renderMessage(message) {
  results.innerHTML = `<p>${message}</p>`;
}

// Load Bible (root-level JSON array)
fetch("./kjv.json")
  .then(res => {
    if (!res.ok) {
      throw new Error(`Bible data request failed: ${res.status}`);
    }
    return res.json();
  })
  .then(data => {
    bibleBooks = Array.isArray(data) ? data : [];
    console.log("Bible loaded:", bibleBooks.length, "books");
  })
  .catch(err => {
    console.error("Bible load failed:", err);
    renderMessage("Bible data could not be loaded. Please check kjv.json.");
  });

// Search logic
input.addEventListener("input", () => {
  const query = input.value.trim().toLowerCase();
  results.innerHTML = "";

  if (query.length < 2) return;

  if (bibleBooks.length === 0) {
    renderMessage("Bible data is still loading or unavailable.");
    return;
  }

  let count = 0;
  const maxResults = 50;
  const safeQuery = escapeRegExp(query);
  const highlightRegex = new RegExp(safeQuery, "gi");

  for (const book of bibleBooks) {
    if (count >= maxResults) break;

    const bookName = String(book.abbrev || "").toUpperCase();
    const chapters = Array.isArray(book.chapters) ? book.chapters : [];

    for (let chapterIndex = 0; chapterIndex < chapters.length; chapterIndex++) {
      if (count >= maxResults) break;

      const chapter = Array.isArray(chapters[chapterIndex]) ? chapters[chapterIndex] : [];

      for (let verseIndex = 0; verseIndex < chapter.length; verseIndex++) {
        if (count >= maxResults) break;

        const verseText = String(chapter[verseIndex] || "");

        if (verseText.toLowerCase().includes(query)) {
          const highlighted = verseText.replace(
            highlightRegex,
            m => `<span class="highlight">${m}</span>`
          );

          const div = document.createElement("div");
          div.className = "result";
          div.innerHTML = `
            <div class="reference">
              ${bookName} ${chapterIndex + 1}:${verseIndex + 1}
            </div>
            <div>${highlighted}</div>
          `;

          results.appendChild(div);
          count++;
        }
      }
    }
  }

  if (count === 0) {
    renderMessage("No verses found.");
  }
});
