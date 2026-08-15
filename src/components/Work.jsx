import "./Work.css";

// Import your actual portfolio images
import kpsImg from "../images/kps.png";
import blueTradingImg from "../images/bluetrading.png";
import suideKoelkamersImg from "../images/suidekoelkamers.png";

const PROJECTS = [
    {
        tag: "Client project",
        name: "Keetmanshoop Privaatskool",
        desc: "A modern web presence for a private educational institution, designed to streamline communication between the school, parents, and students.",
        image: kpsImg,
    },
    {
        tag: "Client project",
        name: "Blue Trading",
        desc: "A high-performance corporate site for a trading enterprise, built with a focus on speed, reliability, and establishing digital trust.",
        image: blueTradingImg,
    },
    {
        tag: "Client project",
        name: "Suide Koelkamers",
        desc: "A clean, professional informational website built to advertise the company's services and establish a strong local online presence.",
        image: suideKoelkamersImg,
    },
];

export default function Work() {
    return (
        <section id="work" className="work">
            <div className="container">
                <p className="eyebrow reveal">selected work</p>
                <h2 className="section-heading reveal">Recent builds</h2>
                <p className="section-lede reveal">
                    A couple of the projects we&rsquo;ve shipped recently.
                </p>

                <div className="work_grid">
                    {PROJECTS.map((p) => (
                        <article className="work_item reveal" key={p.name}>
                            <div className="work_thumb" aria-hidden="true">
                                {/* Swapped the SVG for an actual image tag */}
                                <img
                                    src={p.image}
                                    alt={`${p.name} website preview`}
                                    className="work_thumb-img"
                                />
                            </div>
                            <div className="work_info">
                                <span className="pill-badge">{p.tag}</span>
                                <h3>{p.name}</h3>
                                <p>{p.desc}</p>
                                {/* Tech tags have been completely removed from here */}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
