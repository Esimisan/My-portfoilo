import Header from "./components/Header";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects.jsx";
import About from "./components/About";
import Contact from "./components/Contact";
import useScrollReveal from "./hooks/useScrollReveal.js";
import BackToTop from "./components/BackToTop.jsx";

// Temporary placeholders so the nav anchors have somewhere to land.
// Each real component will replace one of these.

export default function App() {
  useScrollReveal();
  return (
    <>
      <div className="page">
        <Header />
        <main>
          <Hero />
          <TechStack />
          <Projects />
          <About />
          <Contact />
        </main>
      </div>
      <BackToTop />
    </>
  );
}
