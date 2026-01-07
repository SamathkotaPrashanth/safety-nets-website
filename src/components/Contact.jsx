import "./ContactUs.css";

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-label">CONTACT</div>
      <h2 className="contact-heading">Get In Touch</h2>
      <p className="contact-subtitle">
        Reach out to us for safety net installation and free inspection
      </p>

      <div className="contact-grid">
      
        <a href="tel:8309342952" className="contact-card">
          <div className="contact-icon">📞</div>
          <h3>Reach Out To US</h3>
          <p>+91 8179262375</p>
        </a>

        
        <a
          href="https://wa.me/8179262375"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <div className="contact-icon whatsapp">💬</div>
          <h3>WhatsApp</h3>
          <p>Chat with us instantly</p>
        </a>

       
        <a
          href="mailto:jsreenu509@gmail.com"
          className="contact-card"
        >
          <div className="contact-icon email">✉️</div>
          <h3>Email</h3>
          <p>jsreenu509@gmail.com</p>
        </a>

      
        <a
          href="https://www.google.com/maps/search/?api=1&query=Sreenu+Safety+Nets+Hyderabad"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <div className="contact-icon address">📍</div>
          <h3>Address</h3>
          <p>
            Sreenu Safety Nets<br />
            Hyderabad, Telangana
          </p>
        </a>
      </div>
    </section>
  );
}

export default Contact;
