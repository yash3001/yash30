import Topbar from "./components/Topbar/Topbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Menu from "./components/Menu/Menu";
import "./app.scss";
import { useState, useEffect } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const getMode = () => {
    return JSON.parse(localStorage.getItem("mode")) || false;
  };

  const [dark, setMode] = useState(getMode());

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(dark));
  }, [dark]);

  return (
    <div className={"app " + (dark && " app-dark-mode ")}>
      <Topbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        dark={dark}
        setMode={setMode}
      />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} dark={dark} />
      <div className="sections">
        <About menuOpen={menuOpen} setMenuOpen={setMenuOpen} dark={dark} />
        <Skills menuOpen={menuOpen} setMenuOpen={setMenuOpen} dark={dark} />
        <Projects menuOpen={menuOpen} setMenuOpen={setMenuOpen} dark={dark} />
        <Works menuOpen={menuOpen} setMenuOpen={setMenuOpen} dark={dark} />
        <Contact menuOpen={menuOpen} setMenuOpen={setMenuOpen} dark={dark} />
      </div>
    </div>
  );
}

export default App;
