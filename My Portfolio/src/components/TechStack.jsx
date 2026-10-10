import { TECH_STACK } from "../data/techStack";
import "../styles/TechStack.css";

export default function TechStack() {
  return (
    <section
      id="stack"
      className="stack under-hero"
      aria-label="Technology stack"
    >
      <ul className="stack__list">
        {TECH_STACK.map(({ name, path }) => (
          <li key={name} className="stack__item">
            <svg
              className="stack__logo"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d={path} fill="currentColor" />
            </svg>
            <span className="stack__name">{name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
