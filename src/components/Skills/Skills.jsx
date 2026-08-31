import "./skills.scss";
import Item from "./Item";
import Button from "../Button/Button";

export default function Skills({ menuOpen, setMenuOpen, dark }) {
  function check() {
    if (menuOpen) {
      setMenuOpen(false);
    }
  }

  return (
    <div
      className={"skills " + (dark && " skills-dark-mode ")}
      id="skills"
      onClick={check}
    >
      <div className="skills-header">
        <h1>My skills</h1>
      </div>
      <div className="skills-container">
        <Item
          name="C / C++"
          image_link="./assets/c++_logo.png"
          description="My primary languages for systems work. I build reactor-based TCP networking, OpenSSL/TLS 1.3 socket layers, and high-performance caches inside LabVIEW's C++ codebase."
        />
        <Item
          name="Networking & Security"
          image_link="./assets/linux_logo.png"
          description="gRPC, TCP/IP, UDP and socket programming with Protobuf serialization, secured with mutual TLS 1.3, OpenSSL, X.509 certificates and modern cryptography (RSA, SHA-256/512)."
        />
        <Item
          name="Systems & Multithreading"
          image_link="./assets/git_logo.png"
          description="Concurrent, cross-platform systems using mutexes, semaphores and condition variables — from IOCP/inotify filesystem monitoring to multithreaded event-processing pipelines on Linux and Windows."
        />
        <Item
          name="Python"
          image_link="./assets/python_logo.png"
          description="My go-to for tooling and automation — testing frameworks that validate gRPC servers and clients, plus automation bots built with Selenium and threading."
        />
        <Item
          name="React / Node.js"
          image_link="./assets/react_logo.svg"
          description="Full-stack web development with React, Node.js and Express.js backed by SQL and MongoDB — including this portfolio."
        />
        <Item
          name="JavaScript"
          image_link="./assets/javascript_logo.png"
          description="The language behind my web work, powering interactive, component-driven front-ends and Node.js services."
        />
        <Item
          name="Competitive Programming"
          image_link="./assets/competitive_programming_logo.png"
          description="ICPC Amritapuri Regionals qualifier (AIR 487) and a top-100 finisher across multiple national contests — algorithms and data structures are second nature."
        />
        <Item
          name="Linux & Shell"
          image_link="./assets/machine_learning_logo.png"
          description="Daily driver for development. Comfortable with shell programming, cross-platform builds and the low-level details of Linux systems."
        />
      </div>
      <Button
        dark={dark}
        text="Download Resume"
        link="https://drive.google.com/file/d/1GbLAK-V9oxYhg939tjUUn8hv7_ThtCZl/view?usp=sharing"
      />
    </div>
  );
}
