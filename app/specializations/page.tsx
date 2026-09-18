import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { specializations } from "@/lib/specializations";

export const metadata: Metadata = {
  title: "Specializations | Dr. Bethapudi Sowjanya",
  description:
    "Obstetrics, cosmetic gynaecology, fertility and laparoscopic surgery — explore each specialization in detail.",
};

export default function SpecializationsPage() {
  return (
    <main>
      <Header />
      <PageHero
        eyebrow="Specializations"
        title="Reproductive health, at every stage of life"
        subtitle="A full spectrum of care built around one idea: informed women make better decisions about their own bodies. Tap any area below for procedures, who it's for, and common questions."
      />
      <section>
        <div className="wrap">
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
        </div>
      </section>
      <Footer />
    </main>
  );
}
