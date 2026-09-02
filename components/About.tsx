export default function About() {
  return (
    <section className="bg-alt" id="about">
      <div className="wrap about-grid">
        <div className="about-art">
          <div className="petal-sm" style={{ background: "linear-gradient(150deg,#93A87E,#74905C)" }}>
            <svg viewBox="0 0 340 340" preserveAspectRatio="xMidYMid slice">
              <circle cx="170" cy="150" r="60" fill="rgba(255,255,255,.2)" />
            </svg>
          </div>
          <div className="ring" />
        </div>
        <div className="about-copy">
          <div className="eyebrow">About the Practice</div>
          <h2>Medicine works best as a partnership — not a prescription.</h2>
          <p>
            Dr. Bethapudi Sowjanya has spent over 13 years helping women navigate menstrual
            health, fertility, pregnancy and menopause with clarity instead of
            confusion. Her approach blends clinical precision with genuine listening —
            because every treatment plan should fit the person, not the other way
            round.
          </p>
          <p>
            She holds an MD in Obstetrics &amp; Gynaecology, with advanced fellowships
            in cosmetic gynaecology, reproductive medicine and operative hysteroscopy —
            and founded <strong>Bloom</strong>, a community health-literacy initiative
            for adolescent girls and women.
          </p>
          <ul className="about-list">
            <li>Evidence-based treatment plans</li>
            <li>Laparoscopic &amp; minimally invasive care</li>
            <li>Fertility &amp; reproductive health</li>
            <li>Adolescent &amp; menopause counselling</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
