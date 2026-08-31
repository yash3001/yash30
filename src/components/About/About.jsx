import "./about.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import Zoom from "react-reveal/Zoom";
import { ExpandMoreRounded } from "@material-ui/icons";

export default function About({ menuOpen, setMenuOpen, dark }) {
  const textRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      init(textRef.current, {
        showCursor: true,
        backDelay: 1000,
        strings: [
          "systems software engineer.",
          "c/c++ developer.",
          "networking & security engineer.",
          "competitive programmer.",
          "gnu/linux enthusiast.",
        ],
      });
    }, 1500);
  }, []);

  function check() {
    if (menuOpen) {
      setMenuOpen(false);
    }
  }
  return (
    <div
      className={"about " + (dark && " about-dark-mode ")}
      id="about"
      onClick={check}
    >
      <Zoom cascade>
        <div className="illustration">
          <img
            src={
              dark
                ? require("./assets/coding_dark.png").default
                : require("./assets/coding_light.png").default
            }
            alt="illustration"
          />
        </div>
        <div className="wrapper">
          <h2>Hey there, I am</h2>
          <h1>Yash Chauhan</h1>
          <h3>Staff Software Engineer @ National Instruments</h3>
          <h3>
            I am a <span ref={textRef}></span>
          </h3>
        </div>
      </Zoom>
      <a href="#skills">
        <ExpandMoreRounded
          className="down-icon"
          style={{ color: dark ? "#0bceaf" : "crimson" }}
        />
      </a>
    </div>
  );
}
