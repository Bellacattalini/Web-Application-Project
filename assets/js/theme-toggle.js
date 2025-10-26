// light/dark mode toggle //

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("themeToggle");
  const icon = document.getElementById("themeIcon");
  const KEY = "theme";
  const ICONS = {
    light: "images/moon.png", // default shown in light mode
    dark: "images/sun.png"    // shown in dark mode
  };

  // Load saved theme or system preference
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  let theme = localStorage.getItem(KEY) || (prefersDark ? "dark" : "light");

  // Function to apply the theme
  function applyTheme(current) {
    if (current === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      icon.src = ICONS.dark;
      btn.setAttribute("aria-pressed", "true");
      btn.setAttribute("aria-label", "Switch to light mode");
    } else {
      document.documentElement.removeAttribute("data-theme");
      icon.src = ICONS.light;
      btn.setAttribute("aria-pressed", "false");
      btn.setAttribute("aria-label", "Switch to dark mode");
    }
  }

  // Apply theme on load
  applyTheme(theme);

  // Toggle on click
  btn.addEventListener("click", () => {
    theme = theme === "dark" ? "light" : "dark";
    localStorage.setItem(KEY, theme);
    applyTheme(theme);
  });
});
