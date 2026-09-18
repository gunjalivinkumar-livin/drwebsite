const clinics = [
  {
    name: "Willow Women's Care",
    address:
      "Ground Floor, Sunrise Heights, KPHB Phase 9, Kukatpally, Hyderabad – 500085, Telangana",
    directions: "#",
  },
  {
    name: "Meadow Multispeciality Hospital",
    address:
      "Plot 16-17, Vivekananda Nagar, Kukatpally, Hyderabad – 500072, Telangana",
    directions: "#",
  },
];

import Reveal from "./Reveal";

export default function Location() {
  return (
    <section className="bg-alt" id="location">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <div className="eyebrow center">Visit Us</div>
            <h2>Clinic Locations</h2>
          </div>
        </Reveal>
        <div className="loc-grid">
          {clinics.map((c, i) => (
            <Reveal as="up" delay={i * 100} key={c.name}>
              <div className="loc-card">
                <div className="head">{c.name}</div>
                <div className="body">
                  <address>{c.address}</address>
                  <a className="dir" href={c.directions}>Get Directions →</a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal as="fade" delay={150}>
          <div className="map-frame">
            {/* Replace with a real Google Maps embed iframe */}
            [ Google Map embed goes here ]
          </div>
        </Reveal>
      </div>
    </section>
  );
}
