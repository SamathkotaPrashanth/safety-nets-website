import "./Services.css";

import balconyImg from "../assets/balconyImg.png";
import pigeonImg from "../assets/pigeonImg.png";
import childrenImg from "../assets/img1.png";
import constructionImg from "../assets/construction-net.jpg";
import industrialImg from "../assets/industrial-net.jpg";
import staircaseImg from "../assets/staircase-net.jpg";

function Services() {
  return (
    <section className="services-section">
      <p className="services-label">SERVICES</p>

      <h1 className="services-heading">
        All Kinds of Safety Nets Services
      </h1>

      <p className="services-subtitle">
        SUPERIOR QUALITY NETS | FRIENDLY & QUALITY SERVICES |
        PROFESSIONAL TEAM | AVAILABLE FOR 24/7 HOURS
      </p>

      <div className="services-grid">
        <div className="service-card">
          <img src={balconyImg} alt="Balcony Safety Nets" />
          <h3>Balcony Safety Nets</h3>
           <p>
    Protect your balcony with high-quality safety nets designed to prevent
    accidents. Ideal for homes with children and pets. Durable, weather-resistant,
    and professionally installed.
  </p>
   <a href="tel:8179262375" className="call-btn">
    📞 Call Now
  </a>
        </div>

        <div className="service-card">
          <img src={pigeonImg} alt="Pigeon Safety Nets" />
          <h3>Pigeon Safety Nets</h3>
           <p>
    Keep pigeons and birds away from balconies and windows without harming them.
    Our pigeon nets ensure cleanliness, hygiene, and long-lasting protection
    for residential and commercial spaces.
  </p>
  <a href="tel:8179262375" className="call-btn">
    📞 Call Now
  </a>
        </div>

        <div className="service-card">
          <img src={childrenImg} alt="Children Safety Nets" />
          <h3>Children Safety Nets</h3>
           <p>
    Designed to provide maximum safety for children in high-rise buildings.
    Strong, secure, and discreet nets that allow ventilation while preventing
    accidental falls.
  </p>
  <a href="tel:8179262375" className="call-btn">
    📞 Call Now
  </a>
        </div>

        <div className="service-card">
          <img src={constructionImg} alt="Construction Safety Nets" />
          <h3>Construction Safety Nets</h3>
           <p>
    Essential safety solution for construction sites to protect workers and
    pedestrians. These nets reduce fall risks and ensure compliance with safety
    standards.
  </p>
  <a href="tel:8179262375" className="call-btn">
    📞 Call Now
  </a>
        </div>

        <div className="service-card">
          <img src={industrialImg} alt="Industrial Safety Nets" />
          <h3>Industrial Safety Nets</h3>
           <p>
    Heavy-duty nets suitable for factories and warehouses. Built to withstand
    harsh environments while ensuring worker safety and operational efficiency.
  </p>
  <a href="tel:8179262375" className="call-btn">
    📞 Call Now
  </a>
        </div>

        <div className="service-card">
          <img src={staircaseImg} alt="Staircase Safety Nets" />
          <h3>Staircase / Duct Safety Nets</h3>
           <p>
    Prevent accidental falls in staircases and open ducts with customized safety
    net solutions. Ideal for apartments, offices, and industrial buildings.
  </p>
  <a href="tel:8179262375" className="call-btn">
    📞 Call Now
  </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
