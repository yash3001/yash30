import "./education.scss";
import Reveal from "../Reveal/Reveal";
import { SchoolRounded } from "@material-ui/icons";

export default function Education() {
  return (
    <section className="education section" id="education">
      <Reveal>
        <p className="section-tag">~/education</p>
        <h2 className="section-title">Where I studied</h2>
      </Reveal>

      <Reveal delay={80}>
        <div className="edu-card">
          <span className="edu-icon">
            <SchoolRounded />
          </span>
          <div className="edu-body">
            <h3>National Institute of Engineering</h3>
            <p className="edu-degree">
              B.Tech, Computer Science &amp; Engineering
            </p>
            <p className="edu-meta">Mysore, India · Jul 2019 - Jul 2023</p>
          </div>
          <div className="edu-cgpa">
            <span className="edu-cgpa-value">9.0</span>
            <span className="edu-cgpa-label">CGPA</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
