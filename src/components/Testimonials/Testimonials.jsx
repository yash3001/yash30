import "./testimonials.scss";

export default function Testimonials({ menuOpen, setMenuOpen }) {
  function check() {
    if (menuOpen) {
      setMenuOpen(false);
    }
  }
  return <div className="testimonials" id="testimonials" onClick={check}></div>;
}
