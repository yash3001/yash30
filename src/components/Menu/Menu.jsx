import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen, dark }) {
  return (
    <div
      className={
        "menu " + (menuOpen && "active ") + (dark && " menu-dark-mode")
      }
    >
      <ul>
        <li>
          <a href="#about" onClick={() => setMenuOpen(!menuOpen)}>
            About
          </a>
        </li>
        <li>
          <a href="#skills" onClick={() => setMenuOpen(!menuOpen)}>
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => setMenuOpen(!menuOpen)}>
            Projects
          </a>
        </li>
        <li>
          <a href="#works" onClick={() => setMenuOpen(!menuOpen)}>
            Works
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setMenuOpen(!menuOpen)}>
            Connect
          </a>
        </li>
      </ul>
    </div>
  );
}
