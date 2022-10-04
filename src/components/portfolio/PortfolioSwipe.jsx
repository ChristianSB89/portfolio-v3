import React from "react";
import "./portfolio.css";
import { portfolioData } from "./portfolioData";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const PortfolioSwipe = () => {
  return (
    <section id="portfolio portfolio-mobile">
      <h5>Mine prosjekter</h5>
      <h2>Portefølje</h2>

      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        className="container testimonials_container"
      >
        {portfolioData.map(
          ({ id, image, title, github, btn, demo, btnPrimary }, index) => {
            return (
              <SwiperSlide key={index} className="portfolio">
                <article key={id} className="portfolio_item">
                  <div className="portfolio_item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio_item-cta">
                    <a href={github} className="btn" target="_blank">
                      {btn}
                    </a>
                    <a href={demo} className="btn btn-primary" target="_blank">
                      {btnPrimary}
                    </a>
                  </div>
                </article>
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </section>
  );
};

export default PortfolioSwipe;
