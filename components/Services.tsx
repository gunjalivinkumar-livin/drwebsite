const services = [
  {
    title: "Adolescent Counselling",
    description: "Menstrual health, hygiene and hormonal awareness for young girls.",
    gradient: "linear-gradient(135deg,#C48793,#93A87E)",
  },
  {
    title: "Pregnancy Wellness",
    description:
      "A holistic antenatal program covering nutrition, movement and mindfulness.",
    gradient: "linear-gradient(135deg,#93A87E,#C9A66B)",
  },
  {
    title: "Menopause Care",
    description:
      "Symptom management, hormonal therapy and long-term bone & heart health.",
    gradient: "linear-gradient(135deg,#5B3242,#C48793)",
  },
  {
    title: "Preventive Screenings",
    description: "Pap smears, HPV testing and pelvic ultrasounds for early detection.",
    gradient: "linear-gradient(135deg,#C9A66B,#A9677A)",
  },
  {
    title: "Women's Health Workshops",
    description:
      "Community sessions on reproductive literacy, run through the Bloom initiative.",
    gradient: "linear-gradient(135deg,#74905C,#5B3242)",
  },
];

export default function Services() {
  return (
    <section className="bg-alt" id="services">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow center">Healthcare Services</div>
          <h2>Care designed around your life stage</h2>
        </div>
        <div className="service-scroll">
          {services.map((s) => (
            <div className="service-card" key={s.title}>
              <div className="service-thumb" style={{ background: s.gradient }} />
              <div className="body">
                <h4>{s.title}</h4>
                <p>{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
