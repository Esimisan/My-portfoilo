import { useEffect } from "react";
import "../styles/Reveal.css";

// Everything below fades up once, the first time it scrolls into view.
const SELECTOR = [
  ".hero__inner",
  ".stack__item",
  ".projects__header",
  ".project-item",
  ".about__header",
  ".about__text",
  ".about__facts",
  ".contact__intro",
  ".contact__panel",
].join(",");

export default function useScrollReveal() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const items = document.querySelectorAll(SELECTOR);

    // With "reduce motion" on, the CSS turns the movement off and keeps only
    // a quick fade (see Reveal.css), so the hook still runs.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // also reveal anything already scrolled past (e.g. after a reload)
          const passed = entry.boundingClientRect.top < 0;
          if (entry.isIntersecting || passed) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" },
    );

    items.forEach((el) => {
      // small stagger between siblings (project rows, tech stack logos...)
      const index = Array.from(el.parentElement.children).indexOf(el);
      el.style.setProperty("--reveal-delay", `${Math.min(index, 6) * 70}ms`);
      el.classList.add("reveal");
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
      items.forEach((el) => {
        el.classList.remove("reveal", "is-visible");
        el.style.removeProperty("--reveal-delay");
      });
    };
  }, []);
}
