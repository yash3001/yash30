import "./portfolio.scss";

export default function Portfolio({ menuOpen, setMenuOpen }) {
  function check() {
    if (menuOpen) {
      setMenuOpen(false);
    }
  }
  return <div className="portfolio" id="portfolio" onClick={check}></div>;
}
