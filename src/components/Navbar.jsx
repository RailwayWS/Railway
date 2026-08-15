import "./Navbar.css";
import { useTheme } from "../context/ThemeContext.jsx";

const LINKS = [
  { href: "#process", label: "Process" },
  { href: "#solutions", label: "Solutions" },
  { href: "#work", label: "Work" },
  { href: "#team", label: "Team" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="navbar">
      <div className="navbar_pill">
        <a href="#top" className="navbar_brand">
          <span className="navbar_avatar">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M8 8L4 12L8 16" stroke="#4fc3ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16 8L20 12L16 16" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="navbar_wordmark">Railway</span>
        </a>

        <nav className="navbar_links">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="navbar_link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar_actions">
          <button
            className="navbar_theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <svg
              className="icon-sun"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle cx="12" cy="12" r="4.2" />
              <path
                d="M12 2.5v2.4M12 19.1v2.4M4.6 4.6l1.7 1.7M17.7 17.7l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.6 19.4l1.7-1.7M17.7 6.3l1.7-1.7"
                strokeLinecap="round"
              />
            </svg>
            <svg
              className="icon-moon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.6 6.6 0 0 0 10.5 10.5z" strokeLinejoin="round" />
            </svg>
          </button>

          <a href="#quote" className="navbar_cta">
            Get a quote
          </a>
        </div>
      </div>
    </header>
  );
}
