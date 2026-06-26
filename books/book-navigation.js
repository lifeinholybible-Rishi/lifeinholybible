// Book of Know Truth reader navigation helpers
(function () {
  const match = window.location.pathname.match(/book-(\d{2})\.html$/);
  if (!match) return;

  const totalBooks = 27;
  const currentBook = Number.parseInt(match[1], 10);
  const previousBook = currentBook > 1 ? currentBook - 1 : null;
  const nextBook = currentBook < totalBooks ? currentBook + 1 : null;

  function padded(value) {
    return String(value).padStart(2, "0");
  }

  function bookHref(value) {
    return `book-${padded(value)}.html`;
  }

  const nav = document.createElement("nav");
  nav.className = "book-reader-nav";
  nav.setAttribute("aria-label", "Book reader navigation");

  nav.innerHTML = `
    <a href="../home.html">Home</a>
    <a href="../know-truth.html">Library</a>
    <a ${previousBook ? `href="${bookHref(previousBook)}"` : "aria-disabled=\"true\""}>Previous</a>
    <a ${nextBook ? `href="${bookHref(nextBook)}"` : "aria-disabled=\"true\""}>Next</a>
    <button type="button" id="readerLargeText">Large Text</button>
    <button type="button" id="readerPlainMode">Plain Mode</button>
    <button type="button" id="readerPrint">Print</button>
  `;

  document.body.insertBefore(nav, document.body.firstChild);

  const largeText = document.getElementById("readerLargeText");
  const plainMode = document.getElementById("readerPlainMode");
  const printButton = document.getElementById("readerPrint");

  largeText.addEventListener("click", function () {
    document.body.classList.toggle("reader-large-text");
  });

  plainMode.addEventListener("click", function () {
    document.body.classList.toggle("reader-plain-mode");
  });

  printButton.addEventListener("click", function () {
    window.print();
  });
})();
