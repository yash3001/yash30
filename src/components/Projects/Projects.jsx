import "./projects.scss";

export default function Projects({ menuOpen, setMenuOpen, dark }) {
  function check() {
    if (menuOpen) {
      setMenuOpen(false);
    }
  }
  return (
    <div
      className={"projects " + (dark && " projects-dark-mode ")}
      id="projects"
      onClick={check}
    >
      <h1>Coming Soon !!!</h1>
    </div>
  );
}
