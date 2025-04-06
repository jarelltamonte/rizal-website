// Navbar.js
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";
import rizal from "./images/jose.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-left">
        <Link to="/">
          <img src={rizal} alt="rizal" className="navbar-rizal" />
        </Link>
      </div>
      <div className="nav-right">
        <Link to="/romance" className="nav-text">
          Romance
        </Link>
        <div className="divider"></div>
        <Link to="/education" className="nav-text">
          Education
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;