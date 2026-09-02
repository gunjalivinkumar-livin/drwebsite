export default function Header() {
  return (
    <>
      <div className="announce">
        Caring for every stage of a woman&apos;s journey — evidence-based, empathetic gynaecology in Hyderabad.
      </div>
      <header>
        <div className="nav">
          <a href="#" className="brand">
            <span className="mark" />
            Dr. Bethapudi Sowjanya</span>
          </a>
          <nav>
            <ul className="navlinks">
              <li><a href="#about">About</a></li>
              <li><a href="#specializations">Specializations</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#doctor">Meet the Doctor</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <div className="nav-actions">
            <a href="#contact" className="btn btn-primary">Book a Visit</a>
          </div>
        </div>
      </header>
    </>
  );
}
