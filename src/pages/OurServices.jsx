import "./OurServices.css";

function OurServices() {
  const locations = [
    "Madhapur","Banjara Hills","Jubilee Hills","Manikonda","Kukatpally",
    "Attapur","Khajaguda","LB Nagar","Uppal","Hitech City",
    "Gachibowli","Tarnaka","Panjagutta","Ameerpet","Erragadda",
    "Moosapet","Balanagar","Balapur","Hastinapuram"
  ];

  return (
    <section className="our-services-page">
      <div className="email-strip">
        <div className="email-box">
          <span>✉️</span>
          <div>
            <h4>EMAIL</h4>
            <p>jsreenu509@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="locations-section">
        <ul>
          {locations.map((place, i) => (
            <li key={i}>📍 {place}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default OurServices;
