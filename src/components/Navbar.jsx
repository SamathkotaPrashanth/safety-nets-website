import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/our-services", label: "Our Services" }, 
    { path: "/sports-nets", label: "All Sports Nets" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="navbar">
   
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="Sreenu Safety Nets" className="brand-logo" />
        <div className="brand-text">
          <span className="brand-name">Sreenu</span>
          <span className="brand-sub">SAFETY NETS</span>
        </div>
      </Link>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`navbar-links ${menuOpen ? "show" : ""}`}>
        {menuItems.map((item) => (
          <li key={item.path} onClick={() => setMenuOpen(false)}>
            <Link
              to={item.path}
              className={location.pathname === item.path ? "active" : ""}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
