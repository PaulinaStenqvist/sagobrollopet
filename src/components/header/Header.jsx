import React, {useState} from "react";
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {

 const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="header">
      <h3 className="logo">Sagobröllopet</h3>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
        onClick={() => setIsMobile(false)}
        <Link to="/" className="home">
          <li>HOME</li>
        </Link>
      </ul>
      <ul className="nav-links">
        <Link to="/about" className="about">
          <li>OM</li>
        </Link>
      </ul>
      <ul className="nav-links">
        <Link to="/portfolio" className="portfolio">
          <li>PORTFOLIO</li>
        </Link>
      </ul>
      <ul className="nav-links">
        <Link to="/pricing" className="pricing">
          <li>PRIS</li>
        </Link>
      </ul>
      <ul className="nav-links">
        <Link to="/contact" className="contact">
          <li>KONTAKT</li>
        </Link>
      </ul>
      <ul className="nav-links">
        <Link to="/login" className="login">
          <li>LOGGA IN</li>
        </Link>
      </ul>
      <button 
      className="mobile-menu-icon"
      onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
        <i className="fas fa-times"></i>
      ) : (
        <i className="fas fa-bars"></i>
      )}
      </button>
    </nav>
  );
};

export default Header;

