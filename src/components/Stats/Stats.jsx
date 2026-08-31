import "./stats.scss";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 94, suffix: "%", label: "labview project load time" },
  { value: 5, suffix: "×", label: "grpc-labview client-side speedup" },
  { value: 15, prefix: "", suffix: "+", label: "labview related services" },
  { value: 9.0, suffix: "", decimals: 1, label: "CGPA at NIE Mysore" },
];

function Stat({ value, prefix = "", suffix = "", decimals = 0, label }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);

        const duration = 1400;
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(value * eased);
          if (p < 1) requestAnimationFrame(tick);
          else setDisplay(value);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div className="stat" ref={ref}>
      <div className="stat-value">
        {prefix}
        {display.toFixed(decimals)}
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="stats-band">
      <div className="stats-inner">
        {stats.map((s) => (
          <Stat key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}
