import "./Process.css";

const STATIONS = [
    {
        n: "01",
        name: "Plan",
        desc: "Requirements analysis and a clearly defined project scope, so nothing gets built twice.",
    },
    {
        n: "02",
        name: "Build",
        desc: "Design and development in tandem, with documentation written as we go, not after.",
    },
    {
        n: "03",
        name: "Test",
        desc: "Post-development QA plus dedicated SEO, accessibility, and performance passes.",
    },
    {
        n: "04",
        name: "Deploy",
        desc: "Domain setup, hosting, and hardening — your site ships secure from day one.",
    },
    {
        n: "05",
        name: "Maintain",
        desc: "Ongoing monitoring for uptime, performance regressions, and security patches.",
    },
];

export default function Process() {
    return (
        <section id="process" className="process">
            <div className="container">
                <p className="eyebrow reveal">on track</p>
                <h2 className="section-heading reveal">Our process</h2>
                <p className="section-lede reveal">
                    Five stops between a first conversation and a site
                    that&rsquo;s live, monitored, and yours to grow.
                </p>

                <ol className="process_list">
                    {STATIONS.map((s) => (
                        <li className="process_station reveal" key={s.n}>
                            <div className="process_index-wrapper">
                                <span className="process_index">{s.n}</span>
                            </div>
                            <div className="process_body">
                                <h3>{s.name}</h3>
                                <p>{s.desc}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
