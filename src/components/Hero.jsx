import "./Hero.css";

const TAGS = [
  "Front-end development",
  "eCommerce builds",
  "SEO from the ground up",
  "Performance-tuned",
];

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero_grid">
        <div className="hero_content">
          <p className="eyebrow reveal">on track web solutions</p>
          <h1 className="hero_title reveal">
            <span className="hero_bracket">&lt;</span>
            Railway Web Solutions
            <span className="hero_bracket hero_bracket-close">/&gt;</span>
          </h1>
          <p className="hero_description reveal">
            We design and build sleek, modern websites that fit your brand and
            your goals. Whether you&rsquo;re starting fresh or replacing
            something dated, we ship responsive, fast, user-friendly sites
            that help you connect and grow online.
          </p>
          <div className="hero_buttons reveal">
            <a href="#contact" className="btn btn-primary">
              Contact us
            </a>
            <a href="#quote" className="btn btn-secondary">
              Get a quote
            </a>
          </div>
          <ul className="hero_tags reveal">
            {TAGS.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>

        <div className="hero_panel reveal-scale" aria-hidden="true">
          <div className="hero_panel-bar">
            <span className="dot dot-a" />
            <span className="dot dot-b" />
            <span className="dot dot-c" />
            <span className="hero_panel-title">growth.jsx</span>
          </div>
          <div className="hero_panel-body">
            <p><span className="tok-key">export default function</span> <span className="tok-fn">YourWebsite</span><span className="tok-punc">()</span> <span className="tok-punc">{'{'}</span></p>
            <p className="indent-1"><span className="tok-key">return</span> <span className="tok-punc">(</span></p>
            <p className="indent-2">&lt;<span className="tok-tag">Site</span></p>
            <p className="indent-3"><span className="tok-attr">loadsFast</span></p>
            <p className="indent-3"><span className="tok-attr">ranksHigher</span></p>
            <p className="indent-3"><span className="tok-attr">convertsVisitors</span></p>
            <p className="indent-3"><span className="tok-attr">builtBy</span>=<span className="tok-str">"Railway"</span></p>
            <p className="indent-2">/&gt;</p>
            <p className="indent-1"><span className="tok-punc">)</span></p>
            <p>
              <span className="tok-punc">{'}'}</span>
              <span className="hero_cursor" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
