import "./skills.scss";

export default function Skills({ menuOpen, setMenuOpen }) {
  function check() {
    if (menuOpen) {
      setMenuOpen(false);
    }
  }
  return <div className="skills" id="skills" onClick={check}></div>;
}
