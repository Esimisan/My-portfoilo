import { useState } from "react";
import "../styles/Header.css";
import ThemeToggle from "./ThemeToggle.jsx";

const EMAIL = "folabiakra@gmail.com";

// href values must match the id of a section on the page
const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard API unavailable (e.g. insecure context): do nothing
    }
  }

  return (
    <header className="header">
      <div className="header__contact">
        <span className="header__email">{EMAIL}</span>
        <button type="button" className="pill" onClick={copyEmail}>
          {copied ? "Copied" : "Copy"}
        </button>
        <a className="pill" href="/Akra_Esimisan_Resume.pdf" download>
          CV
        </a>
        <ThemeToggle />
      </div>

      <nav className="header__nav" aria-label="Primary">
        <ul className="header__links">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a className="header__link" href={href}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
