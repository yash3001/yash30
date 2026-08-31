import "./works.scss";

const experiences = [
  {
    role: "Staff Software Engineer, LabVIEW",
    company: "National Instruments",
    period: "Feb 2025 – Present",
    points: [
      "Implemented mutual TLS in LabVIEW's LogosXT transport layer with TLS 1.3, mutual certificate authentication, hostname verification, dedicated TLS ports and per-service TLS identities.",
      "Integrated OpenSSL SSL sockets into the existing C++ reactor-based TCP networking layer, enabling encryption for 15+ downstream consumers with no API changes while preserving the plaintext path.",
      "Implemented project-level Debug/Release switching by extending the compiled-code object cache to retain both caches per VI, enabling mode switches via cache lookups instead of full recompilation.",
      "Designed and implemented Probe Persistence, storing probes in project state files keyed by signal UID so debugging configurations survive VI and session closures without modifying VI source.",
      "Upgraded grpc-labview to the latest gRPC version, refactoring message serialization to use custom gRPC serialization traits and public protobuf APIs instead of private internals.",
    ],
  },
  {
    role: "Software Engineer, LabVIEW",
    company: "National Instruments",
    period: "Jul 2023 – Feb 2025",
    points: [
      "Reduced LabVIEW project load times by up to 94% for large projects by designing a directory-level dependency search cache, turning linear filesystem searches into near-constant-time hash lookups.",
      "Built cross-platform filesystem monitoring using Windows IOCP and Linux inotify, with a multithreaded event-processing pipeline (locks, mutexes, condition variables, a mutex-protected queue) dispatching change events to worker threads.",
      "Improved grpc-labview client-side performance by 5× by eliminating unnecessary memory copies.",
      "Designed a testing framework for grpc-labview validating both LabVIEW servers and clients via Python-based implementations, enabling faster development.",
      "Maintained the grpc-labview repository and resolved various critical bugs.",
    ],
  },
];

export default function Works({ menuOpen, setMenuOpen, dark }) {
  function check() {
    if (menuOpen) {
      setMenuOpen(false);
    }
  }
  return (
    <div
      className={"works " + (dark && " works-dark-mode ")}
      id="works"
      onClick={check}
    >
      <div className="works-header">
        <h1>Experience</h1>
      </div>
      <div className="works-timeline">
        {experiences.map((exp, i) => (
          <div className="works-card" key={i}>
            <div className="works-card-head">
              <h2>{exp.role}</h2>
              <span className="works-period">{exp.period}</span>
            </div>
            <h3 className="works-company">{exp.company}</h3>
            <ul>
              {exp.points.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
