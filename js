let bible = null;
let loaded = false;

fetch("data/kjv.json")
  .then(res => res.json())
  .then(data => {
    bible = data.books;
    loaded = true;
  });

const input = document.getElementById("searchInput");
const results = document.getElementById("results");

input.addEventListener("input", () => {
  const query = input.value.trim().toLowerCase();
  results.innerHTML = "";

  if (!loaded || query.length < 2) return;

  let count = 0;

  bible.forEach(book => {
    book.chapters.forEach((chapter, chapterIndex) => {
      chapter.forEach((verseText, verseIndex) => {

        if (verseText.toLowerCase().includes(query)) {

          const highlighted = verseText.replace(
            new RegExp(query, "gi"),
            match => `<span class="highlight">${match}</span>`
          );

          const div = document.createElement("div");
          div.className = "result";
          div.innerHTML = `
            <div class="reference">
              ${book.name} ${chapterIndex + 1}:${verseIndex + 1}
            </div>
            <div>${highlighted}</div>
          `;

          results.appendChild(div);
          count++;

          if (count >= 100) return;
        }
      });
    });
  });

  if (count === 0) {
    results.innerHTML = "<p>No verses found.</p>";
  }
});

