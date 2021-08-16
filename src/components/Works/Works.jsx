import "./works.scss";

export default function Works({ menuOpen, setMenuOpen }) {
  function check() {
    if (menuOpen) {
      setMenuOpen(false);
    }
  }
  return <div className="works" id="works" onClick={check}></div>;
}
