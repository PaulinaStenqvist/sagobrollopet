import React from 'react'
import styles from "./header.module.css";

import { useState } from 'react';

const Header = () => {
  // State för att hålla reda på om mobilmenyn är visad eller ej
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Funktion för att hantera klick på menyns knapp
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Växlar state mellan true och false
  };

  return (
    <section className="header">
      <a href="index.html" className="logo">Sagobröllopet</a>
      
      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <a href="index.html">HEM</a>
        <a href="about.html">OM</a>
        <a href="portfolio.html">PORTFOLIO</a>
        <a href="pricing.html">PRIS</a>
        <a href="contact.html">KONTAKT</a>
        <a href="contact.html">LOGGA IN</a>
      </nav>
      
      <div id="menu-btn" className="fas fa-bars" onClick={toggleMenu}></div>
    </section>
  );
};

export default Header;

