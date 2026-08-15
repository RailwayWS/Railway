import "./Footer.css";

const LINKS = [
  { href: "#process", label: "Process" },
  { href: "#solutions", label: "Solutions" },
  { href: "#work", label: "Work" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer_row">
        <a href="#top" className="footer_logo">
          <span className="hero_bracket">&lt;/</span>
          Railway
          <span className="hero_bracket hero_bracket-close">&gt;</span>
        </a>

        <nav className="footer_links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <p className="footer_meta">
          &copy; {year} Railway Web Solutions — on track web solutions.
        </p>
      </div>
    </footer>
  );
}
