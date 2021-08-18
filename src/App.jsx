import Topbar from "./components/Topbar/Topbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Menu from "./components/Menu/Menu";
import "./app.scss";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setMode] = useState(false);

  return (
    <div className="app">
      <Topbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        dark={dark}
        setMode={setMode}
      />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} dark={dark} />
      <div className="sections">
        <About menuOpen={menuOpen} setMenuOpen={setMenuOpen} dark={dark} />
        <Skills menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Works menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Projects menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Contact menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
    </div>
  );
}

export default App;
