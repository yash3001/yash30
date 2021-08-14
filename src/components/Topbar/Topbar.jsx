import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
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
          <div className="hamburger">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
