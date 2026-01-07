import { useEffect, useState } from "react";
import "./Home.css";

// HERO SLIDER IMAGES
import img1 from "../assets/balconyImg.png";
import img2 from "../assets/bird-net.jpg";
import img3 from "../assets/pigeonImg.png";
import img4 from "../assets/industrial-net.jpg";

const images = [img1, img2, img3, img4];

function Home() {
  const [current, setCurrent] = useState(0);

  // ================= HERO AUTO SLIDE =================
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // ================= REVIEWS DATA =================
  const reviews = [
    {
      text: "Excellent quality safety nets. Installation was quick and very professional.",
      name: "Ramesh Kumar",
      city: "Hyderabad",
    },
    {
      text: "Very strong nets and neat finishing. Highly satisfied.",
      name: "Suresh",
      city: "Bangalore",
    },
    {
      text: "My children are safe now. Thanks for the great service.",
      name: "Anitha",
      city: "Chennai",
    },
    {
      text: "Affordable price and quick installation.",
      name: "Vikram",
      city: "Hyderabad",
    },
    {
      text: "Best pigeon net service. Professional team.",
      name: "Arjun",
      city: "Hyderabad",
    
    },
    {
      text: "Quality material and excellent support.",
      name: "Lakshmi",
      city: "Hyderabad",
    },
    {
      text: "Same day installation and very polite staff.",
      name: "Praveen",
      city: "Hyderabad",
    },
    {
      text: "Strong nets with clean work. Highly recommended.",
      name: "Sneha",
      city: "Hyderabad",
    },
  ];

  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const reviewInterval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(reviewInterval);
  }, []);

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="home-hero">
        <div className="home-left">
          <h1>Safety Nets</h1>
          <h2>For Every Space</h2>
          <p>
            Balcony Safety Nets • Pigeon Nets • Children Safety Nets •
            Industrial & Sports Safety Nets
          </p>
        </div>

        <div className="home-right">
          <div className="circle-slider">
            <img
              src={images[current]}
              alt="Safety Net"
              className="slider-image"
            />
          </div>

          <button className="arrow arrow-left" onClick={prevSlide}>
            ❮
          </button>
          <button className="arrow arrow-right" onClick={nextSlide}>
            ❯
          </button>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="why-section">
        <h4 className="small-title">Sreenu Safety Nets</h4>
        <h2>Why Choose Us</h2>
        <p className="why-desc">
          We provide premium quality safety net services without harming
          birds, ensuring safety, durability and professional installation.
        </p>

        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">✔</div>
            <h3>Safe & Secure</h3>
            <p>High quality UV protected nets for maximum safety.</p>
          </div>

          <div className="why-card">
            <div className="why-icon">🛠</div>
            <h3>24x7 Support</h3>
            <p>Quick response installation and maintenance support.</p>
          </div>

          <div className="why-card">
            <div className="why-icon">₹</div>
            <h3>Low Cost</h3>
            <p>Affordable pricing with best quality assurance.</p>
          </div>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stats-left">
            <h2>
              We Are The Best Choice For <br />
              Your Safety Nets Services
            </h2>

            <div className="stats-points">
              <div className="point">
                <span className="icon">✔</span>
                <div>
                  <h4>Mission</h4>
                  <p>
                    Delivering best quality safety nets with quick response,
                    customized solutions and customer focus.
                  </p>
                </div>
              </div>

              <div className="point">
                <span className="icon">🛠</span>
                <div>
                  <h4>Support</h4>
                  <p>
                    Offering effective maintenance, repair and replacement
                    services with long-lasting assurance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="stats-right">
            <img src={img1} alt="Safety Nets Work" />

            <div className="stat-badge left">
              <h3>13,652</h3>
              <p>Satisfied Clients</p>
            </div>

            <div className="stat-badge right">
              <h3>13,642</h3>
              <p>Projects Completed</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= REVIEWS SECTION (ADDED ONLY) ================= */}
      <section className="home-reviews">
        <h2 className="reviews-heading">What Our Customers Say</h2>

        <div className="reviews-slider">
          <div className="review-box">
            <p className="review-text">
              “{reviews[currentReview].text}”
            </p>
            <h4>
              {reviews[currentReview].name}
              <span> – {reviews[currentReview].city}</span>
            </h4>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
