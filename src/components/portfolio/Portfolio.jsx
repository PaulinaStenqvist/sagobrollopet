import React from 'react'
import './portfolio.css';

const portfolioItems = [
  { src: "img/bild7.png", title: "Wedding Ceremony" },
  { src: "img/bild8.png", title: "Wedding Ceremony" },
  { src: "img/bild6.png", title: "Wedding Ceremony" },
  { src: "img/bild5.5.png", title: "Wedding Ceremony" },
  { src: "img/bild9.png", title: "Wedding Ceremony" },
  { src: "img/bild10.png", title: "Wedding Ceremony" },
];

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h1 className="heading">Portfolio</h1>
      <div className="portfolio-container">
        {portfolioItems.map((item, index) => (
          <a href={item.src} className="box" key={index}>
            <div className="image">
              <img src={item.src} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
