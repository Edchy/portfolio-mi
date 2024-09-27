
// välj alla sektioner som ska "observeras"
const sections = document.querySelectorAll(
  ".about-section, .work-section, .contact-section"
);

// välj alla länkar
const navLinks = {
  about: document.querySelector('nav a[href="#about"]'),
  work: document.querySelector('nav a[href="#work"]'),
  contact: document.querySelector('nav a[href="#contact"]'),
};

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5, // Triggar när 50% av target är synlig
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // hämta sections ID
    const id = entry.target.getAttribute("id");

    // hitta motsvarande länk
    const link = navLinks[id];

    if (entry.isIntersecting) {
      // Highlighta länken
      link.style.backgroundColor = "#0f172a";
      link.style.color = "#F1F5F9";

      // ta bort highlight från andra länkar
      Object.values(navLinks).forEach((navLink) => {
        if (navLink !== link) {
          navLink.style.backgroundColor = "transparent";
          navLink.style.color = "#0E172A";
        }
      });
    } else {
      // ta bort highlight om inte helt synlig
      link.style.backgroundColor = "transparent";
      link.style.color = "#0E172A";
    }
  });
}, options);

// observera alla sektioner
sections.forEach((section) => observer.observe(section));


