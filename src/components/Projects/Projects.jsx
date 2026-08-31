import "./projects.scss";
import Reveal from "../Reveal/Reveal";
import {
  FolderRounded,
  GitHub,
  LaunchRounded,
} from "@material-ui/icons";

const projects = [
  {
    title: "MEET GOD",
    description:
      "A Google Meet bot that automatically joins and leaves scheduled meetings. Meetings can be added, removed or modified on the fly, and it runs on the cloud. Cross-platform across Windows, Linux and macOS on Chrome and Firefox.",
    stack: ["Selenium", "Python", "Threading"],
    links: [
      {
        label: "Source",
        icon: <GitHub />,
        url: "https://github.com/yash3001/Meet-God",
      },
    ],
  },
  {
    title: "grpc-labview",
    description:
      "Ongoing open-source work on NI's gRPC library: upgraded to the latest gRPC, improved client-side performance 5× by eliminating memory copies, and built a Python testing framework validating LabVIEW servers and clients.",
    stack: ["C++", "gRPC", "Protobuf"],
    links: [
      {
        label: "GitHub",
        icon: <LaunchRounded />,
        url: "https://github.com/ni/grpc-labview",
      },
    ],
  },
  {
    title: "qtile",
    description:
      "Personal qtile setup: a hackable, Python-configured tiling window manager with a custom keybinding, layout and status-bar configuration.",
    stack: ["Python", "Linux", "qtile"],
    links: [
      {
        label: "Source",
        icon: <GitHub />,
        url: "https://github.com/yash3001/qtile",
      },
    ],
  },
];

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <Reveal>
        <p className="section-tag">~/projects</p>
        <h2 className="section-title">Things I've built</h2>
      </Reveal>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 100} className="project-wrap">
            <article className="project-card">
              <div className="project-top">
                <span className="project-folder">
                  <FolderRounded />
                </span>
                <div className="project-links">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-stack">
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
