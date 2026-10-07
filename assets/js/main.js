// Theme toggle (persists in localStorage, defaults to system preference)
(function () {
  const root = document.documentElement;
  const stored = localStorage.getItem("theme");
  if (stored) root.setAttribute("data-theme", stored);

  const toggle = document.querySelector("[data-theme-toggle]");
  if (!toggle) return;

  const current = () =>
    root.getAttribute("data-theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  toggle.addEventListener("click", () => {
    const next = current() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
})();

// Schematic / PCB viewer tabs (project detail pages)
(function () {
  const tabs = document.querySelectorAll("[data-viewer-tab]");
  if (!tabs.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-viewer-tab");

      document
        .querySelectorAll("[data-viewer-tab]")
        .forEach((t) => t.classList.toggle("active", t === tab));

      document
        .querySelectorAll("[data-viewer-panel]")
        .forEach((p) =>
          p.classList.toggle("active", p.getAttribute("data-viewer-panel") === target)
        );
    });
  });
})();
