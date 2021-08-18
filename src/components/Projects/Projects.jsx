import "./projects.scss";

export default function Projects({ menuOpen, setMenuOpen }) {
  function check() {
    if (menuOpen) {
      setMenuOpen(false);
    }
  }
  return (
    <div className="projects" id="projects" onClick={check}>
      <h1>Coming Soon !!!</h1>
    </div>
  );
}
