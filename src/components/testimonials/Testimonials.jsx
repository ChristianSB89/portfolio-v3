import React from "react";
import "./testimonials.css";
import SideShot from "../../assets/side-shot.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const data = [
  {
    avatar: SideShot,
    name: "Navn Navnesen",
    review:
      "I like the rumble of the diesel and the smell of the oil. I percolate my coffee off the radiator boil. I been chasing tuna nearly twentyseven years. I got the eyeballs of an eagle but there is ringing in my ears.",
  },
  {
    avatar: SideShot,
    name: "Navn Navnesen",
    review:
      "I like the rumble of the diesel and the smell of the oil. I percolate my coffee off the radiator boil. I been chasing tuna nearly twentyseven years. I got the eyeballs of an eagle but there is ringing in my ears.",
  },
  {
    avatar: SideShot,
    name: "Navn Navnesen",
    review:
      "I like the rumble of the diesel and the smell of the oil. I percolate my coffee off the radiator boil. I been chasing tuna nearly twentyseven years. I got the eyeballs of an eagle but there is ringing in my ears.",
  },
  {
    avatar: SideShot,
    name: "Navn Navnesen",
    review:
      "I like the rumble of the diesel and the smell of the oil. I percolate my coffee off the radiator boil. I been chasing tuna nearly twentyseven years. I got the eyeballs of an eagle but there is ringing in my ears.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Hva klientene sier</h5>
      <h2>Tilbakemeldinger</h2>

      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        className="container testimonials_container"
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
