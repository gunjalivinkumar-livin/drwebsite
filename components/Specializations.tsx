const specializations = [
  {
    icon: "🌸",
    title: "Obstetrics & Prenatal Care",
    description:
      "Antenatal monitoring, high-risk pregnancy management and painless-birthing guidance.",
  },
  {
    icon: "🌿",
    title: "Cosmetic Gynaecology",
    description:
      "Vaginal rejuvenation, HIFU and pelvic floor rehabilitation for comfort and confidence.",
  },
  {
    icon: "🌼",
    title: "Fertility & Reproductive Health",
    description:
      "Ovulation tracking, hormonal evaluation and structured infertility work-ups.",
  },
  {
    icon: "🍃",
    title: "Laparoscopic Surgery",
    description:
      "Minimally invasive treatment for fibroids, cysts and endometriosis.",
  },
];

export default function Specializations() {
  return (
    <section id="specializations">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow center">Our Specializations</div>
          <h2>Reproductive health, at every stage of life</h2>
          <p>
            A full spectrum of care built around one idea: informed women make better
            decisions about their own bodies.
          </p>
        </div>
        <div className="spec-grid">
          {specializations.map((s) => (
            <div className="spec-card" key={s.title}>
              <div className="spec-icon">{s.icon}</div>
              <h4>{s.title}</h4>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
