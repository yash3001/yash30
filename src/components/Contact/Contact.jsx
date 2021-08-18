import "./contact.scss";

export default function Contact({ menuOpen, setMenuOpen }) {
  function check() {
    if (menuOpen) {
      setMenuOpen(false);
    }
  }
  return (
    <div className="contact" id="contact" onClick={check}>
      <h1>Coming Soon !!!</h1>
    </div>
  );
}
