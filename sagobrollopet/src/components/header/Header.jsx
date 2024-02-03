import React from 'react'
import styles from "./header.module.css";

const Header = () => {
    return(
     <div className={styles.container}>
         <section class="header">

<a href="index.html" class="logo">Sagobröllopet</a>

<nav class="navbar">
    <a href="index.html">HEM</a>
    <a href="about.html">OM</a>
    <a href="portfolio.html">PORTFOLIO</a>
    <a href="pricing.html">PRIS</a>
    <a href="contact.html">KONTAKT</a>
    <a href="contact.html">LOGGA IN</a>

</nav>

<div id="menu-btn" class="fas fa-bars"></div>

</section>
     </div>
    );
    };
    export default Header;