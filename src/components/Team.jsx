import "./Team.css";

const TEAM = [
    { name: "Gerhard", role: "Founder & Frontend Developer" },
    { name: "Janes", role: "Frontend Developer" },
    { name: "Ruben", role: "Backend Developer" },
    { name: "Dan", role: "Developer Operations" },
];

export default function Team() {
    return (
        <section id="team" className="team">
            <div className="container">
                <p className="eyebrow reveal">the team</p>
                <h2 className="section-heading reveal">Who&rsquo;s driving</h2>
                <p className="section-lede reveal">
                    A small team, which means the people who scope your project
                    are the same ones who build it.
                </p>

                <div className="team_grid" data-reveal-group>
                    {TEAM.map((member) => (
                        <div className="team_card" key={member.name}>
                            <span className="team_avatar" aria-hidden="true">
                                {/* Since we are mostly using first names now, 
                  we'll just grab the first letter for the avatar 
                */}
                                {member.name.charAt(0)}
                            </span>
                            <h3>{member.name}</h3>
                            <p>{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
