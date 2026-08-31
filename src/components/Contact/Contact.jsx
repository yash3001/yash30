import "./contact.scss";
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
    value: "linkedin.com/in/yashchauhan30",
    href: "https://www.linkedin.com/in/yashchauhan30/",
    icon: <LinkedIn />,
  },
  {
    label: "GitHub",
    value: "github.com/yash3001",
    href: "https://github.com/yash3001",
    icon: <GitHub />,
  },
];

export default function Contact({ menuOpen, setMenuOpen, dark }) {
  function check() {
    if (menuOpen) {
      setMenuOpen(false);
    }
  }
  return (
    <div
      className={"contact " + (dark && " contact-dark-mode ")}
      id="contact"
      onClick={check}
    >
      <div className="contact-header">
        <h1>Let's Connect</h1>
      </div>
      <p className="contact-intro">
        Have an opportunity or just want to say hi? Reach out through any of
        these.
      </p>
      <div className="contact-container">
        {contacts.map((c, i) => (
          <a
            className="contact-card"
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            key={i}
          >
            <span className="contact-icon">{c.icon}</span>
            <div className="contact-text">
              <span className="contact-label">{c.label}</span>
              <span className="contact-value">{c.value}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
