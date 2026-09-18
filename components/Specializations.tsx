import Link from "next/link";
import Reveal from "./Reveal";
import { specializations } from "@/lib/specializations";

export default function Specializations() {
  return (
    <section id="specializations">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <div className="eyebrow center">Our Specializations</div>
            <h2>Reproductive health, at every stage of life</h2>
            <p>
              A full spectrum of care built around one idea: informed women make better
              decisions about their own bodies.
            </p>
          </div>
        </Reveal>
        <div className="spec-grid">
          {specializations.map((s, i) => (
            <Reveal as="up" delay={i * 80} key={s.slug}>
              <Link href={`/specializations/${s.slug}`} className="spec-card spec-card-link">
                <div className="spec-icon">{s.icon}</div>
                <h4>{s.title}</h4>
                <p>{s.shortDescription}</p>
                <span className="blog-readmore">Learn more →</span>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal as="fade" delay={120}>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <Link href="/specializations" className="btn btn-outline">
              View All Specializations →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
