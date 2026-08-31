import "./contact.scss";
import Reveal from "../Reveal/Reveal";
import { Mail, Phone, LinkedIn, GitHub } from "@material-ui/icons";

const contacts = [
  {
    label: "Email",
    value: "yashchauhan197@gmail.com",
    href: "mailto:yashchauhan197@gmail.com",
    icon: <Mail />,
  },
  {
    label: "Phone",
    value: "+91 9971514997",
    href: "tel:+919971514997",
    icon: <Phone />,
  },
  {
    label: "LinkedIn",
    value: "in/yashchauhan30",
    href: "https://www.linkedin.com/in/yashchauhan30/",
    icon: <LinkedIn />,
  },
  {
    label: "GitHub",
    value: "yash3001",
    href: "https://github.com/yash3001",
    icon: <GitHub />,
  },
];

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <Reveal className="contact-head">
        <p className="section-tag" style={{ justifyContent: "center" }}>
          ~/contact
        </p>
        <h2 className="section-title">Let's build something</h2>
        <p className="contact-lead">
          I'm always open to interesting problems, collaborations or just a good
          conversation about systems and security. Drop me a line.
        </p>
        <a className="btn btn--primary contact-cta" href="mailto:yashchauhan197@gmail.com">
          Say hello
        </a>
      </Reveal>

      <div className="contact-grid">
        {contacts.map((c, i) => (
          <Reveal key={c.label} delay={i * 70} className="contact-wrap">
            <a
              className="contact-card"
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-icon">{c.icon}</span>
              <span className="contact-label">{c.label}</span>
              <span className="contact-value">{c.value}</span>
            </a>
          </Reveal>
        ))}
      </div>

      <footer className="footer">
        <span className="footer-logo">
          <span className="prompt">&gt;</span> yash chauhan
        </span>
        <span className="footer-note">
          Designed &amp; built with React · {new Date().getFullYear()}
        </span>
      </footer>
    </section>
  );
}
