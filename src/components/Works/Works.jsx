import "./works.scss";

export default function Works({ menuOpen, setMenuOpen }) {
  function check() {
    if (menuOpen) {
      setMenuOpen(false);
    }
  }
  return (
    <div className="works" id="works" onClick={check}>
      <h1>Coming Soon !!!</h1>
    </div>
  );
}
