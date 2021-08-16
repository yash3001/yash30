import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro({ menuOpen, setMenuOpen }) {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: [
        "competitive programmer.",
        "full stack developer.",
        "python developer.",
        "gnu/linux enthusiast.",
        "content creator.",
        "valorant player.",
      ],
    });
  }, []);

  function check() {
    if (menuOpen) {
      setMenuOpen(false);
    }
  }
  return (
    <div className="intro" id="intro" onClick={check}>
      <div className="wrapper">
        <h2>Hey there, I am</h2>
        <h1>Yash Chauhan</h1>
        <h3>CSE Student at The National Institute of Engineering, Mysore</h3>
        <h3>
          I am a <span ref={textRef}></span>
        </h3>
      </div>
      <a href="#portfolio">
        <img src="assets/down_arrow.png" alt="" />
      </a>
    </div>
  );
}
