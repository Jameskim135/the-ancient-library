
/* ==========================================
   THE ANCIENT LIBRARY
   Complete library JavaScript
   Search, categories, book cards and links
========================================== */

document.addEventListener("DOMContentLoaded", () => {
  // Main page elements
  const searchForm = document.querySelector("#search-form");
  const searchInput = document.querySelector("#book-search");
  const emptyState = document.querySelector("#empty-state");

  const categoryChips = [
    ...document.querySelectorAll(".category-chip")
  ];

  // Category names used by the HTML and book catalog
  const categoryMap = {
    "#ancient": "ancient",
    "#knowledge": "knowledge",
    "#fiction": "fiction",
    "#romance": "romance"
  };

  // ==========================================
  // BOOK CATALOG
  // Add new books inside this array.
  // Every URL should lead to a real book edition.
  // ==========================================

  const libraryBooks = [
    {
      title: "The Odyssey",
      author: "Homer",
      category: "ancient",
      description: "An ancient Greek epic about Odysseus and his journey home.",
      url: "https://www.gutenberg.org/ebooks/1727"
    },
    {
      title: "The Iliad",
      author: "Homer",
      category: "ancient",
      description: "An epic of the Trojan War, honor, and the human cost of conflict.",
      url: "https://www.gutenberg.org/ebooks/6130"
    },
    {
      title: "The Art of War",
      author: "Sun Tzu",
      category: "knowledge",
      description: "An influential Chinese treatise on strategy and warfare.",
      url: "https://www.gutenberg.org/ebooks/132"
    },
    {
      title: "Meditations",
      author: "Marcus Aurelius",
      category: "knowledge",
      description: "Personal reflections on Stoicism, virtue, and self-discipline.",
      url: "https://www.gutenberg.org/ebooks/2680"
    },
    {
      title: "Tao Te Ching",
      author: "Laozi",
      category: "knowledge",
      description: "A foundational work of Chinese philosophy.",
      url: "https://www.gutenberg.org/ebooks/216"
    },
    {
      title: "The Apology of Socrates",
      author: "Plato",
      category: "knowledge",
      description: "Plato's account of Socrates defending his life and philosophy.",
      url: "https://www.gutenberg.org/ebooks/1656"
    },
    {
      title: "The Prince",
      author: "Niccolò Machiavelli",
      category: "knowledge",
      description: "A classic work on political power, leadership, and government.",
      url: "https://www.gutenberg.org/ebooks/1232"
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      category: "romance",
      description: "A classic novel of love, social expectations, and first impressions.",
      url: "https://www.gutenberg.org/ebooks/1342"
    },
    {
      title: "Jane Eyre",
      author: "Charlotte Brontë",
      category: "romance",
      description: "A Gothic novel exploring love, independence, and identity.",
      url: "https://www.gutenberg.org/ebooks/1260"
    },
    {
      title: "Frankenstein",
      author: "Mary Shelley",
      category: "fiction",
      description: "A Gothic novel about creation, responsibility, and humanity.",
      url: "https://www.gutenberg.org/ebooks/84"
    },
    {
      title: "Dracula",
      author: "Bram Stoker",
      category: "fiction",
      description: "A Gothic horror novel told through letters and journals.",
      url: "https://www.gutenberg.org/ebooks/345"
    },
    {
      title: "Alice's Adventures in Wonderland",
      author: "Lewis Carroll",
      category: "fiction",
      description: "A fantastical adventure in a world of curious characters.",
      url: "https://www.gutenberg.org/ebooks/11"
    },
    {
      title: "The Time Machine",
      author: "H. G. Wells",
      category: "fiction",
      description: "A pioneering science-fiction journey into the distant future.",
      url: "https://www.gutenberg.org/ebooks/35"
    },
    {
      title: "The Picture of Dorian Gray",
      author: "Oscar Wilde",
      category: "fiction",
      description: "A novel about beauty, morality, and corruption.",
      url: "https://www.gutenberg.org/ebooks/174"
    }

    /*
      ==========================================
      TEMPLATE FOR YOUR NEXT BOOK

      Copy this object, remove the comment markers,
      and place it after another book object.
      Remember to add a comma after the previous
      object and use a real book URL.

      {
        title: "Your Next Book",
        author: "Author or Translator",
        category: "ancient",
        description: "A short introduction to the work.",
        url: "https://example.com/actual-reading-edition"
      }
      ==========================================
    */
  ];

  // ==========================================
  // LINKS FOR BOOKS ALREADY IN index.html
  // ==========================================

  const existingBookLinks = {
    "The Egyptian Book of the Dead":
      "https://www.gutenberg.org/ebooks/7145",

    "The Book of Enoch":
      "https://www.gutenberg.org/ebooks/77935",

    "The Epic of Gilgamesh":
      "https://www.gutenberg.org/ebooks/11000",

    "The Republic":
      "https://www.gutenberg.org/ebooks/1497",

    "Frankenstein":
      "https://www.gutenberg.org/ebooks/84",

    "Dracula":
      "https://www.gutenberg.org/ebooks/345",

    "Alice's Adventures in Wonderland":
      "https://www.gutenberg.org/ebooks/11"
  };

  // ==========================================
  // CREATE BOOK CARDS AUTOMATICALLY
  // ==========================================

  function createBookCard(book) {
    const card = document.createElement("article");
    card.className = "book-card";

    card.dataset.title = book.title;
    card.dataset.author = book.author;
    card.dataset.category = book.category;
    card.dataset.description = book.description;
    card.dataset.url = book.url;

    // Book cover
    const cover = document.createElement("div");
    cover.className = "book-cover";

    cover.style.background =
      "radial-gradient(circle, #665337, #20251d 75%)";

    const coverLabel = document.createElement("span");
    coverLabel.className = "cover-label";
    coverLabel.textContent = book.category.toUpperCase();

    const coverSymbol = document.createElement("span");
    coverSymbol.className = "cover-symbol";
    coverSymbol.textContent = "✧";

    const coverTitle = document.createElement("h3");
    coverTitle.textContent = book.title.toUpperCase();

    const coverFooter = document.createElement("span");
    coverFooter.className = "cover-footer";
    coverFooter.textContent = book.author.toUpperCase();

    cover.append(
      coverLabel,
      coverSymbol,
      coverTitle,
      coverFooter
    );

    // Book information
    const info = document.createElement("div");
    info.className = "book-info";

    const category = document.createElement("span");
    category.className = "book-category";
    category.textContent = book.category.toUpperCase();

    const title = document.createElement("h3");
    title.textContent = book.title;

    const author = document.createElement("p");
    author.textContent = book.author;

    // Correct JavaScript dataset syntax
    const button = document.createElement("button");
    button.type = "button";
    button.className = "read-button";
    button.dataset.openBook = "";
    button.textContent = "Read the text ↗";

    info.append(category, title, author, button);
    card.append(cover, info);

    return card;
  }

  // ==========================================
  // ADD BOOKS TO THE EXISTING PAGE
  // ==========================================

  const bookCards = [
    ...document.querySelectorAll(".book-card")
  ];

  function getCategoryGrid(category) {
    // Reuse the grids already in your HTML.
    const existingSectionIds = {
      ancient: "ancient",
      fiction: "fiction"
    };

    if (existingSectionIds[category]) {
      const existingSection = document.getElementById(
        existingSectionIds[category]
      );

      const existingGrid =
        existingSection?.querySelector(".book-grid");

      if (existingGrid) {
        return existingGrid;
      }
    }

    // Reuse generated category sections if they exist.
    const sectionIds = {
      knowledge: "knowledge-books",
      romance: "romance-books"
    };

    const sectionId = sectionIds[category];

    let section = document.getElementById(sectionId);

    if (section) {
      return section.querySelector(".book-grid");
    }

    // Create a section for a category that needs one.
    section = document.createElement("section");
    section.id = sectionId;
    section.className = "book-section";

    const heading = document.createElement("div");
    heading.className = "section-heading";

    const headingContent = document.createElement("div");

    const eyebrow = document.createElement("p");
    eyebrow.className = "eyebrow";
    eyebrow.textContent = "EXPLORE THE COLLECTION";

    const title = document.createElement("h2");

    title.textContent = {
      knowledge: "Philosophy & Wisdom",
      romance: "Love & Romance"
    }[category];

    headingContent.append(eyebrow, title);
    heading.appendChild(headingContent);

    const grid = document.createElement("div");
    grid.className = "book-grid";

    section.append(heading, grid);

    if (category === "knowledge") {
      const knowledgeSection =
        document.querySelector("#knowledge");

      knowledgeSection.insertAdjacentElement(
        "afterend",
        section
      );
    } else if (category === "romance") {
      const romanceSection =
        document.querySelector("#romance");

      romanceSection.insertAdjacentElement(
        "beforebegin",
        section
      );
    }

    return grid;
  }

  libraryBooks.forEach((book) => {
    const grid = getCategoryGrid(book.category);

    if (!grid) {
      console.warn(
        `Could not find a display area for ${book.category}.`
      );
      return;
    }

    const card = createBookCard(book);
    grid.appendChild(card);
    bookCards.push(card);
  });

  // ==========================================
  // OPEN ACTUAL READING WEBSITES
  // ==========================================

  function getBookUrl(card) {
    return (
      card.dataset.url ||
      existingBookLinks[card.dataset.title] ||
      null
    );
  }

  // Event delegation works for both existing and new cards.
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-open-book]");

    if (!button) return;

    const card = button.closest(".book-card");

    if (!card) return;

    const url = getBookUrl(card);

    if (!url) {
      alert(
        "A reading link has not been added for this book yet."
      );
      return;
    }

    // Open the source in a separate tab.
    window.open(url, "_blank", "noopener,noreferrer");
  });

  // ==========================================
  // SEARCH THE LIBRARY
  // ==========================================

  let activeCategory = "all";

  function normalize(value) {
    return (value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
  }

  function updateLibrary() {
    const query = normalize(searchInput.value);
    let visibleCount = 0;

    bookCards.forEach((card) => {
      const searchableText = normalize([
        card.dataset.title,
        card.dataset.author,
        card.dataset.category,
        card.dataset.description,
        card.textContent
      ].join(" "));

      const matchesQuery =
        !query || searchableText.includes(query);

      const matchesCategory =
        activeCategory === "all" ||
        card.dataset.category === activeCategory;

      const visible = matchesQuery && matchesCategory;

      card.hidden = !visible;

      if (visible) {
        visibleCount++;
      }
    });

    emptyState.hidden = visibleCount > 0;

    if (visibleCount === 0) {
      emptyState.textContent =
        "No books found. Try another title, author, or subject.";
    }
  }

  // Search while typing.
  searchInput.addEventListener("input", updateLibrary);

  // Search button submission.
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    updateLibrary();

    document.querySelector("#library").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });

  // ==========================================
  // CATEGORY FILTERS
  // ==========================================

  categoryChips.forEach((chip) => {
    chip.addEventListener("click", (event) => {
      event.preventDefault();

      activeCategory =
        categoryMap[chip.getAttribute("href")] || "all";

      categoryChips.forEach((item) => {
        const isActive =
          categoryMap[item.getAttribute("href")] ===
          activeCategory;

        item.classList.toggle("active", isActive);

        if (isActive) {
          item.setAttribute("aria-current", "true");
        } else {
          item.removeAttribute("aria-current");
        }
      });

      updateLibrary();

      document.querySelector("#library").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });

  // Initialize the library.
  updateLibrary();
});
