import "./Services.css"; // reuse same styling

import cricketImg from "../assets/cricket-net.jpg";
import footballImg from "../assets/football-net.jpg";
import badmintonImg from "../assets/badminton-net.jpg";
import volleyballImg from "../assets/volleyball-net.jpg";
import tennisImg from "../assets/tennis-net.jpg";
import basketballImg from "../assets/basketball-net.jpg";

function AllSportsNets() {
  return (
    <section className="services-section">
      <p className="services-label">SPORTS NETS</p>

      <h1 className="services-heading">
        All Types of Sports Nets
      </h1>

      <p className="services-subtitle">
        HIGH QUALITY NETS | PROFESSIONAL INSTALLATION |
        INDOOR & OUTDOOR SPORTS
      </p>

      <div className="services-grid">
        <div className="service-card">
          <img src={cricketImg} alt="Cricket Practice Nets" />
          <h3>Cricket Practice Nets</h3>
          <p>
  High-quality cricket practice nets designed for safe and effective training.
  Ideal for academies, schools, and personal grounds. Strong, weather-resistant,
  and suitable for both indoor and outdoor use.
</p>
<a href="tel:8179262375" className="call-btn">
    📞 Call Now
  </a>
        </div>

        <div className="service-card">
          <img src={footballImg} alt="Football Goal Nets" />
          <h3>Football Goal Nets</h3>
          <p>
  Durable football goal nets built to withstand powerful shots and long hours
  of play. Perfect for schools, clubs, and professional grounds. Ensures safety
  and long-lasting performance.
</p>
<a href="tel:8179262375" className="call-btn">
    📞 Call Now
  </a>
        </div>

        <div className="service-card">
          <img src={badmintonImg} alt="Badminton Nets" />
          <h3>Badminton Court Nets</h3>
          <p>
  Lightweight yet strong badminton nets crafted for professional and recreational
  play. Ensures proper visibility and durability. Suitable for indoor and outdoor
  courts.
</p>
<a href="tel:8179262375" className="call-btn">
    📞 Call Now
  </a>

        </div>

        <div className="service-card">
          <img src={volleyballImg} alt="Volleyball Nets" />
          <h3>Volleyball Court Nets</h3>
          <p>
  High-strength volleyball nets designed for competitive and training matches.
  Built to handle intense gameplay while maintaining proper net alignment and
  durability.
</p>
<a href="tel:8179262375" className="call-btn">
    📞 Call Now
  </a>

        </div>

        <div className="service-card">
          <img src={tennisImg} alt="Tennis Nets" />
          <h3>Tennis Court Nets</h3>
          <p>
  Professional-grade tennis nets offering perfect tension and height accuracy.
  Ideal for clubs, academies, and recreational courts. UV-protected and
  weather-resistant for long-term use.
</p>
<a href="tel:8179262375" className="call-btn">
    📞 Call Now
  </a>

        </div>

        <div className="service-card">
          <img src={basketballImg} alt="Basketball Nets" />
          <h3>Basketball Hoop Nets</h3>
          <p>
  Premium basketball nets designed for smooth ball movement and durability.
  Suitable for indoor and outdoor courts. Resistant to wear and tear for
  continuous professional use.
</p>
<a href="tel:8179262375" className="call-btn">
    📞 Call Now
  </a>

        </div>
      </div>
    </section>
  );
}

export default AllSportsNets;
