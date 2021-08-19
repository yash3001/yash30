import "./works.scss";

export default function Works({ menuOpen, setMenuOpen, dark }) {
  function check() {
    if (menuOpen) {
      setMenuOpen(false);
    }
  }
  return (
    <div
      className={"works " + (dark && " works-dark-mode ")}
      id="works"
      onClick={check}
    >
      <h1>Coming Soon !!!</h1>
    </div>
  );
}
