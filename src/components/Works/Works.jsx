import "./works.scss";
import Reveal from "../Reveal/Reveal";

const experiences = [
  {
    role: "Staff Software Engineer, LabVIEW",
    company: "National Instruments",
    period: "Feb 2025 - Present",
    points: [
      "Implemented mutual TLS in LabVIEW's LogosXT transport layer with TLS 1.3, mutual certificate authentication, hostname verification, dedicated TLS ports and per-service TLS identities.",
      "Integrated OpenSSL SSL sockets into the existing C++ reactor-based TCP networking layer, enabling encryption for 15+ downstream consumers with no API changes while preserving the plaintext path.",
      "Implemented project-level Debug/Release switching by extending the compiled-code object cache to retain both caches per VI, enabling mode switches via cache lookups instead of full recompilation.",
      "Designed and implemented Probe Persistence, storing probes in project state files keyed by signal UID so debugging configurations survive VI and session closures without modifying source.",
      "Upgraded grpc-labview to the latest gRPC, refactoring serialization to use custom gRPC traits and public protobuf APIs instead of private internals.",
    ],
  },
  {
    role: "Software Engineer, LabVIEW",
    company: "National Instruments",
    period: "Jul 2023 - Feb 2025",
    points: [
      "Reduced LabVIEW project load times by up to 94% for large projects by designing a directory-level dependency search cache, turning linear filesystem searches into near-constant-time hash lookups.",
      "Built cross-platform filesystem monitoring using Windows IOCP and Linux inotify, with a multithreaded event-processing pipeline dispatching change events to worker threads via a mutex-protected queue.",
      "Improved grpc-labview client-side performance by 5× by eliminating unnecessary memory copies.",
      "Designed a Python-based testing framework validating both LabVIEW gRPC servers and clients, enabling faster development.",
      "Maintained the grpc-labview repository and resolved various critical bugs.",
    ],
  },
];

export default function Works() {
  return (
    <section className="works section" id="experience">
      <Reveal>
        <p className="section-tag">~/experience</p>
        <h2 className="section-title">Where I've worked</h2>
      </Reveal>

      <div className="timeline">
        {experiences.map((exp, i) => (
          <Reveal key={i} delay={i * 100} direction="left" className="tl-item">
            <span className="tl-dot"></span>
            <div className="tl-card">
              <div className="tl-head">
                <h3>
                  {exp.role} <span className="tl-at">@ {exp.company}</span>
                </h3>
                <span className="tl-period">{exp.period}</span>
              </div>
              <ul>
                {exp.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
