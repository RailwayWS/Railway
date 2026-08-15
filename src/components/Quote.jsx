import "./Quote.css";

const INTERESTS = [
    { id: "frontend", label: "Front-end development" },
    { id: "backend", label: "Back-end / API development" },
    { id: "fullstack", label: "Full-stack web application" },
    { id: "ecommerce", label: "Custom eCommerce" },
    { id: "dashboards", label: "Admin Dashboards / Client Portals" },
];

const CATEGORIES = [
    "Marketing",
    "Engineering",
    "Botany",
    "Medical",
    "Architecture",
    "Education",
    "Event Planning",
    "E-commerce",
    "Finance",
    "Real Estate",
    "Non-profit / NGO",
    "Legal Services",
    "Travel & Tourism",
    "Fitness & Wellness",
    "Entertainment / Media",
    "Technology / IT",
    "Food & Beverage",
    "Art & Design",
    "Construction",
    "Automotive",
];

export default function Quote() {
    return (
        <section id="quote" className="quote">
            <div className="container">
                <p className="eyebrow reveal">scope it out</p>
                <h2 className="section-heading reveal">Build a quote</h2>
                <p className="section-lede reveal">
                    Tell us what you need and a little about the business.
                    We&rsquo;ll come back with a scoped estimate, not a guess.
                </p>

                <form
                    className="quote_form reveal"
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

                    <div className="quote_grid">
                        <div className="quote_col">
                            <p className="quote_label">
                                I&rsquo;m interested in
                            </p>
                            <div className="quote_checks">
                                {INTERESTS.map((i) => (
                                    <label className="check" key={i.id}>
                                        <input
                                            type="checkbox"
                                            name="Interest"
                                            value={i.id}
                                        />
                                        <span
                                            className="check_mark"
                                            aria-hidden="true"
                                        />
                                        {i.label}
                                    </label>
                                ))}
                            </div>

                            <label className="field" htmlFor="requests">
                                <span className="field_label">
                                    Special requests
                                </span>
                                <textarea
                                    id="requests"
                                    name="Special Requests"
                                    placeholder="Anything specific we should know up front?"
                                    rows={5}
                                />
                            </label>
                        </div>

                        <div className="quote_col">
                            <label className="field" htmlFor="category">
                                <span className="field_label">Industry</span>
                                <select
                                    id="category"
                                    name="category"
                                    required
                                    defaultValue=""
                                >
                                    <option value="" disabled>
                                        Select a category
                                    </option>
                                    {CATEGORIES.map((c) => (
                                        <option key={c} value={c.toLowerCase()}>
                                            {c}
                                        </option>
                                    ))}
                                </select>
                            </label>

                            <label className="field" htmlFor="q-name">
                                <span className="field_label">
                                    Name and surname
                                </span>
                                <input
                                    id="q-name"
                                    type="text"
                                    name="name"
                                    placeholder="Jane Smith"
                                    required
                                />
                            </label>

                            <label className="field" htmlFor="q-phone">
                                <span className="field_label">
                                    Cellphone number
                                </span>
                                <input
                                    id="q-phone"
                                    type="tel"
                                    name="cellphone"
                                    placeholder="082 000 0000"
                                    required
                                />
                            </label>

                            <label className="field" htmlFor="q-email">
                                <span className="field_label">
                                    Email address
                                </span>
                                <input
                                    id="q-email"
                                    type="email"
                                    name="email"
                                    placeholder="me@company.com"
                                    required
                                />
                            </label>

                            <button
                                type="submit"
                                className="btn btn-primary quote_submit"
                            >
                                Submit request
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}
