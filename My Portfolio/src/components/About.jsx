import "../styles/About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about__header">
        <p className="about__eyebrow">About</p>
        <h2 className="about__heading">
          Building for the web, and for the lab.
        </h2>
      </div>

      <div className="about__text">
        <p>
          I'm a Computer Science graduate from the University of Benin, working
          across two technically different worlds: web development and
          computational drug discovery.
        </p>
        <p>
          On the web side, I build responsive, full-featured apps from scratch
          with HTML, CSS, JavaScript, React, Node.js, Express.js, and
          PostgreSQL. On the science side, I run molecular docking and molecular
          dynamics simulations with AutoDock Vina, GROMACS and CHARMM-GUI.
        </p>
        <p>
          Both fields reward the same habits: breaking big problems into steps,
          testing iteratively, and teaching myself whatever the next step
          demands. This portfolio is where the two meet.
        </p>
      </div>

      <dl className="about__facts">
        <div className="about__fact">
          <dt className="about__label">Education</dt>
          <dd className="about__value">
            BSc Computer Science, University of Benin
          </dd>
        </div>
        <div className="about__fact">
          <dt className="about__label">Web Development</dt>
          <dd className="about__value">
            HTML, CSS, JavaScript, React, Node.js, Express.js, PostgreSQL
          </dd>
        </div>
        <div className="about__fact">
          <dt className="about__label">Computational Chemistry</dt>
          <dd className="about__value">Molecular docking and dynamics</dd>
        </div>
      </dl>
    </section>
  );
}

export default About;
