import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Central scroll-reveal system, built on GSAP + ScrollTrigger rather
 * than CSS animation-timeline. The CSS scroll-driven-animations spec
 * (animation-timeline: view()/scroll()) still isn't supported in
 * Firefox, so anything that needs to reliably animate on scroll in
 * every browser goes through here instead.
 *
 * Two conventions, applied to plain markup (nothing is hidden by
 * default in CSS — if this script fails to run for any reason, the
 * page is just static, never blank):
 *
 *  - `.reveal` / `.reveal-scale` on a single element: fades + slides
 *    (or scales) it in once, individually, as it enters the viewport.
 *  - `[data-reveal-group]` on a wrapper: staggers its direct children
 *    in together as a set, once, as the wrapper enters the viewport.
 */
export function initScrollAnimations(root = document) {
  const triggers = [];

  root.querySelectorAll(".reveal").forEach((el) => {
    const tween = gsap.fromTo(
      el,
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      }
    );
    if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
  });

  root.querySelectorAll(".reveal-scale").forEach((el) => {
    const tween = gsap.fromTo(
      el,
      { opacity: 0, scale: 0.94 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      }
    );
    if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
  });

  root.querySelectorAll("[data-reveal-group]").forEach((group) => {
    const items = Array.from(group.children);
    if (!items.length) return;
    const tween = gsap.fromTo(
      items,
      { opacity: 0, y: 34 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: group,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
    if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
  });

  return () => {
    triggers.forEach((t) => t.kill());
  };
}
