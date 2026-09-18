import Reveal from "./Reveal";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { value: "13+", label: "Years of Experience" },
  { value: "10+", label: "Years Running Bloom Awareness" },
  { value: "500+", label: "5-Star Patient Reviews" },
  { value: "10K+", label: "Women Cared For" },
];

export default function Stats() {
  return (
    <section className="stats">
      <div className="wrap stats-grid">
        {stats.map((s, i) => (
          <Reveal as="up" delay={i * 90} key={s.label}>
            <div>
              <h3>
                <AnimatedCounter value={s.value} />
              </h3>
              <p>{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
