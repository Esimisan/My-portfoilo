import { useState } from "react";
import "../styles/Contact.css";

const EMAIL = "folabiakra@gmail.com";

function GitHubIcon() {
  return (
    <svg
      className="contact__icon"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      className="contact__icon"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      className="contact__icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </svg>
  );
}

const socials = [
  {
    id: "github",
    label: "github.com/Esimisan",
    href: "https://github.com/Esimisan",
    Icon: GitHubIcon,
  },
  {
    id: "linkedin",
    label: "linkedin.com/in/akra-esimisan-1b31a13ab",
    href: "https://www.linkedin.com/in/akra-esimisan-1b31a13ab",
    Icon: LinkedInIcon,
  },
];

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  // Opens the visitor's email app with everything filled in.
  function handleSubmit(event) {
    event.preventDefault();

    const subject = form.subject.trim() || `Message from ${form.name.trim()}`;
    const body = `${form.message.trim()}\n\n${form.name.trim()} (${form.email.trim()})`;

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setStatus("Opening your email app…");
  }

  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        {/* ---- Left: intro ---- */}
        <div className="contact__intro">
          <p className="contact__eyebrow">Get in touch</p>
          <h2 className="contact__heading">Let's work together.</h2>
          <p className="contact__lead">
            Have a project in mind, a question, or just want to say hello? Fill
            in the form and I'll get back to you as soon as possible.
          </p>

          <a className="contact__email" href={`mailto:${EMAIL}`}>
            <MailIcon />
            {EMAIL}
          </a>

          <p className="contact__status-pill">
            <span className="contact__dot" aria-hidden="true" />
            Available for new projects
          </p>
        </div>

        {/* ---- Right: form + social links ---- */}
        <div className="contact__panel">
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__row">
              <div className="contact__field">
                <label className="contact__label" htmlFor="contact-name">
                  Full name
                </label>
                <input
                  className="contact__input"
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact__field">
                <label className="contact__label" htmlFor="contact-email">
                  Email address
                </label>
                <input
                  className="contact__input"
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="contact-subject">
                Subject
              </label>
              <input
                className="contact__input"
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="Project inquiry, collaboration…"
                value={form.subject}
                onChange={handleChange}
              />
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="contact-message">
                Message
              </label>
              <textarea
                className="contact__input contact__textarea"
                id="contact-message"
                name="message"
                placeholder="Tell me about your project or idea…"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button className="contact__submit" type="submit">
              Send message <span aria-hidden="true">→</span>
            </button>

            <p className="contact__status" role="status" aria-live="polite">
              {status}
            </p>
          </form>

          <ul className="contact__socials">
            {socials.map(({ id, label, href, Icon }) => (
              <li key={id}>
                <a
                  className="contact__social"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
