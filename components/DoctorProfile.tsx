export default function DoctorProfile() {
  return (
    <section id="doctor">
      <div className="wrap doc-grid">
        <div>
          <div className="doc-photo">
            <div className="petal-sm" style={{ background: "#5B3242" }}>
              <svg viewBox="0 0 320 340" preserveAspectRatio="xMidYMid slice">
                <circle cx="160" cy="130" r="55" fill="rgba(255,255,255,.15)" />
                <path d="M60 300 Q160 240 260 300" stroke="rgba(255,255,255,.2)" strokeWidth="3" fill="none" />
              </svg>
            </div>
          </div>
          <div className="doc-card">
            <dl>
              <div><dt>Qualification</dt><dd>MBBS, MD (OBG)</dd></div>
              <div><dt>Experience</dt><dd>13 Years</dd></div>
              <div><dt>Registration No.</dt><dd>62703-TSMC</dd></div>
              <div><dt>Consults</dt><dd>Clinic · Video · Call</dd></div>
            </dl>
          </div>
        </div>
        <div className="doc-info">
          <div className="eyebrow">Meet the Doctor</div>
          <h3>Dr. Bethapudi Sowjanya</h3>
          <div className="role">Consultant Gynaecologist &amp; Cosmetic Gynaecologist</div>
          <p>
            With 13 years in Obstetrics, Gynaecology, Laparoscopy and Cosmetic
            Gynaecology, Dr. Reddy is known for pairing clinical rigour with unhurried,
            honest conversations. She currently consults at Willow Women&apos;s Care and
            heads the aesthetic-gynaecology unit at Meadow Multispeciality Hospital.
          </p>
          <p>
            Beyond the clinic, she founded <strong>Bloom</strong>, a health-literacy
            initiative bringing menstrual and reproductive education to schools and
            community groups — because prevention starts with understanding.
          </p>
          <div className="doc-actions">
            <a href="#contact" className="btn btn-primary">Book an Appointment</a>
            <a href="#" className="btn btn-outline">Full Profile</a>
          </div>
        </div>
      </div>
    </section>
  );
}
