import "./TechMarquee.css";

const STACK = [
    "HTML",
    "CSS",
    "React",
    "Vite",
    "TypeScript",
    "JavaScript",
    "C#",
    "Cloudflare",
    "GitHub",
];

export default function TechMarquee() {
    // Quadruple the stack to ensure it never runs out of space on ultrawide screens
    const track = [...STACK, ...STACK, ...STACK, ...STACK];

    return (
        <section className="marquee" aria-label="Technologies we work with">
            <div
                className="marquee_edge marquee_edge-left"
                aria-hidden="true"
            />
            <div
                className="marquee_edge marquee_edge-right"
                aria-hidden="true"
            />
            <div className="marquee_track">
                {track.map((name, i) => (
                    <span className="marquee_item" key={`${name}-${i}`}>
                        {name}
                    </span>
                ))}
            </div>
        </section>
    );
}
