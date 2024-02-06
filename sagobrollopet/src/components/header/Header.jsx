import React from 'react'
import styles from "./header.module.css";
import { Link } from 'react-router-dom';

const Header = () => {
  // State för att hålla reda på om mobilmenyn är visad eller ej
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Funktion för att hantera klick på menyns knapp
  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen); // Växlar state mellan true och false
  // };

  return (
    <nav className="header">
      <h3 className="logo">Sagobröllopet</h3>
      <ul className="nav-links">
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
    
      
      {/* <div id="menu-btn" className="fas fa-bars" onClick={toggleMenu}></div> */}
    </nav>
  );
};

export default Header;

