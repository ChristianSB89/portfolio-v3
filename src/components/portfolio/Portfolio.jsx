import React from "react";
import "./portfolio.css";
import { portfolioData } from "./portfolioData";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Mine prosjekter</h5>
      <h2>Portefølje</h2>

      <div className="container portfolio_container">
        {portfolioData.map(
          ({ id, image, title, github, demo, btn, btnPrimary }) => {
            return (
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
            );
          }
        )}
      </div>
    </section>
  );
};

export default Portfolio;
