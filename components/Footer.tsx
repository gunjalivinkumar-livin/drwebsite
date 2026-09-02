export default function Footer() {
  return (
    <footer>
      <div className="wrap foot-grid">
        <div>
          <a href="#" className="brand" style={{ color: "var(--white)", marginBottom: 14, display: "inline-flex" }}>
            <span className="mark" />
            Dr. Ananya <span style={{ color: "var(--gold)" }}>Reddy</span>
          </a>
          <p>Gentle, evidence-based gynaecological care — from adolescence through menopause.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#specializations">Specializations</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#doctor">Meet the Doctor</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>drbethapudisowjanya@example.com</li>
            <li>+91 90000 00000</li>
          </ul>
        </div>
        <div>
          <h4>Policy</h4>
          <ul>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="wrap foot-bottom">
        © Dr. Bethapudi Sowjanya 2026 — Template design, replace all placeholder content.
      </div>
    </footer>
  );
}
