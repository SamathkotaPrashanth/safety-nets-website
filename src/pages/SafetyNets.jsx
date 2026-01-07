import { Link } from "react-router-dom";
import "./PigeonNets.css";

const SafetyNets = () => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>

            <div className="hero-container">
                <p className="breadcrumb">
                    <Link to="/">Home</Link> /{" "}
                    <span>Safety Nets</span>{" "}
                    <Link to="/contact" className="contact-btn">
                        Contact Us
                    </Link>
                </p>

                <h1>Safety Nets</h1>

                <div className="info-box">
                    We provide high-quality safety nets for balconies, windows, staircases,
                    construction sites and buildings to ensure complete safety.
                </div>

                <div className="hero-buttons">
                    <Link to="/" className="btn">
                        Pigeon Nets
                    </Link>

                    <Link to="/contact" className="btn btn-outline">
                        Get Free Quote
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default SafetyNets;
