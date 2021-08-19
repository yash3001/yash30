import "./contact.scss";

export default function Contact({ menuOpen, setMenuOpen, dark }) {
  function check() {
    if (menuOpen) {
      setMenuOpen(false);
    }
  }
  return (
    <div
      className={"contact " + (dark && " contact-dark-mode ")}
      id="contact"
      onClick={check}
    >
      <h1>Coming Soon !!!</h1>
    </div>
  );
}
