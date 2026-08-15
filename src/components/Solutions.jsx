import "./Solutions.css";

const SOLUTIONS = [
    {
        name: "Admin dashboards",
        desc: "Take full control of your platform. We build secure, bespoke admin interfaces that make managing your site's content and complex data fast, intuitive, and genuinely easy.",
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
            >
                <rect x="3.5" y="3.5" width="7.5" height="10" rx="1.6" />
                <rect x="13" y="3.5" width="7.5" height="6" rx="1.6" />
                <rect x="13" y="11.5" width="7.5" height="9" rx="1.6" />
                <rect x="3.5" y="15.5" width="7.5" height="5" rx="1.6" />
            </svg>
        ),
    },
    {
        name: "Custom eCommerce",
        desc: "A flawless shopping experience from the first click to the final delivery. We create beautiful, easy-to-use stores with safe checkouts and accurate stock, so your customers always leave happy.",
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
            >
                <path
                    d="M3.5 4h2l1.6 10.6a2 2 0 0 0 2 1.7h7.5a2 2 0 0 0 2-1.6l1.2-6.7H6.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <circle cx="9.5" cy="20" r="1.4" />
                <circle cx="16.5" cy="20" r="1.4" />
            </svg>
        ),
    },
];

export default function Solutions() {
    return (
        <section id="solutions" className="solutions">
            <div className="container">
                <p className="eyebrow reveal">specialized solutions</p>
                <h2 className="section-heading reveal">
                    We build systems, not just pages
                </h2>
                <p className="section-lede reveal">
                    Some projects need more than a marketing site. When they do,
                    this is where we go.
                </p>

                <div className="solutions_grid" data-reveal-group>
                    {SOLUTIONS.map((s) => (
                        <div className="solutions_card" key={s.name}>
                            <span className="solutions_icon">{s.icon}</span>
                            <h3>{s.name}</h3>
                            <p>{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
