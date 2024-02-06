import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import SwiperCore, { Pagination } from 'swiper';

// Aktivera Pagination-modulen
SwiperCore.use([Pagination]);

const Services = () => {
  return (
    <section className="services">
      <h1 className="heading">Vår Service</h1>
      <div className="swiper service-slider">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <img src="img/bild6.png" alt="our services" />
            <div className="content">
              <h3>Gästhantering</h3>
              <p>Lorem ipsum dolor sit amet.</p>
              <a href="about.html" className="btn">Om Oss</a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="img/bild6.png" alt="our services" />
            <div className="content">
              <h3>Bordsplacering</h3>
              <p>Lorem ipsum dolor sit amet.</p>
              <a href="about.html" className="btn">Om Oss</a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="img/bild6.png" alt="our services" />
            <div className="content">
              <h3>Budget</h3>
              <p>Lorem ipsum dolor sit amet.</p>
              <a href="about.html" className="btn">Om Oss</a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="img/bild6.png" alt="our services" />
            <div className="content">
              <h3>Att Göra Listor</h3>
              <p>Lorem ipsum dolor sit amet.</p>
              <a href="about.html" className="btn">Om Oss</a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="img/bild6.png" alt="our services" />
            <div className="content">
              <h3>Gäst....</h3>
              <p>Lorem ipsum dolor sit amet.</p>
              <a href="about.html" className="btn">Om Oss</a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="img/bild6.png" alt="our services" />
            <div className="content">
              <h3>Gäst....</h3>
              <p>Lorem ipsum dolor sit amet.</p>
              <a href="about.html" className="btn">Om Oss</a>
            </div>
          </SwiperSlide>
          
          {/* Upprepa SwiperSlide för varje tjänst du vill visa */}
          {/* Använd samma struktur som ovan, men ändra src för img, samt texten för h3, p och href för a */}

        </Swiper>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default Services;
