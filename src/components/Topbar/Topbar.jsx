import "./topbar.scss";
import { useEffect, useState } from "react";
import { Brightness7Rounded, Brightness4Rounded } from "@material-ui/icons";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export default function Topbar({ menuOpen, setMenuOpen, dark, setMode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={"topbar " + (scrolled ? "scrolled " : "")}>
      <nav className="topbar-inner">
        <a href="#about" className="logo" onClick={() => setMenuOpen(false)}>
          <span className="logo-prompt">&gt;</span>yash
          <span className="logo-cursor">_</span>
        </a>

        <ul className={"nav-links " + (menuOpen ? "open" : "")}>
          {links.map((link, i) => (
            <li key={link.id}>
              <a href={`#${link.id}`} onClick={() => setMenuOpen(false)}>
                <span className="nav-index">0{i + 1}.</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="topbar-actions">
          <button
            className="theme-toggle"
            onClick={() => setMode(!dark)}
            aria-label="Toggle theme"
          >
            {dark ? <Brightness7Rounded /> : <Brightness4Rounded />}
          </button>

          <button
            className={"hamburger " + (menuOpen ? "active" : "")}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
