import { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./RailLine.css";

gsap.registerPlugin(ScrollTrigger);

const SEGMENTS = 6;
const START_OFFSET = 100; // Pushes the start of the line down 100px
const AMPLITUDE = 35; // Increased from 20 for wider/longer angles
const CORNER_SIZE = 35; // Matches AMPLITUDE to keep exactly 45-degrees
const MID_X = 45; // Centered in a new 90px wide viewBox

function buildCircuitPath(segments, amplitude, midX, totalHeight) {
    // Fallback to prevent errors before height is measured
    if (totalHeight <= 0)
        return `M ${midX} ${START_OFFSET} L ${midX} ${START_OFFSET + 10}`;

    // We subtract the start offset so the segments fit inside the remaining space
    const usableHeight = totalHeight - START_OFFSET;
    const segH = usableHeight / segments;

    // Start the path lower down!
    let d = `M ${midX} ${START_OFFSET}`;

    for (let i = 0; i < segments; i++) {
        const startY = START_OFFSET + i * segH;
        const offset = i % 2 === 0 ? amplitude : -amplitude;

        // Failsafe to ensure corners don't overlap if container is super short
        const safeCorner = Math.min(CORNER_SIZE, segH * 0.2);

        d += ` L ${midX} ${startY + segH * 0.25}`;
        d += ` L ${midX + offset} ${startY + segH * 0.25 + safeCorner}`;
        d += ` L ${midX + offset} ${startY + segH * 0.75}`;
        d += ` L ${midX} ${startY + segH * 0.75 + safeCorner}`;
        d += ` L ${midX} ${startY + segH}`;
    }
    return d;
}

export default function RailLine() {
    const containerRef = useRef(null);
    const pathRef = useRef(null);
    const headRef = useRef(null);

    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (!containerRef.current) return;

        const observer = new ResizeObserver((entries) => {
            for (let entry of entries) {
                setHeight(entry.contentRect.height);
            }
        });

        observer.observe(containerRef.current);

        return () => observer.disconnect();
    }, []);

    const d = useMemo(
        () => buildCircuitPath(SEGMENTS, AMPLITUDE, MID_X, height),
        [height],
    );

    useEffect(() => {
        const path = pathRef.current;
        const container = containerRef.current;
        const head = headRef.current;

        if (!path || !container || !head || height === 0) return;

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;

        const length = path.getTotalLength();
        path.style.strokeDasharray = String(length);

        const setProgress = (progress) => {
            const clamped = Math.min(1, Math.max(0, progress));
            path.style.strokeDashoffset = String(length * (1 - clamped));

            const pt = path.getPointAtLength(clamped * length);

            head.style.left = `${pt.x}px`;
            head.style.top = `${pt.y}px`;
        };

        if (prefersReducedMotion) {
            setProgress(1);
            head.style.opacity = "0";
            return;
        }

        setProgress(0);

        const trigger = ScrollTrigger.create({
            trigger: container.parentElement || document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.15,
            onUpdate: (self) => setProgress(self.progress),
        });

        return () => {
            trigger.kill();
        };
    }, [d, height]);

    if (height === 0) {
        return (
            <div ref={containerRef} className="rail-line" aria-hidden="true" />
        );
    }

    return (
        <div className="rail-line" aria-hidden="true" ref={containerRef}>
            <svg
                className="rail-line_svg"
                viewBox={`0 0 90 ${height}`} // Increased width to 90
            >
                <defs>
                    <linearGradient id="cyberGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--signal-blue)" />
                        <stop offset="50%" stopColor="var(--signal-blue-dim)" />
                        <stop offset="100%" stopColor="var(--signal-blue)" />
                    </linearGradient>
                </defs>

                <path d={d} className="rail-line_track" />

                <path
                    ref={pathRef}
                    d={d}
                    className="rail-line_progress"
                    stroke="url(#cyberGrad)"
                />
            </svg>

            <div ref={headRef} className="rail-line_head">
                <div className="rail-line_head-core"></div>
            </div>
        </div>
    );
}
