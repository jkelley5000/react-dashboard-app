import { useEffect, useState } from "react";

const THEMES = ["light", "warm", "ocean", "forest"] as const;
type ThemeName = (typeof THEMES)[number];

const STORAGE_KEY = "plushies-theme";

function isThemeName(value: string | null): value is ThemeName {
  return value !== null && THEMES.includes(value as ThemeName);
}

export default function ThemeSwitcher() {
  const [activeTheme, setActiveTheme] = useState<ThemeName>("light");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isThemeName(stored)) {
      setActiveTheme(stored);
      document.body.setAttribute("data-theme", stored);
    }
  }, []);

  const applyTheme = (theme: ThemeName) => {
    setActiveTheme(theme);
    document.body.setAttribute("data-theme", theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
    setIsOpen(false);
  };

  return (
    <div className="theme-switcher-shell">
      <button
        type="button"
        className="theme-switcher-toggle theme-button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls="theme-switcher-panel"
      >
        Themes
      </button>

      <section
        id="theme-switcher-panel"
        className={`theme-switcher theme-card theme-card-padded theme-shadow-md ${isOpen ? "theme-switcher-open" : ""}`}
        aria-label="Theme switcher"
      >
        <h2 className="theme-text-primary text-sm font-semibold tracking-wide uppercase">Theme</h2>

        <div className="theme-switcher-mobile">
          <span className="theme-switcher-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img" focusable="false">
              <path
                d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 2.2A7.8 7.8 0 0 1 19.8 12h-3.2a4.6 4.6 0 0 0-4.6-4.6Zm0 17.6A7.8 7.8 0 0 1 4.2 12h3.2a4.6 4.6 0 0 0 4.6 4.6Zm0-6.4a3.2 3.2 0 1 1 3.2-3.2a3.2 3.2 0 0 1-3.2 3.2Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <label className="theme-switcher-select-wrap">
            <span className="sr-only">Select theme</span>
            <select
              value={activeTheme}
              onChange={(event) => applyTheme(event.target.value as ThemeName)}
              className="theme-switcher-select"
              aria-label="Select theme"
            >
              {THEMES.map((theme) => (
                <option key={theme} value={theme}>
                  {theme}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="theme-switcher-grid">
          {THEMES.map((theme) => (
            <button
              key={theme}
              type="button"
              onClick={() => applyTheme(theme)}
              className={`theme-button ${activeTheme === theme ? "theme-button-active" : ""}`}
              aria-pressed={activeTheme === theme}
              style={{ textTransform: "capitalize" }}
            >
              {theme}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
