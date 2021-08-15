import Topbar from "./components/Topbar/Topbar";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Works from "./components/Works/Works";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Menu from "./components/Menu/Menu";
import "./app.scss";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Portfolio menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Works menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Testimonials menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Contact menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
    </div>
  );
}

export default App;
