// Book of Know Truth floating reader tools
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

  function makeLink(label, href) {
    const link = document.createElement("a");
    link.textContent = label;
    if (href) {
      link.href = href;
    } else {
      link.setAttribute("aria-disabled", "true");
    }
    return link;
  }

  function makeButton(label, id) {
    const button = document.createElement("button");
    button.type = "button";
    button.id = id;
    button.textContent = label;
    return button;
  }

  const nav = document.createElement("nav");
  nav.className = "book-reader-nav";
  nav.setAttribute("aria-label", "Floating book reader tools");

  const toggleTools = makeButton("Tools", "readerToolsToggle");
  toggleTools.className = "reader-tools-toggle";
  toggleTools.setAttribute("aria-expanded", "false");

  const bookSelect = document.createElement("select");
  bookSelect.id = "readerBookSelect";
  bookSelect.setAttribute("aria-label", "Choose book");

  for (let index = 1; index <= totalBooks; index += 1) {
    const option = document.createElement("option");
    option.value = bookHref(index);
    option.textContent = `Book ${index}`;
    if (index === currentBook) option.selected = true;
    bookSelect.appendChild(option);
  }

  nav.appendChild(toggleTools);
  nav.appendChild(bookSelect);
  nav.appendChild(makeLink("Previous", previousBook ? bookHref(previousBook) : null));
  nav.appendChild(makeLink("Next", nextBook ? bookHref(nextBook) : null));
  nav.appendChild(makeButton("Large Text", "readerLargeText"));
  nav.appendChild(makeButton("Plain Mode", "readerPlainMode"));
  nav.appendChild(makeButton("Print", "readerPrint"));
  nav.appendChild(makeLink("Library", "../know-truth.html"));

  document.body.insertBefore(nav, document.body.firstChild);

  toggleTools.addEventListener("click", function () {
    const isOpen = nav.classList.toggle("reader-tools-open");
    toggleTools.setAttribute("aria-expanded", String(isOpen));
    toggleTools.textContent = isOpen ? "Close" : "Tools";
  });

  bookSelect.addEventListener("change", function () {
    window.location.href = bookSelect.value;
  });

  document.getElementById("readerLargeText").addEventListener("click", function () {
    document.body.classList.toggle("reader-large-text");
  });

  document.getElementById("readerPlainMode").addEventListener("click", function () {
    document.body.classList.toggle("reader-plain-mode");
  });

  document.getElementById("readerPrint").addEventListener("click", function () {
    window.print();
  });
})();
