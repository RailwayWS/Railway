import "./CtaBanner.css";

export default function CtaBanner() {
    return (
        <section id="contact" className="cta-banner">
            <div className="container cta-banner_inner reveal-scale">
                <p className="eyebrow">on track web solutions</p>
                <h2 className="cta-banner_title">
                    Ready to get your site on track?
                </h2>
                <div className="cta-banner_buttons">
                    <a href="#quote" className="btn btn-primary">
                        Build a quote
                    </a>
                    <a href="#contact" className="btn btn-secondary">
                        Talk to us
                    </a>
                </div>
            </div>
        </section>
    );
}
