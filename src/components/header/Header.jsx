import React, { useState } from "react";
import './header.css';
import { Link, NavLink } from 'react-router-dom';

export const Header = () => {

 const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="header">
      <h3 className="logo">Sagobröllopet</h3>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
        <ul className={menuOpen ? "open" : ""}>
        <Link to="/" className="home">
          <li>HOME</li>
        </Link>
        <li>
          <NavLink to="/about">Om</NavLink>
        </li>
        <li>
          <NavLink to="/services">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="/services">Priser</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Kontakt</NavLink>
        </li>
        <li>
          <NavLink to="/services">Logga In</NavLink>
        </li>
      </ul>
    </nav>
  );
};


