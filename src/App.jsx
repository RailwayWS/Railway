import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import RailLine from "./components/RailLine.jsx";
import Process from "./components/Process.jsx";
import Solutions from "./components/Solutions.jsx";
import Services from "./components/Services.jsx";
import Work from "./components/Work.jsx";
import TechMarquee from "./components/TechMarquee.jsx";
import Team from "./components/Team.jsx";
import CtaBanner from "./components/CtaBanner.jsx";
import Quote from "./components/Quote.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import MobileNav from "./components/MobileNav.jsx";
import { initScrollAnimations } from "./scrollAnimations.js";

export default function App() {
    const [showRailLine, setShowRailLine] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setShowRailLine(window.innerWidth > 1200);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const cleanup = initScrollAnimations(document);
        return cleanup;
    }, []);

    return (
        <div className="app-shell">
            {showRailLine && <RailLine />}

            <Navbar />
            <main>
                <Hero />
                <Process />
                <Solutions />
                <Services />
                <Work />
                <TechMarquee />
                <Team />
                <CtaBanner />
                <Quote />
                <Contact />
            </main>
            <Footer />
            <MobileNav />
        </div>
    );
}
