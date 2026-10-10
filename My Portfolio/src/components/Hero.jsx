import "../styles/Hero.css";

const NAME = "Akra Esimisan";
const AVATAR_SRC = "/avatar.jpeg"; // put avatar.jpeg inside the public/ folder

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__inner">
        <div className="hero__avatar-wrap">
          <img
            className="hero__avatar"
            src={AVATAR_SRC}
            alt={`Portrait of ${NAME}`}
            width="96"
            height="96"
          />
          <span className="hero__chip">{NAME}</span>
        </div>

        <h1 className="hero__title">
          I am Esimisan Akra, I build responsive web apps and run molecular
          dynamics simulations.
        </h1>

        <a className="btn" href="#projects">
          View projects
          <svg
            className="btn__icon"
            viewBox="0 0 12 12"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M3 9L9 3M4 3h5v5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
