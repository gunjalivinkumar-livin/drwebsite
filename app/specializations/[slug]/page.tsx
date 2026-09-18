import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { specializations, getSpecialization } from "@/lib/specializations";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return specializations.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const spec = getSpecialization(params.slug);
  if (!spec) return { title: "Specialization not found" };
  return {
    title: `${spec.title} | Dr. Bethapudi Sowjanya`,
    description: spec.shortDescription,
  };
}

export default function SpecializationDetailPage({ params }: Props) {
  const spec = getSpecialization(params.slug);
  if (!spec) notFound();

  const others = specializations.filter((s) => s.slug !== spec.slug).slice(0, 3);

  return (
    <main>
      <Header />
      <article className="article">
        <div className="hero-bg-shape" />
        <div className="wrap article-wrap">
          <Reveal>
            <Link href="/specializations" className="article-back">← Back to all specializations</Link>
            <div className="blog-meta" style={{ marginTop: 18 }}>
              <span className="blog-tag">{spec.icon} Specialization</span>
            </div>
            <h1 className="article-title">{spec.title}</h1>
          </Reveal>

          <Reveal as="fade" delay={80}>
            <div className="article-cover" style={{ background: spec.gradient }} />
          </Reveal>

          <Reveal as="up" delay={120}>
            <div className="article-body">
              {spec.overview.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </Reveal>

          <Reveal as="up" delay={150}>
            <div className="spec-detail-grid">
              <div className="spec-detail-card">
                <h3>What's included</h3>
                <ul className="check-list">
                  {spec.procedures.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
              <div className="spec-detail-card">
                <h3>Who it's for</h3>
                <ul className="check-list">
                  {spec.whoItsFor.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal as="up" delay={180}>
            <div className="faq" style={{ marginTop: 48 }}>
              <div className="section-head" style={{ textAlign: "left", margin: "0 0 20px" }}>
                <div className="eyebrow">Common Questions</div>
              </div>
              {spec.faqs.map((f) => (
                <div className="faq-item" key={f.q}>
                  <div className="faq-q" style={{ cursor: "default" }}>
                    <span>{f.q}</span>
                  </div>
                  <div className="faq-a" style={{ maxHeight: "none" }}>
                    <p>{f.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal as="up" delay={200}>
            <div className="article-cta">
              <div>
                <strong>Considering {spec.title.toLowerCase()}?</strong>
                <span>Book a consultation with Dr. Bethapudi Sowjanya.</span>
              </div>
              <a href="/#contact" className="btn btn-primary">Book an Appointment</a>
            </div>
          </Reveal>
        </div>
      </article>

      <section className="bg-alt">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <div className="eyebrow center">Explore More</div>
              <h2>Other specializations</h2>
            </div>
          </Reveal>
          <div className="spec-grid">
            {others.map((s, i) => (
              <Reveal as="up" delay={i * 90} key={s.slug}>
                <Link href={`/specializations/${s.slug}`} className="spec-card spec-card-link">
                  <div className="spec-icon">{s.icon}</div>
                  <h4>{s.title}</h4>
                  <p>{s.shortDescription}</p>
                  <span className="blog-readmore">Learn more →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
