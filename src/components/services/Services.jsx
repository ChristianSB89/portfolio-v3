import React from "react";
import "./services.css";
import { BsCheck2Square } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5>Hva jeg tilbyr</h5>
      <h2>Tjenester</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Front End</h3>
          </div>
          <ul className="service_list">
            <li>
              <BsCheck2Square className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2Square className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2Square className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2Square className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2Square className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2Square className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF FRONT END */}
        <article className="service">
          <div className="service_head">
            <h3>Grafisk Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <BsCheck2Square className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2Square className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2Square className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2Square className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2Square className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2Square className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF GRAPHIC DESIGN */}
        <article className="service">
          <div className="service_head">
            <h3>Innholdsproduksjon</h3>
          </div>
          <ul className="service_list">
            <li>
              <BsCheck2Square className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2Square className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2Square className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2Square className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2Square className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2Square className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
