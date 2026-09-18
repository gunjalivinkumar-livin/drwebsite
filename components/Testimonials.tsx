const testimonials = [
  {
    quote:
      "Dr. Reddy took the time to explain why my cycle was irregular instead of just prescribing something. Three months later, my hormones are finally balanced.",
    name: "Meera K.",
    meta: "Patient since 2024",
  },
  {
    quote:
      "The most patient, unhurried consultation I've had. She answered every question about my pregnancy without making me feel rushed.",
    name: "Priya S.",
    meta: "Patient since 2023",
  },
  {
    quote:
      "Went in for a laparoscopic procedure and was nervous — the team's clarity about recovery timelines made all the difference.",
    name: "Lakshmi R.",
    meta: "Patient since 2025",
  },
];

import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section className="bg-alt" id="testimonials">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <div className="eyebrow center">Testimonials</div>
            <h2>What patients are saying</h2>
          </div>
        </Reveal>
        <div className="test-grid">
          {testimonials.map((t, i) => (
            <Reveal as="up" delay={i * 100} key={t.name}>
              <div className="test-card">
                <div className="stars">★★★★★</div>
                <p>&quot;{t.quote}&quot;</p>
                <div className="test-author">
                  <div className="av" />
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.meta}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
