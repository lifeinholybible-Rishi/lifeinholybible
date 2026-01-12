 // Global KJV Bible Search – MATCHES YOUR JSON STRUCTURE

let bibleBooks = [];
const input = document.getElementById("searchInput");
const results = document.getElementById("results");

// Load Bible (root-level JSON array)
fetch("/kjv.json")
  .then(res => res.json())
  .then(data => {
    bibleBooks = data; // <-- IMPORTANT FIX
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

  bibleBooks.forEach(book => {
    const bookName = book.abbrev.toUpperCase();

    book.chapters.forEach((chapter, chapterIndex) => {
      chapter.forEach((verseText, verseIndex) => {

        if (verseText.toLowerCase().includes(query)) {

          const highlighted = verseText.replace(
            new RegExp(query, "gi"),
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
          if (++count >= 50) return;
        }
      });
    });
  });

  if (count === 0) {
    results.innerHTML = "<p>No verses found.</p>";
  }
});
