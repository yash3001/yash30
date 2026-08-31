import "./about.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import {
  GitHub,
  LinkedIn,
  Mail,
  KeyboardArrowDownRounded,
} from "@material-ui/icons";

export default function About({ dark }) {
  const textRef = useRef();

  useEffect(() => {
    if (!textRef.current) return;
    init(textRef.current, {
      showCursor: true,
      backDelay: 1400,
      backSpeed: 30,
      strings: [
        "secure networking layers.",
        "systems in C / C++.",
        "multithreaded systems.",
        "high-performance caches.",
        "things that scale.",
      ],
    });
  }, []);

  return (
    <section className="about" id="about">
      <div className="about-inner">
        <div className="about-content">
          <p className="about-hi">
            <span className="prompt">$</span> hi, my name is
          </p>
          <h1 className="about-name">Yash Chauhan.</h1>
          <h2 className="about-role">
            I build <span className="typed" ref={textRef}></span>
          </h2>
          <p className="about-desc">
            Staff Software Engineer in <strong>LabVIEW</strong> team at{" "}
            <strong>National Instruments</strong>. I work close to the metal:
            networking, security and multithreaded systems in C/C++, turning
            hard problems into fast, reliable software.
          </p>

          <div className="about-cta">
            <a href="#projects" className="btn btn--primary">
              View my work
            </a>
            <a
              href="https://drive.google.com/file/d/1GbLAK-V9oxYhg939tjUUn8hv7_ThtCZl/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
            >
              Download Résumé
            </a>
          </div>

          <div className="about-socials">
            <a
              href="https://github.com/yash3001"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHub />
            </a>
            <a
              href="https://www.linkedin.com/in/yashchauhan30/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedIn />
            </a>
            <a href="mailto:yashchauhan197@gmail.com" aria-label="Email">
              <Mail />
            </a>
          </div>
        </div>

        <div className="about-visual">
          <div className="visual-glow"></div>
          <div className="terminal-card">
            <div className="terminal-bar">
              <span className="dot dot--red"></span>
              <span className="dot dot--amber"></span>
              <span className="dot dot--green"></span>
              <span className="terminal-title">yash@ni: ~/whoami</span>
            </div>
            <pre className="terminal-body">
              <code>
                <span className="c-key">const</span>{" "}
                <span className="c-var">engineer</span> = {"{"}
                {"\n"} role:{" "}
                <span className="c-str">"Staff Software Engineer"</span>,
                {"\n"} focus: [<span className="c-str">"networking"</span>,{" "}
                <span className="c-str">"security"</span>,{" "}
                <span className="c-str">"systems"</span>],
                {"\n"} stack: [<span className="c-str">"C/C++"</span>,{" "}
                <span className="c-str">"gRPC"</span>,{" "}
                <span className="c-str">"TLS"</span>,{" "}
                <span className="c-str">"Python"</span>],
                {"\n"} shipping:{" "}
                <span className="c-bool">true</span>,{"\n"}
                {"}"};
              </code>
            </pre>
          </div>
          <img
            className="about-illustration"
            src={
              dark
                ? require("./assets/coding_dark.png").default
                : require("./assets/coding_light.png").default
            }
            alt="developer illustration"
          />
        </div>
      </div>

      <a href="#skills" className="scroll-hint" aria-label="Scroll down">
        <span>scroll</span>
        <KeyboardArrowDownRounded />
      </a>
    </section>
  );
}
