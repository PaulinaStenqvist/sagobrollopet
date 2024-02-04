import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // importera Swiper CSS
import 'swiper/css/pagination'; // importera pagination modulens CSS

import SwiperCore, { Pagination } from 'swiper'; // importera Swiper och moduler

// Aktivera Pagination-modulen
SwiperCore.use([Pagination]);

const Home = () => {
  return (
    <section className="home">
      <div className="swiper home-slider">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="slide" style={{backgroundImage: "url(img/bild1.png)"}}>
              <div className="content">
                <h3>Planera Ert Drömbröllop!</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam voluptate, illum expedita blanditiis recusandae nam aliquid beatae sequi debitis ea!</p>
                <a href="about.html" className="btn">Upptäck Mer</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide" style={{backgroundImage: "url(img/bild2.png)"}}>
              <div className="content">
                <h3>Planera Ert Drömbröllop!</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam voluptate, illum expedita blanditiis recusandae nam aliquid beatae sequi debitis ea!</p>
                <a href="about.html" className="btn">Upptäck Mer</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide" style={{backgroundImage: "url(img/bild3.png)"}}>
              <div className="content">
                <h3>Planera Ert Drömbröllop!</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam voluptate, illum expedita blanditiis recusandae nam aliquid beatae sequi debitis ea!</p>
                <a href="about.html" className="btn">Upptäck Mer</a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="swiper-pagination"></div>
    </section>
  );
};

export default Home;
