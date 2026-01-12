// Global KJV Bible Search – robust version

let bibleBooks = [];
const input = document.getElementById("searchInput");
const results = document.getElementById("results");

fetch("/data/kjv.json")
  .then(response => response.text())   // ← key change
  .then(text => {
    const data = JSON.parse(text);     // safe manual parse
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
    book.chapters.forEach((chapter, cIdx) => {
      chapter.forEach((verse, vIdx) => {
        if (verse.toLowerCase().includes(query)) {

          const highlighted = verse.replace(
            new RegExp(query, "gi"),
            m => `<span class="highlight">${m}</span>`
          );

          const div = document.createElement("div");
          div.className = "result";
          div.innerHTML = `
            <div class="reference">
              ${book.name} ${cIdx + 1}:${vIdx + 1}
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
