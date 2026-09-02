export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg-shape" />
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow">Women&apos;s Health, First</div>
          <h1>
            Gentle, expert care for <em>every season</em> of womanhood.
          </h1>
          <p className="lead">
            From adolescence to menopause — obstetrics, fertility, laparoscopy and
            cosmetic gynaecology, guided by 13+ years of compassionate, evidence-based
            practice.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">Book an Appointment →</a>
            <a href="#doctor" className="btn btn-outline">Meet Dr. Reddy</a>
          </div>
          <div className="hero-trust">
            <div>13+<small>Years of Practice</small></div>
            <div>10K+<small>Lives Touched</small></div>
            <div>500+<small>5-Star Reviews</small></div>
          </div>
        </div>
        <div className="hero-art">
          <div className="petal" style={{ background: "linear-gradient(160deg,#C48793 0%,#A9677A 55%,#5B3242 100%)" }}>
            <svg viewBox="0 0 600 640" preserveAspectRatio="xMidYMid slice">
              <circle cx="300" cy="230" r="70" fill="rgba(255,255,255,.18)" />
              <path d="M120 480 Q300 380 480 480" stroke="rgba(255,255,255,.25)" strokeWidth="3" fill="none" />
            </svg>
          </div>
          <div className="badge">
            <div className="dot" />
            <div>
              <strong>Same-week slots</strong>
              <span>Clinic &amp; video consults available</span>
            </div>
          </div>
        </div>
      </div>
      <div className="wrap hero-dots">
        <i className="active" />
        <i />
        <i />
      </div>
    </section>
  );
}
