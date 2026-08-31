import "./skills.scss";
import Reveal from "../Reveal/Reveal";
import {
  CodeRounded,
  RouterRounded,
  MemoryRounded,
  LockRounded,
  StorageRounded,
} from "@material-ui/icons";

const groups = [
  {
    icon: <CodeRounded />,
    title: "Languages",
    tags: ["C++", "C", "Python", "Go", "Java", "Kotlin", "JavaScript", "Lua", "Haskell"],
  },
  {
    icon: <RouterRounded />,
    title: "Networking",
    tags: ["gRPC", "TCP/IP", "UDP", "Socket Programming", "Protobuf", "Serialization"],
  },
  {
    icon: <MemoryRounded />,
    title: "Systems",
    tags: ["Multithreading", "Mutexes", "Semaphores", "Condition Variables", "Linux", "Shell"],
  },
  {
    icon: <LockRounded />,
    title: "Security",
    tags: ["TLS 1.3", "OpenSSL", "X.509", "RSA", "SHA-256 / 512", "Cryptography"],
  },
  {
    icon: <StorageRounded />,
    title: "Databases & Frameworks",
    tags: ["SQL", "MongoDB", "React", "Node.js", "Express.js"],
  },
];

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <Reveal>
        <p className="section-tag">~/skills</p>
        <h2 className="section-title">What I work with</h2>
      </Reveal>

      <div className="skills-grid">
        {groups.map((group, i) => (
          <Reveal key={group.title} delay={i * 80} className="skill-card-wrap">
            <div className="skill-card">
              <div className="skill-card-head">
                <span className="skill-icon">{group.icon}</span>
                <h3>{group.title}</h3>
              </div>
              <div className="skill-tags">
                {group.tags.map((tag) => (
                  <span className="skill-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
