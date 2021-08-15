import "./intro.scss";

export default function Intro({ menuOpen, setMenuOpen }) {
  function check() {
    if (menuOpen) {
      setMenuOpen(false);
    }
  }
  return <div className="intro" id="intro" onClick={check}></div>;
}
