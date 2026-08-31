import Topbar from "./components/Topbar/Topbar";
import About from "./components/About/About";
import Stats from "./components/Stats/Stats";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";
import Projects from "./components/Projects/Projects";
import Achievements from "./components/Achievements/Achievements";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import "./app.scss";
import { useState, useEffect } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const getMode = () => {
    const stored = localStorage.getItem("mode");
    return stored === null ? false : JSON.parse(stored);
  };

  const [dark, setMode] = useState(getMode());

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(dark));
    document.body.classList.toggle("theme-dark", dark);
    document.body.classList.toggle("theme-light", !dark);
  }, [dark]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <div className={"app " + (dark ? "theme-dark" : "theme-light")}>
      <Topbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        dark={dark}
        setMode={setMode}
      />
      <main className="sections">
        <About dark={dark} />
        <Stats />
        <Skills />
        <Works />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
