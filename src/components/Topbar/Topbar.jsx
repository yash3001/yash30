import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen, dark, setMode }) {
  return (
    <div
      className={
        " topbar " + (menuOpen && " active ") + (dark && " topbar-dark-mode ")
      }
    >
      <div className="wrapper">
        <div className="left">
          <a href="#about" className="logo">
            yash.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+91 9971514997</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>yashchauhan197@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <label className="switch">
            <input type="checkbox" onChange={() => setMode(!dark)} />
            <span className="slider round"></span>
          </label>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
