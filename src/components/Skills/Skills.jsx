import "./skills.scss";

export default function Skills({ menuOpen, setMenuOpen, dark }) {
  function check() {
    if (menuOpen) {
      setMenuOpen(false);
    }
  }
  return (
    <div
      className={"skills " + (dark && " skills-dark-mode ")}
      id="skills"
      onClick={check}
    >
      <h1>Coming Soon !!!</h1>
    </div>
  );
}
