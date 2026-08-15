import "./Contact.css";

export default function Contact() {
    return (
        <section className="contact">
            <div className="container contact_grid">
                <div className="contact_intro reveal">
                    <p className="eyebrow">say hello</p>
                    <h2 className="section-heading">Get in touch</h2>
                    <p className="section-lede" style={{ marginBottom: 0 }}>
                        Have a project in mind, or just want a second opinion on
                        your current site? Send a message and we&rsquo;ll reply
                        personally, usually within a day.
                    </p>
                </div>

                <form
                    className="contact_form reveal"
                    action="https://api.web3forms.com/submit"
                    method="POST"
                >
                    <input
                        type="hidden"
                        name="access_key"
                        value="31154c19-76f9-4b6b-a4ba-8aa9f8ac3a6c"
                    />
                    <input
                        type="checkbox"
                        name="botcheck"
                        className="visually-hidden"
                        tabIndex={-1}
                        autoComplete="off"
                    />

                    <label className="field" htmlFor="c-name">
                        <span className="field_label">Name</span>
                        <input
                            id="c-name"
                            type="text"
                            name="name"
                            placeholder="Your full name"
                            required
                        />
                    </label>

                    <label className="field" htmlFor="c-email">
                        <span className="field_label">Email</span>
                        <input
                            id="c-email"
                            type="email"
                            name="email"
                            placeholder="me@company.com"
                            required
                        />
                    </label>

                    <label className="field" htmlFor="c-message">
                        <span className="field_label">Message</span>
                        <textarea
                            id="c-message"
                            name="message"
                            placeholder="Your message..."
                            rows={5}
                        />
                    </label>

                    <button
                        type="submit"
                        className="btn btn-primary contact_submit"
                    >
                        Send message
                    </button>
                </form>
            </div>
        </section>
    );
}
