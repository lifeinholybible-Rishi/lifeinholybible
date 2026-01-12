 // Global KJV Bible Search – FINAL WORKING VERSION

let bibleBooks = [];
const input = document.getElementById("searchInput");
const results = document.getElementById("results");

// Fetch Bible from SAME folder (bulletproof)
fetch("kjv.json")
  .then(res => res.text())
  .then(text => {
    const data = JSON.parse(text);
    bibleBooks = data.books || [];
    console.log("Bible loaded:", bibleBooks.length, "books");
  })
  .catch(err => {
    console.error("Bible load failed:", err);
  });

input.addEventListener("input", () => {
  const query = input.value.trim().toLowerCase();
  results.innerHTML = "";

  if (query.length < 2 || bibleBooks.length === 0) return;

  let count = 0;

  bibleBooks.forEach(book => {
    book.chapters.forEach((chapter, c) => {
      chapter.forEach((verse, v) => {
        if (verse.toLowerCase().includes(query)) {

          const highlighted = verse.replace(
            new RegExp(query, "gi"),
            m => `<span class="highlight">${m}</span>`
          );

          const div = document.createElement("div");
          div.className = "result";
          div.innerHTML = `
            <div class="reference">
              ${book.name} ${c + 1}:${v + 1}
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
