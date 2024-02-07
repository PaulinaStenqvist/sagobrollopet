import React from 'react';
import './footer.css';
const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.box-container}>
        <div className={styles.box}>
          <h3>Snabba Länkar</h3>
          <a href="index.html"> <i className="fas fa-angle-right"></i> Hem</a>
          <a href="about.html"><i className="fas fa-angle-right"></i> Om</a>
          <a href="portfolio.html"><i className="fas fa-angle-right"></i> Portfolio</a>
          <a href="pricing.html"><i className="fas fa-angle-right"></i> Pris</a>
          <a href="contact.html"><i className="fas fa-angle-right"></i> Kontakt</a>
        </div>

        <div className={styles.box}>
          <h3>Extra Länkar</h3>
          <a href="#"><i className="fas fa-angle-right"></i> Planera Bröllop</a>
          <a href="#"><i className="fas fa-angle-right"></i> Vår Service</a>
          <a href="#"><i className="fas fa-angle-right"></i> Fråga Frågor</a>
          <a href="#"><i className="fas fa-angle-right"></i> Terms Of Use</a>
          <a href="#"><i className="fas fa-angle-right"></i> Privacy Policy</a>
        </div>

        <div className={styles.box}>
          <h3>Kontakt Info</h3>
          <a href="#"><i className="fas fa-phone"></i> 070-0000000 </a>
          <a href="#"><i className="fas fa-phone"></i> 070-0000000 </a>
          <a href="#"><i className="fas fa-envelope"></i> exempel@exempel.com </a>
          <a href="#"><i className="fas fa-envelope"></i> exempel@exempel.com </a>
          <a href="#"><i className="fas fa-map"></i> Sweden, Europe </a>
        </div>

        <div className={styles.box}>
          <h3>Follow Us</h3>
          <a href="#"><i className="fab fa-facebook"></i>Facebook</a>
          <a href="#"><i className="fab fa-instagram"></i>Instagram</a>
          <a href="#"><i className="fab fa-linkedin"></i>LinkedIn</a>
        </div>
      </div>
      <p className={styles.credit}> Skapat Av <span> paulinaweb </span> * Alla Rättigheter är Reserverade!</p>
    </section>
  );
};

export default Footer;
