import "./projects.scss";

const projects = [
  {
    title: "MEET GOD",
    stack: "Selenium · Python · Threading",
    description:
      "A Google Meet bot that automatically joins and leaves scheduled meetings. Meetings can be added, removed or modified on the fly, and it is capable of running on the cloud. Cross-platform across Windows, Linux and macOS on both Chrome and Firefox.",
    links: [
      { label: "Source Code", url: "https://github.com/yash3001/Meet-God" },
    ],
  },
  {
    title: "grpc-labview",
    stack: "C++ · gRPC · Protobuf",
    description:
      "Ongoing open-source contribution: upgraded the library to the latest gRPC, improved client-side performance by 5× by eliminating memory copies, and built a Python-based testing framework validating both LabVIEW servers and clients.",
    links: [
      { label: "GitHub", url: "https://github.com/ni/grpc-labview" },
    ],
  },
];

export default function Projects({ menuOpen, setMenuOpen, dark }) {
  function check() {
    if (menuOpen) {
      setMenuOpen(false);
    }
  }
  return (
    <div
      className={"projects " + (dark && " projects-dark-mode ")}
      id="projects"
      onClick={check}
    >
      <div className="projects-header">
        <h1>Projects</h1>
      </div>
      <div className="projects-container">
        {projects.map((project, i) => (
          <div className="project-card" key={i}>
            <h2>{project.title}</h2>
            <span className="project-stack">{project.stack}</span>
            <p>{project.description}</p>
            <div className="project-links">
              {project.links.map((link, j) => (
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={j}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
