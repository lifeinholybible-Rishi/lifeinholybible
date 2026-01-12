// Global KJV Bible Search Script

let bibleBooks = [];
const input = document.getElementById("searchInput");
const results = document.getElementById("results");

// Load the KJV Bible JSON
fetch("data/kjv.json")
  .then(response => response.json())
  .then(data => {
    console.log("Bible JSON loaded successfully");
    bibleBooks = data.books || [];
  })
  .catch(error => {
    console.error("Error loading Bible JSON:", error);
  });

// Search when user types
input.addEventListener("input", () => {
  const query = input.value.trim().toLowerCase();
  results.innerHTML = "";

  if (query.length < 2 || bibleBooks.length === 0) {
    return;
  }

  let found = 0;

  bibleBooks.forEach(book => {
    book.chapters.forEach((chapter, chapterIndex) => {
      chapter.forEach((verseText, verseIndex) => {

        if (verseText.toLowerCase().includes(query)) {

          const highlighted = verseText.replace(
            new RegExp(query, "gi"),
            match => `<span class="highlight">${match}</span>`
          );

          const verseDiv = document.createElement("div");
          verseDiv.className = "result";
          verseDiv.innerHTML = `
            <div class="reference">
              ${book.name} ${chapterIndex + 1}:${verseIndex + 1}
            </div>
            <div>${highlighted}</div>
          `;

          results.appendChild(verseDiv);
          found++;

          // Limit results for performance
          if (found >= 50) return;
        }
      });
    });
  });

  if (found === 0) {
    results.innerHTML = "<p>No verses found.</p>";
  }
});

