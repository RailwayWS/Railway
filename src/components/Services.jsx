import { useState } from "react";
import "./Services.css";

const SERVICES = [
  {
    id: "performance",
    name: "Performance",
    summary:
      "Fast, optimized websites with minimal loading times, tuned for a smooth experience on every device and network.",
    detail:
      "We lean on tools like Cloudflare for faster delivery and lower latency, then run speed tests to find and fix the slow spots — so nothing between a click and a loaded page goes to waste.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3.4" />
      </svg>
    ),
  },
  {
    id: "seo",
    name: "SEO",
    summary:
      "Search-optimized from the ground up, so your site is built to rank and be found, not patched for it later.",
    detail:
      "Meta structure, keyword strategy, and performance work hand in hand — with Cloudflare-backed speed improvements that search engines and visitors both notice.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="M20 20l-4.8-4.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "responsive",
    name: "Responsiveness",
    summary:
      "Sites that adapt to any screen, keeping function and feel consistent from a phone to a wide desktop.",
    detail:
      "Flexible grids and considered breakpoints mean layouts hold their shape everywhere, so engagement doesn't depend on which device someone opens your site on.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="4" width="12" height="9" rx="1.4" />
        <rect x="14.5" y="9" width="6.5" height="9" rx="1.2" />
        <path d="M7 17.5h4" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Services() {
  const [flipped, setFlipped] = useState(null);

  return (
    <section id="services" className="services">
      <div className="container">
        <p className="eyebrow reveal">what we provide</p>
        <h2 className="section-heading reveal">Built to run well</h2>
        <p className="section-lede reveal">
          Every build ships against the same three checkpoints — speed,
          visibility, and fit on every screen.
        </p>

        <div className="services_grid">
          {SERVICES.map((s) => {
            const isFlipped = flipped === s.id;
            return (
              <div className="service_card reveal" key={s.id}>
                <div
                  className={`service_flip ${isFlipped ? "is-flipped" : ""}`}
                >
                  <div className="service_face service_face-front">
                    <span className="service_icon">{s.icon}</span>
                    <h3>{s.name}</h3>
                    <p>{s.summary}</p>
                    <button
                      className="service_more"
                      onClick={() => setFlipped(s.id)}
                    >
                      More <span aria-hidden="true">&rarr;</span>
                    </button>
                  </div>
                  <div className="service_face service_face-back">
                    <h3>{s.name} in detail</h3>
                    <p>{s.detail}</p>
                    <button
                      className="service_more"
                      onClick={() => setFlipped(null)}
                    >
                      <span aria-hidden="true">&larr;</span> Less
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
