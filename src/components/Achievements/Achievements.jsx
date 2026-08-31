import "./achievements.scss";
import Reveal from "../Reveal/Reveal";
import { EmojiEventsRounded } from "@material-ui/icons";

const achievements = [
  {
    rank: "AWARD",
    title: "R&D Excellence Global Award",
    org: "National Instruments",
    note: "For contributions to the Search Cache",
    featured: true,
  },
  {
    rank: "AIR 487",
    title: "ICPC Amritapuri Regionalist",
    org: "ACM-ICPC 2021 · Preliminary Round",
    note: "Team RollingHash",
  },
  {
    rank: "Rank 33",
    title: "Code Heist by Yhills",
    org: "Out of 5,000+ teams",
    note: "Team ItsTimeToThrow",
  },
  {
    rank: "AIR 76",
    title: "IICC by Coding Ninjas",
    org: "Round 2 · 20,000+ participants",
    note: "",
  },
  {
    rank: "AIR 124",
    title: "Scaler CodeX 2.0",
    org: "National coding contest",
    note: "",
  },
  {
    rank: "AIR 230",
    title: "TCS CodeVita Season 10",
    org: "Global coding contest",
    note: "",
  },
];

export default function Achievements() {
  return (
    <section className="achievements section" id="achievements">
      <Reveal>
        <p className="section-tag">~/achievements</p>
        <h2 className="section-title">Wins &amp; recognition</h2>
      </Reveal>

      <div className="ach-grid">
        {achievements.map((a, i) => (
          <Reveal key={a.title} delay={i * 70} className="ach-wrap">
            <article className={"ach-card " + (a.featured ? "featured" : "")}>
              <div className="ach-top">
                <span className="ach-icon">
                  <EmojiEventsRounded />
                </span>
                <span className="ach-rank">{a.rank}</span>
              </div>
              <h3 className="ach-title">{a.title}</h3>
              <p className="ach-org">{a.org}</p>
              {a.note && <p className="ach-note">{a.note}</p>}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
