import { useEffect, useState, useRef } from "react";
import "./MobileNav.css";

const TABS = [
    {
        id: "top",
        label: "Home",
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
            >
                <path
                    d="M4 11.5L12 4l8 7.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M6 10v9a1 1 0 0 0 1 1h3.5v-5.5h3V20H17a1 1 0 0 0 1-1v-9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },
    {
        id: "process",
        label: "Process",
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
            >
                <circle cx="5.5" cy="6" r="1.6" />
                <circle cx="5.5" cy="12" r="1.6" />
                <circle cx="5.5" cy="18" r="1.6" />
                <path d="M10 6h9M10 12h9M10 18h9" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: "solutions",
        label: "Solutions",
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
            >
                <path
                    d="M12 3l8 4.5-8 4.5-8-4.5L12 3z"
                    strokeLinejoin="round"
                />
                <path
                    d="M4 12l8 4.5 8-4.5M4 16.5L12 21l8-4.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },
    {
        id: "work",
        label: "Work",
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
            >
                <rect x="3.5" y="7.5" width="17" height="12" rx="2" />
                <path
                    d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5"
                    strokeLinecap="round"
                />
            </svg>
        ),
    },
    {
        id: "team",
        label: "Team",
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
            >
                <circle cx="9" cy="8.5" r="3" />
                <path
                    d="M3.5 19c.6-3.2 2.9-5 5.5-5s4.9 1.8 5.5 5"
                    strokeLinecap="round"
                />
                <circle cx="17" cy="9" r="2.3" />
                <path d="M15 19c.4-2.4 1.9-4 3.8-4.4" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: "contact",
        label: "Contact",
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
            >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path
                    d="M3 7l9 6 9-6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },
];

export default function MobileNav() {
    const [active, setActive] = useState("top");
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

    const navRef = useRef(null);
    const isClickScrolling = useRef(false);
    const scrollTimeout = useRef(null);

    // 1. Visually update the blue orb's position
    useEffect(() => {
        const updateIndicator = () => {
            if (!navRef.current) return;
            const activeElement = navRef.current.querySelector(".is-active");
            if (activeElement) {
                setIndicatorStyle({
                    left: activeElement.offsetLeft,
                    width: activeElement.offsetWidth,
                });
            }
        };

        // A tiny timeout ensures React has fully applied the .is-active class to the DOM
        const timer = setTimeout(updateIndicator, 10);
        window.addEventListener("resize", updateIndicator);

        return () => {
            clearTimeout(timer);
            window.removeEventListener("resize", updateIndicator);
        };
    }, [active]);

    // 2. The new Mathematical Scroll Spy
    useEffect(() => {
        const handleScroll = () => {
            // Ignore scroll events if the user just tapped a tab
            if (isClickScrolling.current) return;

            const sections = TABS.map((t) =>
                document.getElementById(t.id),
            ).filter(Boolean);
            if (!sections.length) return;

            // Draw a detection line 35% down the screen
            const triggerLine = window.innerHeight * 0.35;
            let currentSection = sections[0].id; // Default to the top section

            // Loop backwards through sections to find the last one that crossed the line
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                const rect = section.getBoundingClientRect();

                // If the top of the section has crossed the trigger line, it's the active one!
                if (rect.top <= triggerLine) {
                    currentSection = section.id;
                    break;
                }
            }

            // Failsafe: if we hit the absolute bottom of the page, force the last tab
            const isAtBottom =
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight - 50;
            if (isAtBottom) {
                currentSection = TABS[TABS.length - 1].id;
            }

            // Only trigger a React state update if the section actually changed
            setActive((prev) =>
                prev !== currentSection ? currentSection : prev,
            );
        };

        // Use { passive: true } so the scroll event doesn't cause browser lag
        window.addEventListener("scroll", handleScroll, { passive: true });

        // Fire it immediately once to set the correct state on load
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // 3. Handle physical taps on the tabs
    const handleTabClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            // Lock the scroll spy so it doesn't fight the smooth scroll
            isClickScrolling.current = true;
            setActive(id);
            element.scrollIntoView({ behavior: "smooth" });

            // Unlock the scroll spy after the scroll finishes
            if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
            scrollTimeout.current = setTimeout(() => {
                isClickScrolling.current = false;
            }, 800);
        }
    };

    return (
        <nav className="mobile-nav" aria-label="Section navigation">
            <div className="mobile-nav_bar" ref={navRef}>
                <div
                    className="mobile-nav_indicator"
                    style={{
                        transform: `translateX(${indicatorStyle.left}px)`,
                        width: `${indicatorStyle.width}px`,
                    }}
                >
                    <div className="mobile-nav_indicator-bg"></div>
                </div>

                {TABS.map((tab) => {
                    const isActive = active === tab.id;
                    return (
                        <a
                            key={tab.id}
                            href={`#${tab.id}`}
                            onClick={(e) => handleTabClick(e, tab.id)}
                            className={`mobile-nav_tab ${isActive ? "is-active" : ""}`}
                        >
                            <span className="mobile-nav_icon">{tab.icon}</span>
                            <span className="mobile-nav_label">
                                {tab.label}
                            </span>
                        </a>
                    );
                })}
            </div>
        </nav>
    );
}
